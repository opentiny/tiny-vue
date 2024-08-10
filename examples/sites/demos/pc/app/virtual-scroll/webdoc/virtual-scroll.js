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
        'zh-CN': '<p>通过data数据源来传输数据</p>\n',
        'en-US': '<p>Transferring data through a data source</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'dynamic-height',
      name: {
        'zh-CN': '动态高度',
        'en-US': 'dynamic-height'
      },
      desc: {
        'zh-CN': '<p>estimatedItemSize预估高度，实现不知道高度的数据的虚拟滚动</p>\n',
        'en-US':
          '<p>estimatedItemSize estimates the height and enables virtual scrolling of data that does not know the height</p>\n'
      },
      codeFiles: ['dynamic-height.vue']
    }
  ]
}
