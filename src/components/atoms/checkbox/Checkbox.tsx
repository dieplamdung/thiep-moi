import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';

import themes from '@/styles/themes';

import { CheckboxProps } from './index';

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  onClick,
  type = 'large',
  isChecked,
  isDisable,
}) => {
  return (
    <StyleCheckbox
      className={clsxm(
        'flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[2px] border-[2px] border-solid border-neutral-500 bg-white',
        type === 'small' && ['h-[24px] w-[24px]'],
        isChecked && ['border-primary-magenta bg-primary-magenta'],
        isDisable && ['pointer-events-none border-neutral-200 bg-neutral-100'],
        isDisable && isChecked && ['border-neutral-100'],
        className
      )}
      onClick={(e: any) => {
        e?.stopPropagation();
        onClick?.();
      }}
    >
      {isChecked && (
        <Icons
          typeicon='check_box'
          stroke={isDisable ? themes.neutral[200] : themes.white}
          className={clsxm(
            'h-[14px] w-[20px]',
            type === 'small' && ['h-[10px] w-[14px]']
          )}
        />
      )}
    </StyleCheckbox>
  );
};

export default Checkbox;

const StyleCheckbox = styled.div`
  transition: all 0.2s;
`;
