import type { Meta } from '@storybook/react';

import { ContainerProps } from '@/components/atoms/container/types';
import NavigationPage from '@/components/pattern_global/navigation_page/NavigationPage';

import Container from './Container';

const meta: Meta<typeof Container> = {
  title: 'Atom/Container',
  component: Container,
};

export default meta;

export const Default = (args: ContainerProps) => {
  return <Container {...args} className='md:px-[0px]' />;
};

Default.args = {
  children: (
    <NavigationPage
      listStep={[
        {
          defaultStep: 3,
          currentStep: 1,
        },
      ]}
    />
  ),
};
