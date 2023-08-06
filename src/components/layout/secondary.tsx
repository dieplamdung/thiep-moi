import React from 'react';

import useRoute from '@/lib/hooks/useRouter';

import Container from '@/components/atoms/container/Container';
import { LayoutProps } from '@/components/layout/type';
import NavigationPage from '@/components/pattern_global/navigation_page/NavigationPage';

export function SecondaryLayOut({ children }: LayoutProps) {
  const { router } = useRoute();
  const data = {
    linkAlready: '/programmes',
    listStep: [
      {
        defaultStep: 3,
        currentStep: 1,
      },
    ],
  };
  return (
    <>
      <NavigationPage
        {...data}
        className='hidden md:block'
        isMobile={true}
        onSave={() => {
          router.back();
        }}
      />
      <Container className='min-h-[100vh] flex-col'>
        <NavigationPage
          {...data}
          className=' md:hidden'
          onSave={() => {
            router.back();
          }}
        />
        {children}
      </Container>
    </>
  );
}
