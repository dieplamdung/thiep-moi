// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

import Image from 'next/image';
import { useEffect } from 'react';
import 'swiper/css';

import '../styles/colors.css';
import '../styles/globals.css';
import 'aos/dist/aos.css';

import initializeAOS from '@/lib/aos';

import Container from '@/components/atoms/container/Container';
import Content from '@/components/components_thiep/Content';
import ContentHeader from '@/components/components_thiep/ContentHeader';
import ContentThiep from '@/components/components_thiep/ContentThiep';
import SliderImage from '@/components/components_thiep/SliderImage';
import TimeEnd from '@/components/components_thiep/TimeEnd';
import Seo from '@/components/Seo';

import ImgBg from '@/image/hinhnen.jpg';
import ImgLineFooter from '@/image/root_LargeDivider_F4aFgUc.png';
import ImgH2 from '@/image/thiep/h_1.png';
import ImgH1 from '@/image/thiep/h_2.png';

const LIST_AOS_RIGHT = [
  'zoom-out-right',
  'fade-up',
  'fade-right',
  'fade-up-right',
  'fade-down-right',
  'flip-left',
  'zoom-in',
  'zoom-in-down',
  'zoom-in-right',
  'zoom-out-up',
  'zoom-out-right',
];
const LIST_AOS_LEFT = [
  'zoom-out-left',
  'fade-down',
  'fade-left',
  'fade-up-left',
  'fade-down-left',
  'flip-right',
  'flip-down',
  'zoom-in-up',
  'zoom-in-left',
  'zoom-out',
  'zoom-out-down',
  'zoom-out-left',
];

function MyApp() {
  useEffect(() => {
    initializeAOS(); // Khởi tạo AOS khi ứng dụng bắt đầu chạy
  }, []);

  const min = 0;
  const max = 11;

  const dataContent = [
    {
      imageContent: ImgBg,
    },
    {
      imageContent: ImgBg,
    },
    {
      imageContent: ImgBg,
    },
    {
      imageContent: ImgBg,
    },
    {
      imageContent: ImgBg,
    },
    {
      imageContent: ImgBg,
    },
  ];
  return (
    <div className='flex min-h-[100vh] w-[100%] flex-col items-center overflow-x-hidden bg-[#F5F2F7]'>
      <Seo />
      <Container className='items-center'>
        <ContentHeader />
        <ContentThiep />
        <div
          className='mt-[48px] flex w-[100%] justify-center sm:mt-[24px]'
          data-aos='zoom-out'
        >
          <Image
            src={ImgH1}
            alt='hinh'
            className='h-[70px] w-auto sm:h-[35px]'
          />
        </div>
        <div className='flex flex-col gap-[48px] py-[48px] md:gap-[24px] md:py-[24px]'>
          {dataContent.map((item, index) => {
            return (
              <Content
                imageContent={item.imageContent}
                key={index}
                positionImage={index % 2 != 0 ? 'left' : ''}
                aosRight={
                  LIST_AOS_RIGHT[
                    Math.floor(Math.random() * (max - min + 1)) + min
                  ]
                }
                aosLeft={
                  LIST_AOS_LEFT[
                    Math.floor(Math.random() * (max - min + 1)) + min
                  ]
                }
              />
            );
          })}
        </div>
        <div className='flex w-[100%] justify-center' data-aos='zoom-out'>
          <Image
            src={ImgH2}
            alt='hinh'
            className='h-[70px] w-auto sm:h-[35px]'
          />
        </div>
      </Container>

      <SliderImage />
      <div className='mt-auto'>
        <Image src={ImgLineFooter} alt='footer' />
        <TimeEnd />
      </div>
    </div>
  );
}

export default MyApp;
