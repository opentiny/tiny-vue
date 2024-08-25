export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>通过data数据源来传输数据。</p>\n',
        'en-US': '<p>Transferring data through a data source.</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'dynamic-height',
      name: {
        'zh-CN': '动态高度',
        'en-US': 'Dynamic Height'
      },
      desc: {
        'zh-CN': '<p>使用estimatedItemSize预估高度,实现未知高度的数据的虚拟滚动。</p>\n',
        'en-US':
          '<p>estimatedItemSize estimates the height and enables virtual scrolling of data that does not know the height</p>\n.'
      },
      codeFiles: ['dynamic-height.vue']
    },
    {
      demoId: 'specified-item',
      name: {
        'zh-CN': '滚动指定索引项目',
        'en-US': 'Scrolls the specified index item'
      },
      desc: {
        'zh-CN': '<p>输入框选择项目索引，可滚动到指定项目。</p>\n',
        'en-US': '<p>Input box to select an item index to scroll to a specific item.</p>\n.'
      },
      codeFiles: ['specified-item.vue']
    },
    {
      demoId: 'show-status',
      name: {
        'zh-CN': '显示状态',
        'en-US': 'show status'
      },
      desc: {
        'zh-CN': '<p>点击按钮，切换数据显示的状态。</p>\n',
        'en-US': '<p>Click the button to toggle the state of the data display.</p>\n.'
      },
      codeFiles: ['show-status.vue']
    }
  ]
}
