export default {
  mode: ['pc'],
  apis: [
    {
      name: 'dept',
      type: 'component',
      props: [
        {
          name: 'autoSelect',
          type: 'Boolen',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '设置当部门信息仅一条数据时时自动补全选中',
            'en-US':
              'Specify that when there is only one piece of department information, the system automatically completes the information.'
          },
          mode: ['pc'],
          pcDemo: 'auto-select'
        },
        {
          name: 'beforeConfirm',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '确认之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止弹框关闭',
            'en-US': 'If false is returned or Promise is returned and rejected, the dialog box is not closed.'
          },
          mode: ['pc'],
          pcDemo: 'before-confirm'
        },
        {
          name: 'disabled',
          type: 'Boolen',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Disabled'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-disable'
        },
        {
          name: 'fetchDept',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义部门搜索查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The interface for querying customized departments returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetchDeptByValue',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义部门详情查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The interface for querying customized department details returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetchDeptList',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义部门列表查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The interface for querying the customized department list returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'size',
          type: 'string ',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'title',
          type: 'string ',
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹窗标题',
            'en-US': 'Set the pop-up window title.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'value',
          type: 'string ',
          defaultValue: '',
          desc: {
            'zh-CN': '设置部门组件的初始化时的显示值。',
            'en-US': 'Set the display value of the department component during initialization.'
          },
          mode: ['pc'],
          pcDemo: 'size'
        }
      ],
      events: [
        {
          name: 'cancel',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '点击取消按钮触发的事件。',
            'en-US': 'This event is triggered when the Cancel button is clicked.'
          },
          mode: ['pc'],
          pcDemo: 'dept-cancel'
        },
        {
          name: 'change',
          type: 'Function(value)',
          defaultValue: '',
          desc: {
            'zh-CN': '选择的部门值改变时触发，回调参数为改变后的部门编码。;value: 改变后的值',
            'en-US':
              'This event is triggered when the selected department value changes. The callback parameter is the new department code. ; value: changed value'
          },
          mode: ['pc'],
          pcDemo: 'dept-events'
        },
        {
          name: 'close',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭部门弹出框时触发该事件。',
            'en-US': 'This event is triggered when a department dialog box is closed.'
          },
          mode: ['pc'],
          pcDemo: 'dept-close'
        },
        {
          name: 'confirm',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '点击确认按钮触发的事件。',
            'en-US': 'This event is triggered when the OK button is clicked.'
          },
          mode: ['pc'],
          pcDemo: 'dept-confirm'
        },
        {
          name: 'open',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '点击弹出弹框触发的事件。',
            'en-US': 'This event is triggered when a user clicks a dialog box that is displayed.'
          },
          mode: ['pc'],
          pcDemo: 'dept-events'
        },
        {
          name: 'selected',
          type: 'Function(value)',
          defaultValue: '',
          desc: {
            'zh-CN': '点击选中部门触发的事件，回调参数为选中的部门编码。',
            'en-US':
              'This event is triggered when you click a selected department. The callback parameter is the selected department code.'
          },
          mode: ['pc'],
          pcDemo: 'dept-selected'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'hrapprover',
          defaultValue: '',
          desc: {
            'zh-CN': '权签人',
            'en-US': 'Approval'
          },
          mode: ['pc'],
          pcDemo: 'slot-hrapprover'
        }
      ]
    }
  ]
}
