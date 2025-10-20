declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"data-products": {
"pollution-prediction-model.md": {
	id: "pollution-prediction-model.md";
  slug: "pollution-prediction-model";
  body: string;
  collection: "data-products";
  data: InferEntrySchema<"data-products">
} & { render(): Render[".md"] };
"urban-air-quality-dataset.md": {
	id: "urban-air-quality-dataset.md";
  slug: "urban-air-quality-dataset";
  body: string;
  collection: "data-products";
  data: InferEntrySchema<"data-products">
} & { render(): Render[".md"] };
};
"news": {
"2024-08-05-data-release.md": {
	id: "2024-08-05-data-release.md";
  slug: "2024-08-05-data-release";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-09-10-new-member.md": {
	id: "2024-09-10-new-member.md";
  slug: "2024-09-10-new-member";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-10-20-grant-awarded.md": {
	id: "2024-10-20-grant-awarded.md";
  slug: "2024-10-20-grant-awarded";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-11-15-conference-presentation.md": {
	id: "2024-11-15-conference-presentation.md";
  slug: "2024-11-15-conference-presentation";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-12-01-new-paper-published.md": {
	id: "2024-12-01-new-paper-published.md";
  slug: "2024-12-01-new-paper-published";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
};
"people": {
"li-si.md": {
	id: "li-si.md";
  slug: "li-si";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"wang-wu.md": {
	id: "wang-wu.md";
  slug: "wang-wu";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"zhang-san.md": {
	id: "zhang-san.md";
  slug: "zhang-san";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"zhao-liu.md": {
	id: "zhao-liu.md";
  slug: "zhao-liu";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
};
"projects": {
"ai-pollution-prediction.md": {
	id: "ai-pollution-prediction.md";
  slug: "ai-pollution-prediction";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"air-quality-iot.md": {
	id: "air-quality-iot.md";
  slug: "air-quality-iot";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"smart-city-monitoring.md": {
	id: "smart-city-monitoring.md";
  slug: "smart-city-monitoring";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"publications": {
"2019-wireless-sensors.md": {
	id: "2019-wireless-sensors.md";
  slug: "2019-wireless-sensors";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2020-machine-learning-pollution.md": {
	id: "2020-machine-learning-pollution.md";
  slug: "2020-machine-learning-pollution";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2021-iot-air-quality.md": {
	id: "2021-iot-air-quality.md";
  slug: "2021-iot-air-quality";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2022-sensor-fusion.md": {
	id: "2022-sensor-fusion.md";
  slug: "2022-sensor-fusion";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2023-ai-environmental-monitoring.md": {
	id: "2023-ai-environmental-monitoring.md";
  slug: "2023-ai-environmental-monitoring";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2024-night-sensing-urban.md": {
	id: "2024-night-sensing-urban.md";
  slug: "2024-night-sensing-urban";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
