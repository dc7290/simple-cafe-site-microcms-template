<script lang="ts">
  export let href: string;
  export let direction: "left" | "right" = "right";
</script>

<a
  {...$$restProps}
  {href}
  class="group relative flex h-12 w-64 items-center justify-center border border-current font-english text-sm shadow-black/60 transition-shadow duration-[0.4s] sm:hover:shadow-[8px_8px_0_var(--tw-shadow-color)] lg:h-16 lg:w-[22.5rem] lg:text-base"
>
  <slot />
  <span
    class:list={[
      "absolute inset-y-0 my-auto h-px lg:w-16 w-12 bg-current",
      direction === "left" ? "-left-6 lg:-left-8" : "-right-6 lg:-right-8",
    ]}
  />
</a>
