export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
          通过 <code>src</code> 设置图片路径。<br>
          通过 <code>fit</code> 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。<br>
          <div class="tip custom-block">
            <p class="custom-block-title">object-fit 说明</p>
            <p>fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比<br>
               contain：被替换的内容大小可以填充元素的内容框<br>
               cover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框<br>
               none：被替换的内容尺寸不会被改变<br>
               scale-down：内容的尺寸就像是指定了none 或 contain，取决于哪一个将导致更小的对象尺寸。
            </p>
          </div>
        `,
        'en-US': `
          Set the image path using <code>src</code>. <br>
          The <code>fit</code> attribute determines how the image will fit into the container frame, the same as the object-fit attribute of native css. <br>
          <div class="tip custom-block">
          <p class="custom-block-title">object-fit Description </p>
          <p>fill: The content being replaced will be scaled to maintain its aspect ratio as it fills the element's content box <br>
          contain: The size of the content to fill the element's content box <br>
          cover: The size of the content being replaced maintains its aspect ratio while filling the element's entire content box <br>
          none: The size of the content to be replaced will not be changed <br>
          scale-down: The size of the content is specified as either none or contain, depending on which will result in a smaller object size.
          </p>
          </div>
        `
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'lazy',
      'name': { 'zh-CN': '懒加载', 'en-US': 'Lazy Loading' },
      'desc': {
        'zh-CN': `
        通过 <code>lazy</code> 开启懒加载功能，当图片滚动到可视范围内才会加载。<br>
        通过 <code>scroll-container</code> 来设置滚动容器，若未定义，则为最近一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素。</p>\n
          <div class="tip custom-block">
            <p>lazy 懒加载的图片必须是远程的图片，不支持静态图片懒加载。</p>
          </div>
        `,
        'en-US': `
          Enable lazy loading with <code>lazy</code>, and the image will only load when it is in visual range. <br>
          Set the scroll container by <code>scroll-container</code>. If not defined, Is the parent element of the last <code>overflow</code> value <code>auto</code> or <code>scroll</code>. </p>\n
          <div class="tip custom-block">
          <p>lazy Lazy loading images must be remote images. Lazy loading of static images is not supported. </p>
          </div>
        `
      },
      'codeFiles': ['lazy.vue']
    },
    {
      'demoId': 'preview',
      'name': { 'zh-CN': '预览大图', 'en-US': 'Preview Large Image' },
      'desc': {
        'zh-CN': `
          通过 <code>preview-src-list</code> 属性 ，传入一组图片url的数组，点击图片后，会进入预览大图的模式。<br>
          通过 <code>z-index</code> 设置预览图片的元素的z-index。
        `,
        'en-US': `
          Pass in an array of image urls via the <code>preview-src-list</code> property, and click on the image to enter the mode of previewing a large image. <br>
          Set the z-index of the element of the preview image by <code>z-index</code>.
        `
      },
      'codeFiles': ['preview.vue']
    },
    {
      'demoId': 'preview-in-dialog',
      'name': { 'zh-CN': '对话框中预览图片', 'en-US': 'Preview image in a dialog box' },
      'desc': {
        'zh-CN': '在 <code>dialog-box</code> 元素中嵌入 <code>image</code> 进行图片预览。',
        'en-US': 'Preview the image by embedding <code>image</code> in the <code>dialog-box</code> element. '
      },
      'codeFiles': ['preview-in-dialog.vue']
    },

    {
      'demoId': 'slot',
      'name': { 'zh-CN': '插槽', 'en-US': 'Slots' },
      'desc': {
        'zh-CN': `
          通过 <code> placeholder</code> 插槽，定义图片在加载中时的占位内容。通常由于图片加载快，会看不到这个插槽的出现,只有大图片时，会看到加载中的插槽。 <br>
          通过 <code> error </code> 插槽，定义图片在加载失败后的占位内容。 
        `,
        'en-US': `
          The <code> placeholder</code> slot defines the placeholder content for images when loaded. Usually, because the image loads quickly, you will not see the appearance of this slot, only a large image, you will see the loading slot. <br>
          Using the <code> error </code> slot, define the placeholder content of the image after loading failure.
        `
      },
      'codeFiles': ['slot.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Events' },
      'desc': {
        'zh-CN': `
          <code>load</code> 事件: 图片加载成功触发 。<br>
          <code>error</code> 事件: 图片加载失败触发 。<br>
        `,
        'en-US': `
          <code>load</code> event: The image is successfully loaded. <br>
          <code>error</code> event: The image failed to be loaded. <br>
        `
      },
      'codeFiles': ['events.vue']
    }
  ],
  apis: [
    {
      'name': 'image',
      'type': 'component',
      'props': [
        {
          'name': 'src',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置预览图片路径',
            'en-US': 'Set the path of the preview image.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'fit',
          'type': `'fill' | 'contain' | 'cover' | 'none' | 'scale-down '`,
          'defaultValue': '',
          'desc': {
            'zh-CN': '确定图片如何适应容器框，同原生 object-fit',
            'en-US':
              'Determine how the image adapts to the container frame, which is the same as the native object-fit. '
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'lazy',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否开启懒加载', 'en-US': 'Whether to enable lazy loading' },
          'demoId': 'lazy'
        },
        {
          'name': 'scroll-container',
          'type': 'string | HTMLElement',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '开启懒加载后，监听 scroll 事件的容器,该属性的默认值为 最近一个 overflow 值为 auto 或 scroll 的父元素',
            'en-US':
              'After lazy loading is enabled, the container listens for the scroll event. The default value of this property is the parent element of the last overflow value being auto or scroll'
          },
          'demoId': 'lazy'
        },
        {
          'name': 'preview-src-list',
          'type': 'string[]',
          'defaultValue': '[]',
          'desc': { 'zh-CN': '开启图片预览功能', 'en-US': 'Enable the image preview function.' },
          'demoId': 'preview'
        },
        {
          'name': 'z-index',
          'type': 'number',
          'defaultValue': '2000',
          'desc': {
            'zh-CN': '设置图片预览外层元素的 z-index',
            'en-US': 'Set the z-index of the image preview wrapper'
          },
          'demoId': 'preview'
        }
      ],
      'events': [
        {
          'name': 'load',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片加载成功触发', 'en-US': 'When the image loading success triggered.' },
          'demoId': 'events'
        },
        {
          'name': 'error',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片加载失败触发', 'en-US': 'When the Image loading failure triggered' },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'placeholder',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '加载中的占位内容插槽', 'en-US': 'Placeholder Slot that is not loaded to the image' },
          'demoId': 'slot'
        },
        {
          'name': 'error',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '加载失败的占位内容插槽', 'en-US': 'Error Slot that fails to be loaded' },
          'demoId': 'slot'
        }
      ]
    }
  ]
}
