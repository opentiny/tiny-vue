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
        'zh-CN': '<p>基本用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '选中项只读',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>点击事件不改变选中项。</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>可使用右侧 <code>icon</code> 自定义插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    }
  ],
  apis: []
}
