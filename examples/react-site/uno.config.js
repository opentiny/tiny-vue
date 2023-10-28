import UnocssIcons from '@unocss/preset-icons';
import presetTinyUno from './tiny-uno/index';

export default {
  include: [/\.js$/, /\.ts$/, /\.vue$/, /\.html$/, /\.jsx$/, /\.tsx$/], // 增加js ,ts扫描
  presets: [
    presetTinyUno({
      isRem: false,
      prefix: '',
      // breakpoints: {
      //   xs: '0px',
      //   sm: '100px',
      //   md: '204px',
      //   lg: '3001px',
      // },
    }),
    // 非常多的图标，默认可以引用，https://icones.js.org/
    UnocssIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        ti: {
          copy: '<svg viewBox="0 0 512 512"><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path d="M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>',
          code: '<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368l128-112l-128-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96l-96 320"></path></svg>',
          codeslash:
            '<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368l128-112l-128-112"></path></svg>',
          check:
            '<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg>',
        },
      },
    }),
  ],
};
