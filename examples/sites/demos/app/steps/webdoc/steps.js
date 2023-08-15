export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'data-resource',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['data-resource.vue']
    },
    {
      'demoId': 'space',
      'name': { 'zh-CN': '节点宽度', 'en-US': 'Common Step Bar' },
      'desc': {
        'zh-CN': '<p>使用 <code>space</code>属性配置步骤条节点的宽度。</p>\n',
        'en-US':
          '<p>Use the <code>tiny-time-line</code> tag and set <code>type</code> to <code>normal</code> to implement common steps. </p>\n'
      },
      'codeFiles': ['space.vue']
    },
    {
      'demoId': 'normal-steps',
      'name': { 'zh-CN': '普通步骤条', 'en-US': 'Advanced Wizard' },
      'desc': {
        'zh-CN':
          '<p>使用 <code>tiny-time-line</code> 标签，并设置 <code>type</code> 为 <code>normal</code> 实现普通步骤条。</p>\n',
        'en-US': '<p>Set <code>type</code> to <code>advanced</code> to enable the advanced wizard function. </p>\n'
      },
      'codeFiles': ['normal-steps.vue']
    },
    {
      'demoId': 'node-status',
      'name': { 'zh-CN': '节点状态', 'en-US': 'Timeline Step Bar' },
      'desc': {
        'zh-CN':
          '<p>通过单个节点数据的<code>disabled</code> 属性配置是否禁用;通过 <code>error</code> 属性配置错误状态</p>\n',
        'en-US':
          '<p>Use the <code>tiny-time-line</code> tag and set <code>type</code> to <code>timeline</code> to implement the timeline step bar. If the <code>vertical</code> attribute is configured, the timeline step bar changes to the vertical mode. If the <code>reverse</code> attribute is configured, the timeline step bar changes to the vertical mode. </p>\n'
      },
      'codeFiles': ['node-status.vue']
    },
    {
      'demoId': 'text-position',
      'name': { 'zh-CN': '文本内容位置', 'en-US': 'Customized Data Item' },
      'desc': {
        'zh-CN':
          '<p>通过<code>textPosition</code> 配置节点内容位置，默认位于序号下方, 取值为<code>"right"</code>时内容位于序号右边。</p>\n',
        'en-US':
          "<p>By default, the subobjects of bound data contain the name, count, and status fields. \n<code>name-field</code>: Set the field name corresponding to the name in the node information. The default value is'name'. \n<code>count-field</code>: field name corresponding to the logo count in the advanced wizard. The default value is'count'. \n<code>status-field</code>: field name corresponding to the data status. The default value is status. </p>\n"
      },
      'codeFiles': ['text-position.vue']
    },
    {
      'demoId': 'show-divider',
      'name': { 'zh-CN': '底部分割线', 'en-US': 'Order Process' },
      'desc': {
        'zh-CN':
          '<p>通过<code>show-divider</code> 设置是否显示步骤条底部分隔线，仅当节点文本内容位于序号右边时生效。</p>\n',
        'en-US': '<p>The Steps component is used to simulate the order process. </p>\n'
      },
      'codeFiles': ['show-divider.vue']
    },
    {
      'demoId': 'slot-description',
      'name': { 'zh-CN': '节点描述信息', 'en-US': 'Node Description' },
      'desc': {
        'zh-CN': '<p>通过<code>description</code> 插槽添加单个节点的补充描述信息。</p>\n',
        'en-US': '<p>The <code>click</code> event is triggered when a node is clicked. </p>\n'
      },
      'codeFiles': ['slot-description.vue']
    },
    {
      'demoId': 'slot-active-node-desc',
      'name': { 'zh-CN': '当前节点描述信息', 'en-US': 'Click Event' },
      'desc': {
        'zh-CN': '<p>通过<code>active-node-desc</code> 插槽添加当前节点一些自定义的描述信息。</p>\n',
        'en-US': '<p>The <code>click</code> event is triggered when a node is clicked. </p>\n'
      },
      'codeFiles': ['slot-active-node-desc.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Use of slots' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 设置步骤条尺寸。</p>\n',
        'en-US': '<p>Customize the content of the step bar node through the scope slot <code>item</code>. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'advanced-steps',
      'name': { 'zh-CN': '高级向导', 'en-US': '' },
      'desc': { 'zh-CN': '<p>设置 <code>type</code> 为 <code>advanced</code> 启用高级向导功能。</p>\n', 'en-US': '' },
      'codeFiles': ['advanced-steps.vue']
    },
    {
      'demoId': 'timeline-steps',
      'name': { 'zh-CN': '时间线步骤条', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>使用 <code>tiny-time-line</code> 标签，并设置 <code>type</code> 为 <code>timeline</code> 实现时间线步骤条。同时若配置 <code>vertical</code> 属性，时间线步骤条将变成竖向模式，而若再配置 <code>reverse</code> 属性，则还可以实现时间线步骤条竖向模式的反向形式。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['timeline-steps.vue']
    },
    {
      'demoId': 'custom-steps-item',
      'name': { 'zh-CN': '自定义数据项', 'en-US': '' },
      'desc': {
        'zh-CN':
          "<p>默认情况下，绑定数据的子对象包含 name、count 字段。\n<code>name-field</code>：设置节点信息中名称对应的字段名，默认为 'name' 。\n<code>count-field</code>：设置高级向导里徽标计数对应的字段名，默认为 'count' 。\n<code>status-field</code>：设置数据状态对应的字段名，默认为 'status' 。</p>\n",
        'en-US': ''
      },
      'codeFiles': ['custom-steps-item.vue']
    },
    {
      'demoId': 'only-number',
      'name': { 'zh-CN': '序号仅显示数字', 'en-US': '' },
      'desc': {
        'zh-CN':
          "<p>设置<code>only-number</code>为true时，节点只显示数字序号而不显示任何状态图标。</p>\n",
        'en-US': ''
      },
      'codeFiles': ['only-number.vue']
    },
    {
      'demoId': 'order-progress',
      'name': { 'zh-CN': '订单流程', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过 Steps 组件模拟订单流程。</p>\n', 'en-US': '' },
      'codeFiles': ['order-progress.vue']
    },
    {
      'demoId': 'click',
      'name': { 'zh-CN': '点击事件', 'en-US': '' },
      'desc': { 'zh-CN': '<p>点击节点时触发 <code>click</code> 事件。</p>\n', 'en-US': '' },
      'codeFiles': ['click.vue']
    },
    {
      'demoId': 'slot',
      'name': { 'zh-CN': '插槽的使用', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过作用域插槽 <code>item</code> 自定义步骤条节点内容。</p>\n', 'en-US': '' },
      'codeFiles': ['slot.vue']
    }
  ],
  apis: [
    {
      'name': 'steps',
      'type': 'component',
      'properties': [
        {
          'name': 'active',
          'type': 'Number',
          'defaultValue': '-1',
          'desc': {
            'zh-CN': '设置步骤条的选中步骤，默认为-1 。',
            'en-US': 'Set the selected step of the step bar. The default value is -1.'
          },
          'demoId': 'advanced-steps'
        },
        {
          'name': 'count-field',
          'type': 'String',
          'defaultValue': 'count',
          'desc': {
            'zh-CN': "设置高级向导里徽标计数对应的字段名，默认为 'count'",
            'en-US':
              "Set the field name corresponding to the logo count in the advanced wizard. The default value is'count'"
          },
          'demoId': 'custom-steps-item'
        },
        {
          'name': 'data',
          'type': 'Object , Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置步骤条的数据。', 'en-US': 'Set the step bar data.' },
          'demoId': 'data-resource'
        },
        {
          'name': 'name-field',
          'type': 'String',
          'defaultValue': 'name',
          'desc': {
            'zh-CN': "设置节点信息中名称对应的字段名，默认为 'name'",
            'en-US': "Set the field name corresponding to the name in the node information. The default value is'name'"
          },
          'demoId': 'custom-steps-item'
        },
        {
          'name': 'space',
          'type': 'String, Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置步骤条节点的宽度, 取值为数字、带长度单位数值与百分比，数字会默认以px为长度单位。',
            'en-US': 'Set the width of the step bar.'
          },
          'demoId': 'space'
        },
        {
          'name': 'status-field',
          'type': 'String',
          'defaultValue': 'status',
          'desc': {
            'zh-CN': "设置数据状态对应的字段名，默认为 'status'",
            'en-US': "Name of the field corresponding to the data status. The default value is'status'"
          },
          'demoId': 'custom-steps-item'
        },
        {
          'name': 'text-position',
          'type': 'String',
          'defaultValue': 'bottom',
          'desc': { 'zh-CN': '设置节点文本内容的位置, 可选值有right, bottom', 'en-US': '' },
          'demoId': 'text-position'
        },
        {
          'name': 'show-divider',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '设置是否显示步骤条底部分割线', 'en-US': '' },
          'demoId': 'show-divider'
        },
        {
          'name': 'only-number',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '节点序号是否只显示数字', 'en-US': '' },
          'demoId': 'only-number'
        },
      ],
      'events': [
        {
          'name': 'click',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点的点击事件，参数（index:节点索引, node：节点数据信息）',
            'en-US': 'Node click event. Parameter: (index: node index, node: node data information)'
          },
          'demoId': 'click'
        }
      ],
      'slots': [
        {
          'name': 'item',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '步骤条数据项插槽', 'en-US': 'Step bar data item slot' },
          'demoId': 'slot'
        },
        {
          'name': 'description',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点描述信息插槽', 'en-US': 'Node description information slot' },
          'demoId': 'slot-description'
        },
        {
          'name': 'active-node-desc',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '当前节点描述信息插槽', 'en-US': '' },
          'demoId': 'slot-active-node-desc'
        }
      ]
    }
  ]
}
