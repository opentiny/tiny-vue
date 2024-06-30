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
            'zh-CN': '是否显示清除按钮',
            'en-US': 'Whether to display the Clear button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-service',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
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
          name: 'set-default',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启设置默认币种，默认值为 false',
            'en-US':
              'Indicates whether to enable the function of setting the default currency. The default value is false.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-default',
          mfDemo: ''
        },
        {
          name: 'set-default-currency',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '设置默认币种的自定义方法',
            'en-US': 'Custom Method for Setting Default Currency'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-default-custom-service',
          mfDemo: ''
        },
        {
          name: 'fetch-default-currency',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '设置默认币种的服务',
            'en-US': 'Services that set the default currency'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-default-custom-service',
          mfDemo: ''
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': `显示标题，设置 shape='filter' 属性切换至过滤器模式时有效，可参考 FilterBox 组件属性`,
            'en-US': `Display title. This parameter is valid when shape='filter' is set to switch to the filter mode. For details, see the attributes of the FilterBox component.`
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter',
          mfDemo: ''
        },
        {
          name: 'drop-style',
          type: 'object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '自定义下拉选项样式',
            'en-US': 'Custom drop-down options style'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter',
          mfDemo: ''
        },
        {
          name: 'shape',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': `通过 shape='filter' 属性切换至过滤器模式`,
            'en-US': `Switch to the filter mode by using the shape='filter' attribute.`
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter',
          mfDemo: ''
        },
        {
          name: 'tip',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': `显示提示信息，设置 shape='filter' 属性切换至过滤器模式时有效，可参考 FilterBox 组件属性`,
            'en-US': `Displays a message. This parameter is valid when shape='filter' is set to switch to the filter mode. For details, see the attributes of the FilterBox component.`
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '(arg1,arg2) => void',
          desc: {
            'zh-CN': `
              arg1:{Any|Array 单选并且未指定渲染类型时，是选中项的值字段，此时没有arg2参数；多选并且未指定渲染类型时，是选中项值字段组成的数组，此时没有arg2参数；单选并且渲染类型为树或者表格时，是选中项对象，此时没有arg2参数；多选并且渲染类型为树或者表格时，是选中项对象值字段组成的数组，此时有arg2参数；}，<br>
              arg2:{Array 多选并且渲染类型为树或者表格时，是选中项对象组成的数组}
            `,
            'en-US': `
              When arg1:{Any|Array is selected and the rendering type is not specified, this is the value field of the selected item. In this case, the arg2 parameter is not provided. If multiple options are selected and the rendering type is not specified, the value field of the selected items is an array. In this case, the arg2 parameter is not provided. If you select a single item and the rendering type is tree or table, the object is selected. In this case, the arg2 parameter is not provided. When multiple selections are selected and the rendering type is tree or table, the array is composed of the selected object value fields. In this case, the arg2 parameter is available.},<br>
              arg2:{An array consisting of selected items when multiple Arrays are selected and the rendering type is tree or table}
            `
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
