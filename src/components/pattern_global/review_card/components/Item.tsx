import React from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

export type TypeItem = {
  label: string;
  value: string;
};

export default function Item(props: TypeItem) {
  const { label, value } = props;
  return (
    <div className={clsxm('flex w-[100%] flex-col break-words')}>
      <Typography variant='b2m' className='text-neutral-400 '>
        {label}
      </Typography>
      <Typography variant='b1' className='break-words'>
        {value}
      </Typography>
    </div>
  );
}
