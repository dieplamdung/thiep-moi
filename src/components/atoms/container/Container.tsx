import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { ContainerProps } from './index';

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <StyleContainer className={clsxm('flex w-[100%] justify-center')}>
      <div className={clsxm('w-[100%] max-w-[1024px] px-[16px]', className)}>
        {children}
      </div>
    </StyleContainer>
  );
};

export default Container;

const StyleContainer = styled.div``;
