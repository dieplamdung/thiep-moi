import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { DividerProps } from './index';

const Divider: React.FC<DividerProps> = ({
  background,
  className,
  width = '1px',
  height = '1px',
}) => {
  return (
    <StyleDivider
      className={clsxm('bg-neutral-200 ', className)}
      bg={background}
      width={width}
      height={height}
    />
  );
};

export default Divider;

const StyleDivider = styled.div<{
  width?: string;
  height?: string;
  bg?: string;
}>`
  background-color: ${({ bg }) => bg || ''};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
`;
