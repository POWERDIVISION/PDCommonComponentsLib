import type { Meta, StoryObj } from '@storybook/vue3'
import type { VariantButtonProps } from '../../../types/ButtonTypes/ButtonsInterfaces'
// utils
import { config } from '@/utils/config'
// components
import { VariantButton } from './index'

const meta = {
  title: 'Atoms/Button/Variant',
  component: VariantButton,
  render: (args: VariantButtonProps) => ({
    components: { VariantButton },
    setup() {
      return { args }
    },
    template:
      '<VariantButton :type="args.type" :variant="args.variant" :color="args.color" :size="args.size" :disabled="args.disabled" :icon="args.icon">Button</VariantButton>'
  }),
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['outlined', 'text'] },
    variant: { control: 'select', options: ['default', 'rounded', 'circular'] },
    color: { control: 'select', options: config.colors },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    icon: { control: 'select', options: config.icons }
  }
} satisfies Meta<typeof VariantButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'outlined',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus'
  }
}
export const outlined: Story = {
  args: {
    type: 'outlined',
    variant: 'default',
    color: 'info',
    size: 'medium',
    disabled: false,
    icon: 'plus'
  }
}
export const text: Story = {
  args: {
    type: 'text',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false,
    icon: 'plus'
  }
}
