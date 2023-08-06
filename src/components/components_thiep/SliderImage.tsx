/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const LIST_IMG = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
];
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
              <img src={item || ''} />
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
