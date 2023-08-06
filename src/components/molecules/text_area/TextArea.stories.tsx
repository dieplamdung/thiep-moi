import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { TextAreaProps } from '@/components/molecules/text_area/types';

import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Molecules/TextArea',
  component: TextArea,
};

export default meta;

export const Default = (args: TextAreaProps) => {
  const [value, setValue] = useState<string>('');
  return <TextArea {...args} value={value} onChange={setValue} />;
};

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper Text',
};
