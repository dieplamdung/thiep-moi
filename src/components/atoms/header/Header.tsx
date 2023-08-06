import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { HeaderProps } from './index';

const Header: React.FC<HeaderProps> = ({
  className,
  onClick,
  title,
  description,
  variant = 'h1',
}) => {
  return (
    <StyleHeader
      className={clsxm('item-center flex w-fit flex-col ', className)}
      onClick={() => onClick?.()}
    >
      <Typography variant={variant === 'h1' ? 'h1' : 'h2'}>{title}</Typography>
      {description && (
        <Typography
          variant={variant === 'h1' ? 'h3r' : 'b1r'}
          className={clsxm('mt-[8px] text-neutral-400')}
        >
          {description}
        </Typography>
      )}
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.div``;
