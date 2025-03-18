export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>data</code> 设置文本内容， <code>value</code> 设置标记内容。</p>\n',
        'en-US':
          '<p>Set the text content through <code>data</code> , and set the tag content through <code>value</code> </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '主题样式',
        'en-US': 'Theme Style'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>type</code> 设置显示主题，可选值： <code>primary</code> 、<code>success</code> 、<code>warning</code> 、<code>danger</code> 、<code>info</code>。</p>\n',
        'en-US':
          '<p>Set the display theme through <code>type</code> . Optional values: <code>primary, success, warning, danger</code>.</p>\n'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'is-dot',
      name: {
        'zh-CN': '小圆点标记',
        'en-US': 'Small dot mark'
      },
      desc: {
        'zh-CN': '<p>通过 <code>is-dot</code> 设置显示小圆点标记。</p>\n',
        'en-US': '<p>Set the display of small dot markers through <code>is dot</code> settings.</p>\n'
      },
      codeFiles: ['is-dot.vue']
    },
    {
      demoId: 'max',
      name: {
        'zh-CN': '计数最大值',
        'en-US': 'Maximum count value'
      },
      desc: {
        'zh-CN': "<p>通过 <code>max</code> 设置最大值，超过最大值会显示 '{max}+'。</p>\n",
        'en-US':
          "<p>By setting the maximum value through <code>max</code> , exceeding the maximum value will display '{max}+'.</p>"
      },
      codeFiles: ['max.vue']
    },
    {
      demoId: 'link',
      name: {
        'zh-CN': '跳转链接',
        'en-US': 'Link'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>href</code> 设置跳转链接， <code>target</code> 设置跳转方式，同 <code>a</code> 标签的 <code>target</code> 属性。</p>\n',
        'en-US':
          '<p>Set the jump link through <code>href</code> , and set the jump method using the <code>target</code> attribute of the <code>a</code> tag.</p>\n'
      },
      codeFiles: ['link.vue']
    },
    {
      demoId: 'badge-class',
      name: {
        'zh-CN': '自定义类名',
        'en-US': 'Custom Class Name'
      },
      desc: {
        'zh-CN': '<p>通过 <code>badge-class</code> 设置自定义类名。</p>\n',
        'en-US': '<p>Set custom class names through <code>bag class</code> .</p>\n'
      },
      codeFiles: ['badge-class.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '自定义文本内容',
        'en-US': 'Badge text content'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default</code> 插槽自定义文本内容。</p>\n',
        'en-US': '<p> <code>default slot</code> Tag Content Custom.</p>\n'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'slot-content',
      name: {
        'zh-CN': '自定义标记内容',
        'en-US': 'Customized badge content'
      },
      desc: {
        'zh-CN': '<p>通过 <code>content</code> 插槽自定义标记内容。</p>\n',
        'en-US': '<p> <code>content slot</code> Custom Prompt Content.</p>\n'
      },
      codeFiles: ['slot-content.vue']
    },
    {
      demoId: 'dynamic-hidden',
      name: {
        'zh-CN': '消息已读动态隐藏标记',
        'en-US': 'Dynamic hiding flag of read messages'
      },
      desc: {
        'zh-CN': '<p>通过 <code>hidden</code> 设置是否隐藏标记。</p>\n',
        'en-US': '<p>Set whether to hide tags by <code>hidden</code> .</p>\n'
      },
      codeFiles: ['dynamic-hidden.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '标记的位置',
        'en-US': 'Tag Offset'
      },
      desc: {
        'zh-CN': '<p>通过 <code>offset</code> 调整标记的位置。</p>\n',
        'en-US': '<p> <code>offset</code> Custom Tag Offset.</p>\n'
      },
      codeFiles: ['offset.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基础',
      description:
        '通过 value 设置角标内容（一般是数字），通过 default 插槽或者 data 属性设置需要显示角标的元素或文本。',
      support: {
        value: true
      },
      cloud: {
        value: true
      },
      apis: ['value', 'data', '#default'],
      demos: ['basic-usage', 'slot-default']
    },
    {
      id: 'type',
      name: '类型',
      description: '支持 primary / success / warning / danger(默认) / info 5种类型。',
      support: {
        value: true
      },
      cloud: {
        value: false
      },
      apis: ['type'],
      demos: ['type']
    },
    {
      id: 'dot',
      name: '小圆点',
      description: '只显示一个小圆点，不显示数字',
      support: {
        value: true
      },
      cloud: {
        value: true
      },
      apis: ['is-dot'],
      demos: ['is-dot']
    },
    {
      id: 'max',
      name: '最大值',
      description: '超出最大值会显示 {max}+',
      support: {
        value: true
      },
      cloud: {
        value: true
      },
      apis: ['max'],
      demos: ['max']
    },
    {
      id: 'link',
      name: '超链接',
      description: '可以设置 href / target 进行超链接跳转，效果同 <a> 标签',
      support: {
        value: true
      },
      cloud: {
        value: false
      },
      apis: ['href', 'target'],
      demos: ['link']
    },
    {
      id: 'custom',
      name: '自定义标记',
      description: '自定义标记内容和类型',
      support: {
        value: true
      },
      cloud: {
        value: false
      },
      apis: ['badge-class', '#content'],
      demos: ['badge-class', 'slot-content']
    },
    {
      id: 'hidden',
      name: '隐藏标记',
      description: '动态隐藏标记',
      support: {
        value: true
      },
      cloud: {
        value: false
      },
      apis: ['hidden'],
      demos: ['dynamic-hidden']
    },
    {
      id: 'offset',
      name: '标记位置',
      description: '标记位置的偏移量，可以设置x、y轴的偏移量，支持字符串、数字、百分比，格式：[0, -8]',
      support: {
        value: true
      },
      cloud: {
        value: false
      },
      apis: ['offset'],
      demos: ['offset']
    }
  ]
}
