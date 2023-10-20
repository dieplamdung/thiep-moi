import Image from 'next/image';
import { useEffect } from 'react';
import 'swiper/css';

import '../styles/colors.css';
import '../styles/globals.css';
import 'aos/dist/aos.css';

import initializeAOS from '@/lib/aos';

import Container from '@/components/atoms/container/Container';
import Text_links from '@/components/atoms/text_links';

const Content = dynamic(() => import('@/components/components_thiep/Content'), {
  ssr: false,
});

import ContentHeader from '@/components/components_thiep/ContentHeader';
import ContentThiep from '@/components/components_thiep/ContentThiep';

const SliderImage = dynamic(
  () => import('@/components/components_thiep/SliderImage'),
  {
    ssr: false,
  }
);
import dynamic from 'next/dynamic';

import TimeEnd from '@/components/components_thiep/TimeEnd';
import Seo from '@/components/Seo';

import ImgLineFooter from '@/image/root_LargeDivider_F4aFgUc.png';
import ImgH2 from '@/image/thiep/h_1.png';
import ImgH1 from '@/image/thiep/h_2.png';

import H1 from '../image/h1.jpg';
import H2 from '../image/h2.jpg';
import H3 from '../image/h3.jpg';
import H4 from '../image/h4.jpg';
import H5 from '../image/h5.jpg';
import H6 from '../image/h6.jpg';
import H7 from '../image/h7.jpg';
import H8 from '../image/h8.jpg';
import H9 from '../image/h9.jpg';
import H10 from '../image/h10.jpg';
import H11 from '../image/h11.jpg';
import H12 from '../image/h12.jpg';
import H13 from '../image/h13.jpg';
import H14 from '../image/h14.jpg';
import H15 from '../image/h15.jpg';
import H16 from '../image/h16.jpg';

function MyApp() {
  useEffect(() => {
    initializeAOS(); // Khởi tạo AOS khi ứng dụng bắt đầu chạy
  }, []);

  // const min = 0;
  // const max = 11;

  const dataContent = [
    {
      imageContent: H1,
      description: (
        <>
          Vào lúc 3h30 sáng ngày 20/11, Họ nhà Trai tất bật chuẩn bị mọi thứ để
          lên đường rước dâu.
        </>
      ),
    },
    {
      imageContent: H2,
      description: (
        <>
          <h2>Cây có cội nước có nguồn</h2> Chú rể đứng trước bảo tàng Quang
          Trung, xin phép rước con cháu của Ông về Phú Yên.{' '}
        </>
      ),
    },
    {
      imageContent: H3,
      description: (
        <>
          Vào lúc 7h00, Họ nhà Trai đến nhà gái. Xếp đội hình để chuẩn vị vào
          nhà gái.
        </>
      ),
    },
    {
      imageContent: H4,
      description: <>Bê quả nhà Trai trao quả cho nhà Gái</>,
    },
    {
      imageContent: H5,
      description: <>Họ Trai rót rượu thưa chuyện với Họ Gái</>,
    },
    {
      imageContent: H6,
      description: 'Mẹ Chú rể trao sính lễ cho cô dâu',
    },
    {
      imageContent: H7,
      description: 'Mẹ Cô Dâu cho của hồi môn cho con gái',
    },
    {
      imageContent: H8,
      description: 'Cô Dâu và Chú Rể đeo nhẫn cho nhau',
    },
    {
      imageContent: H9,
      description: 'Chú rể và Cô Dâu chụp hình cùng dàn bê quả.',
    },
    {
      imageContent: H10,
      description: 'Cô Dâu và Chú Rể chụp hình cùng bố mẹ.',
    },
    {
      imageContent: H11,
      description: 'Chú Rể đưa Cô Dâu ra xe về nhà Trai',
    },
    {
      imageContent: H12,
      description: 'Đến nhà Trai, Chú Rể đưa Cô Dâu về nhà làm lễ Gia Tiên',
    },
    {
      imageContent: H13,
      description:
        'Làm lễ Gia Tiên, Hai bên mời rượu nhau. Họ Gái gửi gắm con Dâu, mong Nhà Trai đùm bọc chẻ chở và dậy bảo cho hai vợ chồng son.',
    },
    {
      imageContent: H14,
      description:
        'Những người Bạn, không ngại khoản cách, thời gian và công việc đã đến chung vui cùng gia đình hai Vợ chồng.',
    },
    {
      imageContent: H15,
      description:
        'Anh, Chị của Cô Dâu chụp hình chung cùng Vợ Chồng trước khi ra về.',
    },
    {
      imageContent: H16,
      description: 'Nhà Trai trả quả cho Nhà Gái. Họ Nhà gái ra về.',
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
                description={item.description}
                key={index}
                positionImage={index % 2 != 0 ? 'left' : ''}
                aosRight='zoom-out-right'
                aosLeft='zoom-out-left'
              />
            );
          })}

          <div className='flex justify-center'>
            <Text_links
              href='https://drive.google.com/drive/folders/10iLAjONICTjNAidrmO9FY9Gxg1v8nWYG?usp=share_link'
              target='_blank'
              className='mt-[12px]'
            >
              Xem thêm hình ảnh
            </Text_links>
          </div>
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
