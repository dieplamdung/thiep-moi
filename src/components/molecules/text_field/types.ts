export type TextFieldProps = {
  className?: string;
  isError?: boolean;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: any) => void;
  helperText?: string;
};
