<script lang="ts">
  export let src: string;
  export let width: number;
  export let height: number;
  export let loading: "lazy" | "eager" = "lazy";
  export let alt: string;
  export let sizes: string = "100vw";
  export let widths: number[];
  export let imgixParams: Record<string, string> | null = null;

  const formats = ["avif", "webp"] as const;

  const buildParams = (width: number, format?: (typeof formats)[number]) => {
    const baseParams = {
      w: width.toString(),
      ...(format ? { fm: format } : {}),
    };

    return imgixParams
      ? new URLSearchParams({ ...baseParams, ...imgixParams }).toString()
      : new URLSearchParams(baseParams).toString();
  };

  const buildSrcSet = (src: string, format?: (typeof formats)[number]) => {
    return widths
      .map((width) => `${src}?${buildParams(width, format)} ${width}w`)
      .join(", ");
  };
</script>

<picture>
  {#each formats as format}
    <source srcset={buildSrcSet(src, format)} type={`image/${format}`} />
  {/each}
  <img
    srcset={buildSrcSet(src)}
    src={`${src}?${buildParams(width)}`}
    {width}
    {height}
    {sizes}
    {loading}
    {alt}
  />
</picture>
