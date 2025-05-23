import colors from 'vuetify/es5/util/colors';
const axios = require('axios');

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - AxPEP_Frontend',
        title: 'AxPEP_Frontend',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
            },
        ],
        script: [
            {
                type: 'text/javascript',
                src: '/js/ChemDoodleWeb.js',
            },
            {
                type: 'text/javascript',
                src: '/uis/ChemDoodleWeb-uis.js',
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['static/css/ChemDoodleWeb.css', 'static/uis/jquery-ui-1.11.4.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/axios',
        '~/plugins/api',
        { src: '~/plugins/notification', ssr: false },
        { src: '~/plugins/analytics', ssr: false },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        // '@nuxtjs/pwa',
        'nuxt-leaflet',
        '@neneos/nuxt-animate.css',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL,
    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
    },

    // Tailwindcss module configuration
    tailwindcss: {
        // Options
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        analyze: true,
        cache: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        optimizeCSS: true,
    },
};
