import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { ButtonProps } from '@/components/atoms/buttons_main/types';
import Icons from '@/components/atoms/icons/Icons';

import themes from '@/styles/themes';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      disabled,
      isShowIconLeft = true,
      isShowIconRight = true,
      children,
      className,
      ...res
    },
    ref
  ) => {
    return (
      <StyledButton
        className={clsxm(
          'flex h-[48px] w-fit items-center gap-x-2 rounded-[40px] px-6 py-3 text-[16px] font-[700] leading-[24px] transition-all duration-[0.2s] sm:w-full sm:justify-center ',
          variant === 'primary' && [
            'bg-primary-magenta text-white hover:bg-primary-magenta_hover',

            disabled && [
              'bg-neutral-100 text-neutral-200 hover:bg-neutral-100',
            ],
          ],
          variant === 'secondary' && [
            'border-[1px] border-solid border-primary-magenta bg-white text-primary-magenta hover:border-primary-magenta_hover hover:text-primary-magenta_hover',
            disabled && [
              'border-text-neutral-200 hover:border-text-neutral-200 text-neutral-200 hover:text-neutral-200',
            ],
          ],
          className
        )}
        ref={ref}
        disabled={!!disabled}
        variant={variant}
        {...res}
      >
        {isShowIconLeft && (
          <Icons
            typeicon='ellipse'
            size='small'
            className={clsxm('icon-ellipse')}
            stroke={
              disabled
                ? themes.neutral[200]
                : variant === 'secondary'
                ? themes.primary.magenta
                : themes.neutral[50]
            }
          />
        )}
        {children}
        {isShowIconRight && (
          <Icons
            typeicon='arrow-right'
            size='small'
            className={clsxm('icon-right')}
            fill={
              disabled
                ? themes.neutral[200]
                : variant === 'secondary'
                ? themes.primary.magenta
                : themes.neutral[50]
            }
          />
        )}
      </StyledButton>
    );
  }
);

export default Button;

const StyledButton = styled.button<{ disabled: boolean; variant: string }>`
  &:hover .icon-ellipse {
    stroke: ${({ variant, disabled }) =>
      disabled
        ? ''
        : variant === 'secondary'
        ? themes.primary.magenta_hover
        : ''};
  }
  &:hover .icon-right {
    fill: ${({ variant, disabled }) =>
      disabled
        ? ''
        : variant === 'secondary'
        ? themes.primary.magenta_hover
        : ''};
  }
`;
