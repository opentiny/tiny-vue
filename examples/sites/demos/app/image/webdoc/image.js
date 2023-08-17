export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>src</code> 设置预览的图片路径。</p>\n',
        'en-US': '<p>Set the preview image path through <code>src</code>. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'auto-fit-container-size',
      'name': { 'zh-CN': '自适应容器尺寸', 'en-US': 'Adaptive Container Size' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>fit</code> 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。</p>\n<div class="tip custom-block"><p class="custom-block-title">object-fit 说明</p>\n<p>fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比\ncontain：被替换的内容大小可以填充元素的内容框\ncover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框\nnone：被替换的内容尺寸不会被改变\nscale-down：内容的尺寸就像是指定了none 或 contain，取决于哪一个将导致更小的对象尺寸。</p>\n</div>\n',
        'en-US':
          '<p>You can use the <code>fit</code> attribute to determine how an image adapts to the container box, which is the same as the object-fit attribute of the native CSS. </p>\n<div class="tip custom-block"><p class="custom-block-title">object-fit Description</p>\n<p>fill: The replaced content will be scaled to maintain its aspect ratio when filling the content box of the element\ncontain: The size of the replaced content can fill the content box of the element\ncover: The size of the replaced content maintains its aspect ratio while filling the entire content box of the element\nnone: The size of the replaced content is not changed\nscale-down: The size of the content is as if none or contain were specified, depending on which would result in a smaller object size. </p>\n</div>\n'
      },
      'codeFiles': ['auto-fit-container-size.vue']
    },
    {
      'demoId': 'custom-placeholder',
      'name': { 'zh-CN': '占位内容', 'en-US': 'Placeholder' },
      'desc': {
        'zh-CN': '<p>可通过 <code>slot = placeholder</code> 自定义占位内容。</p>\n',
        'en-US': '<p>You can use <code>slot = placeholder</code> to customize the placeholder. </p>\n'
      },
      'codeFiles': ['custom-placeholder.vue']
    },
    {
      'demoId': 'lazy-load',
      'name': { 'zh-CN': '懒加载', 'en-US': 'Lazy Loading' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>lazy</code> 开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 <code>scroll-container</code> 来设置滚动容器，若未定义，则为最近一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素。</p>\n<div class="tip custom-block"><p class="custom-block-title">提示</p>\n<p>lazy 懒加载的图片必须是远程的图片，不支持静态图片懒加载。</p>\n</div>\n',
        'en-US':
          '<p>You can use <code>lazy</code> to enable lazy loading. Images are loaded only when they are scrolled to the visible range. You can use <code>scroll-container</code> to set the scroll container. If the scroll container is not defined, the scroll container is the parent element whose latest <code>overflow</code> value is <code>auto</code> or <code>scroll</code>. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Prompt</p>\n<p>The lazy loaded image must be a remote image. Lazy loading of static images is not supported. </p>\n</div>\n'
      },
      'codeFiles': ['lazy-load.vue']
    },
    {
      'demoId': 'preview-src-list',
      'name': { 'zh-CN': '预览大图', 'en-US': 'Preview Large Image' },
      'desc': {
        'zh-CN': '<p>通过 <code>preview-src-list</code> 开启预览大图的功能。</p>\n',
        'en-US': '<p>Enable the large image preview function through <code>preview-src-list</code> . </p>\n'
      },
      'codeFiles': ['preview-src-list.vue']
    },
    {
      'demoId': 'preview-z-index',
      'name': { 'zh-CN': '图片预览层级', 'en-US': 'Image preview level' },
      'desc': {
        'zh-CN': '<p>可通过 <code>z-index</code> 设置预览图片的层级。</p>\n',
        'en-US': '<p>You can use <code>z-index</code> to set the level of the preview image. </p>\n'
      },
      'codeFiles': ['preview-z-index.vue']
    },
    {
      'demoId': 'load-event',
      'name': { 'zh-CN': '加载成功事件', 'en-US': 'Load success event' },
      'desc': {
        'zh-CN': '<p>图片加载成功触发 <code>load</code> 事件。</p>\n',
        'en-US': '<p>The <code>load</code> event is triggered when the image is successfully loaded. </p>\n'
      },
      'codeFiles': ['load-event.vue']
    },
    {
      'demoId': 'load-error',
      'name': { 'zh-CN': '加载失败事件', 'en-US': 'Loading failure event' },
      'desc': {
        'zh-CN': '<p>图片加载失败触发 <code>error</code> 事件。</p>\n',
        'en-US': '<p>The <code>error</code> event is triggered when the image fails to be loaded. </p>\n'
      },
      'codeFiles': ['load-error.vue']
    },
    {
      'demoId': 'custom-load-failed-text',
      'name': { 'zh-CN': '加载失败', 'en-US': 'Loading failed' },
      'desc': {
        'zh-CN': '<p>可通过 <code>slot = error</code> 自定义加载失败内容。</p>\n',
        'en-US': '<p>You can set <code>slot = error</code> to customize the content that fails to be loaded. </p>\n'
      },
      'codeFiles': ['custom-load-failed-text.vue']
    },
    {
      'demoId': 'preview-in-dialog',
      'name': { 'zh-CN': '对话框中预览图片', 'en-US': 'Preview image in a dialog box' },
      'desc': {
        'zh-CN': '<p>在 <code>dialog-box</code> 元素中嵌入 <code>image</code> 进行图片预览。</p>\n',
        'en-US': '<p>Embed <code>image</code> in the <code>dialog-box</code> element for image preview. </p>\n'
      },
      'codeFiles': ['preview-in-dialog.vue']
    }
  ],
  apis: [
    {
      'name': 'image',
      'type': 'component',
      'properties': [
        {
          'name': 'src',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置预览图片路径;图片源，同原生',
            'en-US': 'Set the path of the preview image. Image source, which is the same as the original image source'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'fit',
          'type': 'String ',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '确定图片如何适应容器框，同原生 object-fit;该属性的可选值为 fill / contain / cover / none / scale-down',
            'en-US':
              'Determine how the image adapts to the container frame, which is the same as the native object-fit. The optional values of this attribute are fill / contain / cover / none / scale-down'
          },
          'demoId': 'auto-fit-container-size'
        },
        {
          'name': 'lazy',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否开启懒加载', 'en-US': 'Whether to enable lazy loading' },
          'demoId': 'lazy-load'
        },
        {
          'name': 'scroll-container',
          'type': 'String , HTMLElement',
          'defaultValue': '该属性的默认值为 最近一个 overflow 值为 auto 或 scroll 的父元素',
          'desc': {
            'zh-CN': '开启懒加载后，监听 scroll 事件的容器',
            'en-US': 'Container for listening to scroll events after lazy loading is enabled.'
          },
          'demoId': 'lazy-load'
        },
        {
          'name': 'preview-src-list',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '开启图片预览功能', 'en-US': 'Enable the image preview function.' },
          'demoId': 'preview-src-list'
        },
        {
          'name': 'z-index',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 2000',
          'desc': { 'zh-CN': '设置图片预览的 z-index', 'en-US': 'Set the z-index of the image preview' },
          'demoId': 'preview-z-index'
        }
      ],
      'events': [
        {
          'name': 'load',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片加载成功触发', 'en-US': 'The image is loaded successfully.' },
          'demoId': 'load-event'
        },
        {
          'name': 'error',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片加载失败触发', 'en-US': 'Image loading failure triggered' },
          'demoId': 'load-error'
        }
      ],
      'slots': [
        {
          'name': 'placeholder',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片未加载的占位内容', 'en-US': 'Placeholder content that is not loaded to the image' },
          'demoId': 'custom-placeholder'
        },
        {
          'name': 'error',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '加载失败的内容', 'en-US': 'Content that fails to be loaded' },
          'demoId': 'custom-load-failed-text'
        }
      ]
    }
  ]
}
