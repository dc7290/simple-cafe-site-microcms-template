<script>
  import { Tab } from "@rgossiaux/svelte-headlessui";
</script>

<Tab
  class="py-1 text-sm font-extrabold transition-colors duration-200 aria-selected:bg-secondary aria-selected:text-white sm:text-lg"
>
  <slot />
</Tab>
