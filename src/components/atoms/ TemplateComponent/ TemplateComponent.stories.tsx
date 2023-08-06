import type { Meta, StoryObj } from '@storybook/react';

import TemplateComponent from './ TemplateComponent';

const meta: Meta<typeof TemplateComponent> = {
  // title: 'Atom/TemplateComponent',
  component: TemplateComponent,
};

export default meta;
type Story = StoryObj<typeof TemplateComponent>;

export const Default: Story = {
  args: {},
};
