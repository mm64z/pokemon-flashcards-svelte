<script>
  import { Button, MultiSelect, Select, Tile, Checkbox } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";
    import TypeChooser from "./TypeChooser.svelte";
  import { TYPES, TYPE_CHART } from "./types";

  const dispatch = createEventDispatcher();

  let dual;

  let type1;
  let type2;
</script>

<div class='card'>
  <Checkbox labelText="Dual Typing" bind:checked={dual} />
  <TypeChooser bind:type={type1}/>
  {#if dual}
    <TypeChooser bind:type={type2}/>
  {/if}
</div>

<style>
  .card {
    width: 800px;
    box-shadow: 3px 3px 3px 0;
    border: 3px solid;
    border-color: black;
    margin: 10px;
  }
</style>
