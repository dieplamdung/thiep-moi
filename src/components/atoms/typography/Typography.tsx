import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { Cursor, TypographyProps } from './index';

const Typography: React.FC<TypographyProps> = ({
  variant,
  onClick,
  className,
  children,
  color,
  cursor,
  spacing,
}) => {
  return (
    <StyleTypography
      className={clsxm(
        'text-neutral-500',
        variant === 'h1' && [
          'text-[40px] font-bold leading-[48px] sm:text-[28px] sm:leading-[36px]',
        ],
        variant === 'h2' && [
          'text-[32px] font-bold leading-[40px] sm:text-[24px] sm:leading-[32px]',
        ],
        (variant === 'h3' || variant === 'h3r') && [
          'text-[20px] font-bold leading-[28px] sm:text-[18px] sm:leading-[26px]',
          variant === 'h3r' && ['font-[400] sm:leading-[26px]'],
        ],
        variant === 'b1' && ['text-[16px] font-bold leading-[24px]'],
        variant === 'b1r' && ['text-[16px] font-[400] leading-[24px]'],
        variant === 'b2' && ['text-[14px] font-bold leading-[20px]'],
        variant === 'b2m' && ['text-[14px] font-medium leading-[20px]'],
        variant === 'button' && ['text-[16px] font-bold leading-[24px]'],
        variant === 'label' && ['text-[12px] font-[600] leading-[16px]'],
        variant === 'text' && ['text-[12px] font-[500] leading-[16px]'],
        className
      )}
      color={color}
      cursor={cursor}
      onClick={() => onClick?.()}
      spacing={spacing}
    >
      {children}
    </StyleTypography>
  );
};

export default Typography;

const StyleTypography = styled.p<{
  color?: string;
  cursor?: Cursor;
  spacing?: string;
}>`
  letter-spacing: ${({ spacing }) => spacing};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor || 'default'};
`;
