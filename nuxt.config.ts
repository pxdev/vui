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
        '@nuxt/devtools',
        '@vueuse/nuxt',
        '@nuxt/content',
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

    content : {
      highlight:  {
          theme : 'github-dark'
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
