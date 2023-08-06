import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { TextAreaProps } from './index';

const TextArea: React.FC<TextAreaProps> = ({
  className,
  isError = false,
  label,
  placeholder,
  value,
  onChange,
  helperText,
}) => {
  return (
    <StyleTextArea className={clsxm('flex w-[100%] flex-col', className)}>
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
          'min-h-[104px] w-[100%] bg-white p-[16px]',
          ['rounded-[8px] border-[1px] border-solid border-neutral-100'],
          [
            'border p-2 focus:border-secondary-dark_turquoise focus:outline-none',
          ],
          ['leading-[24px] text-neutral-500 placeholder-neutral-300'],
          isError && [
            'border-semantics-error bg-semantics-error_5 text-semantics-error placeholder-semantics-error focus-visible:border-semantics-error',
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
    </StyleTextArea>
  );
};

export default TextArea;

const StyleTextArea = styled.div``;

const StyleInput = styled.textarea`
  font-size: 16px;
  font-weight: 400;
  box-shadow: none !important;
`;
