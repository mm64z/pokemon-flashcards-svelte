<script>
    import { Button } from "carbon-components-svelte";

    import SingleChoiceCard from "./SingleChoiceCard.svelte";
    import { TYPES, TYPE_CHART } from "./types";
    

    /**
     * type <string> - one of the types, lowercase.  enumerated in types.js
     */
    export let type

    /**
     * currently only supports 0.5 and 2x (resistant/weak)
     */
    export let effectiveness = 0.5

    const options = TYPES;
    let answers;

    $: effect = effectiveness == 0.5 ? 'strong against' : `weak to`
    $: if (!type) {
        type = chooseRandomType();
    }
    $: if (type && effectiveness) {
        answers = Object.entries(TYPE_CHART).map((entry) => {
            const [attackerType, defenderEntries] = entry;
            if (defenderEntries[type] == effectiveness) {
                return attackerType;
            }
        })
    }

    function refreshCard () {
        type = chooseRandomType();
    }

    function chooseRandomType () {
        const randIndex = Math.floor(Math.random()*TYPES.length);
        return TYPES[randIndex];
    }

</script>


<SingleChoiceCard
    question={`What is ${type} ${effect}?`}
    {options}
    {answers}
    >
</SingleChoiceCard>
<Button on:click={refreshCard}>
    Refresh
</Button>