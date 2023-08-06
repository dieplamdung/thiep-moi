import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { StepperProps } from './index';
import ItemStep from './ItemStep';

const Stepper: React.FC<StepperProps> = ({ className, onClick, listStep }) => {
  return (
    <StyleStepper
      className={clsxm('flex w-[100%] flex-col', className)}
      onClick={() => onClick?.()}
    >
      {listStep?.length === 1 &&
        listStep.map((item, index) => <ItemStep {...item} key={index} />)}

      {listStep?.length > 1 &&
        listStep.map((item, index) => (
          <div
            key={index}
            className={clsxm(
              'mb-[32px]',
              index + 1 === listStep?.length && ['mb-[0px]']
            )}
          >
            <ItemStep {...item} />
          </div>
        ))}
    </StyleStepper>
  );
};

export default Stepper;

const StyleStepper = styled.div``;
