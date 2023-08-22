/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import l1 from '@/image/listImage/l1.png';
import l2 from '@/image/listImage/l2.png';
import l3 from '@/image/listImage/l3.png';
import l4 from '@/image/listImage/l4.png';
import l5 from '@/image/listImage/l5.png';
import l6 from '@/image/listImage/l6.png';
import l7 from '@/image/listImage/l7.png';
import l8 from '@/image/listImage/l8.png';
import l9 from '@/image/listImage/l9.png';
import l10 from '@/image/listImage/l10.png';

const LIST_IMG = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];
export default function SliderImage() {
  const refWrapperSwiper = useRef<any>();
  const [indexSlide, setIndexSlide] = useState<number>(0);

  useEffect(() => {
    const content = refWrapperSwiper.current;
    if (content) {
      const listDot = content.querySelectorAll('.swiper-pagination-bullet');
      if (listDot?.length) {
        listDot.forEach((element: any, index: number) => {
          if (index === indexSlide) {
            element.style.background = '#fff';
          } else {
            element.style.background = '#d6d4d44f';
          }
        });
      }
    }
  }, [indexSlide, refWrapperSwiper]);
  return (
    <div
      className='my-[48px] flex w-[100%] md:my-[24px]'
      ref={refWrapperSwiper}
    >
      <StyleSwiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView='auto'
        onSlideChange={(e: any) => setIndexSlide(e?.activeIndex)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {LIST_IMG.map((item, index) => {
          return (
            <StyleSwiperSlide
              className='aspect-video max-w-[550px]'
              key={index}
            >
              <Image src={item} width={992} height={588} alt='hình ảnh' />
            </StyleSwiperSlide>
          );
        })}
      </StyleSwiper>
    </div>
  );
}

const StyleSwiper = styled(Swiper)`
  .swiper-pagination {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;

    .swiper-pagination-bullet {
      display: flex;
      min-width: 10px;
      height: 10px;
      border-radius: 10px;
      background: #d6d4d44f;
    }
  }
`;

const StyleSwiperSlide = styled(SwiperSlide)`
  width: fit-content;
  img {
    width: 100%;
    height: 100%;
  }
`;
