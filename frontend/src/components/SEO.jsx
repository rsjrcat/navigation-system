import { useEffect } from 'react';

export default function SEO({ title, description, keywords, ogImage }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      if (content) {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
        let meta = document.querySelector(selector);

        if (!meta) {
          meta = document.createElement('meta');
          if (name) meta.setAttribute('name', name);
          if (property) meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }

        meta.setAttribute('content', content);
      }
    });
  }, [title, description, keywords, ogImage]);

  return null;
}
