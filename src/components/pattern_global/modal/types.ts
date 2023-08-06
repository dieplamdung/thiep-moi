export type ModalProps = {
  className?: string;
  onClickButton?: () => void;
  variant: ModalContentType;
  header?: string;
  title?: string;
  description?: any;
  open?: boolean;
  onClose?: () => void;
  titleButton?: string;
  onScrollBottom?: (value?: any) => void;
  isScrollButtonDefault?: boolean;
};

export type ModalContentType = 'scroll' | 'fixed';
