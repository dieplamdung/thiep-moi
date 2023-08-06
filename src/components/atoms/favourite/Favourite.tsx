import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';

import themes from '@/styles/themes';

import { FaVouRiteProps } from './index';

const FaVouRite: React.FC<FaVouRiteProps> = ({
  isActive = false,
  className,
  onClick,
}) => {
  return (
    <StyleFaVouRite
      className={clsxm(
        'flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[50%] border-[1px] border-solid border-primary-magenta bg-white hover:border-primary-magenta_hover',
        className
      )}
      active={`${isActive}`}
      onClick={() => onClick?.()}
    >
      <Icons
        typeicon={isActive ? 'heart_active' : 'heart'}
        fill={themes.primary.magenta}
        className='icon-heart'
      />
    </StyleFaVouRite>
  );
};

export default FaVouRite;

const StyleFaVouRite = styled.div<{
  active: string;
}>`
  background-color: ${({ active }) =>
    active === 'true' ? themes.primary.magenta : ''};
  &:hover {
    background-color: ${({ active }) =>
      active === 'true' ? themes.primary.magenta_hover : ''};
  }

  &:hover .icon-heart {
    path {
      fill: ${themes.primary.magenta_hover} !important;
    }
  }
`;
