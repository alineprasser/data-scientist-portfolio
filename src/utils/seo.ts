interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

const defaultMetaTags: MetaTagsProps = {
  title: "Matheus Melotti | Data Scientist",
  description: "Portfólio profissional de Data Scientist com projetos e experiências em análise de dados, machine learning e visualização de dados.",
  keywords: "data scientist, cientista de dados, análise de dados, machine learning, portfolio, data analysis, python, R, SQL",
  image: "/og-image.jpg",
  url: typeof window !== 'undefined' ? window.location.href : '',
};

export function updateMetaTags(metaTags: Partial<MetaTagsProps> = {}) {
  const finalMetaTags = { ...defaultMetaTags, ...metaTags };

  // Update basic meta tags
  document.title = finalMetaTags.title;
  updateMetaTag('title', finalMetaTags.title);
  updateMetaTag('description', finalMetaTags.description);
  updateMetaTag('keywords', finalMetaTags.keywords);

  // Update Open Graph meta tags
  updateMetaTag('og:title', finalMetaTags.title, 'property');
  updateMetaTag('og:description', finalMetaTags.description, 'property');
  updateMetaTag('og:image', finalMetaTags.image, 'property');
  updateMetaTag('og:url', finalMetaTags.url, 'property');
  updateMetaTag('og:type', 'website', 'property');

  // Update Twitter meta tags
  updateMetaTag('twitter:card', 'summary_large_image', 'name');
  updateMetaTag('twitter:title', finalMetaTags.title, 'name');
  updateMetaTag('twitter:description', finalMetaTags.description, 'name');
  updateMetaTag('twitter:image', finalMetaTags.image, 'name');
}

function updateMetaTag(name: string, content: string, attributeName: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attributeName}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
} 