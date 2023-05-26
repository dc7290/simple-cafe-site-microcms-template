<script lang="ts">
  import type { Menu } from "src/types/microcms/menu";
  import List from "./List.svelte";
  import Title from "./Title.svelte";

  export let title: Menu["kind"][0];
  export let items: Pick<Menu, "name" | "price" | "description" | "image">[] =
    [];
</script>

<section class="space-y-5">
  <Title {title} />
  <List {items} />
</section>
