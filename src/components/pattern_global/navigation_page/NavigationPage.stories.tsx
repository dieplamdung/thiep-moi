import type { Meta } from '@storybook/react';

import NavigationPage from './NavigationPage';
import { NavigationPageProps } from './types';

const meta: Meta<typeof NavigationPage> = {
  title: 'PatternGlobal/NavigationPage',
  component: NavigationPage,
};

export default meta;
export const Default = (args: NavigationPageProps) => {
  return (
    <div className='flex flex-col'>
      <NavigationPage {...args} />
      <div className='h-[150vh]'>long component</div>
    </div>
  );
};

Default.args = {
  listStep: [
    {
      defaultStep: 3,
      currentStep: 1,
    },
  ],
};
