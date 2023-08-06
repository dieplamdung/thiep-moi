import type { Meta, StoryObj } from '@storybook/react';

import clsxm from '@/lib/clsxm';

import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Atom/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'Title',
    description:
      'To provide additional information to users upon hovering over information icons.',
    placement: 'bottomRight',
    children: (
      <div
        className={clsxm(
          'ml-[200px] mt-[200px] flex h-[50px] w-[200px] items-center justify-center bg-red-400'
        )}
      >
        Tooltip
      </div>
    ),
  },
};
