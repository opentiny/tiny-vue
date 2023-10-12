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
      'demoId': 'color3',
      'name': { 'zh-CN': '颜色', 'en-US': 'Color' },
      'desc': {
        'zh-CN': '<p>可通过 <code>color</code> 设置标签背景色。</p>\n',
        'en-US': '<p>You can use <code>color</code> to set the background color of a label. </p>\n'
      },
      'codeFiles': ['color3.vue']
    },
    {
      'demoId': 'hit',
      'name': { 'zh-CN': '边框', 'en-US': 'Border' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>hit</code> 设置标签边框，可选值（true/false）true为有边框，false无边框,默认值为 false。</p>\n',
        'en-US':
          '<p>You can use <code>hit</code> to set the label border. The options are true and false. The default value is false. </p>\n'
      },
      'codeFiles': ['hit.vue']
    },
    {
      'demoId': 'tag-size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN': '<p>可通过 <code>size</code> 设置Tag标签大小，可选值（medium / small / mini）。</p>\n',
        'en-US': '<p>You can use <code>size</code> to set the tag size. The value can be medium, small, or mini. </p>\n'
      },
      'codeFiles': ['tag-size.vue']
    },
    {
      'demoId': 'effect',
      'name': { 'zh-CN': '主题', 'en-US': 'Subject' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>effect</code> 设置Tag标签主题，可选值（dark / light / plain）。\n<code>type</code>可以为标签设置相应的类型，可选值（success / info / warning / danger）。</p>\n',
        'en-US':
          '<p>You can use <code>effect</code> to set the tag theme. The value can be dark, light, or plain. \n<code>type</code>You can set the corresponding type for the tag. The options are success, info, warning, and danger. </p>\n'
      },
      'codeFiles': ['effect.vue']
    },
    {
      'demoId': 'create',
      'name': { 'zh-CN': '动态编辑标签', 'en-US': 'Dynamic Edit Tag' },
      'desc': {
        'zh-CN':
          '<p>通过点击<code>+ New Tag</code>在文本框中输入你要定义的标签名就能在标签列表中最后一个创建标签 。<code>closable</code> 属性可以为标签设置成可去除标签。</p>\n',
        'en-US':
          '<p>Click <code>+ New Tag</code> and enter the tag name in the text box to create the last tag in the tag list. The <code>closable</code> attribute can be set to removeable tags for tags. </p>\n'
      },
      'codeFiles': ['create.vue']
    },
    {
      'demoId': 'closeable',
      'name': { 'zh-CN': '可移除标签', 'en-US': 'Removable Label' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['closeable.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>可通过 <code>disabled</code> 设置标签禁用。</p>\n',
        'en-US': '<p>You can set <code>disabled</code> to disable the tag. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'content',
      'name': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
      'desc': {
        'zh-CN': '<p>可通过 <code>value</code> 自定义标签值，主要用于配置式。</p>\n',
        'en-US':
          '<p>You can use <code>value</code> to customize the tag value, which is mainly used in profiles. </p>\n'
      },
      'codeFiles': ['content.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '图标标签（使用默认插槽）', 'en-US': 'Icon label (default slot)' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'tag-event-click',
      'name': { 'zh-CN': 'Click 事件', 'en-US': 'Click Event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tag-event-click.vue']
    },
    {
      'demoId': 'tag-event-close',
      'name': { 'zh-CN': 'Close 事件', 'en-US': 'Close Event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tag-event-close.vue']
    }
  ],
  apis: [
    {
      'name': 'tag',
      'type': 'component',
      'properties': [
        {
          'name': 'hit',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否有边框描边', 'en-US': 'Whether there is a border stroke' },
          'demoId': 'hit'
        },
        {
          'name': 'closeable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否可关闭', 'en-US': 'Can be disabled' },
          'demoId': 'create'
        },
        {
          'name': 'color',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '颜色，支持 rgb,rgba,hex 三种格式;背景色',
            'en-US': 'Color. The value can be in rgb, rgba, or hex format. Background color'
          },
          'demoId': 'color3'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示类型;该属性的可选值为 success / info / warning / danger',
            'en-US': 'Display type; The value of this attribute can be success / info / warning / danger'
          },
          'demoId': 'effect'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '尺寸;该属性的可选值为 medium / small / mini',
            'en-US': 'Size; The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'tag-size'
        },
        {
          'name': 'effect',
          'type': 'string',
          'defaultValue': '该属性的默认值为 light',
          'desc': {
            'zh-CN': '主题;该属性的可选值为 dark / light / plain',
            'en-US': 'Subject; The optional values of this attribute are dark / light / plain'
          },
          'demoId': 'effect'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Whether to disable' },
          'demoId': 'disabled'
        },
        {
          'name': 'value',
          'type': 'number, string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过绑定此属性设置自定义内容【3.9.1新增】',
            'en-US': 'Set customized content by binding this attribute. [Added in 3.9.1]'
          },
          'demoId': 'content'
        }
      ],
      'events': [
        {
          'name': 'close',
          'type': 'Function(event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭 Tag 时触发的事件;event: 原生事件',
            'en-US': 'This event is triggered when a tag is disabled. event: Native event'
          },
          'demoId': 'tag-event-close'
        },
        {
          'name': 'click',
          'type': 'Function(value, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击 Tag 时触发的事件;event: 原生事件',
            'en-US': 'This event is triggered when a tag is clicked. event: Native event'
          },
          'demoId': 'tag-event-click'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标签内容', 'en-US': 'Label Content' },
          'demoId': 'slot-default'
        }
      ]
    }
  ]
}
