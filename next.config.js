const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withImages({
    esModule: true,
    cssLoaderOptions: {
      url: false
    }
  })
)
