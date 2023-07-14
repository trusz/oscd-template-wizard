// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        port: 57718,
    },
    resolve: {
        alias: {
          'locales': './locales',
        },
    },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'oscd-template-wizard',
            // the proper extensions will be added
            fileName: 'oscd-template-wizard',
            formats: ['es'],
        },
    },
})