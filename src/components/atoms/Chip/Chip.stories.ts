import type { Meta, StoryObj } from '@storybook/vue3';

import type { ChipProps } from '../../../types/ChipTypes/ChipInterface';

import { Chip } from './index';

const meta = {
  title: 'atoms/Chip',
  component: Chip,
  render: (args: ChipProps) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template:
      '<Chip :type="args.type" :variant="args.variant" :color="args.color" :size="args.size" :disabled="args.disabled" :icon="args.icon">Chip</Chip>',
  }),

  tags: ['autodocs'],
} as Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default = {
  args: {
    type: 'filled',
    variant: 'default',
    color: 'default',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const Removable = {
  args: {
    type: 'filled',
    variant: 'removable',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const Thumbnail = {
  args: {
    type: 'filled',
    variant: 'thumbnail',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const RemovableThumbnail = {
  args: {
    type: 'filled',
    variant: 'removable_thumbnail',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const Outlined = {
  args: {
    type: 'outlined',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const OutlinedRemovableThumbnail = {
  args: {
    type: 'outlined',
    variant: 'removable_thumbnail',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const Ghost = {
  args: {
    type: 'ghost',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
export const GhostRemovableThumbnail = {
  args: {
    type: 'ghost',
    variant: 'removable_thumbnail',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus',
  },
};
