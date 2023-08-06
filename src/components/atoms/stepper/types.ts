import { ItemStepProps } from './ItemStep';

export type StepperProps = {
  className?: string;
  onClick?: () => void;
  listStep: ItemStepProps[];
};
