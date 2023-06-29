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
        'zh-CN': '<p></p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'progress-type',
      name: {
        'zh-CN': 'line 类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>type="line"</code>显示为 line 类型<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['progress-type.vue']
    },
    {
      demoId: 'progress-type-circle',
      name: {
        'zh-CN': 'circle 类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>type="circle"</code>显示为 circle 类型。<code>width<code>可以调整环形进度条画布宽度，默认值为 96px。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['progress-type-circle.vue']
    },
    {
      demoId: 'progress-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>size</code>进度条的大小（small/medium/large）<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['progress-size.vue']
    },
    {
      demoId: 'progress-width',
      name: {
        'zh-CN': '自定义宽度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>stroke-width<code>自定义进度条的宽度，单位 px<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['progress-width.vue']
    },
    {
      demoId: 'progress-status',
      name: {
        'zh-CN': '状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>status</code>进度条当前状态（success/exception/warning）<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['progress-status.vue']
    },
    {
      demoId: 'text-inside-or-no-text',
      name: {
        'zh-CN': '文字内显或不显',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>show-text</code>是否显示进度条文字内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['text-inside-or-no-text.vue']
    },
    {
      demoId: 'custom-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>color</code>设置进度条颜色。color 进度条背景色（会覆盖 status 状态颜色）<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-color.vue']
    },
    {
      demoId: 'format-text',
      name: {
        'zh-CN': '自定义显示文字',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p><code>text-inside</code>进度条显示文字内置在进度条内（只在 type=line 时可用），<code>format<code>自定义进度条的文字<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['format-text.vue']
    },
    {
      demoId: 'dynamic-control-changes',
      name: {
        'zh-CN': '动态控制进度条变化',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>percentage</code>动态控制进度条变化<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['dynamic-control-changes.vue']
    }
  ],
  apis: []
}
