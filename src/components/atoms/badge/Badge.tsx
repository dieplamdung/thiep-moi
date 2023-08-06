import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { BadgeProps } from './index';

const Badge: React.FC<BadgeProps> = ({
  text,
  className,
  onClick,
  color = themes.white,
  background,
}) => {
  return (
    <StyleBadge
      className={clsxm(
        `flex w-fit items-center justify-center rounded-[100px] bg-primary-magenta p-[3px] text-white`,
        text && ['h-[16px] px-[4.5px] py-[0px]'],
        className
      )}
      onClick={() => onClick?.()}
      bg={background}
    >
      <Typography variant='label' color={color}>
        {text}
      </Typography>
    </StyleBadge>
  );
};

export default Badge;

const StyleBadge = styled.div<{ bg?: string }>`
  background-color: ${({ bg }) => bg || ''};
`;
