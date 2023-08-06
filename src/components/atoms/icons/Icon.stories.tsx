import type { Meta, StoryObj } from '@storybook/react';

import Icons from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Atom/Icons',
  component: Icons,
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Ellipse: Story = {
  args: {
    typeicon: 'ellipse',
    stroke: 'red',
  },
};

export const ArrowRight: Story = {
  args: {
    typeicon: 'arrow-right',
    fill: 'red',
  },
};

export const Heart: Story = {
  args: {
    typeicon: 'heart',
    fill: 'red',
  },
};

export const HeartActive: Story = {
  render: () => {
    return (
      <div className='bg-[#ddd] p-8'>
        <Icons typeicon='heart_active' />
      </div>
    );
  },
};

export const ArrowTop: Story = {
  args: {
    typeicon: 'arrow-top',
    fill: 'red',
  },
};

export const ArrowDow: Story = {
  args: {
    typeicon: 'arrow-down',
    fill: 'red',
  },
};

export const Check: Story = {
  args: {
    typeicon: 'check',
    fill: 'red',
  },
};

export const CheckBox: Story = {
  args: {
    typeicon: 'check_box',
    stroke: 'red',
  },
};

export const CloseCircle: Story = {
  args: {
    typeicon: 'close_circle',
  },
};
export const empty_state: Story = {
  args: {
    typeicon: 'empty_state',
  },
};
export const fund_type: Story = {
  args: {
    typeicon: 'fund_type',
  },
};
export const solr_donor: Story = {
  args: {
    typeicon: 'solr_donor',
  },
};

export const icon_tip: Story = {
  args: {
    typeicon: 'icon_tip',
  },
};

export const icon_document: Story = {
  args: {
    typeicon: 'icon_document',
  },
};

export const icon_arrow_select: Story = {
  args: {
    typeicon: 'icon_arrow_select',
  },
};

export const icon_close: Story = {
  args: {
    typeicon: 'icon_close',
  },
};

export const info: Story = {
  args: {
    typeicon: 'info',
  },
};

export const bell_notify: Story = {
  args: {
    typeicon: 'bell_notify',
  },
};

export const bell_notify_active: Story = {
  args: {
    typeicon: 'bell_notify_active',
  },
};
export const dashboard: Story = {
  args: {
    typeicon: 'dashboard',
  },
};
export const giving_pattern: Story = {
  args: {
    typeicon: 'giving_pattern',
  },
};
export const programmes: Story = {
  args: {
    typeicon: 'programmes',
  },
};
export const news: Story = {
  args: {
    typeicon: 'news',
  },
};
export const support: Story = {
  args: {
    typeicon: 'support',
  },
};
export const settings: Story = {
  args: {
    typeicon: 'settings',
  },
};
export const logout: Story = {
  args: {
    typeicon: 'logout',
  },
};
export const logo: Story = {
  args: {
    typeicon: 'logo',
  },
};

export const arrowLeft: Story = {
  args: {
    typeicon: 'arrow-left',
  },
};

export const arrowRight: Story = {
  args: {
    typeicon: 'arrow-right',
  },
};

export const iconAdd: Story = {
  args: {
    typeicon: 'icon_add',
  },
};
