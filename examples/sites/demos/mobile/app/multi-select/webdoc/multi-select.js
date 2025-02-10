export default {
  column: '2',
  owner: '',
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
          demoId: 'basic-usage'
        },
        {
          name: 'default-selected-array',
          type: 'number[]',
          defaultValue: '',
          desc: {
            'zh-CN': "默认值，当 type='wheel' 时适用",
            'en-US': "default selected value, used when type='wheel'"
          },
          demoId: 'type-wheel'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'disabled'
          },
          demoId: 'disabled'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '可筛选',
            'en-US': 'filterable'
          },
          demoId: 'filter'
        },
        {
          name: 'mask',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'to show mask'
          },
          demoId: 'mask'
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
          demoId: 'mask-options'
        },
        {
          name: 'search-placeholder',
          type: 'string',
          defaultValue: '搜索',
          desc: {
            'zh-CN': '搜索框默认提示',
            'en-US': 'search input placeholder'
          },
          demoId: 'filter'
        },
        {
          name: 'type',
          type: "'list' | 'wheel'",
          defaultValue: '',
          desc: {
            'zh-CN': '选项外观，其中 list：列表形式；wheel：滑轮模式',
            'en-US': 'option appearance'
          },
          demoId: 'wheel'
        },
        {
          name: 'v-model/modelValue',
          type: '(string | string[])[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '<p>选中值</p>',
            'en-US': '<p>selected value</p>'
          },
          demoId: 'basic-usage'
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
          demoId: 'event-click-item'
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': "确认事件，当 type='wheel' 时适用",
            'en-US': "confirm selection event, applicable when the type = 'wheel'"
          },
          demoId: 'type-wheel'
        },
        {
          name: 'reset',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': "重置事件，当 type='wheel' 时适用",
            'en-US': "reset selection event, applicable when the type = 'wheel'"
          },
          demoId: 'type-wheel'
        }
      ],
      slots: [
        {
          name: 'footer',
          desc: {
            'zh-CN': '选项底部插槽',
            'en-US': 'slot under options'
          },
          demoId: 'slots'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>通过 <code>data-source</code> 属性绑定可选项数据，<code>v-model</code> 设置被选中值。</p>',
        'en-US':
          '<p>Bind the optional data through the <code>data-source</code> attribute, and set the selected value through <code>v-model</code>.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层',
        'en-US': 'Mask Setting'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>mask</code> 属性显示遮罩层，同时利用 <code>mask-options</code> 属性设置遮罩层属性。</p>',
        'en-US':
          '<p>Display a mask layer using the <code>mask</code> attribute, and set the mask layer properties using the <code>mask-options</code> attribute.</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>disabled</code> 属性禁用组件，也支持在 <code>data-source</code> 数据源指定特定选项禁用。</p>',
        'en-US':
          '<p>Use the <code>disabled</code> attribute to disable the component, and can also specify specific options to disable in the <code>data-source</code> data source.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'filter',
      name: {
        'zh-CN': '选项过滤',
        'en-US': 'Filter'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filterable</code> 属性启用搜索功能，<code>search-placeholder</code> 属性设置搜索提示，<code>search-value</code> 属性可双向绑定搜索框输入值。</p>',
        'en-US':
          '<p>Enable search functionality through the <code>filterable</code> attribute, <code>search-placeholder</code> attribute sets the search prompt, and the <code>search-value</code> attribute enables two-way binding of the search box input value.</p>'
      },
      codeFiles: ['filter.vue']
    },
    {
      demoId: 'type-wheel',
      name: {
        'zh-CN': '滑轮模式',
        'en-US': 'Type Wheel'
      },
      desc: {
        'zh-CN': `<p>通过 <code>type</code> 属性设置选项形式，可选值有以下两种：</p>
        <ul>
          <li>list: 列表形式</li>
          <li>wheel: 滚动滑轮</li>
        </ul>`,
        'en-US': `<p>Set the option form by using the <code>type</code> attribute, with the following two optional values:</p>
        <ul>
          <li>list: scroll list</li>
          <li>wheel: scroll wheel</li>
        </ul>`
      },
      codeFiles: ['type-wheel.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN': '<p>通过 <code>footer</code> 插槽可自定义选项下方区域元素。</p>',
        'en-US': '<p>Use <code>footer</code> slot to customize elements under options list.</p>'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'event-click-item',
      name: {
        'zh-CN': '点击选项事件',
        'en-US': 'Type Wheel'
      },
      desc: {
        'zh-CN': '<p>通过 <code>item-click</code> 监听选项点击事件。</p>',
        'en-US': '<p>Listen to the option click event through <code>item-click</code>.</p>'
      },
      codeFiles: ['event-click-item.vue']
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
    }
  ]
}
