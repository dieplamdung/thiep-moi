import type { Meta, StoryObj } from '@storybook/react';

import CartTip from './CartTip';

const meta: Meta<typeof CartTip> = {
  title: 'Molecules/CartTip',
  component: CartTip,
};

export default meta;
type Story = StoryObj<typeof CartTip>;

export const Default: Story = {
  args: {
    title: 'Tips Title',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sed non aliquam tincidunt ac. Interdum ante diam risus scelerisque suspendisse. Ullamcorper risus sed sit non dignissim tempus. Varius elementum faucibus in volutpat euismod non. Fringilla libero sit quam at massa convallis in maecenas sit. Sed aliquam tortor ultrices eleifend morbi purus. Turpis nisl turpis pellentesque scelerisque. Ante urna sed morbi nullam at vel a nunc. Quis facilisis lacus aliquet magna amet. Massa volutpat lacus id malesuada nisi facilisis aliquam egestas. Commodo non lorem dolor arcu nunc est dolor.',
  },
};
