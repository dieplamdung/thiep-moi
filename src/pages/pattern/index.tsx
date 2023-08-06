import React from 'react';

import { SecondaryLayOut } from '@/components/layout';
import Seo from '@/components/Seo';

export default function PatternPage() {
  return (
    <div className='min-h-[100vh]'>
      <Seo />
      <div className='min-h-[100vh]'></div>
      <div className='min-h-[100vh]'></div>
      PatternPage
    </div>
  );
}
PatternPage.Layout = SecondaryLayOut;
