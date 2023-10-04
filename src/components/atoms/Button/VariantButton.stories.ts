import type { Meta, StoryObj } from '@storybook/vue3';

import type { VariantButtonProps } from '../../../types/ButtonTypes/ButtonsInterfaces';

import { VariantButton } from './index';

const meta = {
  title: 'Atoms/Button/Variant',
  component: VariantButton,
  render: (args: VariantButtonProps) => ({
    components: { VariantButton },
    setup() {
      return { args };
    },
    template:
      '<VariantButton :type="args.type" :variant="args.variant" :color="args.color" :size="args.size" :disabled="args.disabled" :icon="args.icon">Button</VariantButton>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VariantButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'outlined',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const outlined: Story = {
  args: {
    type: 'outlined',
    variant: 'default',
    color: 'info',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const text: Story = {
  args: {
    type: 'text',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
