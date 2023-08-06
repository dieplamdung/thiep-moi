export type ProfileDropdownProps = {
  className?: string;
  isMobile?: boolean;
  activeFund: FundsProps;
  funds: FundsProps[];
  closeOnSelect?: boolean;
  onProfileClick?: () => void;
  onFundClick?: (fund: FundsProps) => void;
  onCreateFundClick?: () => void;
};

export type FundsProps = {
  id: string;
  fundName: string;
  avatarSrc?: string;
};
