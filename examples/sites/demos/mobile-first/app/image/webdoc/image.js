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
    },
    {
      demoId: 'round',
      name: {
        'zh-CN': '尺寸类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `image-size` 设置预览的图片尺寸大小，通过 round 设置是否展示圆形。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['round.vue']
    },
    {
      demoId: 'custom-placeholder',
      name: {
        'zh-CN': '占位内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `slot = placeholder` 自定义占位内容。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-placeholder.vue']
    },
    {
      demoId: 'lazy-load',
      name: {
        'zh-CN': '懒加载',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `lazy` 开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 `scroll-container` 来设置滚动容器，若未定义，则为最近一个 `overflow` 值为 `auto` 或 `scroll` 的父元素。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['lazy-load.vue']
    },
    {
      demoId: 'preview-z-index',
      name: {
        'zh-CN': '图片预览层级',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `z-index` 设置预览图片的层级。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['preview-z-index.vue']
    },
    {
      demoId: 'load-event',
      name: {
        'zh-CN': '加载成功事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>图片加载成功触发 `load` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['load-event.vue']
    },
    {
      demoId: 'load-error',
      name: {
        'zh-CN': '加载失败事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>图片加载失败触发 `error` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['load-error.vue']
    },
    {
      demoId: 'custom-load-failed-text',
      name: {
        'zh-CN': '加载失败',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `slot = error` 自定义加载失败内容。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-load-failed-text.vue']
    },
    {
      demoId: 'preview-in-dialog',
      name: {
        'zh-CN': '对话框中预览图片',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>在 `dialog-box` 元素中嵌入 image 进行图片预览。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['preview-in-dialog.vue']
    },
    {
      demoId: 'thumbnail',
      name: {
        'zh-CN': '缩略图视图（非模态）',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `is-thumbnail` 属性开启非模态缩略图视图的功能<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['thumbnail.vue']
    },
    {
      demoId: 'thumbnail-modal-view',
      name: {
        'zh-CN': '缩略图视图（模态）',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `modal-view` 属性开启模态缩略图视图的功能，可以通过modal-height属性设置模态框内对应的高度，默认值为 400。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['thumbnail-modal-view.vue']
    },
    {
      demoId: 'menu-view',
      name: {
        'zh-CN': '目录视图（非模态）',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `is-menu-view` 属性开启非模态目录视图的功能<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['menu-view.vue']
    },
    {
      demoId: 'menu-modal-view',
      name: {
        'zh-CN': '目录视图（模态）',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `modal-view` 属性开启模态目录视图的功能，可以通过`modal-height`属性设置模态框内对应的高度，默认值为 400。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['menu-modal-view.vue']
    },
    {
      demoId: 'thumbnail-viewer-bg',
      name: {
        'zh-CN': '缩略图视图',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>缩略图视图背景<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['thumbnail-viewer-bg.vue']
    },
    {
      demoId: 'menu-viewer-bg',
      name: {
        'zh-CN': '目录视图背景',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>目录视图<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['menu-viewer-bg.vue']
    },
    {
      demoId: 'thumbnail-rename',
      name: {
        'zh-CN': '视图文件名-缩略图',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>视图文件名-缩略图<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['thumbnail-rename.vue']
    },
    {
      demoId: 'menu-rename',
      name: {
        'zh-CN': '视图文件名-目录',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>视图文件名-目录<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['menu-rename.vue']
    }
  ],
  apis: []
}
