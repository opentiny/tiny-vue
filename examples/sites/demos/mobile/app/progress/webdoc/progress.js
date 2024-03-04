export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'progress-type',
      name: {
        'zh-CN': '类型',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p><code>line</code>类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['progress-type.vue']
    },
    {
      demoId: 'progress-type-circle',
      name: {
        'zh-CN': '类型',
        'en-US': 'left right text'
      },
      desc: {
        'zh-CN': '<p><code>circle</code>类型</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['progress-type-circle.vue']
    },
    {
      demoId: 'progress-type-dashboard',
      name: {
        'zh-CN': '类型',
        'en-US': 'progress-type-dashboard'
      },
      desc: {
        'zh-CN': '<p><code>dashboard</code>类型</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['progress-type-dashboard.vue']
    },
    {
      demoId: 'progress-width',
      name: {
        'zh-CN': '宽度',
        'en-US': 'progress-width'
      },
      desc: {
        'zh-CN': '<p><code>stroke-width</code>进度条的宽度，单位 px</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['progress-width.vue']
    },
    {
      demoId: 'progress-status',
      name: {
        'zh-CN': '状态',
        'en-US': 'progress-status'
      },
      desc: {
        'zh-CN': '<p><code>status</code>进度条当前状态（success/exception/warning）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['progress-status.vue']
    },
    {
      demoId: 'text-inside-or-no-text',
      name: {
        'zh-CN': '文字内显或不显',
        'en-US': 'text-inside-or-no-text'
      },
      desc: {
        'zh-CN': '<p><code>show-text</code>是否显示进度条文字内容</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['text-inside-or-no-text.vue']
    },
    {
      demoId: 'custom-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'custom-color'
      },
      desc: {
        'zh-CN': '<p>通过<code>color</code>设置进度条颜色。<code>color</code>进度条背景色（会覆盖status状态颜色）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['custom-color.vue']
    },
    {
      demoId: 'format-text',
      name: {
        'zh-CN': '自定义显示文字',
        'en-US': 'format-text'
      },
      desc: {
        'zh-CN': '<p><code>text-inside</code>进度条显示文字内置在进度条内（只在 type=line 时可用）</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['format-text.vue']
    },
    {
      demoId: 'format',
      name: {
        'zh-CN': '自定义显示内容',
        'en-US': 'format'
      },
      desc: {
        'zh-CN': '<p>通过<code>format</code>属性设置显示文字内置在进度条内时，用于自定义显示内容。</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['format.vue']
    },
    {
      demoId: 'dynamic-control-changes',
      name: {
        'zh-CN': '动态进度条',
        'en-US': 'dynamic-control-changes'
      },
      desc: {
        'zh-CN': '<p>通过动态改变<code>percentage</code>的值，使进度条动态变化</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['dynamic-control-changes.vue']
    },
    {
      demoId: 'dynamic-progress',
      name: {
        'zh-CN': '动态控制进度条变化',
        'en-US': 'dynamic-progress'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>percentage</code>动态控制进度条变化</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['dynamic-progress.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '环形进度条画布宽度',
        'en-US': 'width'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>width</code>属性设置环形进度条画布宽度（只在type 为 circle 或 dashboard 时可用）。</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['width.vue']
    }
  ]
}
