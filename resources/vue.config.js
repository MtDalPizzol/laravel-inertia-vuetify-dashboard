const path = require('path')

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,

  pages: {
    main: {
      entry: 'src/main.js',
      template: 'src/templates/main.blade.php',
      filename: path.resolve(__dirname, `views/${process.env.VUE_APP_ENVIRONMENT_VIEWS_DIRECTORY}app.blade.php`)
    }
  },

  css: {
    extract: true
  },

  devServer: {
    public: process.env.VUE_APP_PUBLIC_PATH,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    writeToDisk: (filePath) => {
      return /\.blade\.php$/.test(filePath)
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
