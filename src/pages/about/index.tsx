import Link from 'next/link';
import React from 'react';

import { MainLayout } from '@/components/layout';

export default function AboutPage() {
  return (
    <div>
      AboutPage
      <Link href='/'>Home</Link>
    </div>
  );
}

AboutPage.Layout = MainLayout;
