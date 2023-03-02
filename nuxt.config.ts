import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        head: {
            title: 'A Better Nuxt 3 Starter',
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
        '@pinia/nuxt',
        '@vueuse/nuxt',
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

    vite: {
        plugins: []
    }
})
