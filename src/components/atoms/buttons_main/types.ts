type Variant = 'primary' | 'secondary';
export type ButtonProps = {
  variant: Variant;
  disabled?: boolean;
  onClick?: () => void;
  isShowIconLeft?: boolean;
  isShowIconRight?: boolean;
  className?: string;
} & React.ComponentPropsWithRef<'button'>;
