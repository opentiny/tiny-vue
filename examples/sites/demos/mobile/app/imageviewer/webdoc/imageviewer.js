export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'events-change-close',
      name: {
        'zh-CN': '切换与关闭事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>切换与关闭事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['events-change-close.vue']
    },
    {
      demoId: 'image-full-current',
      name: {
        'zh-CN': '全屏显示',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>全屏显示</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['image-full-current.vue']
    },
    {
      demoId: 'slot-index',
      name: {
        'zh-CN': '自定义下标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>自定义下标</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-index.vue']
    },
    {
      demoId: 'start-position',
      name: {
        'zh-CN': '初始起始位置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>初始起始位置</p>'
      },
      codeFiles: ['start-position.vue']
    }
  ],
  apis: [
    {
      name: 'ImageViewer', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'arrow-show',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示图片切换按钮,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'image-full-current'
        },
        {
          name: 'async-close',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否开启异步关闭，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'close-show',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示关闭按钮，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'image-full-current'
        },
        {
          name: 'image-full-current',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否全屏显示，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'image-full-current'
        },
        {
          name: 'preview-visible',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片预览显示隐藏</p>',
            'en-US': 'display different button'
          },
          demoId: 'image-full-current'
        },
        {
          name: 'show-index',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示当前图片下标，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'slot-index'
        },
        {
          name: 'start-position',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>图片预览起始位置索引,该属性默认为0</p>',
            'en-US': 'display different button'
          },
          demoId: 'start-position'
        },
        {
          name: 'tool-show',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示工具栏钮，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'url-list',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>配置图片路径</p>',
            'en-US': 'display different button'
          },
          demoId: 'image-full-current'
        },
        {
          name: 'z-index',
          type: 'Number',
          defaultValue: '2000',
          desc: {
            'zh-CN': '<p>设置图片预览的 z-index，该属性默认为2000</p>',
            'en-US': 'display different button'
          },
          demoId: 'slot-index'
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>切换当前图片时触发，{ index:切换时图片索引, url: 切换时图片链接 }</p>',
            'en-US': 'Click'
          },
          demoId: 'events-change-close'
        },
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>close，{ index: 关闭时图片索引, url: 关闭时图片链接 }</p>',
            'en-US': 'Click'
          },
          demoId: 'events-change-close'
        }
      ],
      slots: [
        {
          name: 'index',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义页码内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-index'
        }
      ]
    }
  ]
}
