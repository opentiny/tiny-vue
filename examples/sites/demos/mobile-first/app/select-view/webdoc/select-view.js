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
      demoId: 'field',
      name: {
        'zh-CN': '显示三个字段两行',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['field.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'multiple-required',
      name: {
        'zh-CN': '必选项',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>添加 `required-selected-list` 属性开启必选项列表，开启 `multiple` 多选时有效。可通过事件 `search-click` 的第二个返回参数判断是否操作成功，必选项不能取消勾选。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['multiple-required.vue']
    },
    {
      demoId: 'text',
      name: {
        'zh-CN': '文本信息',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `@update:text` 事件接收选中项的 `textField` 文本信息，`text-split` 设置文本分隔符，默认值为 `;`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['text.vue']
    },
    {
      demoId: 'infinit-scroll',
      name: {
        'zh-CN': '无限滚动',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>配置 `infinite-scroll` 属性开启无限滚动，配置参数 `{ load: () => {}, delay: 200, disabled: false, distance: 0, immediate: true }`，可参考 `InfiniteScroll 无限滚动` 组件文档。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['infinit-scroll.vue']
    },
    {
      demoId: 'place-holder',
      name: {
        'zh-CN': '自定义 placeHolder',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过placeholder属性配置自定义 placeHolder<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['place-holder.vue']
    }
  ],
  apis: []
}
