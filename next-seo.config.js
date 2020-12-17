const title = 'Febrilian - Writings & Portfolio';
const description =
  'Network of idea nodes, curated into writings.';

const SEO = {
  title,
  description,
  canonical: 'https://febrilian.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://febrilian.com',
    title,
    description,
    images: [
      {
        url: 'https://febrilian.com/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@febrilian__',
    site: '@febrilian__',
    cardType: 'summary_large_image'
  }
};

export default SEO;
