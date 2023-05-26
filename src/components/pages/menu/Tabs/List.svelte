<script lang="ts">
  import type { Menu } from "src/types/microcms/menu";

  export let items: Pick<Menu, "name" | "price" | "description" | "image">[] =
    [];
</script>

<ul class="space-y-10 px-2">
  {#each items as item}
    <li>
      <div class="flex items-end justify-between">
        <div>{item.name}</div>
        <div>￥{item.price}</div>
      </div>
      <div class="text-sm">{item.description}</div>
      <div class="mt-4 max-w-[15rem]">
        <img
          src={`${item.image.url}?w=240&ar=1:1&fit=crop`}
          srcset={`${item.image.url}?w=240&dpr=2&ar=1:1&fit=crop 2x, ${item.image.url}?w=240&dpr=3&ar=1:1&fit=crop 3x`}
          width={240}
          height={240}
          sizes="20rem"
          alt=""
        />
      </div>
    </li>
  {/each}
</ul>
