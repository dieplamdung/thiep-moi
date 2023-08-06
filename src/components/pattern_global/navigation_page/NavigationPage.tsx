import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';
import useScreen from '@/lib/hooks/useScreen';
import {
  SCROLL_DOWN,
  useScrollDirection,
} from '@/lib/hooks/useScrollDirectional';
import { useScrollDown } from '@/lib/hooks/useScrollDown';

import Button from '@/components/atoms/buttons_main/Button';
import Icons from '@/components/atoms/icons/Icons';
import Stepper from '@/components/atoms/stepper';
import TextLink from '@/components/atoms/text_links/TextLink';

import { NavigationPageProps } from './index';

const NavigationPage: React.FC<NavigationPageProps> = ({
  className,
  listStep,
  haveAccountString = 'Already have an account?',
  saveAndExitString = 'Save and Exit',
  linkAlready,
  isMobile = false,
  onSave,
}) => {
  const scrollDown = useScrollDown();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const scrollDirection = useScrollDirection();
  const { isTablet } = useScreen();

  useEffect(() => {
    setIsScrollDown(scrollDirection === SCROLL_DOWN);
  }, [scrollDirection]);

  return (
    <StyleNavigatePageContainer
      className={clsxm(
        'trans flex w-[100%] items-center justify-between p-[40px] transition-all duration-300 md:flex-col md:gap-y-6',
        ['top-0 md:sticky md:items-start md:bg-white md:px-6 md:pb-4 md:pt-12'],
        isScrollDown && ['md:gap-y-0'],
        scrollDown && isMobile && ['shadow-cart_shadow'],
        className
      )}
    >
      <div className={clsxm('flex w-[100%] items-center justify-between')}>
        <Icons className='h-[48px] w-[194px] md:w-[134px]' typeicon='logo' />
        <StyleButtonWrapper className={clsxm('flex items-center gap-x-10')}>
          <TextLink
            className='p-0  md:hidden'
            href={linkAlready || ''}
            isShowIconLeft={false}
            isShowIconRight={false}
          >
            {haveAccountString}
          </TextLink>
          <Button
            onClick={onSave}
            variant='secondary'
            className='md:border-none md:px-0'
            isShowIconLeft={false}
            isShowIconRight={!isTablet}
          >
            {saveAndExitString}
          </Button>
        </StyleButtonWrapper>
      </div>
      {listStep && listStep.length > 0 && (
        <StyleStepperWrapper
          className={clsxm(
            'hidden w-full overflow-hidden transition-all duration-300 md:mt-[24px] md:block  md:max-h-[40px]',
            isScrollDown && ['md:mt-0  md:max-h-0']
          )}
        >
          <Stepper listStep={listStep} />
        </StyleStepperWrapper>
      )}
    </StyleNavigatePageContainer>
  );
};

export default NavigationPage;

const StyleNavigatePageContainer = styled.div``;
const StyleButtonWrapper = styled.div``;
const StyleStepperWrapper = styled.div``;
