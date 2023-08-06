export type AvatarProps = {
  image?: string;
  onClick?: () => void;
  className?: string;
  text?: string;
  variant?: variant;
};

type variant = 'small' | 'large';
