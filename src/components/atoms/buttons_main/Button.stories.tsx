import type { Meta, StoryObj } from '@storybook/react';

import clsxm from '@/lib/clsxm';

import Tooltip from '@/components/atoms/tooltip/Tooltip';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atom/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

type StoryC = StoryObj<typeof Button>;

export const Combo: StoryC = {
  render: () => (
    <div className={clsxm('mt-[100px] flex w-[100%] [&>button]:ml-[8px]')}>
      <Button variant='primary'>Button</Button>
      <Button variant='secondary'>
        <Tooltip title='Button' description='Button' placement='topLeft'>
          Button
        </Tooltip>
      </Button>
    </div>
  ),
};
