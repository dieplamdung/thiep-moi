import type { Meta } from '@storybook/react';

import Footer from './Footer';
import { FooterProps } from './types';

const meta: Meta<typeof Footer> = {
  title: 'PatternGlobal/Footer',
  component: Footer,
};

export default meta;
export const Default = (args: FooterProps) => {
  return <Footer {...args} />;
};

Default.args = {
  copyRight: '© Community Foundation of Singapore 2023. All rights reserved',
  listLinkFooter: [
    {
      label: 'Privacy Policy',
      href: 'https://www.cf.org.sg/privacy/',
    },
    {
      label: 'Cookies Policy',
      href: 'https://www.cf.org.sg/cfs-cookies-policy/',
    },
    {
      label: 'Copyright',
      href: 'https://www.cf.org.sg/copyright/',
    },
    {
      label: 'Terms of Use',
      href: 'https://www.cf.org.sg/terms-of-use/',
    },
  ],
};
