export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'currency',
      type: 'component',
      props: [
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否显示清除按钮;是否可清空',
            'en-US': 'Whether to display the Clear button; Clearable'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'Boolen',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disable-currency',
          mfDemo: ''
        },
        {
          name: 'fetch-currency',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义金额查询接口，返回一个Promise对象',
            'en-US': 'The user-defined amount query interface returns a Promise object.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: ''
        },
        {
          name: 'fields',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义数据映射，在没有使用框架服务时必填',
            'en-US': 'User-defined data mapping. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'string , number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置下拉框的值。',
            'en-US': 'Set the value of the drop-down list box.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置输入框内的提示占位文本。',
            'en-US': 'Set the prompt placeholder text in the text box.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disable-currency',
          mfDemo: ''
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If an error occurs in locating a fault in the dialog box that is displayed, set this attribute to false (for details, see the select component).'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尺寸，只在 type!="textarea" 时有效;该属性的可选值为 medium / small / mini',
            'en-US':
              'Size of the text box. This parameter is valid only when type!="textarea". The optional values of this attribute are medium / small / mini'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'String / Number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置下拉框的值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              'arg1:{Any|Array 单选并且未指定渲染类型时，是选中项的值字段，此时没有arg2参数；多选并且未指定渲染类型时，是选中项值字段组成的数组，此时没有arg2参数；单选并且渲染类型为树或者表格时，是选中项对象，此时没有arg2参数；多选并且渲染类型为树或者表格时，是选中项对象值字段组成的数组，此时有arg2参数；}，arg2:{Array 多选并且渲染类型为树或者表格时，是选中项对象组成的数组}',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
