<script>
  /**
   * expect type to be one of TYPES
   */

  export let type = "normal";
  export let size = 20;

  $: srcPath = `icons/${type}.svg`;
</script>

<span 
style="--icon-size: {size}px"
class={`font-icon ${type}`} width={size} height={size}>
  <!-- <span class='circle'>Z</span> -->
  <i class='type-icon pokeicon-{type}'></i>
</span>
<!-- <img class={`icon ${type}`} src={srcPath} width={size} height={size} alt={type} /> -->

<style>
  .font-icon {
    font-family: PokemonIcons;
    padding: 2px;
    border-radius: 10px;
    background-color: #222;
    font-size: var(--icon-size);
  }

  .icon {
    padding: 2px;
    border-radius: 10px;
    font-size: var(--icon-size)px;
  }

  .font-icon.bug {
    color: #92bc2c;
  }

  .font-icon.dark {
    color: #595761;
  }

  .font-icon.dragon {
    color: #0c69c8;
  }

  .font-icon.electric {
    color: #f2d94e;
  }

  .font-icon.fire {
    color: #fba54c;
  }

  .font-icon.fairy {
    color: #ee90e6;
  }

  .font-icon.fighting {
    color: #d3425f;
  }

  .font-icon.flying {
    color: #a1bbec;
  }

  .font-icon.ghost {
    color: #5f6dbc;
  }

  .font-icon.grass {
    color: #5fbd58;
  }

  .font-icon.ground {
    color: #da7c4d;
  }

  .font-icon.ice {
    color: #75d0c1;
  }

  .font-icon.normal {
    color: #a0a29f;
  }

  .font-icon.poison {
    color: #b763cf;
  }

  .font-icon.psychic {
    color: #fa8581;
  }

  .font-icon.rock {
    color: #c9bb8a;
  }

  .font-icon.steel {
    color: #5695a3;
  }

  .font-icon.water {
    color: #539ddf;
  }

  .icon.bug {
    background: #92bc2c;
  }

  .icon.dark {
    background: #595761;
  }

  .icon.dragon {
    background: #0c69c8;
  }

  .icon.electric {
    background: #f2d94e;
  }

  .icon.fire {
    background: #fba54c;
  }

  .icon.fairy {
    background: #ee90e6;
  }

  .icon.fighting {
    background: #d3425f;
  }

  .icon.flying {
    background: #a1bbec;
  }

  .icon.ghost {
    background: #5f6dbc;
  }

  .icon.grass {
    background: #5fbd58;
  }

  .icon.ground {
    background: #da7c4d;
  }

  .icon.ice {
    background: #75d0c1;
  }

  .icon.normal {
    background: #a0a29f;
  }

  .icon.poison {
    background: #b763cf;
  }

  .icon.psychic {
    background: #fa8581;
  }

  .icon.rock {
    background: #c9bb8a;
  }

  .icon.steel {
    background: #5695a3;
  }

  .icon.water {
    background: #539ddf;
  }
</style>
