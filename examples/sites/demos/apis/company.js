export default {
  mode: ['pc'],
  apis: [
    {
      name: 'company',
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
          pcDemo: 'custom-show-num'
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
          name: 'fetchCompany',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义公司查询接口，fetchCompany返回一个Promise对象',
            'en-US': 'The fetchCompany interface returns a Promise object.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fields',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义公司数据映射，未使用框架服务时必填',
            'en-US':
              'Customized company data mapping. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '该属性的默认值为 1000',
          desc: {
            'zh-CN': '原生属性，设置最大值',
            'en-US': 'Native attribute. Set the maximum value.'
          },
          mode: ['pc'],
          pcDemo: 'custom-show-num'
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
          pcDemo: 'custom-show-num'
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
