export type CardOnboardingProps = {
  className?: string;
  onSelect?: (value?: any) => void;
  variant?: 'horizontal' | 'vertical';
  isSelect?: boolean;
  title?: string;
  description?: string;
  descriptionInfo?: string;
  cursor?: string;
  typeIcon?: string;
};
