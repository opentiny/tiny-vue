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
    },
    {
      demoId: 'filter',
      name: {
        'zh-CN': '可过滤',
        'en-US': 'Filterable'
      },
      desc: {
        'zh-CN': '<p>通过 <code>filterable</code> 设置是否可过滤，<code>filter-method</code> 设置自定义过滤逻辑。</p>',
        'en-US': ''
      },
      codeFiles: ['filter.vue']
    },
    {
      demoId: 'remote',
      name: {
        'zh-CN': '远程搜索',
        'en-US': 'Remote search'
      },
      desc: {
        'zh-CN':
          '<p>同时使用 <code>remote</code> 和 <code>remote-method</code> 和 <code>filterable</code> 3 个属性开启远程搜索。通过 <code>remote-config</code> 设置自动搜索和显示展开按钮。<br>在多选模式下，可通过 <code>reserve-keyword</code> 设置选中一个选项后依然保留搜索关键字。</p>',
        'en-US': ''
      },
      codeFiles: ['remote.vue']
    },
    {
      demoId: 'config',
      name: {
        'zh-CN': '配置项',
        'en-US': 'Config'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>select-config</code> （多选）或 <code>radio-config</code> （单选）属性的 <code>checkMethod</code> 自定义禁用逻辑，返回 true (启用) / false (禁用)。<br>配置 <code>{ trigger: "row" }</code> 可以设置点击行选中数据。</p>',
        'en-US':
          "<p>By customizing the disable logic through the <code>select-config</code> (multiple selection) or <code>radio-config</code> (single selection) attribute's <code>checkMethod</code>, return true (Enable) / false (disable).Configure {trigger: 'row'} to set the selected data in the click row.</p>"
      },
      codeFiles: ['config.vue']
    }
  ]
}
