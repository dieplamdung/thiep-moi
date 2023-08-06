import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { SelectBoxProps } from './index';

const { Option } = Select;

const SelectBox: React.FC<SelectBoxProps> = ({
  className,
  isError = false,
  label,
  placeholder,
  onChange,
  helperText,
  options = [],
  defaultValue,
  defaultOpen = false,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(defaultOpen);

  useEffect(() => {
    setIsFocus(defaultOpen);
  }, [defaultOpen]);

  return (
    <div className={clsxm('flex w-[100%] flex-col', className)}>
      {label && (
        <Typography
          variant='b2m'
          className={clsxm('mb-[8px] text-neutral-400')}
        >
          {label}
        </Typography>
      )}
      <StyleSelect
        suffixIcon={
          <StyleIconArrow focus={`${isFocus}`}>
            <Icons typeicon='icon_arrow_select' />
          </StyleIconArrow>
        }
        defaultValue={defaultValue || null}
        placeholder={placeholder}
        onChange={(value: any) => {
          onChange?.(value);
        }}
        onDropdownVisibleChange={(focus: boolean) => setIsFocus(focus)}
        focus={`${isFocus}`}
        error={`${isError}`}
        dropdownRender={(menu: any) => <StyleOption>{menu}</StyleOption>}
        open={isFocus}
      >
        {options.map((item) => {
          return (
            <Option
              value={item.value}
              disabled={item?.disabled || false}
              key={item.value}
            >
              {item.label}
            </Option>
          );
        })}
      </StyleSelect>
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
      <GlobalStyle />
    </div>
  );
};

export default SelectBox;

const StyleSelect = styled(Select)<{ focus: string; error: string }>`
  width: 100%;
  height: 56px;
  display: flex;

  .ant-select-selector {
    height: 100% !important;
    box-shadow: none !important;
    border-color: ${({ error, focus }) =>
      error === 'true'
        ? `${themes.semantics.error} !important`
        : focus === 'true'
        ? `${themes.secondary.dark_turquoise} !important`
        : `${themes.neutral[100]} !important`};
    /* ${themes.secondary.dark_turquoise} !important; */
    /* ${themes.neutral[100]} !important; */
    padding: 0px !important;
    overflow: hidden;

    .ant-select-selection-item {
      height: 100%;
      padding: 16px 44px 16px 16px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${({ error }) =>
        error === 'true'
          ? `${themes.semantics.error}`
          : `${themes.neutral[500]}`};
      background-color: ${({ error }) =>
        error === 'true'
          ? `${themes.semantics.error_5} !important`
          : `${themes.white} !important`};
    }

    .ant-select-selection-placeholder {
      display: flex;
      align-items: center;
      padding: 0px 16px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${({ error }) =>
        error === 'true'
          ? `${themes.semantics.error}`
          : `${themes.neutral[500]}`};
    }

    .ant-select-selection-placeholder {
      color: ${() => themes.neutral[300]};
    }
  }

  &:hover {
    .ant-select-selector {
      border-color: ${({ error }) =>
        error === 'true'
          ? `${themes.semantics.error} !important`
          : `${themes.secondary.dark_turquoise} !important`};
    }
  }
`;

const StyleIconArrow = styled.div<{ focus: string }>`
  transform: ${({ focus }) =>
    focus === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: all 0.2s;
`;

const StyleOption = styled.div`
  .ant-select-item {
    padding: 12px 16px;
    color: ${themes.neutral[500]};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 0px;
    &:hover {
      background-color: ${themes.neutral[100]};
    }
  }

  .ant-select-item-option-active {
    background-color: ${themes.neutral[50]} !important;
  }

  .ant-select-item-option-selected {
    color: ${themes.neutral[500]}!important;
    font-weight: 500 !important;
    background-color: ${themes.neutral[100]} !important;
  }

  .ant-select-item-option-disabled {
    color: ${themes.neutral[200]};
    background-color: ${themes.white} !important;
  }
`;

const GlobalStyle = createGlobalStyle<{ color?: string }>`
  .ant-select-dropdown{
   padding: 0px;
  }
`;
