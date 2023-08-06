import type { Meta } from '@storybook/react';

import ReviewCard from './ReviewCard';
import { ReviewCardProps } from './types';

const meta: Meta<typeof ReviewCard> = {
  title: 'PatternGlobal/ReviewCard',
  component: ReviewCard,
};

export default meta;

export const Default = (args: ReviewCardProps) => {
  return <ReviewCard {...args} />;
};

Default.args = {
  title: 'Title',
  titleEdit: 'Edit',
  titlePass: 'Retrieved from Singpass',
  isDonor: true,
  contentDonor: {
    label: 'Donor type',
    value: 'Joint donor',
    contentTip: {
      title: 'title',
      description: 'description',
    },
    labelDetail: 'Joint donor details',
  },
  listContent: [
    { label: 'Label', value: 'Data point' },
    { label: 'Label', value: 'Data point' },
    { label: 'Label', value: 'Data point' },
    { label: 'Label', value: 'Data point' },
    { label: 'Label', value: 'Data point' },
    { label: 'Label', value: 'Data point' },
  ],
};
