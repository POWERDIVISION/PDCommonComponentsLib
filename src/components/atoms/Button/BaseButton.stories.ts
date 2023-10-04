import type { Meta, StoryObj } from '@storybook/vue3';

import type { BaseButtonProps } from '../../../types/ButtonTypes/ButtonsInterfaces';

import { BaseButton } from './index';

const meta = {
  title: 'Atoms/Button/Base',
  component: BaseButton,
  render: (args: BaseButtonProps) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template:
      '<BaseButton :type="args.type" :variant="args.variant" :color="args.color" :size="args.size" :disabled="args.disabled" :icon="args.icon">Button</BaseButton>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'contained',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
};
export const Success: Story = {
  args: {
    type: 'contained',
    variant: 'default',
    color: 'success',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const Small: Story = {
  args: {
    type: 'contained',
    variant: 'default',
    color: 'info',
    size: 'small',
    disabled: false,
    icon: 'plus',
  },
};
export const Medium: Story = {
  args: {
    type: 'contained',
    variant: 'default',
    color: 'info',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const Large: Story = {
  args: {
    type: 'contained',
    variant: 'default',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus',
  },
};
export const Left_Icon: Story = {
  args: {
    type: 'contained',
    variant: 'left_icon',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus',
  },
};

export const Right_Icon: Story = {
  args: {
    type: 'contained',
    variant: 'right_icon',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus',
  },
};

export const Fab_Extended: Story = {
  args: {
    type: 'contained',
    variant: 'fab_extended',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus',
  },
};
export const Fab_Round: Story = {
  args: {
    type: 'contained',
    variant: 'fab_round',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'star',
  },
};
export const Icon_Button: Story = {
  args: {
    type: 'contained',
    variant: 'icon_button',
    color: 'primary',
    size: 'large',
    disabled: false,
    icon: 'star',
  },
};
