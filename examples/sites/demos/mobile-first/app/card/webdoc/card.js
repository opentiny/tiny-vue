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
      demoId: 'card-type',
      name: {
        'zh-CN': '卡片类型',
        'en-US': 'Card Type'
      },
      desc: {
        'zh-CN': '<p>支持 `text image video logo` 4 种类型</p>',
        'en-US': '<p>Four types of `text image video logo` are supported.</p>'
      },
      codeFiles: ['card-type.vue']
    },
    {
      demoId: 'card-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>支持`mini small medium large`4 个尺寸的卡片</p>',
        'en-US': '<p>Supports `mini small medium large` cards of four sizes</p>'
      },
      codeFiles: ['card-size.vue']
    },
    {
      demoId: 'card-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabling'
      },
      desc: {
        'zh-CN': '<p>通过设置属性`disabled`禁用卡片</p>',
        'en-US': '<p>Disable the card by setting the property `disabled`</p>'
      },
      codeFiles: ['card-disabled.vue']
    },
    {
      demoId: 'card-group',
      name: {
        'zh-CN': '卡片组',
        'en-US': 'Card Group'
      },
      desc: {
        'zh-CN': '<p>`card-group` 与 `card` 结合一起使用，提供响应式布局的能力</p>',
        'en-US': '<p>`card-group` is used in conjunction with `card` to provide responsive layout capabilities</p>'
      },
      codeFiles: ['card-group.vue']
    },
    {
      demoId: 'card-status',
      name: {
        'zh-CN': '卡片状态',
        'en-US': 'Card Status'
      },
      desc: {
        'zh-CN': '<p>支持 `success warning alerting danger` 4 种状态</p>',
        'en-US': '<p>The following four states are supported: `success warning alerting danger`</p>'
      },
      codeFiles: ['card-status.vue']
    },
    {
      demoId: 'check-type-checkbox',
      name: {
        'zh-CN': '单选&多选',
        'en-US': 'Single-choice & multiple-choice'
      },
      desc: {
        'zh-CN':
            '<p>通过属性`check-type="checkbox"`设置卡片多选,通过属性`check-type="radio"`设置卡片单选，需同时设置 label。注意：目前仅支持在 text 类型开启多选</p>',
        'en-US': '<p>Use the `check-type="checkbox"` attribute to set multiple card selections, and use the `check-type="radio"` attribute to set single card selections. You need to set labels at the same time. Note: Currently, multiple selections can be enabled only for the text type.</p>'
      },
      codeFiles: ['check-type-checkbox.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义 class',
        'en-US': 'Customized class'
      },
      desc: {
        'zh-CN': '<p>属性`card-class`可自定义卡片的 class，属性`height`可设置卡片内容区的高度。</p>',
        'en-US': '<p>The `card-class` attribute can be used to customize the card class, and the `height` attribute can be used to set the height of the card content area.</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'operate-bar',
      name: {
        'zh-CN': '操作栏选项配置',
        'en-US': 'Operation Bar Option Configuration'
      },
      desc: {
        'zh-CN': '<p>通过`options`属性配置操作栏，支持按钮的禁用（`disabled: true`）与隐藏（`hidden: true`）</p>',
        'en-US': '<p>Use the `options` attribute to configure the operation bar. Buttons can be disabled (`disabled: true`) and hidden (`hidden: true`).</p>'
      },
      codeFiles: ['operate-bar.vue']
    },
    {
      demoId: 'card-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`change` 事件：卡片勾选和取消勾选时触发;`icon-click` 事件：操作栏按钮点击时触发</p>',
        'en-US': '<p>`change` event: triggered when a card is selected or deselected; `icon-click` event: triggered when a button in the operation bar is clicked</p>'
      },
      codeFiles: ['card-events.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN': '<p>组件提供`default、title-left、title-right、footer`4 个插槽</p>',
        'en-US': '<p>The component provides four slots: `default, title-left, title-right, and footer`</p>'
      },
      codeFiles: ['slot.vue']
    }
  ],
  apis: [
    {
      'name': 'Card',
      'type': 'component',
      'props': [
        {
          'name': 'auto-width',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '卡片的宽度是否自动撑开，设置后将不再给卡片设置固定宽度',
            'en-US': 'Indicates whether the card width is automatically expanded. After the setting, the card width is not fixed.'
          },
          'demoId': 'card-auto-width'
        },
        {
          'name': 'check-type',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置卡片单选、多选，单选/radio；多选/checkbox，需同时设置 label。',
            'en-US': 'Set single-choice, multiple-choice, single-choice, and radio. Multi-choice/checkbox. You need to set the label at the same time.'
          },
          'demoId': 'check-type-checkbox'
        },
        {
          'name': 'custom-class',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '卡片的class',
            'en-US': 'Class of the card'
          },
          'demoId': 'card-custom-class'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '卡片禁用',
            'en-US': 'Card disabled'
          },
          'demoId': 'card-disabled'
        },
        {
          'name': 'height',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '卡片内容区域的高度',
            'en-US': 'Height of the card content area'
          },
          'demoId': 'card-height'
        },
        {
          'name': 'icon-more',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '更多按钮图标，可传入一个svg图标对象进行替换',
            'en-US': 'More button icons can be replaced by a svg icon object.'
          },
          'demoId': 'card-icon-more'
        },
        {
          'name': 'label',
          'type': 'String / Number',
          'defaultValue': '',
          'desc': { 'zh-CN': 'checkbox或radio的label',
            'en-US': 'Checkbox or radio label.'
          },
          'demoId': 'card-label'
        },
        {
          'name': 'options ',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '操作按钮配置',
            'en-US': 'Operation Button Configuration.'
          },
          'demoId': 'operate-bar'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '尺寸，支持large、medium、small、mini 4个尺寸，默认值为medium',
            'en-US': 'Size. The options are large, medium, small, and mini. The default value is medium.'
          },
          'demoId': 'card-size'
        },
        {
          'name': 'src',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '图片或者视频的地址',
            'en-US': 'Address of a picture or video.'
          },
          'demoId': 'card-src'
        },
        {
          'name': 'status',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '卡片状态，支持 success、warning、alerting、danger 4 种状态',
            'en-US': 'Card status. The value can be success, warning, alerting, or dangerous.'
          },
          'demoId': 'card-status'
        },
        {
          'name': 'title',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '卡片的标题',
            'en-US': 'The title of the card.'
          },
          'demoId': 'card-title'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置卡片类型，支持 text、image、video、logo 4 种类型。',
            'en-US': 'Set the card type. The options are text, image, video, and logo.'
          },
          'demoId': 'card-type'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '组件选中/取消选中事件',
            'en-US': 'Component check/uncheck event'
          },
          'demoId': 'card-events'
        },
        {
          'name': 'icon-click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '操作栏按钮点击事件',
            'en-US': 'Operation bar button click event'
          },
          'demoId': 'card-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '组件默认插槽', 'en-US': 'Component Default Slot' },
          'demoId': 'slot'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '组件默认插槽', 'en-US': 'Component Default Slot' },
          'demoId': 'slot'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题插槽', 'en-US': 'Header Slot' },
          'demoId': 'slot'
        },
        {
          'name': 'title-left',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题左侧插槽', 'en-US': 'Header Left Slot' },
          'demoId': 'slot'
        },
        {
          'name': 'title-right',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题右侧插槽', 'en-US': 'Header right slot' },
          'demoId': 'slot'
        },
      ]
    }
  ]
}
