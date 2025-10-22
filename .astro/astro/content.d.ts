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
"2025-03-03-grant-awarded.md": {
	id: "2025-03-03-grant-awarded.md";
  slug: "2025-03-03-grant-awarded";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-08-15-conference-presentation.md": {
	id: "2025-08-15-conference-presentation.md";
  slug: "2025-08-15-conference-presentation";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-09-01-new-member.md": {
	id: "2025-09-01-new-member.md";
  slug: "2025-09-01-new-member";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-09-27-IG-paper-published.md": {
	id: "2025-09-27-IG-paper-published.md";
  slug: "2025-09-27-ig-paper-published";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
};
"people": {
"lijiayue.md": {
	id: "lijiayue.md";
  slug: "lijiayue";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"lingzhenxiang.md": {
	id: "lingzhenxiang.md";
  slug: "lingzhenxiang";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"liuguangyuan.md": {
	id: "liuguangyuan.md";
  slug: "liuguangyuan";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"pengkeying.md": {
	id: "pengkeying.md";
  slug: "pengkeying";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"tanxiujuan.md": {
	id: "tanxiujuan.md";
  slug: "tanxiujuan";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"wangchun.md": {
	id: "wangchun.md";
  slug: "wangchun";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
"zhengzihao.md": {
	id: "zhengzihao.md";
  slug: "zhengzihao";
  body: string;
  collection: "people";
  data: InferEntrySchema<"people">
} & { render(): Render[".md"] };
};
"projects": {
"2024-GZkeji-ZhengZH.md": {
	id: "2024-GZkeji-ZhengZH.md";
  slug: "2024-gzkeji-zhengzh";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"2025-NSFC-ZhengZH.md": {
	id: "2025-NSFC-ZhengZH.md";
  slug: "2025-nsfc-zhengzh";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"publications": {
"2021-zhengzh-GEC.md": {
	id: "2021-zhengzh-GEC.md";
  slug: "2021-zhengzh-gec";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2025-lingzx-IG.md": {
	id: "2025-lingzx-IG.md";
  slug: "2025-lingzx-ig";
  body: string;
  collection: "publications";
  data: InferEntrySchema<"publications">
} & { render(): Render[".md"] };
"2025-zhengzh-RSE.md": {
	id: "2025-zhengzh-RSE.md";
  slug: "2025-zhengzh-rse";
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
