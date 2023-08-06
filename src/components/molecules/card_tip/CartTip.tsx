import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography/Typography';

import { CartTipProps } from './index';

const CartTip: React.FC<CartTipProps> = ({
  className,
  title,
  description,
  typeIcon = 'icon_tip',
}) => {
  return (
    <StyleCartTip
      className={clsxm(
        'flex flex-col rounded-[16px] p-[16px] shadow-cart_shadow',
        className
      )}
    >
      <div className='flex items-center'>
        <Icons typeicon={typeIcon} />
        <Typography variant='b1' className='ml-[16px]'>
          {title}
        </Typography>
      </div>

      {description && (
        <div className='mt-[12px] text-[16px] font-[400] leading-[24px] text-neutral-500'>
          {typeof description === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: description as string }} />
          ) : (
            description
          )}
        </div>
      )}
    </StyleCartTip>
  );
};

export default CartTip;

const StyleCartTip = styled.div``;
