import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { ButtonSelectProps } from './index';

const ButtonSelect: React.FC<ButtonSelectProps> = ({
  className,
  onClick,
  children,
  isSelect = false,
}) => {
  return (
    <StyleButtonSelect
      className={clsxm(
        'flex h-[56px] w-fit cursor-pointer items-center justify-center rounded-[16px] border-[2px] border-solid border-white bg-white px-[60px] shadow-cart_shadow hover:shadow-data_hover',
        isSelect && ['border-neutral-500'],
        className
      )}
      onClick={() => onClick?.()}
    >
      {typeof children === 'string' ? (
        <Typography variant='b1r'>{children}</Typography>
      ) : (
        children
      )}
    </StyleButtonSelect>
  );
};

export default ButtonSelect;

const StyleButtonSelect = styled.div`
  transition: all 0.2s;
  * {
    cursor: pointer;
  }
`;
