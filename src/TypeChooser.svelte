<script>
  import { Dropdown, FormItem } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";
    import TypeIcon from "./TypeIcon.svelte";

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


<Dropdown class="selector"
  titleText="Choose Type"
  itemToString={(item) => capitalize(item.text)}
  bind:selectedId={selectedIndex}
  items={itemList}
  let:item
>
  <div class="menu-item">
    <TypeIcon type={item.text} size={20}></TypeIcon>
    <span>{item.text}</span>
  </div>
</Dropdown>

<style>
  :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
    height: auto;
  }

  .menu-item {
    text-align: left;
    font-size: 16px;
    text-transform: capitalize;
    vertical-align: middle;
    line-height: 1.5;
  }
</style>
