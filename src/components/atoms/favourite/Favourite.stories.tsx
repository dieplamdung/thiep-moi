import type { Meta, StoryObj } from '@storybook/react';

import FaVouRite from './index';

const meta: Meta<typeof FaVouRite> = {
  title: 'Atom/Favourite',
  component: FaVouRite,
};

export default meta;
type Story = StoryObj<typeof FaVouRite>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};
