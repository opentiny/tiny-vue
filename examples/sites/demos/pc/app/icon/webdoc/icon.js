export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'show-title',
      'name': { 'zh-CN': '显示 Title', 'en-US': 'Display Title' },
      'desc': {
        'zh-CN': '<p>通过在 Icon 的父级元素上增加 <code>title</code> 属性来实现给 Icon 图标增加 Title 的功能。</p>\n',
        'en-US':
          '<p>The <code>title</code> attribute is added to the parent element of an icon to add a title to the icon. </p>\n'
      },
      'codeFiles': ['show-title.vue']
    },
    {
      'demoId': 'list',
      'name': { 'zh-CN': '图标集合', 'en-US': 'Icon Set' },
      'desc': { 'zh-CN': '全部图标参考如下', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['list.vue']
    }
  ],
  apis: [{ 'name': 'icon', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
