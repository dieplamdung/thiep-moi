import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import { Cursor } from '@/components/atoms/typography';
import Typography from '@/components/atoms/typography/Typography';

import { CardOnboardingProps } from './index';

const CardOnboarding: React.FC<CardOnboardingProps> = ({
  className,
  onSelect,
  isSelect = false,
  variant = 'horizontal',
  title,
  description,
  descriptionInfo,
  cursor = 'pointer',
  typeIcon = 'fund_type',
}) => {
  return (
    <StyleCardOnboarding
      className={clsxm(
        'flex rounded-[16px] border-[2px] border-solid border-transparent p-[24px] shadow-cart_shadow hover:shadow-data_hover',
        isSelect && ['border-neutral-400'],
        variant === 'vertical' && ['flex-col'],
        className
      )}
      onClick={() => onSelect?.()}
      cursor={`${cursor}`}
    >
      <div className='flex items-center'>
        <Icons typeicon={typeIcon} />
        {variant === 'vertical' && (
          <Typography
            variant='h3'
            cursor={cursor as Cursor}
            className={clsxm('ml-[16px] hidden sm:flex')}
          >
            {title}
          </Typography>
        )}
      </div>
      <div
        className={clsxm(
          'ml-[28px] flex flex-col',
          variant === 'vertical' && ['ml-[0px] mt-[24px] sm:mt-[16px]']
        )}
      >
        <Typography
          variant='h3'
          cursor={cursor as Cursor}
          className={clsxm('flex', variant === 'vertical' && [' sm:hidden'])}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant='b1r'
            className={clsxm(
              'mt-[8px] sm:mt-[0px]',
              variant === 'horizontal' && ['sm:mt-[8px]']
            )}
            cursor={cursor as Cursor}
          >
            {description}
          </Typography>
        )}
        {descriptionInfo && (
          <Typography
            variant='b2m'
            className='mt-[8px] text-neutral-400'
            cursor={cursor as Cursor}
          >
            {descriptionInfo}
          </Typography>
        )}
      </div>
    </StyleCardOnboarding>
  );
};

export default CardOnboarding;

const StyleCardOnboarding = styled.div<{ cursor: string }>`
  transition: all 0.3s;
  cursor: ${({ cursor }) => cursor};

  svg {
    width: 64px;
    height: 64px;
  }
`;
