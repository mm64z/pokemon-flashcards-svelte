<script>
    
    export let question;
    export let options;
    export let answers;

    let flipped = false;

    $: if (question) {
        flipped = false
    }

    function handleFlip() {
        flipped = true
    }

</script>

<div class='card'>
    <div class='question'>
        {question}
    </div>
    {#if !flipped}
    <div class='front' on:click={handleFlip}>
        Options:
        <div class='options'>
            {options}
        </div>

    </div>
    {:else}
    <div class='back'>
        Answer:
        <div class='options'>
            {answers}
        </div>
    </div>
    {/if}
</div>