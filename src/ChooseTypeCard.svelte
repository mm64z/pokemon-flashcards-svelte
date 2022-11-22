<script>
  import { Checkbox } from "carbon-components-svelte";
  import TypeChooser from "./TypeChooser.svelte";

  let dual;

  let type1;
  let type2;

  function setType1 (e) {
    type1 = e.detail.newType
  }
  function setType2 (e) {
    type2 = e.detail.newType
  }

</script>

<div class='card'>
  <Checkbox labelText="Dual Typing" bind:checked={dual} />
  <!-- <TypeChooser on:change={setType1}  exclude={dual ? type2 : undefined} />  -->
  <TypeChooser bind:type={type1}  /> 
  {#if dual}
    <TypeChooser bind:type={type2} exclude={type1}/>
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
