import type { Meta, StoryObj } from '@storybook/vue3';

import { Menu } from './index';
interface LoaderProps {
  color: string;
}
const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  render: (args: { isWhite: boolean }) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: '<Menu />',
  }),
  tags: ['autodocs'],
} as Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default = {
  args: {
  },
};
