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
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiselect'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '<p>\n          <p>通过 fetch-currency 属性可以指定一个方法，在方法中可实现请求自定义的服务。</p>\n          <p>通过 searchConfig 属性开启远程搜索，其中 options 为搜索面板列表， searchMethod 为自定义搜索方法。</p>\n          <p>自定义服务时，通过 fields 属性可以指定显示内容和值在数据中对应的字段。</p>\n        </p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['custom-service.vue']
    }
  ]
}
