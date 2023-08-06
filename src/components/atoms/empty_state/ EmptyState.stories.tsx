import type { Meta, StoryObj } from '@storybook/react';

import EmptyState from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Atom/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    header: 'Header',
    description: 'To indicate no user content yet.',
    // icon: 'https://static.vecteezy.com/system/resources/previews/011/537/711/original/box-empty-state-single-isolated-icon-with-outline-style-free-vector.jpg',
  },
};
