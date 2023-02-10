import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
    server: {
        host: true
    },
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'public')}/`,
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },

    },
    plugins: [vue(), Pages(), Layouts(), Components()],
})

// https://vitejs.dev/config/
