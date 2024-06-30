export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'multiSelect',
      type: 'component',
      props: [
        {
          name: 'data-source',
          type: 'IMultiSelectMenu[]',
          typeAnchorName: 'IMultiSelectMenu',
          defaultValue: '[]',
          desc: {
            'zh-CN': '数据源',
            'en-US': 'data source'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'default-selected-array',
          type: 'number[]',
          defaultValue: '',
          desc: {
            'zh-CN': `默认值，当 type='wheel' 时适用`,
            'en-US': `default selected value, used when type='wheel'`
          },
          mode: ['mobile'],
          mobileDemo: 'type-wheel'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'disabled'
          },
          mode: ['mobile'],
          mobileDemo: 'disabled'
        },
        {
          name: 'filterable',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '可筛选',
            'en-US': 'filterable'
          },
          mode: ['mobile'],
          mobileDemo: 'filter'
        },
        {
          name: 'mask',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'to show mask'
          },
          mode: ['mobile'],
          mobileDemo: 'mask'
        },
        {
          name: 'mask-options',
          type: 'IMaskOptions',
          typeAnchorName: 'IMaskOptions',
          defaultValue: '{}',
          desc: {
            'zh-CN':
              '遮罩层配置：<ul><li>zIndex: 遮罩层的层叠数值</li><li>cancelTouch: 是否禁用 touch 事件，禁用后点击遮罩层不能关闭下拉框</li></ul>',
            'en-US':
              'Mask layer settings, including the following properties: <p>zIndex: the stacking order value of the mask layer;</p><p>cancelTouch: whether to disable touch events.</p>'
          },
          mode: ['mobile'],
          mobileDemo: 'mask-options'
        },
        {
          name: 'search-placeholder',
          type: 'string',
          defaultValue: '搜索',
          desc: {
            'zh-CN': '搜索框默认提示',
            'en-US': 'search input placeholder'
          },
          mode: ['mobile'],
          mobileDemo: 'filter'
        },
        {
          name: 'type',
          type: `'list' | 'wheel'`,
          defaultValue: '',
          desc: {
            'zh-CN': '选项外观，其中 list：列表形式；wheel：滑轮模式',
            'en-US': 'option appearance'
          },
          mode: ['mobile'],
          mobileDemo: 'wheel'
        },
        {
          name: 'v-model/modelValue',
          type: '(string | string[])[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '<p>选中值</p>',
            'en-US': '<p>selected value</p>'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'item-click',
          type: '(option, headerIndex) => void',
          desc: {
            'zh-CN': '点击选项事件，当 type="list" 时适用',
            'en-us': 'click option event, applicable when type = "list"'
          },
          mode: ['mobile'],
          mobileDemo: 'event-click-item'
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': `确认事件，当 type='wheel' 时适用`,
            'en-US': `confirm selection event, applicable when the type = 'wheel'`
          },
          mode: ['mobile'],
          mobileDemo: 'type-wheel'
        },
        {
          name: 'reset',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': `重置事件，当 type='wheel' 时适用`,
            'en-US': `reset selection event, applicable when the type = 'wheel'`
          },
          mode: ['mobile'],
          mobileDemo: 'type-wheel'
        }
      ],
      slots: [
        {
          name: 'footer',
          desc: {
            'zh-CN': '选项底部插槽',
            'en-US': 'slot under options'
          },
          mode: ['mobile'],
          mobileDemo: 'slots'
        }
      ]
    }
  ],

  types: [
    {
      name: 'IMultiSelectMenu',
      type: 'interface',
      code: `
interface IMultiSelectMenu {
  title: string, // 菜单项标题
  options: IMultiSelectOption[], // 选项数据
  multiple?: boolean, // 是否多选
  disabled?: boolean, // 菜单项是否禁用
  hasFooter?: boolean // 是否显示底部
}
`
    },
    {
      name: 'IMultiSelectOption',
      type: 'interface',
      code: `
interface IMultiSelectOption {
  label: string, // 选项内容
  value: string, // 选项值
  disabled?: boolean, // 是否禁用
  children?: IMultiSelectOption[], // 子选项数据
}
`
    }
  ]
}
