<script>
  import { ContentSwitcher, Switch } from "carbon-components-svelte";

  import DefensiveTypesCard from './DefensiveTypesCard.svelte';
    import DescriptiveTypesCard from "./DescriptiveTypesCard.svelte";
    import Counter from "./lib/Counter.svelte";
  import OffensiveTypesCard from './OffensiveTypesCard.svelte';

  let selectedIndex = 0
  
  let options = [{
    name: DefensiveTypesCard,
    props: {
      effectiveness: 0.5,
    }
  },{
    name: DefensiveTypesCard,
    props: {
      effectiveness: 2,
    }
  },{
    name: OffensiveTypesCard,
    props: {
      effectiveness: 0.5,
    }
  },{
    name: OffensiveTypesCard,
    props: {
      effectiveness: 2,
    }
  },]

  let selectedComponent;

  $: selectedComponent = options[selectedIndex]

</script>

<main>
  <ContentSwitcher bind:selectedIndex>
    <Switch text="Defensive resists" />
    <Switch text="Defensive weaknesses" />
    <Switch text="Offensive resists" />
    <Switch text="Offensive super effective" />
  </ContentSwitcher>

  <svelte:component this={selectedComponent.name} {...selectedComponent.props} />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
