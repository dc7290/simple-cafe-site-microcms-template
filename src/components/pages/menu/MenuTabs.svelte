<script lang="ts">
  import type { MenuObject } from "src/utils/buildMenuObject";
  import Tabs from "./Tabs/Tabs.svelte";

  export let menu: MenuObject;
</script>

<Tabs {menu} />
