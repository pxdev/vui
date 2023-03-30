import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Vui Starter',
            link: [{rel: 'icon', type: 'image/*', href: '/favicon.svg'}]
        }
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: [
        '@/assets/scss/main.scss',
        'remixicon/fonts/remixicon.css',
    ],

    modules: [
        "@vuestic/nuxt",
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-purgecss',
        [
            '@intlify/nuxt3',
            {
                localeDir: 'locales',
                vueI18n: {
                    locale: 'en'
                }
            }
        ]
    ],

    vuestic: {
        config: {
            colors: {
                variables: {
                    // Default colors
                    primary: "#23e066",
                    secondary: "#002c85",
                    success: "#40e583",
                    info: "#2c82e0",
                    danger: "#e34b4a",
                    warning: "#ffc200",
                    gray: "#babfc2",
                    dark: "#34495e",
                },
            },
        }
    },

    build: {
        transpile: ['@vuepic/vue-datepicker']
    },



    vite: {
        plugins: [
        ],
    }
})
