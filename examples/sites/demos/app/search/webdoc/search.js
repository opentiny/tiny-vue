export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '可清除', 'en-US': 'Can be cleared' },
      'desc': {
        'zh-CN': '<p>可通过 <code>clearable</code> 属性设置显示清空图标按钮。</p>\n',
        'en-US':
          '<p>You can use the <code>clearable</code> attribute to set the display of the clear icon button. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'mini-mode',
      'name': { 'zh-CN': '迷你模式', 'en-US': 'Mini mode' },
      'desc': {
        'zh-CN': '<p>可通过 <code>mini</code> 设置组件为mini模式。</p>\n',
        'en-US': '<p>You can use <code>mini</code> to set the component to the mini mode. </p>\n'
      },
      'codeFiles': ['mini-mode.vue']
    },
    {
      'demoId': 'transparent-mode',
      'name': { 'zh-CN': '透明模式', 'en-US': 'Transparent mode' },
      'desc': {
        'zh-CN': '<p>可通过 <code>transparent</code> 设置组件为透明模式（<code>mini</code>模式下有效）。搜索类型</p>\n',
        'en-US':
          '<p>You can use <code>transparent</code> to set the component to the transparent mode (valid in <code>mini</code> mode). Search Type</p>\n'
      },
      'codeFiles': ['transparent-mode.vue']
    },
    {
      'demoId': 'default-value',
      'name': { 'zh-CN': '默认值搜索', 'en-US': 'Default Search' },
      'desc': {
        'zh-CN': '<p>可通过 <code>v-model</code> 配置组件默认搜索条件。</p>\n',
        'en-US': '<p>You can use <code>v-model</code> to configure the default search criteria of the component. </p>\n'
      },
      'codeFiles': ['default-value.vue']
    },
    {
      'demoId': 'search-types',
      'name': { 'zh-CN': '搜索类型', 'en-US': 'Search Type' },
      'desc': {
        'zh-CN': '<p>可通过 <code>search-types</code> 配置组件可选的搜索类型。</p>\n',
        'en-US':
          '<p>You can use <code>search-types</code> to configure the search types available for the component. </p>\n'
      },
      'codeFiles': ['search-types.vue']
    },
    {
      'demoId': 'custom-search-types',
      'name': { 'zh-CN': '自定义搜索类型的内容', 'en-US': 'Content of the user-defined search type' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['custom-search-types.vue']
    },
    {
      'demoId': 'show-selected-types',
      'name': { 'zh-CN': '自定义搜索类型', 'en-US': 'Customized search type' },
      'desc': { 'zh-CN': '<p>搜索类型</p>\n', 'en-US': '<p>Search Type</p>\n' },
      'codeFiles': ['show-selected-types.vue']
    },
    {
      'demoId': 'slot-prefix',
      'name': { 'zh-CN': '左侧插槽', 'en-US': 'Left slot' },
      'desc': {
        'zh-CN': '<p>可通过<code>prefix</code>插入左侧插槽</p>\n',
        'en-US': '<p>can be inserted into the left slot through <code>prefix</code></p>\n'
      },
      'codeFiles': ['slot-prefix.vue']
    },
    {
      'demoId': 'search-events',
      'name': { 'zh-CN': '自定义 search 事件', 'en-US': 'Customized search event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['search-events.vue']
    },
    {
      'demoId': 'change-events',
      'name': { 'zh-CN': '自定义 change 事件', 'en-US': 'Customized change event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['change-events.vue']
    },
    {
      'demoId': 'select-events',
      'name': { 'zh-CN': '自定义 select 事件', 'en-US': 'Customized select event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['select-events.vue']
    }
  ],
  apis: [
    {
      'name': 'search',
      'type': 'component',
      'properties': [
        {
          'name': 'default-value',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置搜索输入框内的默认搜索值。',
            'en-US': 'Set the default search value in the search text box.'
          },
          'demoId': ''
        },
        {
          'name': 'clearable',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': ' 属性设置显示清空图标按钮',
            'en-US': 'The clear icon is displayed in attribute settings.'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'v-model',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置绑定的值。', 'en-US': 'Set the bound value.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'mini',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '迷你模式，配置为true时，搜索默认显示为一个带图标的圆形按钮，点击后展开，默认 false 。',
            'en-US':
              'Mini mode. If this parameter is set to true, a round button with an icon is displayed by default. After you click the button, the button is displayed. The default value is false.'
          },
          'demoId': 'mini-mode'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置搜索输入框内的提示占位文本 。',
            'en-US': 'Set the placeholder text in the search box.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'search-types',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': "搜索的类型选项，格式为[{text:'文档',value:1},...]，不配置时类型选择固定显示为All 。",
            'en-US':
              "Search type. The format is [{text:'Document', value:1}, ...]. If this parameter is not specified, All is displayed."
          },
          'demoId': 'search-types'
        },
        {
          'name': 'is-enter-search',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否在按下键盘Enter键的时候触发search事件',
            'en-US':
              'Transparent mode. If this parameter is set to true, the border becomes transparent and is displayed semi-transparently after being collapsed. Generally, this parameter is used in scenarios with a background. The default value is false.'
          },
          'demoId': 'search-events'
        },
        {
          'name': 'transparent',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN':
              '设置为透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景，默认 false 。',
            'en-US': ''
          },
          'demoId': 'transparent-mode'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在 input 框中输入完成时触发的回调函数;arg1:{Object 搜索类型}，arg2:{String 当前input框中值}',
            'en-US':
              'Callback function triggered when input is complete in the input box; arg1:{Object search type}, arg2:{String value in the current input box}'
          },
          'demoId': 'change-events'
        },
        {
          'name': 'search',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在展开状态点击搜索按钮时触发的回调函数;arg1:{Object 搜索类型}，arg2:{String 当前input框中值}',
            'en-US':
              'Callback function triggered when the search button is clicked in the expanded state; arg1:{Object search type}, arg2:{String value in the current input box}'
          },
          'demoId': 'search-events'
        },
        {
          'name': 'select',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在search组件切换类型时触发的回调函数;arg1:{Object 搜索类型}',
            'en-US':
              'Callback function triggered when the type of the search component is switched; arg1:{Object search type}'
          },
          'demoId': 'select-events'
        },
        {
          'name': 'input',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '在search组件输入实时触发的回调函数;arg1:{String 当前input框中值}，arg2:{Object 搜索类型}【3.9.1新增】',
            'en-US':
              'Enter the callback function triggered in real time in the search component. arg1:{String value in the current input box}, arg2:{Object search type} [added in 3.9.1]'
          },
          'demoId': ''
        }
      ],
      'slots': [
        {
          'name': 'poplist',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '搜索的弹出列表插槽', 'en-US': 'Slot in the search pop-up list' },
          'demoId': 'custom-search-types'
        },
        {
          'name': 'text',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认搜索类型插槽', 'en-US': 'Default search type slot' },
          'demoId': 'show-selected-types'
        },
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '左侧插槽', 'en-US': 'Left slot' },
          'demoId': 'slot-prefix'
        }
      ]
    }
  ]
}
