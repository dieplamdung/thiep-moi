import Link from 'next/link';
import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { FooterProps } from './index';

const Footer: React.FC<FooterProps> = ({
  className,
  copyRight,
  listLinkFooter,
}) => {
  return (
    <StyleFooter
      className={clsxm(
        'flex w-[100%] items-center justify-between  bg-neutral-100 px-[40px] py-[24px]',
        'md:flex-col md:items-start md:gap-[24px] md:px-[24px]',
        className
      )}
    >
      <Typography
        variant='text'
        className='mr-[24px] text-neutral-300 md:mr-[0px]'
      >
        {copyRight}
      </Typography>
      <div
        className={clsxm('flex gap-[24px]', 'md:gap-[16px]', 'ss:gap-[8px]')}
      >
        {listLinkFooter.map((item, index) => {
          return (
            <Link
              href={item.href || ''}
              target={item.target || '_blank'}
              key={index}
            >
              <Typography
                variant='text'
                className='whitespace-nowrap text-primary-magenta hover:text-primary-magenta_hover ss:whitespace-normal'
                cursor='pointer'
              >
                {item.label || ''}
              </Typography>
            </Link>
          );
        })}
      </div>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.div``;
