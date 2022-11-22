<script>
  /**
   * This card is meant for quizzing on offensive typing
   */
  import { Button } from "carbon-components-svelte";

  import SingleChoiceCard from "./SingleChoiceCard.svelte";
  import { TYPES, TYPE_CHART } from "./types";
  import TypeIcon from "./TypeIcon.svelte";

  /**
   * type <string> - one of the types, lowercase.  enumerated in types.js
   */
  export let type = undefined;

  /**
   * currently only supports 0.5 and 2x (resistant/weak)
   */
  export let effectiveness = 0.5;

  const options = TYPES;
  let answers;

  $: effect = effectiveness == 0.5 ? "not very effective" : `super effective`;
  $: if (!type) {
    type = chooseRandomType();
  }
  $: if (type && effectiveness) {
    answers = Object.entries(TYPE_CHART[type])
      .map((entry) => {
        const [defenderType, effective] = entry;
        if (effective == effectiveness) {
          return defenderType;
        }
      })
      .filter((element) => !!element);
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

<SingleChoiceCard
  bind:type
  question={`Which of the following is ${type} ${effect} against?`}
  {options}
  {answers}
  on:refresh={refreshCard}
  on:prev={prevCard}
  on:next={nextCard}
>
  <div slot="icon">
    <TypeIcon {type} />
  </div>
</SingleChoiceCard>
