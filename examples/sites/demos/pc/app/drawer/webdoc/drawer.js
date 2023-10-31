export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': '' },
      'desc': { 'zh-CN': '<p>详细用法参考如下示例</p>', 'en-US': '' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'placement',
      'name': { 'zh-CN': '抽屉方向', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>添加 <code>placement</code> 属性设置抽屉的方向，可选值有 `left|right|top|bottom`，默认值为 `right`。</p>',
        'en-US': ''
      },
      'codeFiles': ['placement.vue']
    },
    {
      'demoId': 'width',
      'name': { 'zh-CN': '抽屉宽度', 'en-US': '' },
      'desc': { 'zh-CN': '<p>添加<code>width</code> 属性设置抽屉的宽度，默认值为 `500px`</p>', 'en-US': '' },
      'codeFiles': ['width.vue']
    },
    {
      'demoId': 'dragable',
      'name': { 'zh-CN': '宽度拖拽功能', 'en-US': '' },
      'desc': { 'zh-CN': '<p>添加 <code>dragable</code> 属性开启抽屉宽度拖拽功能，默认值为 false</p>', 'en-US': '' },
      'codeFiles': ['dragable.vue']
    },
    {
      'demoId': 'mask',
      'name': { 'zh-CN': '遮罩层显示隐藏', 'en-US': '' },
      'desc': { 'zh-CN': '<p>添加 <code>mask</code> 属性可以控制遮罩层显示隐藏，默认值为 true 。</p>', 'en-US': '' },
      'codeFiles': ['mask.vue']
    },
    {
      'demoId': 'mask-closable',
      'name': { 'zh-CN': '点击遮罩层关闭抽屉', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 <code>mask-closable</code> 为 false 后将禁用该功能，默认值为 true 。</p>',
        'en-US': ''
      },
      'codeFiles': ['mask-closable.vue']
    },
    {
      'demoId': 'show-close',
      'name': { 'zh-CN': '关闭图标显示', 'en-US': '' },
      'desc': { 'zh-CN': '<p><code>show-close</code> 控制显示关闭图标，默认值为 true</p>', 'en-US': '' },
      'codeFiles': ['show-close.vue']
    },
    {
      'demoId': 'show-header',
      'name': { 'zh-CN': '头部显示', 'en-US': '' },
      'desc': { 'zh-CN': '<p><code>show-header</code> 控制显示头部，默认值为 true</p>', 'en-US': '' },
      'codeFiles': ['show-header.vue']
    },
    {
      'demoId': 'show-footer',
      'name': { 'zh-CN': '底部显示', 'en-US': '' },
      'desc': { 'zh-CN': '<p><code>show-footer</code> 控制显示底部，默认值为 false</p>', 'en-US': '' },
      'codeFiles': ['show-footer.vue']
    },
    {
      'demoId': 'z-index',
      'name': { 'zh-CN': '自定义堆叠顺序', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>z-index</code> 属性设置自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['z-index.vue']
    },
    {
      'demoId': 'default-slot',
      'name': { 'zh-CN': '默认插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>自定义抽屉主体内容</p>', 'en-US': '' },
      'codeFiles': ['default-slot.vue']
    },
    {
      'demoId': 'header-slot',
      'name': { 'zh-CN': '头部插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>自定义头部内容，当<code>show-header</code>取值为 true 时有效</p>', 'en-US': '' },
      'codeFiles': ['header-slot.vue']
    },
    {
      'demoId': 'header-right-slot',
      'name': { 'zh-CN': '头部右侧插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>自定义头部右侧内容，当<code>show-header</code>取值为 true 时有效</p>', 'en-US': '' },
      'codeFiles': ['header-right-slot.vue']
    },
    {
      'demoId': 'footer-slot',
      'name': { 'zh-CN': '底部插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>底部插槽，默认隐藏底部，设置 :show-footer="true" 时有效<p>', 'en-US': '' },
      'codeFiles': ['footer-slot.vue']
    },
    {
      'demoId': 'close-event',
      'name': { 'zh-CN': '关闭事件', 'en-US': '' },
      'desc': { 'zh-CN': '<p>关闭抽屉事件</p>', 'en-US': '' },
      'codeFiles': ['close-event.vue']
    },
    {
      'demoId': 'confirm-event',
      'name': { 'zh-CN': '确认事件', 'en-US': '' },
      'desc': { 'zh-CN': '<p>确认事件，设置 :show-footer="true" 时有效</p>', 'en-US': '' },
      'codeFiles': ['confirm-event.vue']
    }
  ],
  apis: [
    {
      'name': 'drawer',
      'type': 'component',
      'properties': [
        {
          'name': 'visible',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '控制抽屉显示与关闭', 'en-US': '' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': 'right',
          'desc': { 'zh-CN': '添加 placement 属性设置抽屉的方向，可选值有 left|right|top|bottom', 'en-US': '' },
          'demoId': 'placement'
        },
        {
          'name': 'width',
          'type': 'string',
          'defaultValue': '500px',
          'desc': { 'zh-CN': '设置抽屉的宽度', 'en-US': '' },
          'demoId': 'width'
        },
        {
          'name': 'dragable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '控制抽屉开启或关闭宽度拖拽功能', 'en-US': '' },
          'demoId': 'dragable'
        },
        {
          'name': 'mask',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '控制遮罩层显示隐藏 ', 'en-US': '' },
          'demoId': 'mask'
        },
        {
          'name': 'mask-closable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 mask-closable 为 false 后将禁用该功能',
            'en-US': ''
          },
          'demoId': 'mask-closable'
        },
        {
          'name': 'show-close',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '控制关闭图标显示', 'en-US': '' },
          'demoId': 'show-close'
        },
        {
          'name': 'show-header',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '控制头部显示', 'en-US': '' },
          'demoId': 'show-header'
        },
        {
          'name': 'show-footer',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '控制底部显示', 'en-US': '' },
          'demoId': 'show-footer'
        },
        {
          'name': 'z-index',
          'type': 'number',
          'defaultValue': '该属性的默认值为 2000',
          'desc': { 'zh-CN': '自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）', 'en-US': '' },
          'demoId': 'z-index'
        }
      ],
      'events': [
        {
          'name': 'close',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': { 'zh-CN': '关闭抽屉事件', 'en-US': '' },
          'demoId': 'close-event'
        },
        {
          'name': 'confirm',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': { 'zh-CN': '确认事件，设置 :show-footer="true" 时有效', 'en-US': '' },
          'demoId': 'confirm-event'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': '' },
          'demoId': 'default-slot'
        },
        {
          'name': 'header',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '头部插槽', 'en-US': '' },
          'demoId': 'header-slot'
        },
        {
          'name': 'header-right',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '头部右侧插槽', 'en-US': '' },
          'demoId': 'header-right-slot'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部插槽', 'en-US': '' },
          'demoId': 'footer-slot'
        }
      ]
    }
  ]
}
