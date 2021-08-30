const personaApiUrl = process.env.PERSONA_API_URL || 'persona backup url??'
console.log('PAPI', personaApiUrl)
export default {
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'dev-dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/split-layout.js', mode: 'client' },
    { src: '~plugins/persona-init.js', mode: 'client' },
    { src: '~plugins/nuxt-codemirror-plugin.js', mode: 'client' },
  ],

  proxy: {
    '/api/persona': {
      target: personaApiUrl,
      pathRewrite: {
        '^/api/persona': ''
      }
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'codemirror/lib/codemirror.css',
    // merge css
    'codemirror/addon/merge/merge.css',
    // theme css
    'codemirror/theme/base16-dark.css',
    '~assets/style.css',
    '~assets/style-tokens.css',
    '~assets/dev.css'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'FormTagsPlugin',
      'InputGroupPlugin',
      'LayoutPlugin',
      'ModalPlugin',
      'ToastPlugin',
      'ModalPlugin'
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin', 'VBTogglePlugin']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
