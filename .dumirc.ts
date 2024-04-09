import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/',
  publicPath: '/cy_dumi_app/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cy',
    logo: 'https://avatars.githubusercontent.com/u/40606690?v=4',
    footer: 'Made with ❤ cy',
  },
  headScripts: [
    'https://code.jquery.com/jquery-3.7.1.js',
    `if (window.$) {
      console.log('jQuery is already bound to window object.');
    } else {
      // 如果没有绑定，则绑定 jQuery
      window.$ = window.jQuery;
      console.log('jQuery has been bound to window object.');
    }`,
  ],
  exportStatic: {},
  history: {
    type: 'hash',
  },
});
