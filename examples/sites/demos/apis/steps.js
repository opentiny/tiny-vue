export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'steps',
      type: 'component',
      props: [
        {
          name: 'active',
          type: 'number',
          defaultValue: '-1',
          desc: {
            'zh-CN': '当前步骤索引，从0开始计数',
            'en-US': 'Current step index and count from 0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'advanced-steps',
          mfDemo: ''
        },
        {
          name: 'advanced',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启高级向导模式',
            'en-US': 'Enable Advanced Wizard Mode'
          },
          mode: ['mobile-first'],
          mfDemo: 'advanced-steps'
        },
        {
          name: 'count-field',
          type: 'string',
          defaultValue: "'count'",
          desc: {
            'zh-CN': '条形步骤条里徽标计数对应的字段名',
            'en-US': 'Custom field name corresponding to logo count in bar steps'
          },
          mode: ['pc'],
          pcDemo: 'custom-steps-item'
        },
        {
          name: 'data',
          typeAnchorName: 'IStepsItem',
          type: 'IStepsItem[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '步骤条的数据',
            'en-US': 'data of steps'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'line-horizontal',
          mfDemo: ''
        },
        {
          name: 'description-field',
          type: 'String',
          defaultValue: 'description',
          desc: {
            'zh-CN': '描述字段',
            'en-US': 'Description field'
          },
          mode: ['mobile-first']
        },
        {
          name: 'dot',
          type: 'Boolean',
          defaultValue: 'false',
          meta: {
            stable: '3.19.0'
          },
          desc: {
            'zh-CN': '点状形步骤条，当值只支持垂直样式',
            'en-US': 'Dot shaped step bar, values only support vertical style'
          },
          mode: ['pc'],
          pcDemo: 'line-dot'
        },
        {
          name: 'duration',
          type: 'number',
          defaultValue: '300',
          desc: {
            'zh-CN': '节点滚动的持续时间（单位 ms），仅高级向导模式有效',
            'en-US': 'time of node scrolling(unit: ms), only apply for advanced mode'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'duration',
          mfDemo: 'duration'
        },
        {
          name: 'flex',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '节点是否自适应宽度',
            'en-US': 'responsible node width'
          },
          mode: ['pc'],
          pcDemo: 'node-width'
        },
        {
          name: 'name-field',
          type: 'string',
          defaultValue: "'name'",
          desc: {
            'zh-CN': '节点名称对应的字段名',
            'en-US': 'Field name corresponds to  name of node'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-steps-item',
          mfDemo: ''
        },
        {
          name: 'no-arrow',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '添加属性 no-arrow 隐藏左右箭头，在 PC 端按住 shift+鼠标滚轮 进行节点左右滚动，移动端触屏左右滑动即可，仅开启 advanced 高级向导模式有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN':
              'line 单链型模式支持 mini、small、medium、large 4 种尺寸，默认值为 medium。advanced 高级向导模式支持 medium、large 2 种尺寸，默认值为 medium',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'space',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '节点宽度, 可取值数字、带长度单位数值与百分比，传数字则默认以 px 为长度单位',
            'en-US':
              'Node width can be set to numeric values, values with length units, or percentages. Numeric values will default to using pixels as the length unit'
          },
          mode: ['pc'],
          pcDemo: 'node-width'
        },
        {
          name: 'status-field',
          type: 'string',
          defaultValue: "'status'",
          desc: {
            'zh-CN': '数据状态对应的字段名，用于条形步骤条',
            'en-US': 'Field name corresponding to data status, used for bar steps '
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-steps-item',
          mfDemo: ''
        },
        {
          name: 'vertical',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启垂直单链型',
            'en-US': 'Indicates whether to enable the vertical single chain mode.'
          },
          mode: ['mobile-first'],
          mfDemo: 'vertical'
        },
        {
          name: 'visible-num',
          type: 'Number',
          defaultValue: '5',
          desc: {
            'zh-CN': '显示模块数量，超出隐藏',
            'en-US': 'Display the number of modules. The number of modules exceeds the hidden value'
          },
          mode: ['mobile-first'],
          mfDemo: 'vertical'
        }
      ],
      events: [
        {
          name: 'click',
          type: '(index: number, node: <a href="#IStepsItem">IStepsItem</a>) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '节点点击事件，参数：<li>index: 点击节点的索引</li><li>node：点击节点的数据</li>',
            'en-US': 'Node click event. Parameter: (index: node index, node: node data information)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'click',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'block-bottom',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '滚动块底部插槽，仅开启 advanced 高级向导模式有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'item',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '步骤条数据项插槽，用于条形步骤条',
            'en-US': 'Step bar data item slot, used for bar steps'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-item',
          mfDemo: ''
        },
        {
          name: 'prefix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '前置插槽，仅开启 advanced 高级向导模式有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IStepsItem',
      type: 'interface',
      depTypes: ['IStepsStatus'],
      code: `
interface IStepsItem {
  // 节点数据
  name: string, // 节点名称
  status?: IStepsStatus, // 节点状态，取值见下面IStepsStatus类型说明
  description?: string, // 描述，仅用于单链型步骤条
  count?: number // 节点右上角徽标计数，仅用于默认条形步骤条
}
      `
    },
    {
      name: 'IStepsStatus',
      type: 'type',
      code: `type IStepsStatus = 'doing' | 'done' | 'disabled' | 'error' | ''`
    }
  ]
}
