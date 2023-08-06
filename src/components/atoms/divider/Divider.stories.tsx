import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atom/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Width: Story = {
  args: {
    width: '500px',
    height: '1px',
  },
};

export const Height: Story = {
  args: {
    width: '1px',
    height: '200px',
  },
};
