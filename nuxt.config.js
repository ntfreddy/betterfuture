export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        // swiper style
        'swiper/css/swiper.css'
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{
            src: "@/plugins/locomotive-scroll.client",
            mode: "client"
        },
        {
            src: '@/plugins/vue-awesome-swiper.client',
            mode: "client"
        },
        {
            src: "@/plugins/vuelidate"
        },
        {
            src: "@/plugins/vue-session.client",
            mode: "client"
        },
        {
            src: "@/plugins/vue-load-script.client",
            mode: "client"
        },

        /* {
            src: '@/plugins/firebase',
        }*/
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        '@nuxtjs/firebase',
    ],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        babel: {
            compact: true
        },
    },
    generate: {

    },
    firebase: {
        config: {

        },
        onFirebaseHosting: true,
        services: {
            realtimeDb: true,
        },
        messaging: {}

    }
}