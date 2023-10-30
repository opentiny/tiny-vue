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
    },
    {
      demoId: 'field',
      name: {
        'zh-CN': '显示字段',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加属性 `text-field2`、`text-field3` 选项支持显示 3 个字段，另外也可以使用插槽自定义选项。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['field.vue']
    },
    {
      demoId: 'remote-search',
      name: {
        'zh-CN': '远程搜索',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>添加属性 `searchConfig: { searchMethod: function() {} }` ， `searchMethod` 支持返回 `Promise 异步数据` 开启远程搜索。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['remote-search.vue']
    },
    {
      demoId: 'mode-form',
      name: {
        'zh-CN': '表单模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置属性 `mode` 为 `form`，开启表单模式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mode-form.vue']
    }
  ],
  apis: []
}
