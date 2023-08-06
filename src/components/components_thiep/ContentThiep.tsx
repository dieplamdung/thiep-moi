import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
import useRoute from '@/lib/hooks/useRouter';

import Typography from '@/components/atoms/typography/Typography';

import IMG11 from '@/image/thiep/1.png';
import IMG12 from '@/image/thiep/2.png';

// const DATA = {
//   time: '08h00, Thứ Tư',
//   day: '20 | 09 | 2023',
//   day_am: '(Tức ngày 06 tháng 08 năm Quý Mão)',
//   diaChiTop: 'TẠI TƯ GIA',
//   diaChiBottom: (
//     <>
//       THÔN DÕNG HÒA, XÃ BÌNH HÒA, H.TÂY SƠN,
//       <br /> TỈNH BÌNH ĐỊNH
//     </>
//   ),
// };
const DATA = {
  time: '12h00, Thứ Tư',
  day: '20 | 09 | 2023',
  day_am: '(Tức ngày 06 tháng 08 năm Quý Mão)',
  diaChiTop: 'TẠI TƯ GIA NHÀ TRAI',
  diaChiBottom: (
    <>
      THÔN BÌNH HÒA, XÃ AN DÂN, HUYỆN TUY AN,
      <br /> TỈNH PHÚ YÊN
    </>
  ),
};

const POSITION: any = {
  a: 'Anh',
  c: 'Chị',
  b: 'Bạn',
  e: 'Em',
};
const NAME: any = {
  hao: 'Hảo +',
  y: 'Yêu',
};

export default function ContentThiep() {
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('Bạn');

  const { query } = useRoute();

  useEffect(() => {
    const p: string = (query?.p as string) || 'b';
    const t: string = (query?.t as string) || 'y';

    const pos = POSITION[p];
    const newName = NAME[t] || '';

    setPosition(pos);
    setName(newName);
  }, [query]);
  return (
    <>
      <div
        className='flex w-[100%] gap-[24px] md:flex-col'
        data-aos='zoom-out-down'
      >
        <div className=' flex max-w-[50%] justify-center md:max-w-[100%]'>
          <div className='relative'>
            <StyleImage
              src={IMG11}
              alt=''
              className='h-[100%] w-[100%] md:max-w-[480px]'
            />
            <WrapperContentImg1>
              <Typography variant='b1r'>TRÂN TRỌNG KÍNH MỜI !</Typography>
              <Typography
                variant='h3r'
                className={clsxm('my-[12px] sm:my-[8px]')}
              >
                {`${position} ${name}`}
              </Typography>
              <Typography variant='b2m' className='mb-[8px] text-center'>
                Đến dự bữa tiệc thân mật chung vui cùng gia đình chúng tôi
              </Typography>
              <Typography
                variant='b2m'
                className='mt-[12px] text-center text-primary-magenta sm:mt-[8px]'
              >
                Được tổ chức vào lúc {DATA.time}
              </Typography>
              <Typography
                variant='h3'
                className='text-center text-primary-magenta'
              >
                {DATA.day}
              </Typography>
              <Typography
                variant='b2m'
                className='mb-[12px] text-center sm:mb-[8px] '
              >
                {DATA.day_am}
              </Typography>

              <Typography variant='b1' className='mb-[4px] text-center '>
                {DATA.diaChiTop}
              </Typography>
              <Typography variant='b1' className='mb-[4px] text-center '>
                {DATA.diaChiBottom}
              </Typography>

              <Typography
                variant='b2m'
                className='mt-[12px] text-center sm:mt-[8px] '
              >
                Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng
                tôi!
              </Typography>
            </WrapperContentImg1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='relative'>
            <StyleImage
              src={IMG12}
              alt=''
              className='h-[100%]  w-[100%] md:max-w-[480px]'
            />
            <WrapperContentImg2>
              <Typography variant='b1r' className={clsxm('font-primary')}>
                THE WEDDING OF
              </Typography>
              <div className='mt-[24px] sm:mt-[12px]'>
                <Typography variant='h1' className={clsxm('font-primary')}>
                  SAVE
                </Typography>
                <Typography
                  variant='b1r'
                  className={clsxm('text-right font-primary')}
                >
                  THE
                </Typography>
                <Typography variant='h1' className={clsxm('font-primary')}>
                  DATE
                </Typography>
              </div>
              <Typography variant='b1r' className='my-[12px] sm:my-[4px]'>
                Van Them & Tuyet Trnh
              </Typography>
              <div className='mt-[12px] flex items-center justify-center sm:mt-[8px]'>
                <Typography variant='b1'>T.09</Typography>
                <Line />
                <div className='flex flex-col items-center justify-center'>
                  <Typography variant='b1'>Thứ 4</Typography>
                  <Typography variant='b1'>N.20</Typography>
                </div>
                <Line />
                <Typography variant='b1'>2023</Typography>
              </div>
            </WrapperContentImg2>
          </div>
        </div>
      </div>
    </>
  );
}

const StyleImage = styled(Image)`
  box-sizing: border-box;
  border: 8px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
`;

const Line = styled.div`
  height: 60%;
  width: 1px;
  background: #9299a0;
  margin: 0px 8px;
`;

const WrapperContentImg1 = styled.div`
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 48px 0px;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 60px 40px 0px;
  }
`;

const WrapperContentImg2 = styled.div`
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 48px;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 0px 40px;
  }
`;
