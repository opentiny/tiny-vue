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
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'action',
      name: {
        'zh-CN': '操作列表模式',
        'en-US': 'Operation list mode'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 为 `action` 启用操作列表模式，设置 `title` 显示提示语。</p>',
        'en-US': '<p>Set `type` to `action` to enable the operation list mode and set `title` to display prompts.</p>'
      },
      codeFiles: ['action.vue']
    },
    {
      demoId: 'show',
      name: {
        'zh-CN': '显示隐藏',
        'en-US': 'Show Hide'
      },
      desc: {
        'zh-CN':
          '<p>show-header: 显示头部，默认值为 true；- show-search: 显示头部搜索功能，默认值为 true；- show-footer: 显示底部，默认值为 false；</p>',
        'en-US':
          '<p>show-header: displays the header. The default value is true. - show-search: displays the header search function. The default value is true. - show-footer: displays the bottom. The default value is false</p>'
      },
      codeFiles: ['show.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层1',
        'en-US': 'Mask layer one'
      },
      desc: {
        'zh-CN': '<p>添加 `mask` 属性可以关闭遮罩层，默认值为 `true` 。</p>',
        'en-US': '<p>bAdd the `mask` attribute to turn off the mask layer. The default value is `true`.</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'mask-event',
      name: {
        'zh-CN': '遮罩层2',
        'en-US': 'Mask layer two'
      },
      desc: {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 `mask-closable` 为 `false` 后将禁用该功能，默认值为 `true`。</p>',
        'en-US':
          '<p>After the default pop-up window is opened, you can click the mask layer to close the pop-up window. If `mask-closable` is set to `false`, this function is disabled. The default value is `true`</p>'
      },
      codeFiles: ['mask-event.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'slot'
      },
      desc: {
        'zh-CN':
          '<p>- header: 头部插槽，默认显示头部，设置 show-header="true" 时有效；- header-left: 头部左侧插槽，默认显示搜索功能；- header-right: 头部右侧插槽，默认显示关闭功能；- footer: 头部插槽，默认隐藏底部，设置 show-footer="true" 时有效；</p>',
        'en-US':
          '<p> header: header slot. The header is displayed by default. This parameter is valid only when show-header is set to true. - header-left: slot on the left of the header. The search function is displayed by default. - header-right: slot on the right side of the head. The function is disabled by default. - footer: head slot. The bottom is hidden by default. This parameter is valid only when show-footer is set to true.</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'ellipsis',
      name: {
        'zh-CN': '超出省略',
        'en-US': 'ellipsis'
      },
      desc: {
        'zh-CN': '<p>添加属性 `ellipsis` 选项内容会超出隐藏。</p>',
        'en-US': '<p>Added attribute `ellipsis` content meeting super surviving.</p>'
      },
      codeFiles: ['ellipsis.vue']
    }
  ],
  apis: [
    {
      'name': 'ActionSheet',
      'type': 'component',
      'props': [
        {
          'name': 'custom-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义 class 样式',
            'en-US': 'Customize the class style.'
          }
        },
        {
          'name': 'flex',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '设置弹性布局,默认为 true',
            'en-US': 'Sets the elastic layout. The default value is true.'
          }
        },
        {
          'name': 'mask',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示遮罩层，默认值为 true',
            'en-US': 'Indicates whether to display the mask layer. The default value is true.'
          },
          'demoId': 'mask'
        },
        {
          'name': 'mask-closable',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '单击遮罩层是否关闭弹窗，默认值为 true',
            'en-US':
              'Indicates whether to close the pop-up window when you click the mask layer. The default value is true.'
          },
          'demoId': 'mask-event'
        },
        {
          'name': 'menus',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '操作列表，设置 type 为 action 启用操作列表模式时有效。',
            'en-US': 'Operation list. This parameter is valid only when type is set to action.'
          },
          'demoId': 'action'
        },
        {
          'name': 'show-footer',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示底部，默认值为 false',
            'en-US': 'Indicates whether to display the bottom. The default value is false.'
          },
          'demoId': 'show'
        },
        {
          'name': 'show-header',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示头部，默认值为 true',
            'en-US': 'Indicates whether to display the header. The default value is true.'
          },
          'demoId': 'show'
        },
        {
          'name': 'title',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '面板标题',
            'en-US': 'Panel Title'
          },
          'demoId': 'actoin'
        },
        {
          'name': 'type',
          'type': 'Array[string]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置 type 为 action 启用操作列表模式',
            'en-US': 'Set type to action to enable the operation list mode.'
          },
          'demoId': 'action'
        },
        {
          'name': 'v-model',
          'type': 'Number | String | Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '双向数据绑定',
            'en-US': 'bidirectional data binding'
          }
        },
        {
          'name': 'visible',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否弹出面板',
            'en-US': 'Indicates whether to display the panel.'
          }
        }
      ],
      'methods': [
        {
          'name': 'actionSelectOption',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选择列表项，设置 type 为 action 启用操作列表模式时有效',
            'en-US':
              'Select a list item and set type to action. This parameter is valid only when the operation list mode is enabled.'
          }
        },
        {
          'name': 'close',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭面板',
            'en-US': 'Close the panel.'
          },
          'demoId': 'action'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击列表选项时触发，设置 type 为 action 启用操作列表模式时有效。',
            'en-US':
              'This event is triggered when a list option is clicked. This event is valid only when type is set to action and the operation list mode is enabled.'
          },
          'demoId': 'action'
        },
        {
          'name': 'close',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭面板时触发的事件。',
            'en-US': 'Event triggered when a panel is closed.'
          },
          'demoId': 'action'
        },
        {
          'name': 'confirm',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击底部按钮时触发，设置 show-footer 为 true 时有效。',
            'en-US':
              'This event is triggered when the bottom button is clicked. It is valid only when show-footer is set to true.'
          }
        },
        {
          'name': 'update:visible',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '面板显示或隐藏时触发',
            'en-US': 'riggered when the panel is displayed or hidden'
          },
          'demoId': 'slot'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件默认插槽，设置 type 为 action 启用操作列表模式会提供参数 data 列表项和 index 列表索引。',
            'en-US':
              'Component default slot. Set type to action to enable the operation list mode. The parameter data list item and index list index are provided.'
          },
          'demoId': 'slot'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '底部插槽，设置 show-footer 为 true 时有效',
            'en-US': 'Bottom slot. This parameter is valid only when show-footer is set to true.'
          },
          'demoId': 'slot'
        },
        {
          'name': 'header-left',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '头部左侧插槽，设置 show-header 为 true 时有效',
            'en-US': 'Slot on the left of the header. This parameter is valid only when show-header is set to true.'
          },
          'demoId': 'slot'
        },
        {
          'name': 'header-right ',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '头部右侧插槽，设置 show-header 为 true 时有效',
            'en-US': 'Slot on the right of the header. This parameter is valid only when show-header is set to true.'
          },
          'demoId': 'slot'
        }
      ]
    }
  ]
}
