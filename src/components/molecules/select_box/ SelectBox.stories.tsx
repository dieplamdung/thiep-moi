import type { Meta, StoryObj } from '@storybook/react';

import SelectBox from './SelectBox';

const meta: Meta<typeof SelectBox> = {
  title: 'Molecules/SelectBox',
  component: SelectBox,
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    // onChange: (e) => {
    //   console.dir(e);
    // },
    defaultValue: '',
    helperText: 'Helper Text',
    options: [
      { value: '1', label: 'Selection 1' },
      { value: '2', label: 'Selection 4' },
      { value: '3', label: 'Selection 3' },
      { value: '4', label: 'Disabled', disabled: true },
    ],
  },
};
