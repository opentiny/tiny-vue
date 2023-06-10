export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过 `image-size` 设置预览的图片尺寸大小，通过`round`设置是否展示圆形。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'show-hover',
      name: {
        'zh-CN': '图片悬浮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `show-hover` 设置预览的图片的悬浮效果。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-hover.vue']
    },
    {
      demoId: 'auto-fit-container-size',
      name: {
        'zh-CN': '自适应容器尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `fit` 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。<br> object-fit 说明<br>fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比<br>contain：被替换的内容大小可以填充元素的内容框<br> cover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框<br>none：被替换的内容尺寸不会被改变<br>scale-down：内容的尺寸就像是指定了 none 或 contain，取决于哪一个将导致更小的对象尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['auto-fit-container-size.vue']
    },
    {
      demoId: 'preview-src-list',
      name: {
        'zh-CN': '预览大图',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `preview-src-list` 开启预览大图的功能，通过添加`show-index`开启图片序列号展示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['preview-src-list.vue']
    }
  ],
  apis: []
}
