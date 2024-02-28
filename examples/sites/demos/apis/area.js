export default {
  mode: ['pc'],
  apis: [
    {
      name: 'area',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '禁用输入框;默认为 false',
            'en-US': 'Disable the text box. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'fetch-jcr',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取片区 JCR 的服务',
            'en-US': 'User-defined service for obtaining regional JCRs'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetch-office',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取办事处 Office 的服务',
            'en-US': 'User-defined Office service'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetch-region',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取地区部 Region 的服务',
            'en-US': 'Obtain the service of a region.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetch-rep',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取代表处 Rep 的服务',
            'en-US': 'Obtain services of rep offices and rep offices.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'modelValue / v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置片区默认值',
            'en-US': 'Set the default value of a region.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '当数据为空时的占位符',
            'en-US': 'Placeholder when data is empty'
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
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, set this parameter to false (for details, see the select component)'
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
          name: 'props',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN':
              "自定义服务时，设置数据的映射字段;默认为 {label: 'name_cn',// 显示文本对应的字段  value: 'org_id'// 值对应的字段}",
            'en-US':
              "Set the data mapping field when customizing a service. The default value is {label:'name_cn', //Display the field corresponding to the text value:'org_id' //Display the field corresponding to the value}"
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件大小，可设置值为：medium，small，mini',
            'en-US': 'Set the component size. The options are medium, small, and mini.'
          },
          mode: ['pc'],
          pcDemo: 'size'
        }
      ],
      events: [
        {
          name: 'change-office',
          type: 'Function(value, vm)',
          defaultValue: '',
          desc: {
            'zh-CN': 'Office 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例',
            'en-US':
              'This event is triggered when the value of Office changes. The callback parameter is the changed value. value: new value, vm: Area component instance'
          },
          mode: ['pc'],
          pcDemo: 'area-events'
        },
        {
          name: 'change-region',
          type: 'Function(value, vm)',
          defaultValue: '',
          desc: {
            'zh-CN': 'Region 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例',
            'en-US':
              'This event is triggered when the value of a region changes. The callback parameter is the changed value. value: new value, vm: Area component instance'
          },
          mode: ['pc'],
          pcDemo: 'area-events'
        },
        {
          name: 'change-rep',
          type: 'Function(value, vm)',
          defaultValue: '',
          desc: {
            'zh-CN': 'Rep 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例',
            'en-US':
              'This event is triggered when the value of Rep changes. The callback parameter is the changed value. value: new value, vm: Area component instance'
          },
          mode: ['pc'],
          pcDemo: 'area-events'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
