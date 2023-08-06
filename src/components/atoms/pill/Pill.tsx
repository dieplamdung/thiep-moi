import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { PillProps } from './index';

const Pill: React.FC<PillProps> = ({
  className,
  label,
  color,
  variant = 'demo',
}) => {
  return (
    <StylePill
      className={clsxm(
        'w-fit rounded-[8px] bg-neutral-100 px-[8px] py-[2px] ',
        variant === 'received' && ['bg-semantics-pending_5'],
        variant === 'earmarked' && ['bg-semantics-error_5'],
        variant === 'disbursed' && ['bg-semantics-success_5'],
        variant === 'success' && ['bg-semantics-success'],
        variant === 'pending' && ['bg-semantics-pending'],
        variant === 'error' && ['bg-semantics-error'],
        className
      )}
      color={color}
    >
      <Typography
        variant='text'
        className={clsxm(
          'text-neutral-500',
          variant === 'received' && ['text-semantics-pending'],
          variant === 'earmarked' && ['text-primary-magenta'],
          variant === 'disbursed' && ['text-semantics-success'],
          variant === 'success' && ['text-white'],
          variant === 'pending' && ['text-white'],
          variant === 'error' && ['text-white']
        )}
      >
        {label}
      </Typography>
    </StylePill>
  );
};

export default Pill;

const StylePill = styled.div<{ color?: string }>`
  background-color: ${({ color }) => (color ? 'transparent' : '')};
  position: relative;
  p {
    color: ${({ color }) => color};
    z-index: 2;
  }

  &::before {
    position: absolute;
    content: "' '";
    display: ${({ color }) => (color ? 'flex' : 'none')};
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    opacity: 0.05;
    border-radius: 8px;
    z-index: 1;
  }
`;
