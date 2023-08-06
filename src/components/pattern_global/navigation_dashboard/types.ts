import { ProfileDropdownProps } from '@/components/molecules/profile_dropdown';

export type NavigationDashboardProps = {
  menu: MenuProps[];
  isOpen?: boolean;
  className?: string;
  activeLink?: string;
  logOutLabel?: string;
  logOutIconName?: string;
  onMenuClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onMenuClose?: () => void;
  onLogOutClick?: () => void;
} & Partial<ProfileDropdownProps>;

export type MenuProps = {
  groupTitle: string;
  menuItems: MenuItemProps[];
};

export type MenuItemProps = {
  title: string;
  iconName: string;
  href?: string;
};
