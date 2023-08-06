export type SelectBoxProps = {
  className?: string;
  isError?: boolean;
  label?: string;
  placeholder?: string;
  onChange?: (value: any) => void;
  helperText?: string;
  options: Option[];
  defaultValue?: string;
  defaultOpen?: boolean;
};

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};
