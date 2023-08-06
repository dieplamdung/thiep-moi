import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
import useScreen from '@/lib/hooks/useScreen';

import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography';
import ProfileDropdown from '@/components/molecules/profile_dropdown';
import NavigationMenuItem from '@/components/pattern_global/navigation_dashboard/components/NavigationMenuItem';

import themes from '@/styles/themes';
import { handleBlockScroll } from '@/utils';

import { BaseItem, StyleMenu } from './styles';
import { NavigationDashboardProps } from './types';

const NavigationDashboard: React.FC<NavigationDashboardProps> = ({
  className,
  menu,
  isOpen = false,
  activeLink = '',
  logOutLabel = 'Log out',
  logOutIconName = 'logout',
  activeFund,
  funds,
  onFundClick,
  onCreateFundClick,
  onMenuClick,
  onLogOutClick,
  onMenuClose,
}) => {
  const [isProfileOpened, setIsProfileOpened] = useState<boolean>(false);
  const { isMobile, isTablet } = useScreen();
  useEffect(() => {
    if (!isTablet && !isMobile) {
      setIsProfileOpened(false);
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    handleBlockScroll(isOpen);
  }, [isOpen]);

  const renderMenu = () => {
    return (
      <>
        <StyleMenuWrapper>
          {menu.map(({ menuItems, groupTitle }) => (
            <StyleMenu
              key={groupTitle}
              className={clsxm('flex flex-col gap-y-4')}
            >
              <Typography variant='b2m' className={clsxm('text-neutral-400')}>
                {groupTitle}
              </Typography>
              {menuItems.map((menu, index) => (
                <NavigationMenuItem
                  key={index}
                  isActive={activeLink === menu.href}
                  {...menu}
                  onClick={onMenuClick}
                />
              ))}
            </StyleMenu>
          ))}
        </StyleMenuWrapper>
        <StyleLogout
          className={clsxm(
            'mb-[40px] mt-auto gap-x-4 pl-[40px] md:mb-12 md:mt-4'
          )}
          href=''
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            onLogOutClick?.();
          }}
        >
          <Icons typeicon={logOutIconName} />
          <Typography variant='b1' className={clsxm('text-neutral-400')}>
            {logOutLabel}
          </Typography>
        </StyleLogout>
        <StyleProfileDropdown className={clsxm('hidden px-6 md:block')}>
          {activeFund && funds && (
            <ProfileDropdown
              activeFund={activeFund}
              funds={funds}
              isMobile
              onProfileClick={() => setIsProfileOpened(true)}
            />
          )}
        </StyleProfileDropdown>
      </>
    );
  };

  const renderProfileFunds = () => {
    return (
      <StyleMenuWrapper>
        <StyleMenu className={clsxm('flex flex-col gap-y-4')}>
          <Typography variant='b2m' className={clsxm('mb-2 text-neutral-400')}>
            Your fund
          </Typography>
          {funds &&
            funds.map(({ id, fundName, avatarSrc }) => (
              <NavigationMenuItem
                className='gap-x-6'
                key={id}
                title={fundName}
                avatarSrc={avatarSrc ?? ''}
                isActive={activeFund?.id === id}
                onClick={(e: any) => {
                  e?.preventDefault();
                  onFundClick?.({ id, fundName, avatarSrc });
                }}
              />
            ))}
          <div
            className={clsxm(
              'flex cursor-pointer items-center gap-x-2 px-2 py-3'
            )}
            onClick={() => onCreateFundClick?.()}
          >
            <Icons size='small' typeicon='icon_add' />
            <Typography
              cursor='pointer'
              variant='button'
              color={themes.primary.magenta}
            >
              Create a fund
            </Typography>
          </div>
        </StyleMenu>
      </StyleMenuWrapper>
    );
  };

  return (
    <>
      {isOpen && (
        <StyleOverlay
          className='left-0 top-0 z-20 animate-fadeInOverlay bg-overlay md:fixed md:h-screen md:w-screen'
          onClick={() => {
            onMenuClose?.();
            setIsProfileOpened(false);
          }}
        />
      )}

      <StyleNavigationDashboard
        className={clsxm(
          'flex h-screen w-[248px] flex-col overflow-x-hidden bg-white transition-all duration-[400ms] ease-in-out ',
          [
            'md:absolute md:left-0 md:top-0 md:z-50 md:w-full md:max-w-[375px] md:-translate-x-full',
          ],
          isOpen && ['md:translate-x-0'],
          className
        )}
      >
        <StyleLogo
          className={clsxm(
            'mb-[80px] items-start pl-[40px] pt-[40px]',
            [
              'md:mb-4 md:flex md:items-center md:justify-between md:p-6 md:pt-12',
            ],
            isProfileOpened && ['md:mb-[38px]']
          )}
        >
          {isProfileOpened ? (
            <Icons
              className={clsxm('cursor-pointer justify-start text-neutral-500')}
              typeicon='arrow-left'
              onClick={() => setIsProfileOpened(false)}
            />
          ) : (
            <Icons className='justify-start' typeicon='logo' />
          )}
          <Icons
            typeicon='icon_close'
            className={clsxm('hidden cursor-pointer text-neutral-500 md:block')}
            onClick={() => {
              onMenuClose?.();
              setIsProfileOpened(false);
            }}
          />
        </StyleLogo>
        {isProfileOpened ? renderProfileFunds() : renderMenu()}
      </StyleNavigationDashboard>
    </>
  );
};

export default NavigationDashboard;

const StyleNavigationDashboard = styled.div``;
const StyleLogo = styled.div``;

const StyleMenuWrapper = styled.div`
  ${StyleMenu}:not(:first-child) {
    padding-top: 16px;
  }
`;

const StyleLogout = styled(BaseItem)``;
const StyleOverlay = styled.div``;
const StyleProfileDropdown = styled.div``;
