import React, { useEffect, useState } from 'react';

import { useActiveLink } from '@/lib/hooks/useActiveLink';
import useScreen from '@/lib/hooks/useScreen';

import BellNotify from '@/components/atoms/bell_nitify/BellNotify';
import Container from '@/components/atoms/container/Container';
import { LayoutProps } from '@/components/layout/type';
import MobileTopNav from '@/components/molecules/mobile_top_nav/MobileTopNav';
import ProfileDropdown from '@/components/molecules/profile_dropdown/ProfileDropdown';
import Footer from '@/components/pattern_global/footer/Footer';
import NavigationDashboard from '@/components/pattern_global/navigation_dashboard/NavigationDashboard';

export function MainLayout({ children }: LayoutProps) {
  const linkActive = useActiveLink();
  const { isMobile, isTablet } = useScreen();

  const [open, setOpen] = useState<boolean>(false);
  const [activeFund, setActiveFund] = useState<any>({
    id: 'the-tan-fund',
    fundName: 'The Tan Family Educational Fund',
  });

  useEffect(() => {
    if (!isTablet && !isMobile) {
      setOpen(false);
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    setOpen(false);
  }, [linkActive]);

  const handleClickNotify = () => {
    return null;
  };

  const handleCreateFund = () => {
    return null;
  };

  return (
    <>
      <MobileTopNav
        onMenuClick={() => {
          setOpen(true);
        }}
        numberNotify={1}
      />
      <Container className='grow'>
        <main className='flex w-[100%]'>
          <NavigationDashboard
            {...dataMenu}
            activeFund={activeFund}
            activeLink={linkActive}
            isOpen={open}
            onMenuClose={() => setOpen(false)}
            onFundClick={(fund) => {
              setActiveFund(fund);
            }}
            onCreateFundClick={handleCreateFund}
          />

          <div className='flex min-h-[100vh] grow flex-col'>
            <div className='flex items-center justify-between px-[40px] py-[32px] md:hidden'>
              <ProfileDropdown
                activeFund={activeFund}
                onFundClick={(fund) => setActiveFund(fund)}
                funds={funds}
              />
              <div>
                <BellNotify onClick={handleClickNotify} numberNotify={3} />
              </div>
            </div>
            {children}
          </div>
        </main>
      </Container>
      <Footer {...dataFooter} />
    </>
  );
}

const funds = [
  {
    id: 'pt',
    fundName: 'Peter Tan Fund',
  },
  {
    id: 'the-tan-fund',
    fundName: 'The Tan Family Educational Fund',
    avatarSrc: '',
  },
];

const dataMenu = {
  activeLink: '',
  isOpen: false,
  menu: [
    {
      groupTitle: 'General',
      menuItems: [
        {
          title: 'Dashboard',
          href: '/',
          iconName: 'dashboard',
        },
        {
          title: 'Giving Pattern',
          href: '/pattern',
          iconName: 'giving_pattern',
        },
        {
          title: 'Programmes',
          href: '/programmes',
          iconName: 'programmes',
        },
        {
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
          title: 'Support',
          href: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
          iconName: 'support',
          target: '_blank',
        },
        {
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
};

const dataFooter = {
  copyRight: '© Community Foundation of Singapore 2023. All rights reserved',
  listLinkFooter: [
    {
      label: 'Privacy Policy',
      href: 'https://www.cf.org.sg/privacy/',
    },
    {
      label: 'Cookies Policy',
      href: 'https://www.cf.org.sg/cfs-cookies-policy/',
    },
    {
      label: 'Copyright',
      href: 'https://www.cf.org.sg/copyright/',
    },
    {
      label: 'Terms of Use',
      href: 'https://www.cf.org.sg/terms-of-use/',
    },
  ],
};
