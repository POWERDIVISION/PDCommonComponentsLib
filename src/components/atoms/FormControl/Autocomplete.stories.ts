import type { Meta, StoryObj } from '@storybook/vue3'

// components
import { Autocomplete } from './index'

const meta = {
  title: 'atoms/Form/Autocomplete',
  component: Autocomplete,
  render: (args) => ({
    components: { Autocomplete },
    setup() {
      return { args }
    },
    template:
      '<Autocomplete v-model="args.modelValue" :type="args.type" :items="args.items" :single="args.single" :size="args.size" :placeholder="args.placeholder" :label="args.label" :disable="args.disable" @update:model-value="v => args.modelValue = [v]" />'
  }),
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['standard', 'outlined', 'text'] },
    items: { control: 'array' },
    single: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disable: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' }
  },
  args: {
    items: [
      { id: 'option1', value: 'option 1' },
      { id: 'option2', value: 'option 2' },
      { id: 'option3', value: 'option 3' },
      { id: 'option4', value: 'option 4' }
    ]
  }
} as Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>
export const Standard = {
  args: {
    modelValue: [],
    type: 'standard',
    single: false,
    size: 'small',
    placeholder: '',
    label: 'selectbox',
    disable: false
  }
}
export const Outlined = {
  args: {
    modelValue: [],
    type: 'outlined',
    single: false,
    size: 'small',
    placeholder: '',
    label: 'selectbox',
    disable: false
  }
}
export const Text = {
  args: {
    modelValue: [],
    type: 'text',
    single: false,
    size: 'small',
    placeholder: '',
    label: 'selectbox',
    disable: false
  }
}
