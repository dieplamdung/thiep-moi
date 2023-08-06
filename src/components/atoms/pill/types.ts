export type PillProps = {
  className?: string;
  label?: string;
  color?: string;
  variant?: Variant;
};

type Variant =
  | 'received'
  | 'earmarked'
  | 'disbursed'
  | 'demo'
  | 'success'
  | 'pending'
  | 'error';
