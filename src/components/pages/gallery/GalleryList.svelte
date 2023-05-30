<script lang="ts">
  import type { MicroCMSImage } from "microcms-js-sdk";
  import MicroCMSPicture from "@components/MicroCMSPicture.svelte";

  export let images: MicroCMSImage[];
</script>

<ul
  class="mt-20 grid grid-cols-1 gap-8 sm:mt-24 sm:block sm:columns-2 lg:mt-32 lg:columns-3 lg:gap-10"
>
  {#each images as image}
    <li class="mt-10 first:mt-0">
      <MicroCMSPicture
        src={image.url}
        widths={[320, 640, 960]}
        width={image.width ?? 0}
        height={image.height ?? 0}
        sizes="90vw, (min-width: 640px) 40vw, (min-width: 1024px) 30vw"
        alt=""
      />
    </li>
  {/each}
</ul>
