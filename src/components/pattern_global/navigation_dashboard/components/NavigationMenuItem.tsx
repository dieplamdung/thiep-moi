import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Avatar from '@/components/atoms/avatar';
import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography';
import { StyleItem } from '@/components/pattern_global/navigation_dashboard/styles';

import themes from '@/styles/themes';

export type NavigationMenuProps = {
  title: string;
  className?: string;
  iconName?: string;
  href?: string;
  avatarSrc?: string;
  isActive: boolean;
  onClick?: (value?: any) => void;
  target?: string;
};

const NavigationMenuItem: React.FC<NavigationMenuProps> = ({
  title,
  className,
  isActive,
  iconName,
  avatarSrc,
  href = '',
  onClick,
  target = '',
}) => {
  return (
    <StyleItem
      className={clsxm(
        `relative gap-x-4 transition-all duration-300 before:absolute before:left-0`,
        isActive && [
          "before:top-0 before:h-full before:rounded-br-[40px] before:rounded-tr-[40px] before:border-l-4 before:border-l-primary-magenta before:content-['']",
        ],
        className
      )}
      $active={isActive}
      onClick={() => onClick?.()}
      href={href}
      target={target}
    >
      {iconName && (
        <Icons
          stroke={isActive ? themes.primary.magenta : themes.neutral['400']}
          typeicon={iconName}
        />
      )}
      {(avatarSrc || avatarSrc === '') && (
        <Avatar
          className={clsxm('flex-shrink-0', isActive && ['bg-primary-magenta'])}
          variant='small'
          text={title.trim().charAt(0)}
          image={avatarSrc}
        />
      )}
      <Typography
        variant='b1'
        className={clsxm('line-clamp-2 text-neutral-400')}
      >
        {title}
      </Typography>
    </StyleItem>
  );
};
export default NavigationMenuItem;
