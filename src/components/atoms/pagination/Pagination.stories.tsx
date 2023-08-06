import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { PaginationProps } from '.';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Atom/Pagination',
  component: Pagination,
};

export default meta;

export const Default = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onSelectPage={setCurrentPage}
    />
  );
};

Default.args = {
  totalPage: 10,
  currentPage: 1,
};
