export default {
  mode: ['pc'],
  apis: [
    {
      name: 'hrapprover',
      type: 'component',
      props: [
        {
          name: 'approval-person',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '权签人',
            'en-US': 'Approval'
          },
          mode: ['pc'],
          pcDemo: 'category-type'
        },
        {
          name: 'category',
          type: 'string',
          defaultValue: '该属性的默认值为 0303',
          desc: {
            'zh-CN': '默认权签类别。',
            'en-US': 'Default approval type.'
          },
          mode: ['pc'],
          pcDemo: 'category-type'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '设置组件是否为禁用状态。',
            'en-US': 'Sets whether the component is disabled.'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'fetchHrapprover',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取权签人信息接口，未使用框架服务时必填，自定义其它属性同dept部门组件',
            'en-US':
              'Customize the interface for obtaining approver information. This parameter is mandatory when the framework service is not used. Other customized attributes are the same as those of the dept component.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
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
            'zh-CN': '设置权签人的值。',
            'en-US': 'Set the approver.'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
