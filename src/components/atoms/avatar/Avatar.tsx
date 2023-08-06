import Image from 'next/image';
import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { AvatarProps } from './index';

const Avatar: React.FC<AvatarProps> = ({
  image,
  className,
  onClick,
  text,
  variant = 'large',
}) => {
  return (
    <StyleAvatar
      className={clsxm(
        'relative flex  items-center justify-center overflow-hidden rounded-[50%] bg-secondary-light_turquoise',
        variant === 'large' && ['h-[56px] w-[56px]'],
        variant === 'small' && [
          'h-[32px] w-[32px] border-solid border-neutral-50',

          !image && ['border-[2px]'],
        ],
        className
      )}
      onClick={() => onClick?.()}
    >
      {variant === 'large' && !image && (
        <Typography variant='h2' color='#fff'>
          {text}
        </Typography>
      )}
      {variant === 'small' && !image && (
        <Typography variant='h3' color='#fff' className='text_small'>
          {text}
        </Typography>
      )}
      {image && (
        <Image
          src={image || ''}
          fill
          alt={text || ''}
          className='image_avatar'
        />
      )}
    </StyleAvatar>
  );
};

export default Avatar;

const StyleAvatar = styled.div`
  &:hover .image_avatar {
    transform: scale(1.2);
  }

  .image_avatar {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
  .text_small {
    margin-top: 2px;
  }
`;
