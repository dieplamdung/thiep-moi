import { Tooltip as ComponentTooltip } from 'antd';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { TooltipProps } from './index';

const Tooltip: React.FC<TooltipProps> = ({
  className,
  onClick,
  children,
  placement = 'top',
  title,
  description,
}) => {
  return (
    <StyleWrapperTooltip
      onClick={() => onClick?.()}
      className={clsxm(className)}
    >
      <ComponentTooltip
        placement={placement}
        color={themes.neutral[500]}
        // visible
        title={
          <StyleWrapperContent
            className={clsxm('rounded-[8px] bg-neutral-500 px-[12px] py-[8px]')}
          >
            {title && (
              <Typography
                variant='b2'
                className='mb-[2px] break-words text-white'
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant='b2m' className='break-words text-white'>
                {description}
              </Typography>
            )}
          </StyleWrapperContent>
        }
        overlayInnerStyle={{ padding: '0px' }}
      >
        <GlobalStyle />
        {children}
      </ComponentTooltip>
    </StyleWrapperTooltip>
  );
};

export default Tooltip;

const GlobalStyle = createGlobalStyle<{ color?: string }>`
.ant-tooltip-open{
  width: fit-content !important;
  /* display: block !important; */
}
.ant-tooltip-arrow::before{
  background-color: transparent !important;
}
.ant-tooltip-arrow{
  width: 24px !important;
}
    .ant-tooltip-arrow::after{
      width: 20px !important;
      height: 20px !important;
      background-color: ${themes.neutral[500]} !important;
      bottom: -4px !important;
    } 
`;

const StyleWrapperTooltip = styled.div`
  display: block;
  width: fit-content;
`;

const StyleWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 253px;
`;
