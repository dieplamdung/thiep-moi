import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { InputFieldProps } from '@/components/molecules/input_field/types';

import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Molecules/InputField',
  component: InputField,
};

export default meta;
export const Default = (args: InputFieldProps) => {
  const [value, setValue] = useState<string>('');
  return <InputField {...args} value={value} onChange={setValue} />;
};

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper Text',
};
