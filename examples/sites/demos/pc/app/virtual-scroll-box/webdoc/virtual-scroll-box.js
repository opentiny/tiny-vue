export default {
  column: '2',
  owner: '',
  meta: {
    stable: '3.19.0'
  },
  demos: [
    {
      demoId: 'table',
      name: {
        'zh-CN': '表格场景',
        'en-US': 'Table Scenario'
      },
      desc: {
        'zh-CN': `
        基础能力：
        1. 支持行列虚拟滚动
        2. 支持可变行高，可变列宽
        3. 支持行上固定，行下固定，列左固定，列右固定
        4. 支持单元格合并`,
        'en-US': `
        Basic capabilities:
        1. Virtual scrolling of rows and columns is supported.
        2. Supports variable row height and column width.
        3. Supports row fixing, row fixing, left fixing, and right fixing.
        4. Support cell combination`
      },
      codeFiles: ['table.vue']
    },
    {
      demoId: 'tree',
      name: {
        'zh-CN': '树场景',
        'en-US': 'Tree Scene'
      },
      desc: {
        'zh-CN': '支持嵌套树形控件组件实现树的虚拟滚动',
        'en-US': 'Virtual tree scrolling is supported by nested tree control componentsn'
      },
      codeFiles: ['tree.vue']
    }
  ]
}
