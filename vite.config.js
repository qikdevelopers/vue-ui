import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve('./src/components/index.js'),
      name: '@qikdev/vue-ui',
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue', 
        '@qikdev/sdk',
        'ace-builds',
        'vue3-ace-editor',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        // exports: 'named',
        globals: {
          vue: 'Vue',
          'ace-builds':'ace-builds',
          'vue3-ace-editor':'vue3-ace-editor',
          '@qikdev/sdk':'@qikdev/sdk',
        },
      },
    },

  },

  plugins: [
    vue(), 
    libCss()
  ],
  css: {
        preprocessorOptions: {
            scss: {
                // example : additionalData: `@import "./src/design/styles/variables";`
                // dont need include file extend .scss
                // additionalData: `@import "${path.resolve('./src/styles/variables.scss')}";`
                additionalData: `$primary: blue !default;`
            },
        },
    },
});