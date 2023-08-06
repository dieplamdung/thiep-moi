import { BellNotifyProps } from '@/components/atoms/bell_nitify';

export type MobileTopNavProps = {
  className?: string;
  onMenuClick?: () => void;
  onBellClick?: () => void;
} & BellNotifyProps;
