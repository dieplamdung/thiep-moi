import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { TextOTPProps } from './index';

const TextOTP: React.FC<TextOTPProps> = ({ className, onClick }) => {
  return (
    <StyleTextOTP
      className={clsxm('', className)}
      onClick={() => onClick?.()}
    ></StyleTextOTP>
  );
};

export default TextOTP;

const StyleTextOTP = styled.div``;
