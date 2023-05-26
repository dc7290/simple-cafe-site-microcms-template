<script lang="ts">
  import {
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
  import Tab from "./Tab.svelte";
  import Section from "./Section.svelte";
  import type { Menu } from "src/types/microcms/menu";

  export let menu: {
    morning: {
      drink: Pick<Menu, "name" | "price" | "description" | "image">[];
      food: Pick<Menu, "name" | "price" | "description" | "image">[];
      desert: Pick<Menu, "name" | "price" | "description" | "image">[];
    };
    lunch: {
      drink: Pick<Menu, "name" | "price" | "description" | "image">[];
      food: Pick<Menu, "name" | "price" | "description" | "image">[];
      desert: Pick<Menu, "name" | "price" | "description" | "image">[];
    };
    dinner: {
      drink: Pick<Menu, "name" | "price" | "description" | "image">[];
      food: Pick<Menu, "name" | "price" | "description" | "image">[];
      desert: Pick<Menu, "name" | "price" | "description" | "image">[];
    };
  };
</script>

<TabGroup class="mt-16 sm:mt-24">
  <TabList class="-mx-8 grid grid-cols-3 font-extrabold sm:mx-0">
    <Tab>モーニング</Tab>
    <Tab>ランチ</Tab>
    <Tab>ディナー</Tab>
  </TabList>
  <TabPanels class="mt-10 sm:mt-16 sm:px-5 lg:mt-20 lg:px-10">
    <TabPanel class="space-y-10">
      <Section title="ドリンク" items={menu.morning.drink} />
      <Section title="フード" items={menu.morning.food} />
      <Section title="デザート" items={menu.morning.desert} />
    </TabPanel>
    <TabPanel class="space-y-10">
      <Section title="ドリンク" items={menu.lunch.drink} />
      <Section title="フード" items={menu.lunch.food} />
      <Section title="デザート" items={menu.lunch.desert} />
    </TabPanel>
    <TabPanel class="space-y-10">
      <Section title="ドリンク" items={menu.dinner.drink} />
      <Section title="フード" items={menu.dinner.food} />
      <Section title="デザート" items={menu.dinner.desert} />
    </TabPanel>
  </TabPanels>
</TabGroup>
