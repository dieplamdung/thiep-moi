import Link from 'next/link';
import * as React from 'react';

import { MainLayout } from '@/components/layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='w-[100%] p-p5 md:px-0 md:py-p3 '>
        <h1>Content page</h1>
        <Link href='/about'>About </Link>
      </div>
    </>
  );
}

HomePage.Layout = MainLayout;
