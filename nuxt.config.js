import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Websome',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/normalize-min.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [{ src: '~/plugins/carousel', ssr: false }],
  

  /*
  ** Nuxt.js modules
  */
 modules: [
  
],

server: {
  port: 8000, // default: 3000
  host: '0.0.0.0', // default: localhost
},


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
