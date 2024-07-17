export default {
  mode: ['pc'],
  apis: [
    {
      name: 'tree-select',
      type: 'component',
      props: [
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用一键清除的功能',
            'en-US': 'Whether to display the one click clear button, only applicable to radio selection'
          },
          mode: ['pc'],
          pcDemo: 'filter'
        },
        {
          name: 'filter-method',
          type: '(query: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义过滤方法',
            'en-US': 'Custom filtering method'
          },
          mode: ['pc'],
          pcDemo: 'filter'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可搜索',
            'en-US': 'Is it searchable'
          },
          mode: ['pc'],
          pcDemo: 'filter'
        },
        {
          name: 'modelValue / v-model',
          type: 'string | number | Array<string|number>',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bind value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许选择多个选项',
            'en-US': 'Allow multiple options to be selected'
          },
          mode: ['pc'],
          pcDemo: 'multiple'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: "'label'",
          desc: {
            'zh-CN': '显示值字段',
            'en-US': 'Show Value Fields'
          },
          mode: ['pc'],
          pcDemo: 'map-field'
        },
        {
          name: 'tree-op',
          typeAnchorName: 'ITreeOption',
          type: 'ITreeOption',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉树时，内置树组件的配置，用法同 Tree 组件。',
            'en-US':
              'When pulling down a tree, the configuration of the built-in tree component is the same as that of the Tree component. To be used in conjunction with the render type attribute'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '绑定值字段',
            'en-US': 'Bind Value Field'
          },
          mode: ['pc'],
          pcDemo: 'map-field'
        }
      ]
    }
  ],
  types: [
    {
      name: 'ITreeOption',
      type: 'interface',
      code: `
interface ITreeNode {
  label: string         // 默认树节点的文本字段
  id: number|string     // 树节点唯一标识
  children: ITreeNode[] // 子节点
}

interface ITreeOption {
  data: ITreeNode[] // 树数据，用法同 Tree
}
`
    }
  ]
}
