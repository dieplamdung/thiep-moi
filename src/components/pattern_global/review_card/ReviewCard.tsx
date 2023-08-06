import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Divider from '@/components/atoms/divider/Divider';
import Typography from '@/components/atoms/typography/Typography';

import Item from './components/Item';
import ItemDonor from './components/ItemDonor';
import { ReviewCardProps } from './index';

const ReviewCard: React.FC<ReviewCardProps> = ({
  className,
  title,
  titleEdit,
  isPass = false,
  titlePass,
  onClickEdit,
  isDonor = false,
  contentDonor,
  listContent,
}) => {
  return (
    <StyleReviewCard
      className={clsxm(
        'w-[100%] rounded-[16px] bg-white p-[24px] shadow-cart_shadow',
        className
      )}
    >
      {title && (
        <div className={clsxm('flex flex-col')}>
          <div className={clsxm('flex items-center justify-between')}>
            <Typography variant='h3'>{title}</Typography>
            <Typography
              variant='b2'
              className={clsxm(
                'text-primary-magenta',
                isPass && ['text-neutral-300']
              )}
              cursor={isPass ? 'default' : 'pointer'}
              onClick={() => onClickEdit?.()}
            >
              {isPass ? titlePass : titleEdit}
            </Typography>
          </div>
          <Divider width='100%' className='my-[16px] sm:my-[8px]' />
        </div>
      )}
      {isDonor && <ItemDonor {...contentDonor} />}
      <div className={clsxm('grid grid-cols-2 gap-[24px] sm:gap-[16px]')}>
        {listContent?.map((item, idex) => {
          return <Item {...item} key={idex} />;
        })}
      </div>
    </StyleReviewCard>
  );
};

export default ReviewCard;

const StyleReviewCard = styled.div``;
