export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '通过 <code>src</code> 设置图片路径。<br>' +
          ' 通过 <code>fit</code> 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。<br>' +
          '<p class="custom-block-title">object-fit 说明</p>' +
          '<p>fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比<br>' +
          'contain：被替换的内容大小可以填充元素的内容框<br>' +
          'cover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框<br>' +
          'none：被替换的内容尺寸不会被改变<br>' +
          'scale-down：内容的尺寸就像是指定了none 或 contain，取决于哪一个将导致更小的对象尺寸。',
        'en-US':
          'Use <code>src</code> to set the image path.<br>' +
          'The <code>fit</code> attribute determines how the image fits into the container box, which is the same as the object-fit attribute of the native CSS.<br>' +
          '<p class="custom-block-title">object-fit description</p>' +
          "<p>fill:The replaced content is scaled to maintain its aspect ratio when filling the element's content box.<br>" +
          'contain:The size of the replaced content fills the content box of the element.<br>' +
          'cover:The size of the replaced content maintains its aspect ratio and fills the entire content box of the element.<br>' +
          'none:The size of the replaced content is not changed.<br>' +
          'scale-down:The size of the content is like specifying none or contain, depending on which would result in a smaller object size.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-placeholder',
      name: {
        'zh-CN': '占位内容',
        'en-US': 'Placeholder Content'
      },
      desc: {
        'zh-CN': '通过 <code>slot = placeholder</code> 自定义占位内容。',
        'en-US': 'Set <code>slot = placeholder</code> to customize the placeholder content.'
      },
      codeFiles: ['custom-placeholder.vue']
    },
    {
      demoId: 'lazy',
      name: {
        'zh-CN': '懒加载',
        'en-US': 'Lazy Loading'
      },
      desc: {
        'zh-CN':
          '通过 <code>lazy</code> 开启懒加载功能，当图片滚动到可视范围内才会加载。<br>' +
          '通过 <code>scroll-container</code> 来设置滚动容器，若未定义，则为最近一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素。' +
          '<p>lazy 懒加载的图片必须是远程的图片，不支持静态图片懒加载。</p>',
        'en-US':
          'Enable lazy loading with <code>lazy</code>, and the image will only load when it is in visual range. <br>' +
          'Set the scroll container by <code>scroll-container</code>.If not defined, Is the parent element of the last <code>overflow</code> value <code>auto</code> or <code>scroll</code>.<br>' +
          '<p>lazy Lazy loading images must be remote images. Lazy loading of static images is not supported. </p>'
      },
      codeFiles: ['lazy.vue']
    },
    {
      demoId: 'preview',
      name: {
        'zh-CN': '预览大图',
        'en-US': 'Preview Large Image'
      },
      desc: {
        'zh-CN':
          '通过 <code>preview-src-list</code> 属性 ，传入一组图片 url 的数组，点击图片后，会进入预览大图的模式。<br>' +
          '通过 <code>z-index</code> 设置预览图片的元素的 z-index。<br>' +
          '通过添加 <code>show-index</code> 开启图片序号展示。<br>',
        'en-US':
          'Pass an array of image URLs through the <code>preview-src-list</code> attribute. After you click an image, the system enters the large image preview mode.<br>' +
          'Use <code>z-index</code> to set the z-index of the element of the preview image.<br>' +
          'Add <code>show-index</code> to enable the image sequence number display.<br>'
      },
      codeFiles: ['preview.vue']
    },
    {
      demoId: 'keep-style',
      name: {
        'zh-CN': '保持图片样式属性',
        'en-US': 'Preserve Picture Style Properties'
      },
      desc: {
        'zh-CN': '通过 <code>keep-style</code> 属性可以让图片切换时样式保持一致，图片的缩放、旋转、边距等状态不重置。',
        'en-US':
          'The <code>keep-style</code> attribute can be used to keep the style of an image consistent when the image is switched. The zoom, rotation, and margin status of the image is not reset.'
      },
      codeFiles: ['keep-style.vue']
    },
    {
      demoId: 'index-change',
      name: {
        'zh-CN': '图片切换事件',
        'en-US': 'Image switchover event'
      },
      desc: {
        'zh-CN': '图片切换时触发 <code>change-index</code> 事件，参数返回当前图片的 index。',
        'en-US':
          'The <code>change-index</code> event is triggered when the image is switched. The index of the current image is returned.'
      },
      codeFiles: ['index-change.vue']
    },
    {
      demoId: 'count-slot',
      name: {
        'zh-CN': '图片计数插槽',
        'en-US': 'Picture Count Slot'
      },
      desc: {
        'zh-CN': '通过 <code>count</code> 设置图片计数插槽。',
        'en-US': 'Set the image count slot via <code>count</code>.'
      },
      codeFiles: ['count-slot.vue']
    },
    {
      demoId: 'preview-in-dialog',
      name: {
        'zh-CN': '对话框中预览图片',
        'en-US': 'Preview image in a dialog box'
      },
      desc: {
        'zh-CN': '在 <code>dialog-box</code> 元素中嵌入 <code>image</code> 进行图片预览。',
        'en-US': 'Preview the image by embedding <code>image</code> in the <code>dialog-box</code> element. '
      },
      codeFiles: ['preview-in-dialog.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN':
          '通过 <code> placeholder</code> 插槽，定义图片在加载中时的占位内容。通常由于图片加载快，会看不到这个插槽的出现,只有大图片时，会看到加载中的插槽。 <br>' +
          ' 通过 <code> error </code> 插槽，定义图片在加载失败后的占位内容。',
        'en-US':
          'The <code> placeholder</code> slot defines the placeholder content for images when loaded. Usually, because the image loads quickly, you will not see the appearance of this slot, only a large image, you will see the loading slot. <br>' +
          'Using the <code> error </code> slot, define the placeholder content of the image after loading failure.'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN': '<code>load</code> 事件: 图片加载成功触发 。<br><code>error</code> 事件: 图片加载失败触发 。',
        'en-US':
          '<code>load</code> event: The image is successfully loaded. <br>' +
          '<code>error</code> event: The image failed to be loaded. '
      },
      codeFiles: ['events.vue']
    }
  ]
}
