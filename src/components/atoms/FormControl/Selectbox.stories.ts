import type { Meta, StoryObj } from '@storybook/vue3';

import { Selectbox } from './index';

import type {
  SelectboxProps,
} from "@/types/FormTypes/SelectboxTypes/SelectboxInterface";

const meta = {
  title: 'atoms/Form/Selectbox',
  component: Selectbox,
  render: (args:SelectboxProps ) => ({
    components: {Selectbox},
    setup() {
      return { args };
    },
    template: '<Selectbox v-model="args.modelValue" :type="args.type" :items="args.items" :single="args.single" :size="args.size" :placeholder="args.placeholder" :label="args.label" :disable="args.disable" />',
  }),
  tags: ['autodocs'],
} as Meta<typeof Selectbox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Standard = {
  args: {
    modelValue: [],
    type:'standard',
    items:[{id:'asdasqweafs', value:'option1'}, {id:'123qwerqw12', value:'option2'}, {id:'123aawqqwerqw12', value:'option3'}, {id:'1233323qwerqw12', value:'option4'}],
    single:false,
    size:'medium',
    placeholder:'',
    label:'selectbox',
    disable:false,
  }
};
export const Outlined = {
  args: {
    modelValue: [],
    type:'outlined',
    items:[{id:'asdasqweafs', value:'option1'}, {id:'123qwerqw12', value:'option2'}, {id:'123aawqqwerqw12', value:'option3'}, {id:'1233323qwerqw12', value:'option4'}],
    single:false,
    size:'medium',
    placeholder:'',
    label:'selectbox',
    disable:false,
  }
};
export const Text = {
  args: {
    modelValue: [],
    type:'text',
    items:[{id:'asdasqweafs', value:'option1'}, {id:'123qwerqw12', value:'option2'}, {id:'123aawqqwerqw12', value:'option3'}, {id:'1233323qwerqw12', value:'option4'},
      {
        id:'1233323qwerqw12123412',
        value:'option5',
      },
      {
        id:'12314123323q1231werqw12',
        value:'option6',
      },
      {
        id:'1233323qwe36434rqw12',
        value:'option7',
      },
      {
        id:'123332323qwe859rqw12',
        value:'option8',
      }
    ],
    single:false,
    size:'medium',
    placeholder:'',
    label:'selectbox',
    disable:false,
  }
};
