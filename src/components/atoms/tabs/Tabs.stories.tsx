import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Atom/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabDefault: '1',
    marginBottom: '0px',
    tabList: [
      {
        label: 'Active',
        key: '1',
        children: <div>Active</div>,
      },
      {
        label: 'Disabled',
        key: '2',
        children: <div>Disabled</div>,
        disabled: true,
      },
      {
        label: 'Hover',
        key: '3',
        children: <div>Hover</div>,
      },
    ],
  },
};
