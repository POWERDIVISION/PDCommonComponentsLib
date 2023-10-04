import type { Meta, StoryObj } from '@storybook/vue3';

import { Input } from './index';
import type {InputProps} from "@/types/FormTypes/InputTypes/InputInterface";

const meta = {
  title: 'atoms/Form/Input',
  component: Input,
  render: (args:InputProps ) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-model="args.modelValue" :field-type="args.fieldType" :size="args.size" :disabled="args.disable" :placeholder="args.placeholder" :label="args.label" :type="args.type" />',
  }),
  tags: ['autodocs'],
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const SmallStandard = {
  args: {
    modelValue: '',
    type: 'standard',
    fieldType: 'text',
    size:'small',
    placeholder:'user',
    label:'user',
    disable: false,
  }
};
export const MediumStandard = {
  args: {
    modelValue: '',
    type: 'standard',
    fieldType: 'text',
    size:'medium',
    placeholder:'user',
    label:'user',
    disable: false,
  }
};

export const SmallOutlined = {
  args: {
    modelValue: '',
    type: 'outlined',
    fieldType: 'text',
    size:'small',
    placeholder:'user',
    label:'user',
    disable: false,
  }
};
export const MediumOutlined = {
  args: {
    modelValue: '',
    type: 'outlined',
    fieldType: 'text',
    size:'medium',
    placeholder:'user',
    label:'user',
    disable: false,
  }
};
export const SmallText = {
  args: {
    modelValue: '',
    type: 'text',
    fieldType: 'text',
    size:'small',
    placeholder:'user',
    label:'user',
    disable: false,
  }
};
export const MediumText = {
  args: {
    modelValue: '',
    type: 'text',
    fieldType: 'text',
    size:'medium',
    placeholder:'user',
    label:'user',
    disable: false,
  }
};
