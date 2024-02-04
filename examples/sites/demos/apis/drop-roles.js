export default {
  mode: ['pc'],
  apis: [
    {
      name: 'drop-roles',
      type: 'component',
      props: [
        {
          name: 'fetchCurrentRole',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取当前用户角色接口，未使用框架服务时必填',
            'en-US':
              'User-defined interface for obtaining the role of the current user. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetchRole',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取角色列表接口，未使用框架服务时必填',
            'en-US':
              'User-defined API for obtaining the role list. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fields',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义数据映射，未使用框架服务时必填',
            'en-US': 'Customized data mapping. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'modelValue / v-model',
          type: 'string , number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置文本显示的值。;绑定值',
            'en-US': 'Sets the text display value. ;Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'change-role-event'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置输入框内的提示占位文本。',
            'en-US': 'Set the placeholder text in the text box.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
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
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '当前角色切换后触发',
            'en-US': 'This event is triggered after the current role is switched.'
          },
          mode: ['pc'],
          pcDemo: 'change-role-event'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
