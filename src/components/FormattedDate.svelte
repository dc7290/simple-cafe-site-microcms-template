<script lang="ts">
  import { formatDate } from "@libs/formatDate";

  export let date: string;
</script>

<div class={$$props.class}>
  <time datetime={date}>{formatDate(date)}</time>
</div>
