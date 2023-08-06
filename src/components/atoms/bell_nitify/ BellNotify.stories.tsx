import type { Meta, StoryObj } from '@storybook/react';

import BellNotify from './BellNotify';

const meta: Meta<typeof BellNotify> = {
  title: 'Atom/BellNotify',
  component: BellNotify,
};

export default meta;
type Story = StoryObj<typeof BellNotify>;

export const Default: Story = {
  args: {},
};
