import { ReactNode } from 'react';

export type ButtonSelectProps = {
  className?: string;
  onClick?: () => void;
  children?: string | ReactNode;
  isSelect?: boolean;
};
