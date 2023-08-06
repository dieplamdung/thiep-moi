import type { Meta, StoryObj } from '@storybook/react';

import Pill from './Pill';

const meta: Meta<typeof Pill> = {
  title: 'Atom/Pill',
  component: Pill,
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: 'Received',
    // color: 'blue',
  },
};
