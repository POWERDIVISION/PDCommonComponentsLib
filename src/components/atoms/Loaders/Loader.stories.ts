import type { Meta, StoryObj } from '@storybook/vue3';

import { Loader } from './index';
interface LoaderProps {
  color: string;
}
const meta = {
  title: 'atoms/Loader',
  component: Loader,
  render: (args: { isWhite: boolean }) => ({
    components: { Loader },
    setup() {
      return { args };
    },
    template: '<Loader :isWhite="args.isWhite"/>',
  }),
  tags: ['autodocs'],
} as Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default = {
  args: {
    isWhite: false,
  },
};
