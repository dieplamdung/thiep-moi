import type { Meta } from '@storybook/react';

import TemplateComponent from './ TemplateComponent';
import { TemplateComponentProps } from './types';

const meta: Meta<typeof TemplateComponent> = {
  // title: 'Molecules/TemplateComponent',
  component: TemplateComponent,
};

export default meta;
export const Default = (args: TemplateComponentProps) => {
  return <TemplateComponent {...args} />;
};

Default.args = {};
