import type { Meta, StoryObj } from '@storybook/vue3'

// components
import { GroupButtons } from './index'

const meta = {
  title: 'Atoms/GroupButtons',
  component: GroupButtons,
  render: (args) => ({
    components: { GroupButtons },
    setup() {
      return { args }
    },
    template: '<GroupButtons :type="args.type" :size="args.size" :buttons="args.buttons"/>'
  }),
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['contained', 'outlined', 'ghost'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    buttons: { control: 'object' }
  }
} satisfies Meta<typeof GroupButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'contained',
    size: 'medium',
    buttons: [
      {
        name: 'button1',
        isActive: true,
        clickHandler: () => {
          console.log('button1')
        }
      },
      {
        name: 'button2',
        isActive: false,
        clickHandler: () => {
          console.log('button2')
        }
      }
    ]
  }
}
