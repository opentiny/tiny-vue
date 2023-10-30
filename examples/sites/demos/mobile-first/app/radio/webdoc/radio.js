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
        'zh-CN': `<p>通过 <code>v-model</code> 绑定变量，设置的变量值为默认选中的 Radio，变量值对应 <code>label</code> 属性的值。<br>
          通过 <code>text</code> 也可以配置显示文本，与默认插槽配置纯文本的结果一致<br>
          <code>label</code> 可以是 <code>String</code>、<code>Number</code> 或 <code>Boolean</code>。</p>`,
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'group-options',
      name: {
        'zh-CN': '配置式单选组',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': `<p>提供 <code>options</code> 属性，支持通过配置对象数组数据的形式来渲染单选组。<br>
          使用该属性后，可以不用再在标签中以插槽的形式插入 <code><radio></code> 或 <code><radio-button></code> 标签。<br />
          <code>options</code> 对象数组中包括三个字段：<code>label</code>、<code>text</code>、<code>events</code>。 <br />
          另外还提供 <code>type</code> 属性，配合 <code>options</code> 属性一起使用，默认值为 <code>radio</code>。<br>
          还可以配置为 <code>button</code>，配置后单选组将以按钮的形式展示。<p>`,
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['group-options.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `disabled` 属性即可启动禁用状态，默认为 false 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'radio-size',
      name: {
        'zh-CN': '单选尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>当组件<code> radio-group</code> 和 radio 配置 <code>size </code>属性为 <code>medium</code> 时，显示为中尺寸（仅 pc 支持）<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-size.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直布局',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可在 RadioGroup 组件上设置 `vertical` 属性，使单选框垂直布局。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['vertical.vue']
    },
    {
      demoId: 'radio-text',
      name: {
        'zh-CN': '文字内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可在 Radio 组件上设置 `text` 属性，设置内容。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-text.vue']
    },
    {
      demoId: 'radio-events',
      name: {
        'zh-CN': '单选框事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可在 Radio、RadioGroup 组件上设置 `change` 事件，当绑定值变化时触发，回调函数为选中的 Radio label 值。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-events.vue']
    },
    {
      demoId: 'group-options',
      name: {
        'zh-CN': '循环配置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可在 RadioGroup 组件上设置<code> options</code> 属性，可循环配置 Radio。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['group-options.vue']
    },
    {
      demoId: 'radio-default',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `default` 默认插槽列表。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-default.vue']
    },
    {
      demoId: 'read-only',
      name: {
        'zh-CN': '只读',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加`display-only`,给单选框增加只读属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['read-only.vue']
    }
  ],
  apis: []
}
