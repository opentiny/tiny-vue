export default {
  mode: ['pc'],
  apis: [
    {
      name: 'grid-select',
      type: 'component',
      props: [
        {
          name: 'grid-op',
          typeAnchorName: 'IGridOption',
          type: 'IGridOption',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉表格时，内置表格组件的配置，用法同 Grid 组件。',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IGridOption',
      type: 'interface',
      code: `
interface ITreeNode {
  label: string         // 默认树节点的文本字段
  id: number|string     // 树节点唯一标识
  children: ITreeNode[] // 子节点
}

interface IGridOption {
  data: ITreeNode[] // 树数据，用法同 Tree
}
`
    }
  ]
}
