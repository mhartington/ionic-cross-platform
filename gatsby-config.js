module.exports = {
  pathPrefix: '/ionic-cross-platform',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '',
      },
    },
  ],
}