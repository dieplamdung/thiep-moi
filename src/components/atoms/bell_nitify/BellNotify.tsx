import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
import useScreen from '@/lib/hooks/useScreen';

import Badge from '@/components/atoms/badge/Badge';
import Icons from '@/components/atoms/icons/Icons';

import { BellNotifyProps } from './index';

const BellNotify: React.FC<BellNotifyProps> = ({
  className,
  onClick,
  numberNotify = 0,
}) => {
  const { isMobile } = useScreen();

  return (
    <StyleBellNotify
      className={clsxm(
        'relative flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[12px] bg-neutral-100',
        ['sm:h-[40px] sm:w-[40px] '],
        className
      )}
      onClick={() => onClick?.()}
    >
      {numberNotify > 0 && (
        <div
          className={clsxm('absolute bottom-[30px] left-[28px]', ['sm:hidden'])}
        >
          <Badge text={`${numberNotify}`} />
        </div>
      )}
      <div
        className={clsxm('absolute hidden', [
          'sm:bottom-[24px] sm:left-[22px] sm:flex',
        ])}
      >
        {numberNotify > 0 && <Badge text='' />}
      </div>
      <Icons
        typeicon={
          isMobile && numberNotify > 0 ? 'bell_notify_active' : 'bell_notify'
        }
      />
    </StyleBellNotify>
  );
};

export default BellNotify;

const StyleBellNotify = styled.div``;
