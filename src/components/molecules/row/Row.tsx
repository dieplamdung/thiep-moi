import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Checkbox from '@/components/atoms/checkbox/Checkbox';
import Icons from '@/components/atoms/icons/Icons';
import { Target } from '@/components/atoms/text_links';
import TextLink from '@/components/atoms/text_links/TextLink';
import { Cursor } from '@/components/atoms/typography';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { RowProps } from './index';

const Row: React.FC<RowProps> = ({
  className,
  onClick,
  typeRow = 'text',
  disabled = false,
  isChecked = false,
  onCheckBoxClick,
  contentTextLink,
  cursor = 'auto',
  title,
}) => {
  return (
    <StyleRow
      className={clsxm(
        'flex items-center  justify-between rounded-[16px] px-[24px] py-[16px] shadow-cart_shadow',
        className
      )}
      onClick={() => onClick?.()}
      cursor={cursor}
    >
      <div className={clsxm('flex grow items-center')}>
        <div
          className={clsxm(
            'flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-neutral-50'
          )}
        >
          <Icons
            typeicon='icon_document'
            stroke={disabled ? themes.neutral[200] : ''}
          />
        </div>
        {title && (
          <Typography
            variant={
              ['text', 'checkbox', 'chevron', 'text_link'].includes(typeRow)
                ? typeRow === 'checkbox'
                  ? 'button'
                  : 'b1r'
                : 'b1'
            }
            className={clsxm('ml-[16px]')}
            color={
              disabled
                ? themes.neutral[200]
                : typeRow === 'checkbox'
                ? themes.primary.magenta
                : ''
            }
            cursor={cursor}
          >
            {title}
          </Typography>
        )}
      </div>
      {typeRow === 'checkbox' && (
        <Checkbox
          type='small'
          isChecked={isChecked}
          isDisable={disabled}
          onClick={() => onCheckBoxClick?.()}
        />
      )}
      {typeRow === 'text_link' && (
        <TextLink
          target={contentTextLink?.target as Target}
          href={contentTextLink?.href || ''}
          type='medium'
          className='leading-[16px]'
          isShowIconLeft={false}
          isShowIconRight={false}
          disabled={disabled}
        >
          {contentTextLink?.label}
        </TextLink>
      )}
      {typeRow === 'chevron' && (
        <Icons
          typeicon='arrow-right'
          fill={disabled ? themes.neutral[200] : ''}
        />
      )}
    </StyleRow>
  );
};

export default Row;

const StyleRow = styled.div<{ cursor: Cursor }>`
  cursor: ${({ cursor }) => cursor};
`;
