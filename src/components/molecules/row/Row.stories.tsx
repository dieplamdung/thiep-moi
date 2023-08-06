import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { RowProps } from '@/components/molecules/row/types';

import Row from './Row';

const meta: Meta<typeof Row> = {
  title: 'Molecules/Row',
  component: Row,
};

export default meta;
export const Default = (args: RowProps) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <Row
      {...args}
      isChecked={isCheck}
      onCheckBoxClick={() => setIsCheck(!isCheck)}
    />
  );
};

Default.args = {
  cursor: 'pointer',
  title: 'Text link',
  contentTextLink: {
    target: '_blank',
    label: 'Text link',
    href: '/',
  },
};
