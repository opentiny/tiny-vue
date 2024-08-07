import UnocssIcons from '@unocss/preset-icons'
import presetTinyUno from './tiny-uno/index'
import { defineConfig } from '@unocss/vite'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.js$/, /\.ts$/, /\.vue$/, /\.html$/, /\.jsx$/, /\.tsx$/] // 增加js ,ts扫描
    }
  },
  presets: [
    presetTinyUno({
      isRem: false,
      prefix: 'ti-'
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
        display: 'inline-block'
      },
      collections: {
        ti: {
          copy: '<svg viewBox="0 0 512 512"><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path d="M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>',
          code: '<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368l128-112l-128-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96l-96 320"></path></svg>',
          codeslash:
            '<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368l128-112l-128-112"></path></svg>',
          check:
            '<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg>',
          playground:
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M14.854 1.854a.5.5 0 1 0-.708-.708l-8 8L6 10l.854-.146l8-8z" fill="currentColor"></path><path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-1 0v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h5.005a.5.5 0 0 0 0-1H4.5z" fill="currentColor"></path></g></svg>'
        }
      }
    })
  ]
})
