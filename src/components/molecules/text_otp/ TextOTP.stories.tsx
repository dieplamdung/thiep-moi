import type { Meta, StoryObj } from '@storybook/react';

import TextOTP from './TextOTP';

const meta: Meta<typeof TextOTP> = {
  title: 'Molecules/TextOTP',
  component: TextOTP,
};

export default meta;
type Story = StoryObj<typeof TextOTP>;

export const Default: Story = {
  args: {},
};
