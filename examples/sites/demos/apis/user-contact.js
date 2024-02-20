export default {
  mode: ['pc'],
  apis: [
    {
      name: 'user-contact',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '设置的数据',
            'en-US': 'Setted data; Data Settings'
          },
          mode: ['pc'],
          pcDemo: 'data-source'
        },
        {
          name: 'espace',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': 'espace 信息配置',
            'en-US': 'Espace Configuration'
          },
          mode: ['pc'],
          pcDemo: 'contact-espace'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'show-img',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否显示头像，默认 true',
            'en-US': 'Indicates whether to display the avatar. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'not-displayed-content'
        },
        {
          name: 'show-name',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否显示姓名 userName,默认 true',
            'en-US': 'Indicates whether to display userName. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'not-displayed-content'
        },
        {
          name: 'show-number',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否显示工号 roleNumber,默认 true',
            'en-US': 'Indicates whether to display the employee ID roleNumber. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'not-displayed-content'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'slots-usercontact'
        }
      ]
    }
  ]
}
