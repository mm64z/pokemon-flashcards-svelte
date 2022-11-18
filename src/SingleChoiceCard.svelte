<script>
  import { Button, MultiSelect, Select, Tile } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let question;
  export let options;
  export let answers;

  let flipped = false;

  $: if (question) {
    flipped = false;
  }

  function handleFlip() {
    flipped = !flipped;
  }

  function refreshCard() {
    dispatch("refresh");
  }
</script>

<div class="card">
  <slot name="icon" />
  <div class="question">
    {question}
  </div>
  {#if !flipped}
    <div class="front" on:click={handleFlip} on:keypress={handleFlip}>
      Options:
      <div>
        {options}
      </div>
    </div>
  {:else}
    <div class="back" on:click={handleFlip} on:keypress={handleFlip}>
      Answer:
      <div class="options">
        {answers}
      </div>
    </div>
  {/if}
</div>
<Button on:click={refreshCard}>Refresh</Button>

<style>
  .card {
    width: 800px;
    box-shadow: 3px 3px 3px 0;
    border: 3px solid;
    border-color: black;
    margin: 10px;
  }
</style>
