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
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/axios', '~/plugins/api', { src: '~/plugins/notification', ssr: false }],

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
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL,
    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            light: true,
            themes: {
                // dark: {
                //     primary: colors.blue.darken2,
                //     accent: colors.grey.darken3,
                //     secondary: colors.amber.darken3,
                //     info: colors.teal.lighten1,
                //     warning: colors.amber.base,
                //     error: colors.deepOrange.accent4,
                //     success: colors.green.accent3,
                // },
                light: {
                    primary: '#3f51b5',
                    secondary: '#b0bec5',
                    accent: '#8c9eff',
                    error: '#b71c1c',
                },
            },
        },
    },

    // Tailwindcss module configuration
    tailwindcss: {
        // Options
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    generate: {
        routes(callback) {
            axios
                .get('http://159.203.14.63/retrieve')
                .then(res => {
                    const routes = res.data.map(retrieve => {
                        console.log(retrieve);
                        return '/retrieve/' + retrieve.email;
                    });
                    callback(null, routes);
                })
                .catch(callback);
        },
    },
};
