import type { Meta, StoryObj } from '@storybook/react';

import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Atom/Stepper',
  component: Stepper,
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    listStep: [
      {
        defaultStep: 10,
        currentStep: 1,
      },
      {
        defaultStep: 6,
        currentStep: 3,
        hiddenText: true,
      },
      {
        defaultStep: 10,
        currentStep: 4,
      },
      {
        defaultStep: 5,
        currentStep: 5,
      },
    ],
  },
};
