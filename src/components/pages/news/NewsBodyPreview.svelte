<script lang="ts">
  import { useSWR } from "sswr";
  import NewsBody from "./NewsBody.svelte";
  import { client } from "@libs/microcms";
  import { processContent } from "src/utils/processContent";
  import type { News } from "@type/microcms/news";

  const params = new URLSearchParams(window.location.search);
  const contentId = params.get("contentId");
  const draftKey = params.get("draftKey");

  const { data: content } = useSWR(
    !!contentId ? `news:${contentId}` : undefined,
    {
      fetcher: async () => {
        if (!contentId || !draftKey) {
          return;
        }

        const content = await client.getListDetail<News>({
          endpoint: "news",
          contentId,
          queries: {
            draftKey,
          },
        });

        content.body = processContent(content.body);

        return content;
      },
    }
  );
</script>

<div>
  {#if $content}
    <NewsBody content={$content} />
  {:else}
    <div>Loading...</div>
  {/if}
</div>
