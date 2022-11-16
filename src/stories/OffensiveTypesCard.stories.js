import OffensiveTypesCard from '../OffensiveTypesCard.svelte';

export default {
  title: 'Cards/OffensiveCard',
  component: OffensiveTypesCard,
  argTypes: {
    type: { control: 'text' },
    effectiveness: { control: 'number' },
  },  
};

const Template = (args) => ({
  Component: OffensiveTypesCard,
  props: args,
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const SuperEffective = Template.bind({});
SuperEffective.args = {
  effectiveness: 2,
};
export const NotVeryEffective = Template.bind({});
NotVeryEffective.args = {
  effectiveness: 0.5,
};
