export type CheckboxProps = {
  className?: string;
  onClick?: () => void;
  type?: TypeCheckBox;
  isChecked?: boolean;
  isDisable?: boolean;
};

type TypeCheckBox = 'small' | 'large';
