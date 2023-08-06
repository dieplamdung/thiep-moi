import type { Meta, StoryObj } from '@storybook/react';

import clsxm from '@/lib/clsxm';

import TextLink from './TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'Atom/TextLink',
  component: TextLink,
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Primary: Story = {
  args: {
    children: 'TextLink',
    target: '_blank',
    href: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
    disabled: true,
  },
};

const args = {
  href: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
};

export const Secondary: Story = {
  render: () => (
    <div className={clsxm('flex bg-[#000] p-[14px]')}>
      <TextLink variant='secondary' {...args} target='_blank'>
        TextLink
      </TextLink>
    </div>
  ),
};
