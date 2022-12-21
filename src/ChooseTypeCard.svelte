<script>
  import { Checkbox } from "carbon-components-svelte";
  import { is_empty } from "svelte/internal";
  import TypeChooser from "./TypeChooser.svelte";
  import { find4xWeakTo, findWeakTo } from "./utils";

  let dual;

  let type1;
  let type2;

  $: x4Weakness = find4xWeakTo(type1, type2)
  $: x2Weakness = findWeakTo(type1, dual ? type2 : undefined)

  function setType1(e) {
    type1 = e.detail.newType;
  }
  function setType2(e) {
    type2 = e.detail.newType;
  }
</script>

<div class="card">
  <div class="panel">
    <Checkbox labelText="Dual Typing" bind:checked={dual} />
    <!-- <TypeChooser on:change={setType1}  exclude={dual ? type2 : undefined} />  -->
    <TypeChooser bind:type={type1} />
    {#if dual}
      <TypeChooser bind:type={type2} exclude={type1} />
    {/if}
  </div>
  <div class="panel">
    <!-- selected types are weak to -->
    <div>
      {#if dual}
        <div>Your selected types are 4x weak to:</div>
        <div>
          {x4Weakness.length > 0 ? x4Weakness : "\n"}
        </div>
      {/if}
    </div>
    <div>
      <div>Your selection is 2x weak to:</div>
      <div>
        {x2Weakness}
      </div>
    </div>
  </div>
  <div class="panel">
    <!-- super effective against -->
  </div>
</div>

<style>
  .card {
    width: 800px;
    box-shadow: 3px 3px 3px 0;
    border: 3px solid;
    border-color: black;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .panel {
    flex: 1 1 30%; /*grow | shrink | basis */
  }


</style>
