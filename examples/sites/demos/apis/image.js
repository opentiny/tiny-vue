export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'image',
      type: 'component',
      props: [
        {
          name: 'fit',
          type: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down '",
          defaultValue: '',
          desc: {
            'zh-CN': '确定图片如何适应容器大小',
            'en-US': 'Determine how the image adapts to the container frame '
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'image-size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置预览的图片的大小',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'lazy',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否懒加载',
            'en-US': 'Whether to enable lazy loading'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'lazy',
          mfDemo: ''
        },
        {
          name: 'preview-src-list',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '指定预览大图时的图片列表',
            'en-US': 'Specifies the list of images to use when previewing a large image'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'preview',
          mfDemo: ''
        },
        {
          name: 'preview-visible',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '开启移动端预览大图的功能',
            'en-US': 'Enable the function of previewing large images on mobile devices.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'round',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 round 设置是否展示圆形',
            'en-US': 'Use round to set whether to display a circle.'
          },
          mode: ['mobile-first'],
          mfDemo: 'round'
        },
        {
          name: 'scroll-container',
          type: 'string | HTMLElement',
          defaultValue: '',
          desc: {
            'zh-CN':
              '指定滚动容器。启用懒加载时，监听滚动容器的 scroll 事件来懒加载。\n                该属性用于设置图片的容器,当未设置容器时，默认会取最近一个 overflow 值为 auto 或 scroll 的父元素做为滚动容器\n              ',
            'en-US':
              'Specifies the scroll container. When lazy loading is enabled, the scroll event of the image component container is monitored for lazy loading. \n                This property is used to set the image container. When the container is not set, the default will take the parent element of the last overflow value as auto or scroll as the scroll container \n              '
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'show-hover',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置预览的图片的悬浮效果',
            'en-US': 'Sets the floating effect of the previewed image.'
          },
          mode: ['mobile-first'],
          mfDemo: 'show-hover'
        },
        {
          name: 'show-index',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '开启图片序列号展示',
            'en-US': 'Enable the display of image serial numbers.'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'preview-src-list',
          pcDemo: 'preview'
        },
        {
          name: 'src',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置图片路径',
            'en-US': 'Set the path of the preview image.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'z-index',
          type: 'number',
          defaultValue: '2000',
          desc: {
            'zh-CN': '图片预览功能时，设置最外层元素的 z-index',
            'en-US': 'For the image preview function, set the z-index of the outermost element'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'keep-style',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '保持图片样式属性',
            'en-US': 'Preserve Picture Style Properties'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'keep-style',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'delete',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '图片删除触发',
            'en-US': 'Triggered by image deletion.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'error',
          type: '(ev) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '图片加载失败后触发的事件，参数为原生的失败事件',
            'en-US': 'When the Image loading failure triggered,the parameter is a native failure event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'load',
          type: '(ev) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '图片加载成功的触发的事件，参数为原生的成功事件',
            'en-US': 'When the image loading success triggered,the parameter is a native success event.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'error',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '图片加载失败的占位内容插槽',
            'en-US': 'Error Slot that fails to be loaded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: ''
        },
        {
          name: 'placeholder',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '图片加载的占位内容插槽',
            'en-US': 'Placeholder Slot that is not loaded to the image'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot',
          mfDemo: ''
        },
        {
          name: 'count',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '设置图片计数插槽',
            'en-US': 'Set Picture Count Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'count-slot',
          mfDemo: ''
        }
      ]
    }
  ]
}
