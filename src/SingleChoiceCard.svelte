<script>
  import { Button, MultiSelect, Select, Tile } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";
  import { TYPES, TYPE_CHART } from "./types";

  const dispatch = createEventDispatcher();

  export let type;
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
    type = chooseRandomType();
  }

  function chooseRandomType() {
    const randIndex = Math.floor(Math.random() * TYPES.length);
    return TYPES[randIndex];
  }
  function prevCard() {
    let index = TYPES.indexOf(type) - 1;
    if (index < 0) {
      index = TYPES.length-1;
    }
    type = TYPES[index];
  }
  function nextCard() {
    let index = TYPES.indexOf(type) + 1;
    if (index >= TYPES.length) {
      index = 0;
    }
    type = TYPES[index];
  }
</script>

<div>
  <Button on:click={prevCard} kind="secondary">Prev</Button>
  <div class="card" on:click={handleFlip} on:keypress={handleFlip}>
    <slot name="icon" />
    <div class="question">
      {question}
    </div>
    {#if !flipped}
      <div class="front" >
        Options:
        <div>
          {options}
        </div>
      </div>
    {:else}
      <div class="back">
        Answer:
        <div class="options">
          {answers}
        </div>
      </div>
    {/if}
  </div>
  <Button on:click={nextCard} kind="secondary">Next</Button>
</div>
<Button on:click={refreshCard} kind="secondary">Refresh</Button>

<style>
  .card {
    width: 800px;
    box-shadow: 3px 3px 3px 0;
    border: 3px solid;
    border-color: black;
    margin: 10px;
  }

  :global(.bx--btn) {
    border: 2px solid;
    border-color: black;
    padding: 15px 30px;
  }
</style>
