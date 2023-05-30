<script lang="ts">
  import { useSWR } from "sswr";

  import { client } from "@libs/microcms";
  import { buildMenuObject } from "@utils/buildMenuObject";
  import type { Menu } from "@type/microcms/menu";
  import MenuTabs from "./MenuTabs.svelte";

  const params = new URLSearchParams(window.location.search);
  const draftKey = params.get("draftKey");

  const { data: menuObject } = useSWR(!!draftKey ? "menu" : undefined, {
    fetcher: async () => {
      if (!draftKey) {
        return;
      }

      const { totalCount } = await client.getList({
        endpoint: "menu",
        queries: { limit: 0, draftKey },
      });

      const menuList = (
        await Promise.all(
          Array.from({ length: Math.ceil(totalCount / 10) }).map(
            async (_, i) => {
              const { contents } = await client.getList<Menu>({
                endpoint: "menu",
                queries: { limit: 10, offset: i * 10, draftKey },
              });
              return contents;
            }
          )
        )
      ).flat();

      return buildMenuObject(menuList);
    },
  });
</script>

<div>
  {#if $menuObject}
    <MenuTabs menu={$menuObject} />
  {:else}
    <div>Loading...</div>
  {/if}
</div>
