import { ReactNode } from 'react';
type Variant = 'primary' | 'secondary';
type Type = 'large ' | 'medium';
export type Target = '_self' | '_blank' | '_parent' | '_top';

export type PropsLink = {
  href: string;
  replace?: boolean | undefined;
  scroll?: boolean | undefined;
  shallow?: boolean | undefined;
  passHref?: boolean | undefined;
  prefetch?: boolean | undefined;
  target?: Target;
  onClick?: () => void;
  children?: string | ReactNode;
  variant?: Variant;
  disabled?: boolean;
  type?: Type;
  isShowIconLeft?: boolean;
  isShowIconRight?: boolean;
  className?: string;
};
