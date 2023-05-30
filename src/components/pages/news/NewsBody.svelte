<script lang="ts">
  import FormattedDate from "@components/FormattedDate.svelte";
  import InternalAnchor from "@components/InternalAnchor.svelte";
  import MicroCMSPicture from "@components/MicroCMSPicture.svelte";
  import type { News } from "@types/microcms/news";

  export let content: News;
</script>

<div class="mx-auto max-w-prose">
  <h1 class="text-[1.75rem] font-bold leading-normal">
    {content.title}
  </h1>

  <FormattedDate
    date={content.publishedAt ?? content.createdAt}
    class="mt-4 text-sm font-bold"
  />

  <div class="mx-auto mt-14 max-w-xs lg:max-w-md">
    <MicroCMSPicture
      src={content.thumbnail.url}
      widths={[320, 640, 960]}
      width={320}
      height={320}
      sizes="20rem"
      alt=""
    />
  </div>

  <div
    class="prose mx-auto mt-20 max-w-[50ch] prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg sm:px-16 [&_*]:text-main"
  >
    {@html content.body}
  </div>

  <div class="mt-20 flex justify-center">
    <InternalAnchor href="/news/1" direction="left">BACK</InternalAnchor>
  </div>
</div>
