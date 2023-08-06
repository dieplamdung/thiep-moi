import Image from 'next/image';
import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography/Typography';

import { EmptyStateProps } from './index';

const EmptyState: React.FC<EmptyStateProps> = ({
  className,
  icon = 'empty_state',
  header,
  description,
}) => {
  return (
    <StyleEmptyState
      className={clsxm(
        'justify-center] flex w-fit flex-col items-center',
        className
      )}
    >
      {`${icon}`.includes('http') ? (
        <Image src={icon} alt='' width={80} height={80} />
      ) : (
        <Icons typeicon={icon} className='h-[80px] w-[80px]' />
      )}
      <Typography variant='h3' className='mt-[8px]'>
        {header}
      </Typography>
      <Typography variant='b1r' className='font-[300] text-neutral-300'>
        {description}
      </Typography>
    </StyleEmptyState>
  );
};

export default EmptyState;

const StyleEmptyState = styled.div``;
