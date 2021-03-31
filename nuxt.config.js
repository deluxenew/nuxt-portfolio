const debug = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default {
   mode: 'universal',
   /*
   ** Headers of the page
   */
   head: {
      title: process.env.npm_package_name || '',
      meta: [
         {charset: 'utf-8'},
         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
      ],
      link: [
         {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
   },
   /*
   ** Customize the progress-bar color
   */
   loading: {color: '#fff'},
   /*
   ** Global CSS
   */
   css: [
      '~/assets/scss/common.scss'
   ],
   /*
   ** Plugins to load before mounting the App
   */
   plugins: [],
   /*
   ** Nuxt.js dev-modules
   */
   buildModules: [],
   styleResources: {
      scss: [
         '~/assets/scss/common.scss'
      ]
   },
   /*
   ** Nuxt.js modules
   */
   modules: [
      '@nuxtjs/style-resources',
      ['nuxt-font-loader-strategy', {
         ignoreLighthouse: true,
         ignoredEffectiveTypes: ['2g', 'slow-2g'],
         prefetchCount: 0,
         fonts: [
            {
               fileExtensions: ['woff', 'ttf', 'eot'],
               fontFamily: 'TTNorms',
               fontFaces: [
                  {
                     preload: true,
                     src: '@/assets/fonts/TTNorms-Bold',
                     fontWeight: 700,
                     fontStyle: 'normal',
                     fontDisplay: 'auto'
                  },
                  {
                     preload: true,
                     src: '@/assets/fonts/TTNorms-Regular',
                     fontWeight: 400,
                     fontStyle: 'normal',
                     fontDisplay: 'auto'
                  },
                  {
                     preload: false,
                     src: '@/assets/fonts/TTNorms-Medium',
                     fontWeight: 500,
                     fontStyle: 'normal',
                     fontDisplay: 'auto'
                  },
                  {
                     preload: false,
                     src: '@/assets/fonts/TTNorms-Light',
                     fontWeight: 300,
                     fontStyle: 'normal',
                     fontDisplay: 'auto'
                  }
               ]
            },
         ]
      }]
   ],
   /*
   ** Build configuration
   */
   build: {
      extend(config) {
         config.resolve.alias['@cmp'] = '@@/components'
         config.resolve.alias['@imgs'] = '@@/assets/img/ds'
         config.resolve.alias['@store'] = '@@/assets/DSContent.js'
         config.resolve.alias['@const'] = '@@/constants'
      },
      analyze: debug,
      // extractCSS: !debug,
      optimizeCSS: !debug,
      splitChunks: {
         layouts: true,
         pages: true,
         commons: true
      },
      optimization: {
         minimize: !debug,
         splitChunks: {
            maxSize: 249856 * 2,
            cacheGroups: {
               default: false,
               styles: {
                  name: 'styles',
                  test: /\.(css|scss|vue)$/,
                  chunks: 'all',
                  enforce: true
               },
               common: {
                  name: 'common',
                  test: /[\\/]assets[\\/]scss[\\/]common\.scss/,
                  chunks: 'all',
                  enforce: true
               }
            }
         }
      }
   }
}
