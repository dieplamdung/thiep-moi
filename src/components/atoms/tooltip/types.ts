import { ReactElement } from 'react';
export type TooltipProps = {
  className?: string;
  onClick?: () => void;
  children?: ReactElement | any;
  placement?:
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  title?: string;
  description?: any;
};
