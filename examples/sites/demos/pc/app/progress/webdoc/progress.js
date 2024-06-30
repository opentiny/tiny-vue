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
        'zh-CN': '通过 <code>percentage</code> 设置进度值， <code>stroke-width</code> 设置进度条的宽度，单位 px。',
        'en-US':
          'Set the progress value through <code>percentage</code> , and <code>stroke-width</code> to set the width of the progress bar in px.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-color',
      name: {
        'zh-CN': '定义颜色',
        'en-US': 'Custom Color'
      },
      desc: {
        'zh-CN': '通过 <code>color</code> 设置进度条颜色；会覆盖 <code>status</code> 状态颜色。',
        'en-US':
          'Set the progress bar color through <code>color</code> ; It will overwrite the status color of <code>status</code> .'
      },
      codeFiles: ['custom-color.vue']
    },
    {
      demoId: 'format-text',
      name: {
        'zh-CN': '文字的显隐和位置',
        'en-US': 'Position and Hiding of Text'
      },
      desc: {
        'zh-CN':
          '通过 <code>show-text</code> 设置文字显隐； <code>text-inside</code> 设置文字内置在进度条内显示（只在 type=line 时可用）， <code>format</code> 自定义进度条的文字。',
        'en-US':
          'Set text display and hiding through <code>show-text</code> ; <code>text-inside</code> Set the text to be displayed within the progress bar (only available when type=line), and <code>format</code> customize the text for the progress bar.'
      },
      codeFiles: ['format-text.vue']
    },
    {
      demoId: 'progress-status',
      name: {
        'zh-CN': '状态',
        'en-US': 'Status'
      },
      desc: {
        'zh-CN': '通过 <code>status</code> 设置当前状态，可选值： <code>(success/exception/warning)</code> 。',
        'en-US':
          'Set the current state through <code>status</code> , with optional values: <code>(success/exception/warning)</code> .'
      },
      codeFiles: ['progress-status.vue']
    },
    {
      demoId: 'custom-status',
      name: {
        'zh-CN': '自定义状态场景',
        'en-US': 'Custom state scenario'
      },
      desc: {
        'zh-CN': '用法如下。',
        'en-US': 'The usage is as follows.'
      },
      codeFiles: ['custom-status.vue']
    },
    {
      demoId: 'progress-type-circle',
      name: {
        'zh-CN': '环形',
        'en-US': 'Annular'
      },
      desc: {
        'zh-CN':
          '通过 <code>type="circle"</code> 设置为圆环类型，<code>type="dashboard"</code> 则为C型圆环类型; <code>width</code> 设置环形进度条画布宽度，默认值为126px。',
        'en-US':
          'Set<code>type="circle"</code>to the circular type, and<code>type="dashboard"</code>to the C-shaped circular type< Code>width</code>Set the width of the circular progress bar canvas, with a default value of 126px.'
      },
      codeFiles: ['progress-type-circle.vue']
    }
  ]
}
