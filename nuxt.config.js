const pkg = require('./package')
module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: '芸朵时光艺术工作室',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        name: 'keywords',
        content: '云时光,艺术,少儿美术,美术,孟汐,卢婉婷,方彬彬,周晓林'
      },
      {
        name: 'author',
        content: '方彬彬,binbinecust@163.com'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: 'https://unpkg.com/animate.css@3.5.2/animate.min.css',
        type: 'text/css',
        rel: 'stylesheet'
      }
    ]
    // script: [{
    //   src: 'https://cdn.jsdelivr.net/npm/lib-flexible@0.3.2/flexible.min.js',
    //   type: 'text/javascript',
    //   charset: 'utf-8',
    //   defer: 'defer'
    // }],
    // __dangerouslyDisableSanitizers: ['script']
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'red'
  },

  router: {
    middleware: 'router-mid'
  },

  /*
   ** Global CSS
   */
  css: [
    'iview/dist/styles/iview.css',
    './assets/theme/index.less',
    'mint-ui/lib/style.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iview',
    '@/plugins/mint-ui',
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    '@/plugins/axios'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-imagemin'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:7001',
      pathRewrite: {
        '^/api/': '/api/'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
          },
          {
            test: /\.ico$/,
            loader: 'uri-loader',
            exclude: /(node_modules)/
          }
        )
        console.log(config.output.publicPath, 'config.output.publicPath')
        // config.output.publicPath = ''
      }
    },
    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 100
        }
      }
    }
  }
}
