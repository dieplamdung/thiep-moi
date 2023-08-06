import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

export type ItemStepProps = {
  className?: string;
  defaultStep: number;
  currentStep: number;
  hiddenText?: boolean;
};

export default function ItemStep({
  className,
  defaultStep,
  currentStep,
  hiddenText = false,
}: ItemStepProps) {
  const [widthDivider, setWidthDivider] = useState<number>(0);
  useEffect(() => {
    if (currentStep > 0) {
      const newWidthDivider = Math.round((currentStep / defaultStep) * 100);
      setWidthDivider(newWidthDivider);
    }
  }, [defaultStep, currentStep]);
  return (
    <StyleItemStep
      className={clsxm('flex w-[100%] flex-col', `${className}_ItemStep`)}
    >
      <div
        className={clsxm(
          'relative h-[12px] w-[100] overflow-hidden rounded-[40px] bg-neutral-100'
        )}
      >
        <StyleDivider
          className={clsxm(
            'absolute left-0 h-[100%] w-0 rounded-[40px] bg-secondary-dark_turquoise'
          )}
          width={widthDivider}
        />
      </div>
      {!hiddenText && (
        <div className={clsxm('mt-[16px] flex sm:mt-[8px] md:mt-2')}>
          <Typography
            variant='b1'
            className='mr-[4px] sm:text-[14px] sm:leading-[20px]'
          >
            Step {currentStep}
          </Typography>
          <Typography
            variant='b1r'
            className='sm:text-[14px] sm:leading-[20px]'
          >
            of {defaultStep}
          </Typography>
        </div>
      )}
    </StyleItemStep>
  );
}

const StyleItemStep = styled.div``;

const StyleDivider = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%` || '0px'};
  transition: all 0.3s;
`;
