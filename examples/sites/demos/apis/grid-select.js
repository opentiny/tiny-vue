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
          defaultValue: "''",
          desc: {
            'zh-CN': '显示值字段',
            'en-US': 'Show Value Fields'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '绑定值字段',
            'en-US': 'Bind Value Field'
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
interface IGridOption {
  data: Record<string, any>
  columns: {
    type: string
    field: string
    title: string
    width: number
  }[] // 表格列数据，用法同 Grid
}
`
    }
  ]
}
