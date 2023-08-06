import type { Meta, StoryObj } from '@storybook/react';

import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atom/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'h1',
    children: 'Typography',
    className: 'headline_class',
  },
};
