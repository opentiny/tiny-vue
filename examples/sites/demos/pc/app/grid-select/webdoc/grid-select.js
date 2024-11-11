export default {
  column: '2',
  owner: '',
  meta: {
    experimental: '3.20.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>最基础的用法，通过 <code>grid-op</code> 设置下拉表格的数据源，<code>v-model</code> 设置绑定值。</p>',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组，默认选中值会以标签形式展示。</p>',
        'en-US': ''
      },
      codeFiles: ['multiple.vue']
    }
  ]
}
