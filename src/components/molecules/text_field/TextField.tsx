import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { TextFieldProps } from './index';

const TextField: React.FC<TextFieldProps> = ({
  className,
  isError = false,
  label,
  placeholder,
  value,
  onChange,
  helperText,
}) => {
  return (
    <StyleTextField className={clsxm('flex w-[100%] flex-col', className)}>
      {label && (
        <Typography
          variant='b2m'
          className={clsxm('mb-[8px] text-neutral-400')}
        >
          {label}
        </Typography>
      )}
      <StyleInput
        className={clsxm(
          'h-[56px] w-[100%] bg-white px-[16px] py-[8px] focus:outline-none',
          [
            'rounded-[8px] border-[1px] border-solid border-neutral-100 focus-visible:border-secondary-dark_turquoise ',
          ],
          ['leading-[24px] text-neutral-500 placeholder-neutral-300'],
          isError && [
            'border-semantics-error bg-semantics-error_5 text-semantics-error placeholder-semantics-error  focus-visible:border-semantics-error',
          ]
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => onChange?.(e?.target?.value)}
      ></StyleInput>
      {helperText && (
        <Typography
          variant='text'
          className={clsxm(
            'mt-[8px] text-neutral-400',
            isError && ['text-semantics-error']
          )}
        >
          {helperText}
        </Typography>
      )}
    </StyleTextField>
  );
};

export default TextField;

const StyleTextField = styled.div``;

const StyleInput = styled.input`
  font-size: 16px;
  font-weight: 400;
`;
