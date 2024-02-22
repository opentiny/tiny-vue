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
        'zh-CN':
          '<p>过滤类型 <code>type</code> 包括 <code>单选、多选、枚举单选 (radio | checkbox | enum-radio)<code>。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'column-num',
      name: {
        'zh-CN': '面板每行标签数',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>通过 <code>column-num</code> 属性设置面板每行标签数，默认值为 3。</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['column-num.vue']
    },
    {
      demoId: 'filter-group',
      name: {
        'zh-CN': '过滤组',
        'en-US': '过滤组'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filter-group</code> 属性开启过滤组功能，<code>filter-value</code> 绑定过滤组的值。过滤组类型 <code>type</code> 包括 <code>单选、多选 (radio | checkbox)</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['filter-group.vue']
    },
    {
      demoId: 'enumeration',
      name: {
        'zh-CN': '枚举单选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>设置过滤类型 <code>type: "enum-radio"</code> 时，当前数据为枚举单选，通过 <code>showAll: true</code> 显示 <code>全部</code> 选择项。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['enumeration.vue']
    }
  ],
  apis: []
}
