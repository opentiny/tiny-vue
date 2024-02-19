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
        'en-US':
          '<p>Use `image-size` to set the size of the previewed image and use `round` to set whether to display a circle.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'show-hover',
      name: {
        'zh-CN': '图片悬浮',
        'en-US': 'Image floating'
      },
      desc: {
        'zh-CN': '<p>通过 `show-hover` 设置预览的图片的悬浮效果。</p>',
        'en-US': '<p>Use `show-hover` to set the floating effect of the previewed image.</p>'
      },
      codeFiles: ['show-hover.vue']
    },
    {
      demoId: 'auto-fit-container-size',
      name: {
        'zh-CN': '自适应容器尺寸',
        'en-US': 'Adaptive Container Size'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `fit` 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。<br> object-fit 说明<br>fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比<br>contain：被替换的内容大小可以填充元素的内容框<br> cover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框<br>none：被替换的内容尺寸不会被改变<br>scale-down：内容的尺寸就像是指定了 none 或 contain，取决于哪一个将导致更小的对象尺寸。</p>',
        'en-US':
          "<p>You can use the `fit` attribute to determine how an image adapts to the container box, which is the same as the object-fit attribute of the native CSS.<br>Object-fit Description<br>fill: The replaced content is scaled to maintain its aspect ratio when filling the element's content box.<br>cover: The size of the replaced content keeps its aspect ratio and fills the entire content box of the element.<br>none: The size of the content to be replaced is not changed.<br>scale-down: The size of the content is as if none or contain were specified, depending on which would result in a smaller object size.</p>"
      },
      codeFiles: ['auto-fit-container-size.vue']
    },
    {
      demoId: 'preview-src-list',
      name: {
        'zh-CN': '预览大图',
        'en-US': 'Preview Large Image'
      },
      desc: {
        'zh-CN': '<p>通过 `preview-src-list` 开启预览大图的功能，通过添加`show-index`开启图片序列号展示。</p>',
        'en-US':
          '<p>Use the `preview-src-list` command to enable the function of previewing large images, and add the `show-index` command to enable the display of image sequence numbers.</p>'
      },
      codeFiles: ['preview-src-list.vue']
    },
    {
      demoId: 'round',
      name: {
        'zh-CN': '尺寸类型',
        'en-US': 'Size Type'
      },
      desc: {
        'zh-CN': '<p>通过 `image-size` 设置预览的图片尺寸大小，通过 round 设置是否展示圆形。</p>',
        'en-US':
          '<p>Use `image-size` to set the size of the previewed image and use round to set whether to display a circle.</p>'
      },
      codeFiles: ['round.vue']
    },
    {
      demoId: 'custom-placeholder',
      name: {
        'zh-CN': '占位内容',
        'en-US': 'Placeholder Content'
      },
      desc: {
        'zh-CN': '<p>可通过 `slot = placeholder` 自定义占位内容。</p>',
        'en-US': '<p>You can use `slot = placeholder` to customize the placeholder.</p>'
      },
      codeFiles: ['custom-placeholder.vue']
    },
    {
      demoId: 'lazy-load',
      name: {
        'zh-CN': '懒加载',
        'en-US': 'Lazy loading'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `lazy` 开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 `scroll-container` 来设置滚动容器，若未定义，则为最近一个 `overflow` 值为 `auto` 或 `scroll` 的父元素。</p>',
        'en-US':
          '<p>You can use `lazy` to enable lazy loading. Images are loaded only when they are scrolled to the visible range. You can use `scroll-container` to set the scrolling container. If it is not defined, the scrolling container is the parent element whose latest `overflow` value is `auto` or `scroll`.</p>'
      },
      codeFiles: ['lazy-load.vue']
    },
    {
      demoId: 'preview-z-index',
      name: {
        'zh-CN': '图片预览层级',
        'en-US': 'Image preview level'
      },
      desc: {
        'zh-CN': '<p>可通过 `z-index` 设置预览图片的层级。<p>',
        'en-US': '<p>You can use `z-index` to set the preview image level.</p>'
      },
      codeFiles: ['preview-z-index.vue']
    },
    {
      demoId: 'load-event',
      name: {
        'zh-CN': '加载成功事件',
        'en-US': 'Loading success event'
      },
      desc: {
        'zh-CN': '<p>图片加载成功触发 `load` 事件。</p>',
        'en-US': '<p>The `load` event is triggered when the image is loaded successfully.</p>'
      },
      codeFiles: ['load-event.vue']
    },
    {
      demoId: 'load-error',
      name: {
        'zh-CN': '加载失败事件',
        'en-US': 'Loading failure event'
      },
      desc: {
        'zh-CN': '<p>图片加载失败触发 `error` 事件。</p>',
        'en-US': '<p>The `error` event is triggered when the image fails to be loaded.</p>'
      },
      codeFiles: ['load-error.vue']
    },
    {
      demoId: 'custom-load-failed-text',
      name: {
        'zh-CN': '加载失败',
        'en-US': 'Loading failed.'
      },
      desc: {
        'zh-CN': '<p>可通过 `slot = error` 自定义加载失败内容。</p>',
        'en-US': '<p>You can run the `slot = error` command to customize the content that fails to be loaded.</p>'
      },
      codeFiles: ['custom-load-failed-text.vue']
    },
    {
      demoId: 'preview-in-dialog',
      name: {
        'zh-CN': '对话框中预览图片',
        'en-US': 'Preview picture in dialog box'
      },
      desc: {
        'zh-CN': '<p>在 `dialog-box` 元素中嵌入 image 进行图片预览。</p>',
        'en-US': '<p>Embed the image in the `dialog-box` element for image preview.</p>'
      },
      codeFiles: ['preview-in-dialog.vue']
    },
    {
      demoId: 'thumbnail',
      name: {
        'zh-CN': '缩略图视图（非模态）',
        'en-US': 'Thumbnail view (non-modal)'
      },
      desc: {
        'zh-CN': '<p>通过 `is-thumbnail` 属性开启非模态缩略图视图的功能</p>',
        'en-US': '<p>Enable the modeless thumbnail view through the `is-thumbnail` property<</p>'
      },
      codeFiles: ['thumbnail.vue']
    },
    {
      demoId: 'thumbnail-modal-view',
      name: {
        'zh-CN': '缩略图视图（模态）',
        'en-US': 'Thumbnail view (modal)'
      },
      desc: {
        'zh-CN':
          '<p>通过 `modal-view` 属性开启模态缩略图视图的功能，可以通过modal-height属性设置模态框内对应的高度，默认值为 400。</p>',
        'en-US':
          '<p>You can use the `modal-view` attribute to enable the modal thumbnail view function. You can use the modal-height attribute to set the height of the modal box. The default value is 400.</p>'
      },
      codeFiles: ['thumbnail-modal-view.vue']
    },
    {
      demoId: 'menu-view',
      name: {
        'zh-CN': '目录视图（非模态）',
        'en-US': 'Catalog View (Nonmodal)'
      },
      desc: {
        'zh-CN': '<p>通过 `is-menu-view` 属性开启非模态目录视图的功能</p>',
        'en-US': '<p>Use the `is-menu-view` attribute to enable the non-modal catalog view.</p>'
      },
      codeFiles: ['menu-view.vue']
    },
    {
      demoId: 'menu-modal-view',
      name: {
        'zh-CN': '目录视图（模态）',
        'en-US': 'Catalog View (modal)'
      },
      desc: {
        'zh-CN':
          '<p>通过 `modal-view` 属性开启模态目录视图的功能，可以通过`modal-height`属性设置模态框内对应的高度，默认值为 400。</p>',
        'en-US':
          '<p>Use the `modal-view` attribute to enable the modal directory view function. You can use the `modal-height` attribute to set the height of the modal box. The default value is 400.</p>'
      },
      codeFiles: ['menu-modal-view.vue']
    },
    {
      demoId: 'thumbnail-viewer-bg',
      name: {
        'zh-CN': '缩略图视图',
        'en-US': 'Thumbnail View'
      },
      desc: {
        'zh-CN': '<p>缩略图视图背景<p>',
        'en-US': '<p>Thumbnail View Background</p>'
      },
      codeFiles: ['thumbnail-viewer-bg.vue']
    },
    {
      demoId: 'menu-viewer-bg',
      name: {
        'zh-CN': '目录视图背景',
        'en-US': 'Catalog View Background'
      },
      desc: {
        'zh-CN': '<p>目录视图</p>',
        'en-US': '<p>Table of Contents View</p>'
      },
      codeFiles: ['menu-viewer-bg.vue']
    },
    {
      demoId: 'thumbnail-rename',
      name: {
        'zh-CN': '视图文件名-缩略图',
        'en-US': 'View File Name - Thumbnail'
      },
      desc: {
        'zh-CN': '<p>视图文件名-缩略图</p>',
        'en-US': '<p>View File Name - Thumbnail</p>'
      },
      codeFiles: ['thumbnail-rename.vue']
    },
    {
      demoId: 'menu-rename',
      name: {
        'zh-CN': '视图文件名-目录',
        'en-US': 'View File Name - Directory'
      },
      desc: {
        'zh-CN': '<p>视图文件名-目录</p>',
        'en-US': '<p>View File Name - Directory</p>'
      },
      codeFiles: ['menu-rename.vue']
    }
  ]
}
