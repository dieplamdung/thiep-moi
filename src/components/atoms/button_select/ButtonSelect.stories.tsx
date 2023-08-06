import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { ButtonSelectProps } from '@/components/atoms/button_select/types';

import ButtonSelect from './ButtonSelect';

const meta: Meta<typeof ButtonSelect> = {
  title: 'Atom/ButtonSelect',
  component: ButtonSelect,
};

export default meta;

export const Default = (args: ButtonSelectProps) => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  return (
    <ButtonSelect
      {...args}
      onClick={() => setIsSelect(!isSelect)}
      isSelect={isSelect}
    />
  );
};

Default.args = {
  children: 'Button select',
};
