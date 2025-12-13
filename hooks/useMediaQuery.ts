// визначення ширини екрану -  для модалки

import { useEffect } from 'react';
import { useCamperStore } from '@/store/useCamperStore';

export const useMediaQuery = (query: string) => {
  const setIsMobile = useCamperStore(state => state.setIsMobile);

  useEffect(() => {
    const media = window.matchMedia(query);

    setIsMobile(media.matches);

    const handler = () => setIsMobile(media.matches);
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, [query, setIsMobile]);
};
