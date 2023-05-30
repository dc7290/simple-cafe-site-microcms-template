<script lang="ts">
  export let src: string;
  export let width: number;
  export let height: number;
  export let loading: "lazy" | "eager" = "lazy";
  export let alt: string;
  export let sizes: string = "100vw";
  export let widths: number[];

  const formats = ["webp", "avif"] as const;

  const buildSrcSet = (src: string, format?: (typeof formats)[number]) => {
    return widths
      .map(
        (width) =>
          `${src}?w=${width}${!!format ? `&fm=${format}` : ""} ${width}w`
      )
      .join(", ");
  };
</script>

<picture>
  {#each formats as format}
    <source srcset={buildSrcSet(src, format)} />
  {/each}
  <img
    srcset={buildSrcSet(src)}
    {src}
    {width}
    {height}
    {sizes}
    {loading}
    {alt}
  />
</picture>
