export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'normal-steps',
      'name': { 'zh-CN': '单链型步骤条', 'en-US': 'chain steps' },
      'desc': {
        'zh-CN':
          '<p>使用 <code>tiny-time-line</code> 标签时显示为单链型步骤条，通过 <code>data</code> 属性绑定节点数据， <code>active</code> 属性指定当前选中节点。</p>\n',
        'en-US':
          '<p>When using <code>tiny-time-line</code> tags, it displays as a chain steps.The node data is bound through the <code>data</code> attribute, and the <code>active</code> property specifies the currently selected node.</p>\n'
      },
      'codeFiles': ['normal-steps.vue']
    },
    {
      'demoId': 'advanced-steps',
      'name': { 'zh-CN': '条形步骤条', 'en-US': 'Bar steps' },
      'desc': {
        'zh-CN': '<p>使用 <code>tiny-steps</code> 标签时，显示为条形步骤条。</p>\n',
        'en-US': 'When using <code>tiny-steps<</code> tags, it displays as a bar steps.'
      },
      'codeFiles': ['advanced-steps.vue']
    },
    {
      'demoId': 'vertical-steps',
      'name': { 'zh-CN': '竖式步骤条', 'en-US': 'Vertical steps' },
      'desc': {
        'zh-CN': '<p>使用 <code>vertical</code> 属性设置为条形步骤条。</p>\n',
        'en-US': 'Use <code>vertical<</code> attribute to set vertical steps.'
      },
      'codeFiles': ['vertical-steps.vue']
    },
    {
      'demoId': 'space',
      'name': { 'zh-CN': '节点宽度', 'en-US': 'Common Step Bar' },
      'desc': {
        'zh-CN': '<p>使用 <code>space</code> 属性配置步骤条节点的宽度。</p>\n',
        'en-US': '<p>Using <code>space</code> attribute to set node width. </p>\n'
      },
      'codeFiles': ['space.vue']
    },
    {
      'demoId': 'node-status',
      'name': { 'zh-CN': '节点状态', 'en-US': 'Timeline Step Bar' },
      'desc': {
        'zh-CN':
          '<p>通过单个节点数据中的 <code>disabled</code> 属性配置是否禁用；<code>error</code> 属性配置错误状态</p>\n',
        'en-US':
          '<p>The <code>disabled</code> attribute in single node data is used to configure whether to disable, while the <code>error</code> attribute is used to configure error state</p>\n'
      },
      'codeFiles': ['node-status.vue']
    },
    {
      'demoId': 'text-position',
      'name': { 'zh-CN': '节点名称位置', 'en-US': 'Node name position' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>text-position</code> 配置节点名称位置，默认位于序号下方, 当取值为 <code>right</code> 时名称位于序号右侧。</p>\n',
        'en-US':
          '<p>Configure the position of the node name using <code>text-position</code>, with the default position being below the number. When the value is <code>right</code>, the name is positioned to the right of the number.</p>\n'
      },
      'codeFiles': ['text-position.vue']
    },
    {
      'demoId': 'show-divider',
      'name': { 'zh-CN': '底部分割线', 'en-US': 'Bottom dividing line' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-divider</code> 属性设置是否显示步骤条底部分隔线，仅当节点文本内容位于序号右边时生效。</p>\n',
        'en-US':
          '<p><code>show-divider</code> attribute is used to set whether to display the bottom dividing line of the step bar. It only takes effect when the node text content is located to the right of the number. </p>\n'
      },
      'codeFiles': ['show-divider.vue']
    },
    {
      'demoId': 'slot-description',
      'name': { 'zh-CN': '节点描述插槽', 'en-US': 'Node Description' },
      'desc': {
        'zh-CN': '<p>通过 <code>description</code> 插槽添加单个节点的描述信息。</p>\n',
        'en-US': '<p>Add description information for a single node through the <code>description</code> slot.</p>\n'
      },
      'codeFiles': ['slot-description.vue']
    },
    {
      'demoId': 'slot-active-node-desc',
      'name': { 'zh-CN': '当前节点描述信息', 'en-US': 'Click Event' },
      'desc': {
        'zh-CN': '<p>通过 <code>active-node-desc</code> 插槽添加当前选中节点的描述信息。</p>\n',
        'en-US':
          '<p>Add description information for the active node through the <code>active-node-desc</code> slot. </p>\n'
      },
      'codeFiles': ['slot-active-node-desc.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Use of slots' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性设置步骤条尺寸。</p>\n',
        'en-US': '<p>Set size of steps through <code>size</code> attribute.</p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'custom-steps-item',
      'name': { 'zh-CN': '自定义字段', 'en-US': 'Custom fields' },
      'desc': {
        'zh-CN':
          "<p>可以通过以下属性自定义数据项字段：<br /><code>name-field</code>： 设置节点信息中名称对应的字段名，默认为 'name'  <br /><code>count-field</code>：设置条形步骤条里徽标计数对应的字段名，默认为 'count' 。<br /><code>status-field</code>：设置数据状态对应的字段名，默认为 'status' 。</p>\n",
        'en-US':
          "You can customize the data item fields with the following attributes.<br /><code>name-field</code>: Set the field name corresponding to the name in the node information, the default is 'name'.<br /><code>count-field</code>Set the field name corresponding to the count in the logo counter of the bar step bar, the default is 'count'.<br /><code>status-field</code>: Set the field name corresponding to the status in the data item, the default is 'status'."
      },
      'codeFiles': ['custom-steps-item.vue']
    },
    {
      'demoId': 'only-number',
      'name': { 'zh-CN': '纯数字序号', 'en-US': 'Only numeric order' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>only-number</code> 为true时，节点只显示数字序号而不显示任何状态图标，仅适用单链型步骤条。</p>\n',
        'en-US':
          'When setting <code>only-number</code> to true, the node only displays numeric serial numbers without any status icons, only applicable to chain steps.'
      },
      'codeFiles': ['only-number.vue']
    },
    {
      'demoId': 'click',
      'name': { 'zh-CN': '点击事件', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>点击节点时触发 <code>click</code> 事件。</p>\n',
        'en-US': 'Trigger <code>click</code> event when clicking on a node.'
      },
      'codeFiles': ['click.vue']
    },
    {
      'demoId': 'slot-item',
      'name': { 'zh-CN': 'item插槽', 'en-US': 'item slot' },
      'desc': {
        'zh-CN': '<p>通过插槽 <code>item</code> 自定义节点内容。</p>\n',
        'en-US': 'Customize step bar node content through scope slot <code>item</code>.'
      },
      'codeFiles': ['slot-item.vue']
    }
  ],
  apis: [
    {
      'name': 'steps',
      'type': 'component',
      'properties': [
        {
          'name': 'active',
          'type': 'number',
          'defaultValue': '-1',
          'desc': {
            'zh-CN': '当前步骤索引，从0开始计数',
            'en-US': 'Current step index and count from 0'
          },
          'demoId': 'advanced-steps'
        },
        {
          'name': 'count-field',
          'type': 'string',
          'defaultValue': 'count',
          'desc': {
            'zh-CN': '条形步骤条里徽标计数对应的字段名',
            'en-US': 'Custom field name corresponding to logo count in bar steps'
          },
          'demoId': 'custom-steps-item'
        },
        {
          'name': 'data',
          'type': 'IStepsItem',
          'typeAnchorName': 'IStepsItem[] | ITimelineItem[]',
          'defaultValue': '[]',
          'desc': {
            'zh-CN':
              '步骤条数据，其中条形步骤条的数据类型参考<a href="IStepsItem">IStepsItem</a>；单链型步骤条的数据类型参考<a href="time-line#ITimelineItem">Timeline组件</a>',
            'en-US':
              'The data type of the step bar is referred to <a href="IStepsItem">IStepsItem</a>, and the data type of the chain step bar is referred to <a href="time-line#ITimelineItem">Timeline component</a>.'
          },
          'demoId': 'normal-steps'
        },
        {
          'name': 'name-field',
          'type': 'string',
          'defaultValue': 'name',
          'desc': {
            'zh-CN': '节点名称对应的字段名',
            'en-US': 'Field name corresponds to  name of node'
          },
          'demoId': 'custom-steps-item'
        },
        {
          'name': 'only-number',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '节点序号是否只显示数字，用于单链型步骤条',
            'en-US': 'Whether the node sequence number only displays numbers, used for chain steps'
          },
          'demoId': 'only-number'
        },
        {
          'name': 'reverse',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否逆序展示数据，用于单链型步骤条',
            'en-US': 'Whether to display data in reverse order, used for chain steps'
          },
          'demoId': 'vertical-steps'
        },
        {
          'name': 'show-divider',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示单链型步骤条的底部分割线',
            'en-US': 'Whether to display the bottom separator line of the chain steps'
          },
          'demoId': 'show-divider'
        },
        {
          'name': 'space',
          'type': 'string | number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点宽度, 可取值数字、带长度单位数值与百分比，传数字则默认以 px 为长度单位。',
            'en-US':
              'Node width can be set to numeric values, values with length units, or percentages. Numeric values will default to using pixels as the length unit'
          },
          'demoId': 'space'
        },
        {
          'name': 'status-field',
          'type': 'string',
          'defaultValue': 'status',
          'desc': {
            'zh-CN': '数据状态对应的字段名，用于条形步骤条',
            'en-US': 'Field name corresponding to data status, used for bar steps '
          },
          'demoId': 'custom-steps-item'
        },
        {
          'name': 'text-position',
          'type': 'string',
          'defaultValue': 'bottom',
          'desc': {
            'zh-CN': '节点名称的位置， 可选值有right | bottom，用于单链型步骤条',
            'en-US':
              'The position of the node name, with optional values of right | bottom, is used for the chain steps'
          },
          'demoId': 'text-position'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '(index: number, node: IStepsItem | ITimelineItem) => void',
          'desc': {
            'zh-CN': '节点点击事件，参数：<li>index: 点击节点的索引</li><li>node：点击节点的数据</li>',
            'en-US': 'Node click event. Parameter: (index: node index, node: node data information)'
          },
          'demoId': 'click'
        }
      ],
      'slots': [
        {
          'name': 'active-node-desc',
          'desc': {
            'zh-CN': '当前节点描述信息插槽，用于单链型步骤条',
            'en-US': 'Current node description information slot, used for chain steps'
          },
          'demoId': 'slot-active-node-desc'
        },
        {
          'name': 'description',
          'desc': {
            'zh-CN': '节点描述信息插槽，用于单链型步骤条',
            'en-US': 'Node description information slot, used for chain steps'
          },
          'demoId': 'slot-description'
        },
        {
          'name': 'item',
          'desc': {
            'zh-CN': '步骤条数据项插槽，用于条形步骤条',
            'en-US': 'Step bar data item slot, used for bar steps'
          },
          'demoId': 'slot-item'
        }
      ]
    }
  ],
  'types': [
    {
      'name': 'IStepsItem',
      'type': 'interface',
      'code': `
interface IStepsItem {
  // 条形步骤条数据项
  name: string, // 节点名称
  status: IStepsStatus, // 节点状态，取值见下面IStepsStatus类型说明
  count: number // 节点右上角徽标计数
}
      `
    },
    {
      'name': 'IStepsStatus',
      'type': 'type',
      'code': `type IStepsStatus = 'doing' | 'done' | 'disabled' | 'error' | ''`
    }
  ]
}
