<script>
  /**
   * expect type to be one of TYPES
   */
  export let type = "normal";
  export let size = 32;

  $: srcPath = `icons/${type}.svg`;
</script>

<img class={`icon ${type}`} src={srcPath} width={size} height={size} alt={type} />

<style>
  .icon {
    padding: 2px;
    border-radius: 10px;
  }
  .bug {
    background: #92bc2c;
  }

  .dark {
    background: #595761;
  }

  .dragon {
    background: #0c69c8;
  }

  .electric {
    background: #f2d94e;
  }

  .fire {
    background: #fba54c;
  }

  .fairy {
    background: #ee90e6;
  }

  .fighting {
    background: #d3425f;
  }

  .flying {
    background: #a1bbec;
  }

  .ghost {
    background: #5f6dbc;
  }

  .grass {
    background: #5fbd58;
  }

  .ground {
    background: #da7c4d;
  }

  .ice {
    background: #75d0c1;
  }

  .normal {
    background: #a0a29f;
  }

  .poison {
    background: #b763cf;
  }

  .psychic {
    background: #fa8581;
  }

  .rock {
    background: #c9bb8a;
  }

  .steel {
    background: #5695a3;
  }

  .water {
    background: #539ddf;
  }
</style>
