import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { InputFieldProps } from './index';

const InputField: React.FC<InputFieldProps> = ({
  className,
  isError = false,
  label,
  placeholder,
  value,
  onChange,
  helperText,
  focusInput = false,
  symbol = 'S$',
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');
  const refInput = useRef<any>();

  useEffect(() => {
    if (focusInput && refInput?.current) {
      const input = refInput.current;
      input.focus();
    }
  }, [focusInput]);

  useEffect(() => {
    if (value) {
      const newValue = `${value}`.split('.');
      const fistValue = newValue[0];
      const lastValue = newValue[1];

      const numericValue = fistValue.replace(/[^0-9]/g, '');
      const formattedValue = Number(numericValue).toLocaleString();
      setValueInput(
        `${formattedValue}${
          newValue.length > 1 ? `.${lastValue.substring(0, 2)}` : ''
        }`
      );
    } else {
      setValueInput('');
    }
  }, [value]);

  const handleChangeValue = (event: any) => {
    const inputValue = event.target.value;
    if (!inputValue) {
      onChange?.('');
      return;
    }
    onChange?.(inputValue);
  };

  const handleKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (keyValue === '.' && value && !`${value}`.includes('.')) {
      return;
    }
    if (!/^\d$/.test(keyValue)) {
      event.preventDefault();
    }
  };

  const formatValueInput = (valueIp: string) => {
    const newValue = `${valueIp}`.split('.');
    const fistValue = newValue[0];
    const lastValue = `${newValue[1] || 0}`;
    if (Number(lastValue) > 0) {
      return valueIp;
    }
    if (Number(lastValue) === 0 && !isFocus && valueIp) {
      return `${fistValue}.00`;
    }

    if (Number(lastValue) === 0 && isFocus && valueIp.includes('.00')) {
      return `${fistValue}`;
    }
    return valueIp;
  };

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
      <div
        className={clsxm(
          'flex w-[100%] min-w-[274px] items-center border-b-[1.5px] border-neutral-200 sm:min-w-[326px]',
          isFocus && ['border-secondary-dark_turquoise'],
          isError && ['border-semantics-error']
        )}
      >
        <Typography variant='h1' className={clsxm('mr-[4px]')}>
          {symbol}
        </Typography>
        <StyleInput
          value={formatValueInput(`${valueInput}`)}
          placeholder={placeholder}
          className={clsxm(
            'h-[48px] w-[100%] text-[40px] font-[700] text-neutral-500 placeholder-neutral-300',
            ['sm:h-[24px] sm:text-[28px] sm:leading-[36px]']
          )}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleChangeValue}
          onKeyPress={handleKeyPress}
          onChangeCapture={handleChangeValue}
          ref={refInput}
        />
      </div>

      {helperText && (
        <Typography
          variant='b2m'
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

export default InputField;

const StyleTextField = styled.div``;

const StyleInput = styled.input`
  /* font-size: 40px;
  font-weight: 700; */
  border: none;
  &:focus {
    outline: none;
  }
`;
