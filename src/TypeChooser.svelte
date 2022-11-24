<script>
  import { Dropdown, FormItem } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";

  import { TYPES } from "./types";

  const dispatch = createEventDispatcher();

  export let exclude = undefined;

  export let type;

  let selectedIndex = 0;  

  $: validTypes = TYPES.filter((indTypes) => indTypes !== exclude)
  $: if (type) {
    dispatch('change', {newType: type})
  }
  $: if (selectedIndex > -1) {
    type = itemList[selectedIndex].text
  }
  $: itemList = validTypes.map((indType, i) => {return {id: i, text: indType}})

  /**
     * @param {string} opt
     */
  function capitalize(opt) {
    return opt[0].toUpperCase() + opt.slice(1)
  }
</script>


<Dropdown class="selector" as="span"
  titleText="Choose Type"
  itemToString={(item) => capitalize(item.text)}
  bind:selectedId={selectedIndex}
  items={itemList}
>
</Dropdown>

<style>
  :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
    height: auto;
  }
</style>
