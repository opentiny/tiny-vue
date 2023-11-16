export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过<code>size</code>设置尺寸大小，可选值：<code>(medium / small / mini)</code>。',
        'en-US': 'Set the size through<code>size</code>, with optional values:<code>(medium/small/mini)</code>.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'content',
      'name': { 'zh-CN': '配置式', 'en-US': 'Bind Value' },
      'desc': {
        'zh-CN': '通过<code>value</code>设置标签值。',
        'en-US': 'Set label values through<code>value</code>. '
      },
      'codeFiles': ['content.vue']
    },
    {
      'demoId': 'color3',
      'name': { 'zh-CN': '背景色与边框', 'en-US': 'Background color and border' },
      'desc': {
        'zh-CN': '通过<code>color</code>设置背景色，<code>hit</code>设置边框。',
        'en-US': 'Set the size through<code>size</code>, with optional values:<code>(medium/small/mini)</code>.'
      },
      'codeFiles': ['color3.vue']
    },
    {
      'demoId': 'effect',
      'name': { 'zh-CN': '主题', 'en-US': 'Subject' },
      'desc': {
        'zh-CN':
          '通过<code>effect</code>设置主题，可选值：<code>(dark / light / plain)</code>；<code>type</code>设置类型，可选值：<code>(success / info / warning / danger)</code>。',
        'en-US':
          'Set the theme through<code>effect</code>, with optional values:<code>(dark/light/plain)</code>;<code>type</code>Set the type, optional values:<code>(success/info/warning/danger)</code>.'
      },
      'codeFiles': ['effect.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '通过<code>disabled</code>设置禁用。',
        'en-US': 'You can set<code>disabled</code>to disable. '
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'closable',
      'name': { 'zh-CN': '移除', 'en-US': 'Remove' },
      'desc': {
        'zh-CN': '通过<code>closable</code>设置展示关闭按钮，<code>close</code>监听关闭按钮点击事件，做删除操作。',
        'en-US':
          'Set the display close button through<code>close</code>, listen to the close button click event, and perform the deletion operation.'
      },
      'codeFiles': ['closable.vue']
    },
    {
      'demoId': 'create',
      'name': { 'zh-CN': '动态编辑', 'en-US': 'Dynamic Edit' },
      'desc': {
        'zh-CN': `添加新标签：监听<code>+ New Tag</code>元素点击事件，打开<code>input</code>输入框，监听输入框事件做添加操作；<br />
          修改旧标签：监听旧标签的双击事件，打开<code>input</code>输入框，监听输入框事件做修改操作。`,
        'en-US': `Add a new tag: listen for<code>+New Tag</code>element click events, open the<code>input</code>input box, and listen for input box events to add<br/>
        Modify old tags: listen for double click events on old tags, open the<code>input</code>input box, and listen for input box events to make modifications.`
      },
      'codeFiles': ['create.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '图标型', 'en-US': 'Icon type' },
      'desc': {
        'zh-CN': '通过<code>default</code>默认插槽自定义标签内容，生成图标标签。',
        'en-US':
          'Generate icon labels by customizing the label content for the default slot through<code>default</code>.'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'tag-event-click',
      'name': { 'zh-CN': 'Click 事件', 'en-US': 'Click Event' },
      'desc': {
        'zh-CN': '通过<code>click</code>监听点击事件。',
        'en-US': 'Listen for click events through<code>click</code>.'
      },
      'codeFiles': ['tag-event-click.vue']
    }
  ],
  apis: [
    {
      'name': 'tag',
      'type': 'component',
      'props': [
        {
          'name': 'closable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否可关闭', 'en-US': 'Can be disabled' },
          'demoId': 'closable'
        },
        {
          'name': 'color',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '背景色：rgb,rgba,hex 三种格式',
            'en-US': 'Background color: The value can be in rgb, rgba, or hex format'
          },
          'demoId': 'color3'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Whether to disable' },
          'demoId': 'disabled'
        },
        {
          'name': 'effect',
          'type': 'string',
          'defaultValue': 'light',
          'desc': {
            'zh-CN': '主题：该属性的可选值为 dark / light / plain',
            'en-US': 'Subject: The optional values of this attribute are dark / light / plain'
          },
          'demoId': 'effect'
        },
        {
          'name': 'hit',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否有边框', 'en-US': 'Whether there is a border stroke' },
          'demoId': 'color3'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '尺寸：该属性的可选值为 medium / small / mini',
            'en-US': 'Size: The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示类型：该属性的可选值为 success / info / warning / danger',
            'en-US': 'Display type: The value of this attribute can be success / info / warning / danger'
          },
          'demoId': 'effect'
        },
        {
          'name': 'value',
          'type': 'number | string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置式标签，自定义标签内容【3.9.1新增】',
            'en-US': 'Configurable labels, custom label content [Added in 3.9.1]'
          },
          'demoId': 'content'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '(event: Event) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击标签时触发的事件',
            'en-US': 'Event triggered when clicking on Tag'
          },
          'demoId': 'tag-event-click'
        },
        {
          'name': 'close',
          'type': '(event: Event)) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击关闭按钮时触发的事件',
            'en-US': 'Event triggered when the close button is clicked'
          },
          'demoId': 'closable'
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
