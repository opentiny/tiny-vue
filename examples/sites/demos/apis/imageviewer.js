export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'ImageViewer',
      type: 'component',
      props: [
        {
          name: 'arrow-show',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示图片切换按钮,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'image-full-current'
        },
        {
          name: 'async-close',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否开启异步关闭，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'close-show',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示关闭按钮，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'image-full-current'
        },
        {
          name: 'image-full-current',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否全屏显示，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'image-full-current'
        },
        {
          name: 'preview-visible',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片预览显示隐藏</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'image-full-current'
        },
        {
          name: 'show-index',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示当前图片下标，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-index'
        },
        {
          name: 'start-position',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>图片预览起始位置索引,该属性默认为0</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'start-position'
        },
        {
          name: 'tool-show',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示工具栏钮，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'url-list',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>配置图片路径</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'image-full-current'
        },
        {
          name: 'z-index',
          type: 'Number',
          defaultValue: '2000',
          desc: {
            'zh-CN': '<p>设置图片预览的 z-index，该属性默认为2000</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-index'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>切换当前图片时触发，{ index:切换时图片索引, url: 切换时图片链接 }</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'events-change-close'
        },
        {
          name: 'close',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>close，{ index: 关闭时图片索引, url: 关闭时图片链接 }</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'events-change-close'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'index',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义页码内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-index'
        }
      ]
    }
  ]
}
