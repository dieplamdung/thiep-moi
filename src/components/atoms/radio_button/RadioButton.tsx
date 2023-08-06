import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { RadioButtonProps } from './index';

const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  onClick,
  isSelect = false,
  disabled = false,
}) => {
  return (
    <StyleRadioButton
      className={clsxm(
        'flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] border-[2px] border-solid border-neutral-500',
        isSelect && ['border-primary-magenta'],
        disabled && [
          'pointer-events-none border-neutral-200',
          !isSelect && ['bg-neutral-100'],
        ],
        className
      )}
      onClick={() => onClick?.(!isSelect)}
    >
      {isSelect && (
        <div
          className={clsxm(
            'h-[10px] w-[10px] rounded-[50%] bg-primary-magenta',
            disabled && ['bg-neutral-200']
          )}
        />
      )}
    </StyleRadioButton>
  );
};

export default RadioButton;

const StyleRadioButton = styled.div``;
