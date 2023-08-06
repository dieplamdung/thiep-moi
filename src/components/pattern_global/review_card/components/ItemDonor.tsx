import React from 'react';

import clsxm from '@/lib/clsxm';

import Divider from '@/components/atoms/divider/Divider';
import Icons from '@/components/atoms/icons/Icons';
import { TooltipProps } from '@/components/atoms/tooltip';
import Tooltip from '@/components/atoms/tooltip/Tooltip';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

export type DonorType = {
  label?: string;
  value?: string;
  labelDetail?: string;
  contentTip?: TooltipProps;
};

export default function ItemDonor(props: DonorType) {
  const { label, value, contentTip, labelDetail } = props;
  return (
    <div className={clsxm('flex flex-col')}>
      <div className='flex items-center'>
        <Typography variant='b2m' className='text-neutral-400'>
          {label}
        </Typography>
        <Tooltip {...contentTip} className='ml-[6px]'>
          <Icons
            typeicon='info'
            className='w-[13px]'
            fill={themes.primary.magenta}
          />
        </Tooltip>
      </div>
      <Typography variant='b1'>{value}</Typography>
      <Divider width='100%' className='my-[16px] sm:my-[8px]' />
      {labelDetail && (
        <Typography
          variant='b2'
          className='mb-[16px] text-neutral-400 sm:mb-[8px]'
        >
          {labelDetail}
        </Typography>
      )}
    </div>
  );
}
