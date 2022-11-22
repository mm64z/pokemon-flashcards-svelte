<script>
  import { ContentSwitcher, Switch } from "carbon-components-svelte";
    import ChooseTypeCard from "./ChooseTypeCard.svelte";

  import DefensiveTypesCard from './DefensiveTypesCard.svelte';
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
  },{
    name: ChooseTypeCard,
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
    <Switch text="Type Chooser" />
  </ContentSwitcher>

  <svelte:component this={selectedComponent.name} {...selectedComponent.props} />
</main>

<style>
</style>
