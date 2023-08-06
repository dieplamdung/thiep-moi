import { useEffect, useState } from 'react';

export default function useScreen() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktopMin, setIsDesktopMin] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleCheckScreen = () => {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const SCREEN = {
        mobile: false,
        tablet: false,
        desktopMin: false,
        desktop: false,
      };

      if (screenWidth <= 640) {
        SCREEN.mobile = true;
      }
      if (screenWidth <= 770) {
        SCREEN.tablet = true;
      }
      if (screenWidth <= 1024) {
        SCREEN.desktopMin = true;
      }
      if (screenWidth > 1024) {
        SCREEN.desktop = true;
      }

      setIsMobile(SCREEN.mobile);
      setIsTablet(SCREEN.tablet);
      setIsDesktopMin(SCREEN.desktopMin);
      setIsDesktop(SCREEN.desktop);
    };

    if (window) {
      handleCheckScreen();
      window.addEventListener('resize', handleCheckScreen);
    }
    return () => {
      window.removeEventListener('resize', handleCheckScreen);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktopMin,
    isDesktop,
  };
}
