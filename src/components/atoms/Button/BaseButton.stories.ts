import type { Meta, StoryObj } from '@storybook/vue3'

// utils
import { config } from '@/utils/config'

// components
import { BaseButton } from './index'

const meta = {
  title: 'Atoms/Button/Base',
  component: BaseButton,
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template:
      '<base-button :variant="args.variant" :color="args.color" :size="args.size" :disabled="args.disabled" :icon="args.icon">Button</base-button>'
  }),
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'left_icon', 'right_icon', 'fab_extended', 'fab_round', 'icon_button']
    },
    color: { control: 'select', options: config.colors },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    icon: { control: 'select', options: config.icons }
  }
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    color: 'primary',
    size: 'medium',
    disabled: false
  }
}
export const Success: Story = {
  args: {
    variant: 'default',
    color: 'success',
    size: 'medium',
    disabled: false,
    icon: 'plus'
  }
}
export const Small: Story = {
  args: {
    variant: 'default',
    color: 'info',
    size: 'small',
    disabled: false,
    icon: 'plus'
  }
}
export const Medium: Story = {
  args: {
    variant: 'default',
    color: 'info',
    size: 'medium',
    disabled: false,
    icon: 'plus'
  }
}
export const Large: Story = {
  args: {
    variant: 'default',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus'
  }
}
export const Left_Icon: Story = {
  args: {
    variant: 'left_icon',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus'
  }
}

export const Right_Icon: Story = {
  args: {
    variant: 'right_icon',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus'
  }
}

export const Fab_Extended: Story = {
  args: {
    variant: 'fab_extended',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'plus'
  }
}
export const Fab_Round: Story = {
  args: {
    variant: 'fab_round',
    color: 'info',
    size: 'large',
    disabled: false,
    icon: 'star'
  }
}
export const Icon_Button: Story = {
  args: {
    variant: 'icon_button',
    color: 'primary',
    size: 'large',
    disabled: false,
    icon: 'star'
  }
}
