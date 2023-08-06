import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import Typography from '@/components/atoms/typography/Typography';

import IconPlayAudio from '@/image/icon-playing.gif';
import IconPlay from '@/image/play-button.png';

export default function TimeEnd() {
  const targetDate = new Date('2023-09-20').getTime();
  const [timeRemaining, setTimeRemaining] = useState<any>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const fistClick = useRef<boolean>(false);
  const audioRef = useRef<any>(null);

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
      <Typography variant='b2m' className='text-center'>
        Time end
      </Typography>
      <Typography variant='text'>
        {timeRemaining.days} days {`0${timeRemaining.hours}`.slice(-2)} hours{' '}
        {`0${timeRemaining.minutes}`.slice(-2)} minutes{' '}
        {`0${timeRemaining.seconds}`.slice(-2)} seconds
      </Typography>
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