export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>Badge 展示指定数据信息，如：我的待办数、新任务数等。</p>\n',
        'en-US':
          '<p>Badge Displays specified data, such as the number of to-do tasks and the number of new tasks. </p>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '主題样式', 'en-US': 'Theme Style' },
      'desc': {
        'zh-CN':
          '<p><code>type</code> 设置显示主题，可选值：primary、success、warning、danger、info，默认值：danger</p>\n',
        'en-US':
          '<p><code>type</code> Set the display theme. The options are primary, success, warning, danger, and info. The default value is danger</p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'is-dot',
      'name': { 'zh-CN': '小圆点标记', 'en-US': 'Small dot mark' },
      'desc': {
        'zh-CN': '<p><code>is-dot</code> 显示小圆点标记</p>\n',
        'en-US': '<p><code>is-dot</code> Display small dot mark</p>\n'
      },
      'codeFiles': ['is-dot.vue']
    },
    {
      'demoId': 'max',
      'name': { 'zh-CN': '计数最大值', 'en-US': 'Maximum count value' },
      'desc': {
        'zh-CN': "<p><code>max</code> 超过最大值会显示 '{max}+'</p>\n",
        'en-US': "<p><code>max</code> exceeds the maximum value, '{max}+'</p>\n is displayed"
      },
      'codeFiles': ['max.vue']
    },
    {
      'demoId': 'target',
      'name': { 'zh-CN': '跳转链接', 'en-US': 'Link' },
      'desc': {
        'zh-CN': '<p><code>href</code>定义跳转链接</p>\n',
        'en-US': '<p><code>href</code> Define Jump Link</p>\n'
      },
      'codeFiles': ['target.vue']
    },
    {
      'demoId': 'badge-class',
      'name': { 'zh-CN': '自定义类名', 'en-US': 'Custom Class Name' },
      'desc': {
        'zh-CN': '<p><code>badge-class</code> 自定义类名</p>\n',
        'en-US': '<p><code>badge-class</code> Custom Class Name</p>\n'
      },
      'codeFiles': ['badge-class.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '自定义标记目标', 'en-US': 'Custom Tag Target' },
      'desc': {
        'zh-CN': '<p><code>default slot</code> 标记内容自定义</p>\n',
        'en-US': '<p><code>default slot</code> Tag Content Custom</p>\n'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'slot-content',
      'name': { 'zh-CN': '自定义提示内容', 'en-US': 'Customized prompt content' },
      'desc': {
        'zh-CN': '<p><code>content slot</code> 自定义提示内容</p>\n',
        'en-US': '<p><code>content slot</code> Custom Prompt Content</p>\n'
      },
      'codeFiles': ['slot-content.vue']
    },
    {
      'demoId': 'dynamic-hidden',
      'name': { 'zh-CN': '消息已读动态隐藏标记', 'en-US': 'Dynamic hiding flag of read messages' },
      'desc': { 'zh-CN': '<p><code>hidden</code> 隐藏标记</p>\n', 'en-US': '<p><code>hidden</code> Hide Tag</p>\n' },
      'codeFiles': ['dynamic-hidden.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '标记的位置', 'en-US': 'Tag Offset' },
      'desc': {
        'zh-CN': '<p><code>offset</code> 调整标记的位置</p>\n',
        'en-US': '<p><code>offset</code> Custom Tag Offset</p>\n'
      },
      'codeFiles': ['offset.vue']
    }
  ],
  apis: [
    {
      'name': 'badge',
      'type': 'component',
      'properties': [
        {
          'name': 'value',
          'type': 'Number | String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '数据集对象，支持静态及动态数据。;显示值',
            'en-US': 'Dataset object, which supports static and dynamic data. ;Display Value'
          },
          'demoId': 'type'
        },
        {
          'name': 'href',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '指定跳转的目标页面地址。', 'en-US': 'Specify the URL of the target page.' },
          'demoId': 'target'
        },
        {
          'name': 'max',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '指定徽章显示的最大值,如果实际获取的徽章值超过该最大值，则以最大值后接一个"+"的形式显示徽章数;最大值，超过最大值会显示 \'{max}+\'，要求 value 是 Number 类型',
            'en-US':
              'Specifies the maximum number of badges to be displayed. If the actual badge value exceeds the maximum value, the number of badges is displayed in the format of "+". Maximum value. If the value exceeds the maximum value, \'{max}+\' is displayed. The value must be of the Number type.'
          },
          'demoId': 'max'
        },
        {
          'name': 'is-dot',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置是否有默认的新消息提示。;小圆点',
            'en-US': 'Sets whether there is a default new message prompt. ; Little Dots'
          },
          'demoId': 'is-dot'
        },
        {
          'name': 'hidden',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '隐藏 badge', 'en-US': 'Hide badge' },
          'demoId': 'dynamic-hidden'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '该属性的可选值为 primary / success / warning / danger / info',
            'en-US': 'The value of this attribute can be primary / success / warning / danger / info'
          },
          'demoId': 'type'
        },
        {
          'name': 'target',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '指定点击徽章 Dom 节点时链接到目标页面的跳转方式，仅在 href 属性存在时使用。',
            'en-US':
              'Specifies the redirection mode to the target page when you click the badge Dom node. This parameter is used only when the href attribute exists.'
          },
          'demoId': 'target'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'slot-default'
        },
        {
          'name': 'content',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '消息提示内容', 'en-US': 'Message Content' },
          'demoId': 'slot-content'
        }
      ]
    }
  ]
}
