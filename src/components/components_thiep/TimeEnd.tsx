import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import TextLink from '@/components/atoms/text_links/TextLink';
import Typography from '@/components/atoms/typography/Typography';

import IconPlayAudio from '@/image/icon-playing.gif';
import IconPlay from '@/image/play-button.png';

export default function TimeEnd() {
  const targetDate = new Date('2023-11-11').getTime();
  const [timeRemaining, setTimeRemaining] = useState<any>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [lang, setLang] = useState<string>('vn');
  const { query } = useRouter();
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const fistClick = useRef<boolean>(false);
  const audioRef = useRef<any>(null);

  useEffect(() => {
    const lng: string = (query?.lng as string) || 'vn';
    setLang(lng);
  }, [query]);

  useEffect(() => {
    audioRef.current.volume = 0.5;
  }, []);

  useEffect(() => {
    if (hasUserInteracted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [hasUserInteracted]);

  useEffect(() => {
    if (!window) {
      return;
    }
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    const handleClick = () => {
      if (!fistClick.current) {
        fistClick.current = true;
        setHasUserInteracted(true);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fistClick]);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // If the target date has passed, return 0 for all values
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className='mb-[48px] flex flex-col items-center justify-center md:mb-[24px]'>
      <Typography
        variant='b2m'
        className='text-center font-secondary_2 text-[16px]'
      >
        Cùng đếm ngược thời gian nào:
      </Typography>
      <Typography variant='text' className='font-secondary_2 text-[14px]'>
        {timeRemaining.days} days {`0${timeRemaining.hours}`.slice(-2)} hours{' '}
        {`0${timeRemaining.minutes}`.slice(-2)} minutes{' '}
        {`0${timeRemaining.seconds}`.slice(-2)} seconds
      </Typography>
      <TextLink
        href='https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+V%C6%B0%E1%BB%9Dn+Qu%C3%AA/@10.8058056,106.7136305,19.95z/data=!4m6!3m5!1s0x317528a33e1df8b1:0x60095933115de65e!8m2!3d10.8060219!4d106.7138365!16s%2Fg%2F12nqgnrtb?entry=ttu'
        target='_blank'
        className='mt-[12px]'
      >
        {lang === 'vn' ? 'Địa điểm tiệc' : 'Party Venue'}
      </TextLink>

      <audio controls ref={audioRef} className='hidden' loop>
        <source src='./ngaycuoi.mp3' type='audio/mpeg' />
      </audio>
      <WrapperIcon className=''>
        {!hasUserInteracted ? (
          <Image
            src={IconPlay}
            alt='icon play'
            onClick={() => setHasUserInteracted(!hasUserInteracted)}
          />
        ) : (
          <WrapperIconPlay>
            <Image
              src={IconPlayAudio}
              alt='icon play'
              onClick={() => setHasUserInteracted(!hasUserInteracted)}
            />
          </WrapperIconPlay>
        )}
      </WrapperIcon>
    </div>
  );
}

const WrapperIcon = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  img {
    width: 24px;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 16px rgba(88, 90, 92, 0.2);
    }
  }
`;

const WrapperIconPlay = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background-color: #db2a42;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10px;
  }
`;
