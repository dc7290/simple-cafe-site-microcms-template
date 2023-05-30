<script lang="ts">
  import { useSWR } from "sswr";
  import { client } from "@libs/microcms";
  import type { Gallery } from "src/types/microcms/gallery";
  import GalleryList from "./GalleryList.svelte";

  const params = new URLSearchParams(window.location.search);
  const draftKey = params.get("draftKey");

  const { data: images } = useSWR(!!draftKey ? "gallery" : undefined, {
    fetcher: async () => {
      if (!draftKey) {
        return;
      }

      const { images } = await client.getObject<Gallery>({
        endpoint: "gallery",
        queries: {
          draftKey,
        },
      });

      return images;
    },
  });
</script>

<div>
  {#if $images}
    <GalleryList images={$images} />
  {:else}
    <div>Loading...</div>
  {/if}
</div>
