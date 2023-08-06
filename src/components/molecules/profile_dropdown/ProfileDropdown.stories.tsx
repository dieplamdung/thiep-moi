import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { ProfileDropdownProps } from '@/components/molecules/profile_dropdown/types';

import ProfileDropdown from './ProfileDropdown';

const meta: Meta<typeof ProfileDropdown> = {
  title: 'Molecules/Profile',
  component: ProfileDropdown,
};

export default meta;
export const Default = ({ activeFund, ...args }: ProfileDropdownProps) => {
  const [fund, setFund] = useState(activeFund);
  return (
    <ProfileDropdown
      {...args}
      activeFund={fund}
      onFundClick={(fund) => setFund(fund)}
    />
  );
};

Default.args = {
  isMobile: false,
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
  closeOnSelect: true,
};
