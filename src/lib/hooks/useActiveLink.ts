import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useActiveLink = () => {
  const { asPath, isReady } = useRouter();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Check if router is updated client side
    if (isReady) {
      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, window.location.href).pathname;
      setActiveLink(activePathname);
    }
  }, [asPath, isReady]);
  return activeLink;
};
