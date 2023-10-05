import type { Meta, StoryObj } from '@storybook/vue3'

// components
import { ActionModal } from './index'

const meta = {
  title: 'atoms/ActionModal',
  component: ActionModal,
  render: (args) => ({
    components: { ActionModal },
    setup() {
      return { args }
    },
    template:
      '<ActionModal :type="args.type" :title="args.title" :message-variant="args.messageVariant" :message="args.message"/>'
  }),
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['filled', 'outlined', 'ghost'] },
    messageVariant: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success']
    },
    title: { control: 'text' },
    message: { control: 'text' }
  }
} as Meta<typeof ActionModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default = {
  args: {
    type: 'filled',
    messageVariant: 'error',
    message: 'This is a message',
    title: 'This is a title',
    withActions: true
  }
}

export const Warning = {
  args: {
    type: 'filled',
    messageVariant: 'warning',
    message: 'This is a message',
    title: 'This is a title',
    withActions: true
  }
}

export const Info = {
  args: {
    type: 'filled',
    messageVariant: 'info',
    message: 'This is a message',
    title: 'This is a title',
    withActions: true
  }
}

export const Success = {
  args: {
    type: 'filled',
    messageVariant: 'success',
    message: 'This is a message that is way longer that it should be but it is what it is',
    title: 'This is a title',
    withActions: true
  }
}
export const Outlined = {
  args: {
    type: 'outlined',
    messageVariant: 'error',
    message: 'This is a message',
    title: 'This is a title',
    withActions: true
  }
}

export const Ghost = {
  args: {
    type: 'ghost',
    messageVariant: 'error',
    message: 'This is a message',
    title: 'This is a title',
    withActions: true
  }
}
