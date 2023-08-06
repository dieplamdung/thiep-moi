import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { NavigationDashboardProps } from '@/components/pattern_global/navigation_dashboard/types';

import NavigationDashboard from './NavigationDashboard';

const meta: Meta<typeof NavigationDashboard> = {
  title: 'PatternGlobal/NavigationDashboard',
  component: NavigationDashboard,
};

export default meta;

export const Default = (args: NavigationDashboardProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const [activeFund, setActiveFund] = useState(args.activeFund);
  return (
    <div className='h-[100vh] w-[100%] bg-neutral-300'>
      <NavigationDashboard
        {...args}
        activeFund={activeFund}
        isOpen={open}
        onMenuClose={() => setOpen(false)}
        onFundClick={(fund) => {
          setActiveFund(fund);
        }}
      />
    </div>
  );
};

Default.args = {
  activeLink: '',
  isOpen: false,
  menu: [
    {
      groupTitle: 'General',
      menuItems: [
        {
          key: 'dashboard',
          title: 'Dashboard',
          href: '',
          iconName: 'dashboard',
        },
        {
          key: 'giving_pattern',
          title: 'Giving Pattern',
          href: '/pattern',
          iconName: 'giving_pattern',
        },
        {
          key: 'programmes',
          title: 'Programmes',
          href: '/programmes',
          iconName: 'programmes',
        },
        {
          key: 'news',
          title: 'News',
          href: '/news',
          iconName: 'news',
        },
      ],
    },
    {
      groupTitle: 'About',
      menuItems: [
        {
          key: 'about',
          title: 'Support',
          href: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
          iconName: 'support',
        },
        {
          key: 'settings',
          title: 'Settings',
          href: '/settings',
          iconName: 'settings',
        },
      ],
    },
  ],
  funds: [
    {
      id: 'pt',
      fundName: 'Peter Tan Fund',
    },
    {
      id: 'the-tan-fund',
      fundName: 'The Tan Family Educational Fund',
      avatarSrc: '',
    },
  ],
  activeFund: {
    id: 'the-tan-fund',
    fundName: 'The Tan Family Educational Fund',
  },
};
