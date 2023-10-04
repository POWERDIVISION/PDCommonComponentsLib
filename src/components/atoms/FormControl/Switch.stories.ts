import type { Meta, StoryObj } from '@storybook/vue3';

import { Switch } from './index';

const meta = {
  title: 'atoms/Form/Switch',
  component: Switch,
  render: (args:any ) => ({
    components: { Switch },
    setup() {
      return { args };
    },
    template: '<Switch v-model="args.modelValue" :color="args.color" :label="args.label" :size="args.size" />',
  }),
  tags: ['autodocs'],
} as Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Small = {
  args: {
    modelValue:false,
    size:'small',
    color:'primary',
    label:'Switch',
  }
};
export const Medium = {
  args: {
    modelValue:false,
    size:'medium',
    color:'primary',
    label:'Switch',
  }
};
