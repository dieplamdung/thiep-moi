import { useRouter } from 'next/router';

export default function useRoute() {
  const router = useRouter();

  const { locale, asPath, pathname, query } = router;
  return {
    router,
    locale,
    asPath,
    pathname,
    query,
  };
}
