export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过 <code>from</code> 设置数值动画起始值；<code>to</code>设置目标值。',
        'en-US': 'Set the starting value of numerical animation through<code>from</code>, <code>to</code>设置目标值.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'precision',
      name: {
        'zh-CN': '精度',
        'en-US': 'Precision Mode'
      },
      desc: {
        'zh-CN': '通过 <code>precision</code> 设置 设定精度。',
        'en-US': 'Set precision through<code>precision</code>.'
      },
      codeFiles: ['precision.vue']
    },
    {
      demoId: 'separator',
      name: {
        'zh-CN': '分隔符',
        'en-US': 'Separator Mode'
      },
      desc: {
        'zh-CN': '通过 <code>separator</code> 设置分隔符。',
        'en-US': 'Set delimiter through<code>separator</code>.'
      },
      codeFiles: ['separator.vue']
    },

    {
      demoId: 'finish-events',
      name: {
        'zh-CN': '动画结束事件',
        'en-US': 'Finish Event'
      },
      desc: {
        'zh-CN': '通过 <code>finish</code> 自定义动画结束后的事件',
        'en-US': 'Customize the events after the animation ends through<code>finish</code>.'
      },
      codeFiles: ['finish-events.vue']
    }
  ]
}
