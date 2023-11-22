import { useRouter } from 'next/navigation';
import * as React from 'react';

function useGetQueryParam(key) {
  const router = useRouter();

  const value = React.useMemo(() => {
    const res = router.asPath.match(new RegExp(`[&?]${key}=(.*)(&|$)`)) || [];
    return res[1];
  }, [router.asPath]);

  return value;
}

export { useGetQueryParam };
