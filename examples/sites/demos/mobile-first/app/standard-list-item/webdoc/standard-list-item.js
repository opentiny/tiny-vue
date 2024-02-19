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
        'zh-CN':
          '<p>通过设置`:show-image="true"`可以显示图片区域<br>`user-head` 属性可以配置头像的类型、大小、背景色等，具体可查看 UserHead 用户头像组件的属性配置<br>传入`icon` 属性可以将头像区域替换为 icon 图标</p>',
        'en-US': '<p>You can set `:show-image="true"` to display the image area.<br>The `user-head` attribute can be used to configure the avatar type, size, and background color. For details, see the attribute configuration of the UserHead avatar component. <br>The `icon` attribute can be transferred to replace the avatar area with an icon.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'type',
      name: {
        'zh-CN': '设置类型',
        'en-US': 'Setting Type'
      },
      desc: {
        'zh-CN': '<p>通过 `type` 属性可以设置标准列表项的模式，支持 card 和 list 两种模式。</p>',
        'en-US': '<p>You can use the `type` attribute to set the mode of a standard list item. The card and list modes are supported.</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'content-slot',
      name: {
        'zh-CN': '内容区插槽',
        'en-US': 'Content Area Slot'
      },
      desc: {
        'zh-CN': '<p>通过 `#default` 可以设置内容区插槽，`#tag` 可以设置标签插槽。</p>',
        'en-US': '<p>You can use `#default` to set the content area slot and `#tag` to set the label slot.</p>'
      },
      codeFiles: ['content-slot.vue']
    },
    {
      demoId: 'icon-click-event',
      name: {
        'zh-CN': '操作列按钮点击事件',
        'en-US': 'Clicking a button in the operation column'
      },
      desc: {
        'zh-CN': '<p>通过 `icon-click` 给按钮加点击事件。</p>',
        'en-US': '<p>Add a click event to a button through `icon-click`.</p>'
      },
      codeFiles: ['icon-click-event.vue']
    },
    {
      demoId: 'icon-disabled',
      name: {
        'zh-CN': '操作列按钮隐藏与禁用',
        'en-US': 'Hide or Disable Buttons in the Operation Column'
      },
      desc: {
        'zh-CN': '<p>操作列配置项 `options` 中添加属性 hidden 可以隐藏按钮，可以通过 disabled 属性禁用操作按钮。</p>',
        'en-US': '<p>The hidden attribute is added to the `options` configuration item in the Operation column to hide the button. The disabled attribute can be used to disable the operation button.</p>'
      },
      codeFiles: ['icon-disabled.vue']
    },
    {
      demoId: 'image-operate-slot',
      name: {
        'zh-CN': '头像和操作列插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `#image` 可以设置头像插槽，通过 `#operate` 可以设置操作列插槽。</p>',
        'en-US': '<p>Avatar and Action Column Slots</p>'
      },
      codeFiles: ['image-operate-slot.vue']
    }
  ],
  apis: [
    {
      'name': 'StandardListItem',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '列表数据源',
            'en-US': 'List Data Sources'
          },
          'demoId': ''
        },
        {
          'name': 'icon',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'icon配置项',
            'en-US': 'icon configuration item'
          },
          'demoId': ''
        },
        {
          'name': 'icon-more',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '更多按钮图标，可传入一个svg图标对象进行替换',
            'en-US': 'More button icons can be replaced by a svg icon object.'
          },
          'demoId': ''
        },
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '操作按钮配置项',
            'en-US': 'Operation button configuration item'
          },
          'demoId': ''
        },
        {
          'name': 'selected',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否选中列表项，为true表示选中列表项。',
            'en-US': 'Indicates whether to select a list item. The value true indicates that a list item is selected.'
          },
          'demoId': ''
        },
        {
          'name': 'show-image',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示图片',
            'en-US': 'Show Pictures'
          },
          'demoId': ''
        },
        {
          'name': 'tag',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标签配置项',
            'en-US': 'Label configuration items'
          },
          'demoId': ''
        },
        {
          'name': 'title-option',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标题配置项',
            'en-US': 'Title configuration item'
          },
          'demoId': ''
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '类型，支持 card 和 list 两种模式',
            'en-US': 'Indicates the type. The options are card and list.'
          },
          'demoId': 'type'
        },
        {
          'name': 'user-head',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '用户头像配置项',
            'en-US': 'User avatar configuration items'
          },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'icon-click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '操作栏按钮点击事件',
            'en-US': 'Operation bar button click event'
          },
          'demoId': 'icon-click-event'
        }
      ],
      'slot': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '组件默认插槽', 'en-US': 'Component Default Slot' },
          'demoId': 'content-slot'
        },
        {
          'name': 'image',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片插槽', 'en-US': 'Picture Slot' },
          'demoId': 'image-operate-slot'
        },
        {
          'name': 'operate',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '操作栏插槽', 'en-US': 'Action Bar Slots' },
          'demoId': 'image-operate-slot'
        },
        {
          'name': 'tag',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标签插槽', 'en-US': 'Label Slot' },
          'demoId': 'content-slot'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题插槽', 'en-US': 'Header Slot' },
          'demoId': ''
        }
      ],
    },
  ]
}
