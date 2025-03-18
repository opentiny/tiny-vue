import UnocssIcons from '@unocss/preset-icons'
import presetTinyUno from './tiny-uno/index'

export default {
  include: [/\.js$/, /\.ts$/, /\.vue$/, /\.html$/, /\.jsx$/, /\.tsx$/], // 增加js ,ts扫描
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
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M14.854 1.854a.5.5 0 1 0-.708-.708l-8 8L6 10l.854-.146l8-8z" fill="currentColor"></path><path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-1 0v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h5.005a.5.5 0 0 0 0-1H4.5z" fill="currentColor"></path></g></svg>',
          cloud:
            '<svg class="ti-mr4" viewBox="0 0 1024 1024" width="16" height="16"><path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z m36.3 281c-23.4 23.4-54.5 36.3-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3-23.4-23.4-36.3-54.6-36.3-87.7 0-28 9.1-54.3 26.2-76.3 16.7-21.3 40.2-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"></path></svg>',
          'cloud-full':
            '<svg t="1742260979776" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6563" width="200" height="200"><path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z m36.3 281c-23.4 23.4-54.5 36.3-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3-23.4-23.4-36.3-54.6-36.3-87.7 0-28 9.1-54.3 26.2-76.3 16.7-21.3 40.2-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z" p-id="6564" fill="#5cb300"></path></svg>'
        }
      }
    })
  ]
}
