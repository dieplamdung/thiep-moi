import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { ChipProps } from './index';

const Chip: React.FC<ChipProps> = ({
  className,
  onRemove,
  label,
  isSelect = false,
  isDisable = false,
}) => {
  return (
    <StyleChip
      className={clsxm(
        'flex w-fit items-center justify-center rounded-[12px] bg-neutral-100 px-[10px] py-[4px]',
        isSelect && ['bg-secondary-dark_turquoise'],
        isDisable && ['pointer-events-none bg-neutral-100'],
        className
      )}
    >
      <Typography
        variant='b1'
        className={clsxm(
          'text-secondary-dark_turquoise',
          isSelect && ['text-white'],
          isDisable && ['pointer-events-none text-neutral-200']
        )}
      >
        {label}
      </Typography>
      {isSelect && (
        <Icons
          typeicon='close_circle'
          className='ml-[8px] cursor-pointer'
          fill={isDisable ? themes.neutral[200] : themes.white}
          onClick={() => onRemove?.()}
        />
      )}
    </StyleChip>
  );
};

export default Chip;

const StyleChip = styled.div`
  transition: all 0.2s;
`;
