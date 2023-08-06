import { ItemStepProps } from '@/components/atoms/stepper/ItemStep';

export type NavigationPageProps = {
  className?: string;
  listStep: ItemStepProps[];
  saveAndExitString?: string;
  haveAccountString?: string;
  linkAlready?: string;
  isMobile?: boolean;
  onSave?: () => void;
};
