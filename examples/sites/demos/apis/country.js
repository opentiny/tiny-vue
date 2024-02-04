export default {
  mode: ['pc'],
  apis: [
    {
      name: 'country',
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
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Disabled'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'fetchCountry',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义国家查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The user-defined country query interface returns a Promise object. This parameter is mandatory when the framework service is not used.'
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
            'en-US': 'Set the placeholder text in the text box.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
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
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
