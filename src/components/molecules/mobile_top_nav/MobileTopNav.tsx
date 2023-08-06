import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
import { useScrollDown } from '@/lib/hooks/useScrollDown';

import BellNotify from '@/components/atoms/bell_nitify';
import Icons from '@/components/atoms/icons/Icons';

import { MobileTopNavProps } from './index';

const MobileTopNav: React.FC<MobileTopNavProps> = ({
  className,
  onMenuClick,
  onBellClick,
  numberNotify,
}) => {
  const isScrollDown = useScrollDown();
  return (
    <StyleMobileTopNavContainer
      className={clsxm(
        'hidden w-full justify-between',
        [
          'md:sticky md:top-0 md:flex md:items-start md:bg-white md:p-6 md:pt-12',
        ],
        isScrollDown && ['shadow-cart_shadow'],
        className
      )}
    >
      <Icons className='h-[48px] w-[194px] md:w-[134px]' typeicon='logo' />
      <StyleIconsWrapper className={clsxm('flex items-center gap-x-4')}>
        <BellNotify
          className={clsxm('bg-white')}
          numberNotify={numberNotify}
          onClick={onBellClick}
        />
        <Icons
          className='cursor-pointer'
          typeicon='hamburger'
          onClick={onMenuClick}
        />
      </StyleIconsWrapper>
    </StyleMobileTopNavContainer>
  );
};

export default MobileTopNav;

const StyleMobileTopNavContainer = styled.div``;
const StyleIconsWrapper = styled.div``;
