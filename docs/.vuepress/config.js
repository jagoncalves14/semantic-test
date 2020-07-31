const isProduction = process.env.NODE_ENV === "production"


module.exports = {
  base: isProduction ? '/pixel-gatsby/' : '/',
  title: 'Gatsby Starter',
  description: 'A simple starter to get up and developing quickly with Gatsby and WP GraphQL.',
  themeConfig: {
    logo: '/logo-pixelmatters.svg',
    nav: [{
      text: 'Github',
      link: 'https://github.com/Pixelmatters/pixel-gatsby/'
    }, ],
    sidebar: [
      ['/', 'Introduction', false],
      ['/getting-started', 'Getting Started'],
      ['/project-details', 'Project Details'],
      ['/components', 'Building with Components'],
      ['/contribute', 'Contribute']
    ],
  }
}