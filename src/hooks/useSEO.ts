import { useEffect } from 'react';
import { updateMetaTags } from '../utils/seo';

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function useSEO(metaTags: UseSEOProps = {}) {
  useEffect(() => {
    updateMetaTags(metaTags);
  }, [metaTags]);
} 