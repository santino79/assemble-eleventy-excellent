module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Analysts Assemble',
  siteDescription:
    'Resources, articles, and courses to help build better data analysts.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Lene Saile', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#27742C', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default-aa.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Building better data analysts: Articles, resources, hints, tips, courses, interviews and much much more to help make you a better data analyst.', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '@AlanHylands', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Building better data analysts',
    description:
      'Articles, interviews and resources to help build better data analysts.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Santinotech Ltd',
    street: '20 Upper Water Street',
    city: 'Newry',
    state: 'Northern Ireland',
    zip: 'BT34 1DJ ',
    mobileDisplay: 'n/a',
    mobileCall: 'n/a',
    email: 'mail@analystsassemble.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
