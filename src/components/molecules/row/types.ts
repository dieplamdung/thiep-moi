import { Cursor } from '@/components/atoms/typography';

export type RowProps = {
  className?: string;
  onClick?: () => void;
  typeRow?: 'text' | 'checkbox' | 'text_link' | 'chevron';
  disabled?: boolean;
  isChecked?: boolean;
  onCheckBoxClick?: () => void;
  title?: string;
  cursor?: Cursor;
  contentTextLink?: {
    href?: string;
    target?: string;
    label?: string;
  };
};
