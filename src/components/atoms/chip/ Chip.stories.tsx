import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Atom/Chip',
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};
