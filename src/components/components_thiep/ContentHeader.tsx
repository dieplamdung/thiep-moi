import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import ImgBg from '@/image/hinhnen.jpg';
import ImgHeader from '@/image/img_header.png';
import ImgT1 from '@/image/thiep/t_1.png';
import ImgT2 from '@/image/thiep/t_2.png';

export default function ContentHeader() {
  return (
    <>
      <StyleHeader className={clsxm('w-[100%]')}>
        <Image src={ImgHeader} alt='header' className='w-[100%]' />
      </StyleHeader>
      <div data-aos='zoom-out' className='h-fit'>
        <Typography
          variant='h1'
          className={clsxm(
            'mb-[32px] text-center font-secondary text-[70px] font-[300] leading-none md:mb-[12px] md:mt-[24px] md:text-[33px]'
          )}
          spacing='2px'
        >
          Happy Wedding!
        </Typography>
      </div>

      <StyleWrapperName className='py-[32px]  md:py-[24px]'>
        <div data-aos='fade-right'>
          <Typography
            variant='h1'
            className='text-center font-secondary_2 text-[58px] leading-none md:text-[28px]'
          >
            Văn Thêm
          </Typography>
        </div>
        <div data-aos='zoom-in'>
          <Typography
            variant='h3'
            className='my-[24px] text-center font-secondary_2 text-[red] md:my-[8px]'
          >
            ♥♥♥
          </Typography>
        </div>
        <div data-aos='fade-left'>
          <Typography
            variant='h1'
            className='text-center font-secondary_2 text-[58px] leading-none md:text-[28px]'
          >
            Tuyết Trinh
          </Typography>
        </div>
      </StyleWrapperName>
      <ImageContent
        className='mb-[48px] flex w-[100%] items-center justify-center md:mb-[24px]'
        data-aos='flip-left'
      >
        <StyleImage
          src={ImgBg}
          className='aspect-video w-[100%] max-w-[1024px]'
          alt=''
        />
      </ImageContent>

      <div className='mb-[30px] mt-[58px] flex items-center justify-center  md:mb-[24px] md:mt-[42px]'>
        <div data-aos='fade-right'>
          <Image
            src={ImgT1}
            alt='hinh'
            className='h-[50px] w-auto sm:h-[30px]'
          />
        </div>
        <div data-aos='zoom-out-down'>
          <Typography
            variant='h1'
            className='mx-[12px] text-center font-secondary font-[400]'
            spacing='1.5px'
          >
            Thiệp Mời
          </Typography>
        </div>
        <div data-aos='fade-left'>
          <Image
            src={ImgT2}
            alt='hinh'
            className='h-[50px] w-auto sm:h-[30px]'
          />
        </div>
      </div>
    </>
  );
}

const StyleHeader = styled.div``;

const StyleImage = styled(Image)`
  box-sizing: border-box;
  border: 8px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
`;

const StyleWrapperName = styled.div``;

const ImageContent = styled.div``;
