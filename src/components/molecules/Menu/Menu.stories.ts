import type { Meta, StoryObj } from '@storybook/vue3'
// components
import { Menu } from './index'

const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args }
    },
    template: '<Menu />'
  }),
  tags: ['autodocs']
} as Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>
export const Default = {
  args: {}
}
