import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
type PropsContent = {
  aosRight?: string;
  aosLeft?: string;
  positionImage?: string;
  imageContent?: any;
};

export default function Content(props: PropsContent) {
  const {
    aosRight,
    aosLeft,
    positionImage = 'right',
    imageContent = '',
  } = props;

  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);
  return (
    <>
      {isClient ? (
        <div
          className={clsxm(
            'flex items-center justify-between gap-[48px] sm:flex-col md:gap-[24px]',
            positionImage === 'left' && 'flex-row-reverse sm:flex-col'
          )}
        >
          <StyleWrapperImage
            className='w-[100%]'
            data-aos={positionImage === 'left' ? aosLeft : aosRight}
          >
            <StyleImage
              src={imageContent}
              alt='hinh_anh'
              className='aspect-video'
            />
          </StyleWrapperImage>
          <div
            className='w-[100%]'
            data-aos={positionImage === 'left' ? aosRight : aosLeft}
          >
            dfdf
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

const StyleImage = styled(Image)`
  transition: all 0.4s;
`;

const StyleWrapperImage = styled.div`
  overflow: hidden;
  border: 8px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 16px;
  box-sizing: border-box;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
  @media (max-width: 450px) {
    border: 4px solid rgb(255, 255, 255);
  }
`;
