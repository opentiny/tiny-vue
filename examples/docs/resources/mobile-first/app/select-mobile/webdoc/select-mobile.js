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
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过添加属性 `multiple`，开启多选功能。 通过 `@update:text` 事件接收选中项的 `textField` 文本信息，`text-split` 设置文本分隔符，默认值为 `; `。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'ellipsis',
      name: {
        'zh-CN': '内容超出隐藏',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加属性 `ellipsis` 选项内容会超出隐藏。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['ellipsis.vue']
    }
  ],
  apis: []
}
