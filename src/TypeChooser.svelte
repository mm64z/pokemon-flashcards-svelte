<script>
  import { Select, SelectItem } from "carbon-components-svelte";

  import { TYPES } from "./types";

  export let type = TYPES[0]

  /**
     * @param {string} opt
     */
  function capitalize(opt) {
    return opt[0].toUpperCase() + opt.slice(1)
  }
</script>


<Select inline
  labelText="Choose Type"
  bind:selected={type}
  on:change={(e) => console.log("value", e.detail)}
>
  {#each TYPES as typeOption}
    <SelectItem value={typeOption} text={capitalize(typeOption)} />
  {/each}
</Select>
