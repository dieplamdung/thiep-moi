import { DonorType } from './components/ItemDonor';

export type ReviewCardProps = {
  className?: string;
  onClick?: () => void;
  title?: string;
  titleEdit?: string;
  isPass?: boolean;
  titlePass?: string;
  onClickEdit?: (value?: any) => void;
  isDonor?: boolean;
  contentDonor?: DonorType;
  listContent?: {
    label: string;
    value: string;
  }[];
};
