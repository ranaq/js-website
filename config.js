module.exports = {
  siteTitle: 'Sterzinger Consulting', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#E5E5E5',
  manifestThemeColor: '#E5E5E5',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon1.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Sterzinger Consulting',
  lastName: '',
  // social
  socialLinks: [
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jordan-sterzinger',
    },
    {
      icon: 'fa-envelop-square',
      name: 'Email',
      url: 'google.com',
    }

  ],
  // do we want email icon or actual address displayed?
  email: 'jordansterzinger@yahoo.com',

};
