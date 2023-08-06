import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Divider from '@/components/atoms/divider/Divider';
import Icons from '@/components/atoms/icons/Icons';

import themes from '@/styles/themes';

import { NavigationProps } from './index';

const Navigation: React.FC<NavigationProps> = ({
  className,
  onClickArrowTop,
  onClickArrowDown,
  disableArrowTop,
  disableArrowDown = true,
}) => {
  return (
    <StyleNavigation
      className={clsxm(
        'flex h-[40px] w-[88px] justify-between overflow-hidden rounded-[8px] shadow-cart_shadow',
        className
      )}
    >
      <div
        className={clsxm(
          'flex h-[100%] flex-1 cursor-pointer items-center justify-center bg-white',
          disableArrowTop && ['pointer-events-none']
        )}
        onClick={() => onClickArrowTop?.()}
      >
        <Icons
          typeicon='arrow-top'
          fill={disableArrowTop ? themes.neutral['200'] : themes.neutral['500']}
        />
      </div>
      <Divider width='1px' height='40px' className='bg-neutral-200' />
      <div
        className={clsxm(
          'flex h-[100%] flex-1 cursor-pointer items-center justify-center bg-white',
          disableArrowDown && ['pointer-events-none']
        )}
        onClick={() => onClickArrowDown?.()}
      >
        <Icons
          typeicon='arrow-down'
          fill={
            disableArrowDown ? themes.neutral['200'] : themes.neutral['500']
          }
        />
      </div>
    </StyleNavigation>
  );
};

export default Navigation;

const StyleNavigation = styled.div`
  transition: all 0.3s;
  &:hover {
    box-shadow: ${themes.boxShadow.data_hover};
  }
`;
