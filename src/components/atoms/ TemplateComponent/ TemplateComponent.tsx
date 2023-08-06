import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { TemplateComponentProps } from './index';

const TemplateComponent: React.FC<TemplateComponentProps> = ({
  className,
  onClick,
}) => {
  return (
    <StyleTemplateComponent
      className={clsxm('', className)}
      onClick={() => onClick?.()}
    ></StyleTemplateComponent>
  );
};

export default TemplateComponent;

const StyleTemplateComponent = styled.div``;
