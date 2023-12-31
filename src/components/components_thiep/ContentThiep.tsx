/* eslint-disable unused-imports/no-unused-vars */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import useRoute from '@/lib/hooks/useRouter';

import Typography from '@/components/atoms/typography/Typography';

import IMG11 from '@/image/thiep/1.png';
import IMG12 from '@/image/thiep/2.png';

const DATA = {
  time: '18h00, Thứ Bảy',
  day: '11 | 11 | 2023',
  day_am: <>(Nhằm ngày 28 tháng 09 năm Quý Mão)</>,
  diaChiTop: (
    <>
      NHÀ HÀNG VƯỜN QUÊ <br /> Sảnh tiệc: Bằng Lăng
    </>
  ),
  diaChiBottom: <>38 Đường số 5, P.25, Bình Thạnh - HCM</>,
};

const POSITION: any = {
  a: 'Anh',
  c: 'Chị',
  b: 'Bạn',
  e: 'Em',
  t: 'Thầy',
  none: '',
};

const NAME: any = {
  hao: 'Hảo +', //
  trung: 'Trung +', // đã gửi
  nguyet: 'Nguyệt +', // đã gửi
  anh: 'Ánh +', // đã gửi
  bich: 'Bích +',
  phu: 'Phú +', // đã gửi
  khanh: 'Khánh +', //
  tuan: 'Tuấn +', //
  thong: 'Thông',
  an: 'Ẩn +', //
  y: 'Yêu',
  men: 'Mến +',
  trong: 'Trọng +', //
  hieu: 'Hiếu +', //
  my: 'My +', //
  diemqn: 'Diễm +', //
  lieuqn: 'Liễu +', //
  minh: 'Minh +',
  bao: 'Bảo +',
  cao: 'Cao +', //
  huy9e: 'Huy +', //
  hao12g: 'Hào +', //
  thu: 'Thư +', // đã gửi
  thang: 'Thắng +',
  loan: 'Loan +',
  thiet12g: 'Thiết +', //
  kiet12g: 'Kiệt +', //
  khoa12g: 'Khoa +', //
  duong12g: 'Dưỡng +', //
  hoai12g: 'Hoài +', //
  lieu12g: 'Liễu +',
  diem12g: 'Diễm +', //
  giangqn: 'Anh Giang + Chị Thùy',
  phuong12g: 'Phương +', //
  nguyejt12g: 'Nguyệt +',
  huong: 'Hương +',
  vcem: 'Vợ Chồng em',
  vcchi: 'Vợ Chồng Chị',
  vcanh: 'Vợ Chồng Anh',
  linh: 'Linh +',
  tuong12g: 'Tường +',
  vien12g: 'Viên +',
  nich: 'Nich +',
  vi: 'Vi +',
  hungxom: 'Hưng +',
  yenxom: 'Yến +',
  tungit: 'Tùng +',
  nhung: 'Nhung +',
  phung: 'Phụng +',
  sen12g: 'Sen +',
  hoa12g: 'Hoa +',
};

const CONTENT: any = {
  vn: {
    lth: 'Lễ Báo Hỷ',
    nam: 'Võ Văn Thêm',
    nu: 'Trần Thị Tuyết Trinh',
    kinhmoi: 'Được tổ chức tại:',
    dendutiec: 'Đến dự bữa tiệc chung vui cùng gia đình chúng tôi.',
  },
  en: {
    lth: 'Wedding',
    nam: 'Vo Van Them',
    nu: 'Tran Thi Tuyet Trinh',
    kinhmoi: 'Cordially invited',
    dendutiec: 'Come to the party with our family.',
  },
};

