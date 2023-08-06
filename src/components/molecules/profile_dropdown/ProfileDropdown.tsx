import * as React from 'react';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
import { useClickOutside } from '@/lib/hooks/useClickOutside';

import Avatar from '@/components/atoms/avatar';
import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography';

import themes from '@/styles/themes';

import { ProfileDropdownProps } from './index';

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  className,
  isMobile = false,
  funds,
  activeFund,
  closeOnSelect = true,
  onProfileClick,
  onFundClick,
  onCreateFundClick,
}) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setTriggerAnimation(false));

  return (
    <StyleProfileDropdownContainer
      className={clsxm('relative w-[248px]', className)}
      ref={dropdownRef}
    >
      <StyleProfileButton
        className={clsxm(
          'flex w-full items-center gap-x-4 rounded-[32px] rounded-br-2xl rounded-tr-2xl bg-neutral-100'
        )}
        onClick={() => {
          if (isMobile) {
            onProfileClick?.();
            return;
          }
          setTriggerAnimation(!triggerAnimation);
          setShowMenu(true);
        }}
      >
        <Avatar
          image={activeFund.avatarSrc}
          text={activeFund.fundName.trim().charAt(0)}
          className='flex-shrink-0'
        />
        <StyleInfoWrapper
          className={clsxm(
            'mr-4 flex flex-1 items-center justify-between overflow-hidden transition-all duration-500'
          )}
        >
          <Typography
            className={clsxm('line-clamp-2 w-full text-start')}
            variant='b1'
            cursor='pointer'
          >
            {activeFund.fundName}
          </Typography>
          <Icons
            className={clsxm(
              'transition-all duration-300',
              triggerAnimation && ['rotate-180']
            )}
            typeicon={isMobile ? 'arrow-right' : 'arrow-down'}
          />
        </StyleInfoWrapper>
      </StyleProfileButton>
      {showMenu && !isMobile && (
        <StylePopover
          className={clsxm(
            'absolute mt-2 w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px] shadow-neutral-500/[0.08]',
            '[&>*:hover:not(.active)]:bg-neutral-100',
            triggerAnimation
              ? ['animate-fade-in-top ']
              : ['animate-fade-out-top']
          )}
          onAnimationEnd={(event: React.AnimationEvent<HTMLDivElement>) => {
            if (event.animationName === 'fade-out-top') {
              setShowMenu(false);
            }
          }}
        >
          {funds.map((fund) => (
            <StylePopoverMenu
              className={clsxm(
                'flex items-center gap-x-3 px-4 py-3',
                activeFund.id === fund.id && [
                  'active bg-secondary-dark_turquoise hover:bg-auto',
                ]
              )}
              key={fund.id}
              onClick={() => {
                if (closeOnSelect) setTriggerAnimation(false);
                onFundClick?.(fund);
              }}
            >
              <Avatar
                className='flex-shrink-0'
                variant='small'
                text={fund.fundName.trim().charAt(0)}
                image={fund.avatarSrc}
              />
              <Typography
                variant={activeFund.id === fund.id ? 'b1' : 'b1r'}
                color={activeFund.id === fund.id ? 'white' : ''}
                className={clsxm('line-clamp-2')}
              >
                {fund.fundName}
              </Typography>
            </StylePopoverMenu>
          ))}
          <StyleCreateButton
            className={clsxm(
              'flex items-center justify-center gap-x-2 px-2 py-3'
            )}
            onClick={() => onCreateFundClick?.()}
          >
            <Icons size='small' typeicon='icon_add' />
            <Typography variant='button' color={themes.primary.magenta}>
              Create a fund
            </Typography>
          </StyleCreateButton>
        </StylePopover>
      )}
    </StyleProfileDropdownContainer>
  );
};

export default ProfileDropdown;

const StyleProfileDropdownContainer = styled.div``;
const StyleProfileButton = styled.button``;
const StyleInfoWrapper = styled.div``;
const StylePopover = styled.div<{ isActive?: boolean }>`
  & * {
    cursor: pointer;
  }
`;
const StylePopoverMenu = styled.div``;
const StyleCreateButton = styled.div``;
