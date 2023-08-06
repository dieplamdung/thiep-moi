import Link from 'next/link';
import React, { useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import { PropsLink } from '@/components/atoms/text_links/types';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

const TextLink: React.FC<PropsLink> = ({
  href,
  className,
  children,
  replace,
  scroll,
  shallow,
  passHref,
  isShowIconRight = true,
  prefetch,
  target = '',
  onClick,
  variant = 'primary',
  type = 'large',
  disabled,
  isShowIconLeft = true,
  ...res
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <StyleLink
      href={disabled ? '#' : href}
      target={target}
      onClick={(e: any) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick?.();
      }}
      disabled={`${disabled}`}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      type={type}
      {...res}
      className={clsxm(
        'flex min-h-[24px] w-fit items-center pl-[6px] pr-[8px]',
        className
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isShowIconLeft && (
        <Icons
          typeicon='ellipse'
          className={clsxm(
            'mr-[14px]',
            type === 'medium' && ['mr-[10px]'],
            'icon-ellipse'
          )}
          stroke={
            disabled
              ? themes.neutral[200]
              : variant === 'secondary'
              ? themes.white
              : variant === 'primary' && isHover
              ? themes.primary.magenta_hover
              : variant === 'primary'
              ? themes.primary.magenta
              : themes.neutral[500]
          }
        />
      )}
      <Typography
        variant='text'
        className={clsxm(
          'text-[16px] font-[700]',
          variant === 'primary' && [
            'text-primary-magenta hover:text-primary-magenta_hover',
          ],
          variant === 'secondary' && ['text-white'],
          type === 'medium' && ['text-[14px]'],
          isHover && !disabled && 'underline',
          disabled && ['pointer-events-none text-neutral-200']
        )}
        cursor={disabled ? 'auto' : 'pointer'}
      >
        {children}
      </Typography>
      {isShowIconRight && (
        <Icons
          typeicon='arrow-right'
          className={clsxm(
            'ml-[18px]',
            type === 'medium' && ['ml-[16px]'],
            'icon-right'
          )}
          fill={
            disabled
              ? themes.neutral[200]
              : variant === 'secondary'
              ? themes.white
              : variant === 'primary' && isHover
              ? themes.primary.magenta_hover
              : variant === 'primary'
              ? themes.primary.magenta
              : themes.neutral[500]
          }
        />
      )}
    </StyleLink>
  );
};

export default TextLink;

const StyleLink = styled(Link)<{ disabled: string }>`
  cursor: ${({ disabled }) => (disabled === 'true' ? 'auto' : 'pointer')};
`;
