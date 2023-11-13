export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'header-hide-grid-header',
      'name': { 'zh-CN': '控制隐藏表头', 'en-US': 'Hide table headers.' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>showHeader</code> 属性为 <code>fasle</code> 控制隐藏表头，默认为 <code>true</code>。</p>\n',
        'en-US':
          '<p>Set <code>showHeader</code> to <code>fasle</code> to control the hidden table header. The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['header/hide-grid-header.vue']
    },
    {
      'demoId': 'header-custom-grid-header',
      'name': { 'zh-CN': '自定义表头', 'en-US': 'User-defined table header' },
      'desc': {
        'zh-CN': '<p>通过列 <code>slot</code> 插槽自定义表头</p>\n',
        'en-US': '<p>Customize the table header by column <code>slot</code> slot</p>\n'
      },
      'codeFiles': ['header/custom-grid-header.vue']
    },
    {
      'demoId': 'header-config-grid-header',
      'name': { 'zh-CN': '配置式多级表头', 'en-US': 'Configure the template for customizing table header content' },
      'desc': {
        'zh-CN': '<p>配置式多级表头</p>\n',
        'en-US':
          '<p>Set the <code>header</code> slot and configure the template of the customized table header content. </p>\n'
      },
      'codeFiles': ['header/config-grid-header.vue']
    },
    {
      'demoId': 'header-slot-header',
      'name': { 'zh-CN': '自定义表头内容模板', 'en-US': 'Basic Description' },
      'desc': {
        'zh-CN': '<p>设置 <code>header</code> 插槽，配置自定义表头内容的模板。</p>\n',
        'en-US':
          '<p>Add the class name to the cell of the table header through the column attribute <code>header-class-name</code>, or the function Function({$rowIndex, column, columnIndex, $columnIndex}) . \n</p>\n'
      },
      'codeFiles': ['header/slot-header.vue']
    }
  ],
  apis: [{ 'name': 'grid-header', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
