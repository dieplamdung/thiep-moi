import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { TextFieldProps } from '@/components/molecules/text_field/types';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Molecules/TextField',
  component: TextField,
};

export default meta;

export const Default = (args: TextFieldProps) => {
  const [value, setValue] = useState<string>('');
  return <TextField {...args} value={value} onChange={setValue} />;
};

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper Text',
};
