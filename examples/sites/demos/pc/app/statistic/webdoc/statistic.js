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
        'zh-CN':
          '通过<code>value</code>设置数字内容，<code>precision</code>设置数字精度值，<code>title</code>设置数字内容标题，<code>prefix</code>设置数字内容前置插槽，<code>suffix</code>设置数字内容后置插槽。',
        'en-US':
          'Set digital content through<code>value</code>,<code>precision</code>set digital precision value,<code>title</code>set digital content title,<code>prefix</code>set digital content front slot, and<code>suffix</code>set digital content rear slot.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'statistic-slot',
      name: {
        'zh-CN': '插槽用法',
        'en-US': 'Slot Usage'
      },
      desc: {
        'zh-CN':
          '通过<code>title</code>设置标题插槽，<code>prefix</code>设置数字前缀插槽，<code>suffix</code>设置数字后缀插槽。',
        'en-US':
          'Set the title slot through<code>title</code>, set the number prefix slot through<code>prefix</code>, and set the number suffix slot through<code>suffix</code>.'
      },
      codeFiles: ['statistic-slot.vue']
    },
    {
      demoId: 'statistic-style',
      name: {
        'zh-CN': '样式用法',
        'en-US': 'Style Usage'
      },
      desc: {
        'zh-CN': '通过<code>value-style</code>设置数字样式。',
        'en-US': 'Set the number style through<code>value style</code>.'
      },
      codeFiles: ['statistic-style.vue']
    }
  ]
}
