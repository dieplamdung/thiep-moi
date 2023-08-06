import type { Meta, StoryObj } from '@storybook/react';

import CardOnboarding from './CardOnboarding';

const meta: Meta<typeof CardOnboarding> = {
  title: 'Molecules/CardOnboarding',
  component: CardOnboarding,
};

export default meta;
type Story = StoryObj<typeof CardOnboarding>;

export const Default: Story = {
  args: {
    title: 'Type of donor',
    description: 'Description',
    descriptionInfo: 'Additional information',
    typeIcon: 'solr_donor',
  },
};
