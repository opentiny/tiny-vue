export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'grid-select',
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
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可搜索',
            'en-US': 'Is it searchable'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote'
        },
        {
          name: 'filter-method',
          type: '(query: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义过滤方法',
            'en-US': 'Custom filtering method'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote'
        },
        {
          name: 'grid-op',
          typeAnchorName: 'IGridOption',
          type: 'IGridOption',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉表格时，内置表格组件的配置，用法同 Grid 组件。',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote'
        },
        {
          name: 'radio-config',
          typeAnchorName: 'IRadioConfig',
          type: 'IRadioConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '单选配置项',
            'en-US': 'Radio config'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'config'
        },
        {
          name: 'remote',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为远程搜索',
            'en-US': 'Is it a remote search'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote'
        },
        {
          name: 'remote-method',
          type: '(query:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '远程搜索的方法',
            'en-US': 'Remote search methods'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote'
        },
        {
          name: 'reserve-keyword',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '多选可搜索时，是否在选中一个选项后仍然保留当前的搜索关键词',
            'en-US':
              'When selecting multiple searchable options, do you still keep the current search keywords after selecting one option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote'
        },
        {
          name: 'select-config',
          typeAnchorName: 'ISelectConfig',
          type: 'ISelectConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '多选配置项',
            'en-US': 'Select config'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'config'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '显示值字段',
            'en-US': 'Show Value Fields'
          },
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
  data: Record<string, unknown>
  columns: IColumnConfig[] // 表格列数据，同 Grid 组件的 IColumnConfig：https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/grid#api
}
`
    },
    {
      name: 'IRadioConfig',
      type: 'interface',
      code: `
同 Grid 组件的 IRadioConfig：https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/grid#api
`
    },
    {
      name: 'ISelectConfig',
      type: 'interface',
      code: `
同 Grid 组件的 ISelectConfig：https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/grid#api
`
    }
  ]
}