export default function ContentThiep() {
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [lang, setLang] = useState<string>('vn');

  const { query } = useRoute();

  useEffect(() => {
    const p: string = (query?.p as string) || 'none';
    // eslint-disable-next-line no-console
    // console.log('==', p);
    const t: string = (query?.t as string) || 'y';

    const lng: string = (query?.lng as string) || 'vn';
    setLang(lng);

    const pos = POSITION[p];
    // eslint-disable-next-line no-console
    // console.log('pos', pos);
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
              src={IMG12}
              alt=''
              className='h-[100%]  w-[100%] md:max-w-[480px]'
            />
            <WrapperContentImg1>
              <Typography
                variant='h2'
                className='font-secondary_2 text-[#727204] sm:text-[20px] sm:leading-[30px]'
              >
                {CONTENT[lang].lth}
              </Typography>

              <Typography
                variant='h2'
                className='mt-[18px] font-secondary_2 text-[#ff3838] sm:mt-[12px]'
              >
                {CONTENT[lang].nam}
              </Typography>
              <div className='mb-[4px] text-[#ff3838]'>♥</div>
              <Typography
                variant='h2'
                className='font-secondary_2 text-[#ff3838]'
              >
                {CONTENT[lang].nu}
              </Typography>

              <Typography
                variant='b2m'
                className='mt-[12px] text-center text-primary-magenta sm:mt-[8px] sm:text-[12px]'
              >
                {lang === 'vn'
                  ? `Được tổ chức vào lúc ${DATA.time}`
                  : 'Held at 11:00, Wednesday'}
              </Typography>
              <Typography
                variant='h3'
                className='text-center text-primary-magenta sm:text-[14px]'
              >
                {DATA.day}
              </Typography>
              {lang === 'vn' && (
                <Typography
                  variant='b2m'
                  className='mb-[12px] text-center leading-[16px] sm:mb-[8px] sm:text-[12px]'
                >
                  {DATA.day_am}
                </Typography>
              )}
            </WrapperContentImg1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='relative'>
            <StyleImage
              src={IMG11}
              alt=''
              className='h-[100%] w-[100%] md:max-w-[480px]'
            />
            <WrapperContentImg2>
              <Typography
                variant='h3r'
                className='font-secondary_2 text-[26px] leading-[30px] sm:text-[20px]'
              >
                {CONTENT[lang].kinhmoi}
              </Typography>
              {/* <Name
                variant='h3r'
                className={clsxm(
                  'my-[12px] font-secondary_2 text-[34px] leading-[40px] sm:my-[8px] sm:text-[24px] sm:leading-[30px]'
                )}
              >
                {`${position} ${name}`}
              </Name> */}
              {/* <Typography variant='b2m' className='mb-[8px] text-center'>
                {CONTENT[lang].dendutiec}
              </Typography> */}
              <Typography
                variant='b1'
                className='mb-[8px]  mt-[12px] text-center text-[24px] leading-[120%] text-[red] sm:text-[18px]'
              >
                {lang === 'vn' ? DATA.diaChiTop : 'AT HOUSE'}
              </Typography>
              <Typography
                variant='b1'
                className='mb-[4px] text-center leading-[20px] sm:text-[14px]'
              >
                {lang === 'vn' ? (
                  DATA.diaChiBottom
                ) : (
                  <>
                    BINH HOA - AN DAN - TUY AN - PHU YEN <br /> VIET NAM
                  </>
                )}
              </Typography>
              {/* <Typography
                variant='b2m'
                className='mt-[12px] text-center text-primary-magenta sm:mt-[8px]'
              >
                {lang === 'vn'
                  ? 'Được tổ chức vào lúc 11h30, Thứ Tư'
                  : 'Held at 11h30 am, Wednesday'}
              </Typography> */}
              {/* <Typography
                variant='h3'
                className='text-center leading-[20px] text-primary-magenta '
              >
                {DATA.day}
              </Typography>
              {lang === 'vn' && (
                <Typography
                  variant='b2m'
                  className='mb-[12px] text-center sm:mb-[8px] sm:text-[12px]'
                >
                  {DATA.day_am}
                </Typography>
              )} */}
              <Typography
                variant='b2m'
                className='mt-[12px] text-center font-secondary_2 text-[18px] leading-[24px] sm:mt-[8px] sm:text-[14px] sm:leading-[20px]'
              >
                {lang === 'vn' ? (
                  <>
                    Sự hiện diện Quý khách là niềm vinh hạnh <br /> của gia đình
                    tôi!
                  </>
                ) : (
                  <>
                    The presence of {name} is the honor <br /> of the family our
                    family!
                  </>
                )}
              </Typography>
              {/* <div className='mt-[12px] flex items-center justify-center sm:mt-[8px]'>
                <Typography variant='b1'>T.09</Typography>
                <Line />
                <div className='flex flex-col items-center justify-center'>
                  <Typography variant='b1'>Thứ 4</Typography>
                  <Typography variant='b1'>N.20</Typography>
                </div>
                <Line />
                <Typography variant='b1'>2023</Typography>
              </div> */}
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

const WrapperContentImg1 = styled.div`
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: 184px 48px 0px;

  @media (max-width: 640px) {
    padding: 130px 40px 0px;
  }
`;

const WrapperContentImg2 = styled.div`
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  justify-content: center;
  /* padding: 110px 48px 0px; */

  /* @media (max-width: 640px) {
    padding: 60px 40px 0px;
  } */
`;

const Name = styled(Typography)`
  background: -webkit-linear-gradient(90deg, #7ef29d, #210cae);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
