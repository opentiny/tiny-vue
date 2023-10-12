export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'dept-events',
      'name': { 'zh-CN': 'open 和 change 事件', 'en-US': 'open and change events' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['dept-events.vue']
    },
    {
      'demoId': 'dept-selected',
      'name': { 'zh-CN': 'selected 事件', 'en-US': 'selected event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['dept-selected.vue']
    },
    {
      'demoId': 'dept-close',
      'name': { 'zh-CN': 'close 事件', 'en-US': 'close event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['dept-close.vue']
    },
    {
      'demoId': 'dept-confirm',
      'name': { 'zh-CN': 'confirm 事件', 'en-US': 'confirm event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['dept-confirm.vue']
    },
    {
      'demoId': 'dept-cancel',
      'name': { 'zh-CN': 'cancel 事件', 'en-US': 'cancel event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['dept-cancel.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN': '<p>可以设置为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'before-confirm',
      'name': { 'zh-CN': '阻止弹框关闭', 'en-US': 'Prevent pop-up dialog box closing' },
      'desc': {
        'zh-CN': '<p>before-confirm（确认前回调事件）,方法里面 return true/false，表示是否关闭弹框</p>\n',
        'en-US':
          '<p>before-confirm (callback event before confirmation). In the method, return true/false indicates whether to close the dialog box.</p>\n'
      },
      'codeFiles': ['before-confirm.vue']
    },
    {
      'demoId': 'auto-select',
      'name': { 'zh-CN': '部门信息自动选中', 'en-US': 'Department information is automatically selected.' },
      'desc': {
        'zh-CN':
          '<p><code>auto-select</code> 默认值为 true，配置该属性为 false 可以阻止当部门信息仅一个时自动补全选中行为。</p>\n',
        'en-US':
          'The default value of <p><code>auto-select</code> is true. If this parameter is set to false, the system automatically supplements the selected information when there is only one department. </p>\n'
      },
      'codeFiles': ['auto-select.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务数据', 'en-US': 'Customized Service Data' },
      'desc': {
        'zh-CN':
          '<p>提供 <code>fetch-dept-by-value</code>、<code>fetch-dept</code>、<code>fetch-dept-list</code> 属性用于自定义部门服务。</p>\n',
        'en-US':
          '<p> provides the <code>fetch-dept-by-value</code>, <code>fetch-dept, and <code>fetch-dept-list</code> attributes for customizing department services. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>可通过 <code>disabled</code> 设置是否禁用，默认为 fase</p>\n',
        'en-US':
          '<p>You can use <code>disabled</code> to set whether to disable the function. The default value is fase</p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '设置弹出框标题', 'en-US': 'Set the dialog box title.' },
      'desc': {
        'zh-CN': '<p>自定义弹出框标题，该属性默认值为空。</p>\n',
        'en-US': '<p>Customized dialog box title. The default value of this attribute is null. </p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'slot-hrapprover',
      'name': { 'zh-CN': '权签人插槽', 'en-US': 'Approval Slot' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['slot-hrapprover.vue']
    }
  ],
  apis: [
    {
      'name': 'dept',
      'type': 'component',
      'properties': [
        {
          'name': 'value',
          'type': 'string ',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置部门组件的初始化时的显示值。',
            'en-US': 'Set the display value of the department component during initialization.'
          },
          'demoId': 'size'
        },
        {
          'name': 'size',
          'type': 'string ',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置组件大小', 'en-US': 'Set the component size' },
          'demoId': 'size'
        },
        {
          'name': 'title',
          'type': 'string ',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置弹窗标题', 'en-US': 'Set the pop-up window title.' },
          'demoId': ''
        },
        {
          'name': 'disabled',
          'type': 'Boolen',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'autoSelect',
          'type': 'Boolen',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置当部门信息仅一条数据时时自动补全选中',
            'en-US':
              'Specify that when there is only one piece of department information, the system automatically completes the information.'
          },
          'demoId': 'auto-select'
        },
        {
          'name': 'fetchDeptList',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义部门列表查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The interface for querying the customized department list returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetchDeptByValue',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义部门详情查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The interface for querying customized department details returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetchDept',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义部门搜索查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The interface for querying customized departments returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'beforeConfirm',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '确认之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止弹框关闭',
            'en-US': 'If false is returned or Promise is returned and rejected, the dialog box is not closed.'
          },
          'demoId': 'before-confirm'
        }
      ],
      'events': [
        {
          'name': 'confirm',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击确认按钮触发的事件。',
            'en-US': 'This event is triggered when the OK button is clicked.'
          },
          'demoId': 'dept-confirm'
        },
        {
          'name': 'cancel',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击取消按钮触发的事件。',
            'en-US': 'This event is triggered when the Cancel button is clicked.'
          },
          'demoId': 'dept-cancel'
        },
        {
          'name': 'selected',
          'type': 'Function(value)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击选中部门触发的事件，回调参数为选中的部门编码。',
            'en-US':
              'This event is triggered when you click a selected department. The callback parameter is the selected department code.'
          },
          'demoId': 'dept-selected'
        },
        {
          'name': 'open',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击弹出弹框触发的事件。',
            'en-US': 'This event is triggered when a user clicks a dialog box that is displayed.'
          },
          'demoId': 'dept-events'
        },
        {
          'name': 'change',
          'type': 'Function(value)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选择的部门值改变时触发，回调参数为改变后的部门编码。;value: 改变后的值',
            'en-US':
              'This event is triggered when the selected department value changes. The callback parameter is the new department code. ; value: changed value'
          },
          'demoId': 'dept-events'
        },
        {
          'name': 'close',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '关闭部门弹出框时触发该事件。',
            'en-US': 'This event is triggered when a department dialog box is closed.'
          },
          'demoId': 'dept-close'
        }
      ],
      'slots': [
        {
          'name': 'hrapprover',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '权签人', 'en-US': 'Approval' },
          'demoId': 'slot-hrapprover'
        }
      ]
    }
  ]
}
