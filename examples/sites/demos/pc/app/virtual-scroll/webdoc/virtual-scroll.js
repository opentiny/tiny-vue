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
        'zh-CN': `<p>通过<code>data</code>数据源来传输数据。<br>
                    通过<code>item-size</code>属性设置每项的高度,<code>item-index</code>属性设置列表的索引保证唯一性,<code>visible-size</code>属性设置虚拟滚动显示的高度。<br>
                    <code>default</code>插槽,列表每项项目的内容元素。</p>\n`,
        'en-US': `<p>Data is transferred via the <code>data</code> data source.<br>
                  The <code>item-size</code> property is used to set the height of each item, the <code>item-index</code> property is used to set the index of the list to ensure uniqueness, and the <code>visible-size</code> property is used to set the height of the virtual scroll display.<br>
                  The <code>default</code> slot, the content element for each item in the list.</p>\n`
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
        'zh-CN': `<p>通过<code>estimated-item-size</code>属性设置每项项目预估高度,触发高度动态变化的列表数据的虚拟展示。<br>
                    通过<code>buffer</code>属性设置缓冲区的比例，预缓存显示区域上下的区域的数据。</p>\n`,
        'en-US': `<p>By using the<code>estimated item size</code>attribute to set the estimated height for each item, virtual display of dynamically changing list data is triggered< br>
                    Set the buffer ratio through the<code>buffer</code>attribute to pre cache data in the upper and lower display areas.</p>\n.`
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
        'zh-CN': '<p>使用<code>scrollToItem</code>方法实现到达指定索引的项目。</p>\n',
        'en-US': '<p>Use the<code>scrollToItem</code>method to implement items that reach the specified index.</p>\n.'
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
