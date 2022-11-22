<script>
  import { Select, SelectItem } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";

  import { TYPES } from "./types";

  const dispatch = createEventDispatcher();

  export let exclude = undefined;

  export let type;

  $: validTypes = TYPES.filter((indTypes) => indTypes !== exclude)
  $: if (type) {
    dispatch('change', {newType: type})
  }

  /**
     * @param {string} opt
     */
  function capitalize(opt) {
    return opt[0].toUpperCase() + opt.slice(1)
  }
</script>


<Select class="selector" inline
  labelText="Choose Type"
  bind:selected={type}
>
  {#each validTypes as typeOption}
    <SelectItem value={typeOption} text={capitalize(typeOption)} />\
  {/each}
</Select>

<style>
  :global(.selector .bx--select__arrow) {
    display: none;
  }
</style>
