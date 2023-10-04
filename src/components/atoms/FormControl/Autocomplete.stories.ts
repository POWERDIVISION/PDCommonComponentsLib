import type { Meta, StoryObj } from '@storybook/vue3';

import { Autocomplete } from './index';

import type {
  AutocompleteProps,
} from "@/types/FormTypes/AutocompleteTypes/AutocompleteInterface";

const meta = {
  title: 'atoms/Form/Autocomplete',
  component: Autocomplete,
  render: (args:AutocompleteProps ) => ({
    components: {Autocomplete},
    setup() {
      return { args };
    },
    template: '<Autocomplete v-model="args.modelValue" :type="args.type" :items="args.items" :single="args.single" :size="args.size" :placeholder="args.placeholder" :label="args.label" :disable="args.disable" />',
  }),
  tags: ['autodocs'],
} as Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Standard = {
  args: {
    modelValue: [],
    type:'standard',
    items:[{id:'asdasqweafs', value:'option1'}, {id:'123qwerqw12', value:'option2'}, {id:'123aawqqwerqw12', value:'option3'}, {id:'1233323qwerqw12', value:'option4'}],
    single:false,
    size:'small',
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
    size:'small',
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
    size:'small',
    placeholder:'',
    label:'selectbox',
    disable:false,
  }
};
