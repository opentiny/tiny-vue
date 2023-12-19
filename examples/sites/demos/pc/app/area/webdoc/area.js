export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>v-model / value</code> 属性设置默认值。</p>\n',
        'en-US': '<p>Sets the default value through the <code>v-model / value</code> property. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fetch-jcr</code> 可以自定义服务用于获取片区 JCR 数据，<code>fetch-rigion</code> 用于获取地区部 Region 的数据，<code>fetch-rep</code> 用于获取代表处 Rep 的数据，<code>fetch-office</code> 用于获取办事处 Office 的数据。同时 当数据字段为非默认的 <code>name_cn</code> <code>org_id</code> 时，可以通过 <code>props</code> 属性设置数据的映射字段。</p>\n',
        'en-US':
          '<p>You can use <code>fetch-jcr</code> to customize services to obtain regional JCR data, and <code>fetch-rigion</code> to obtain regional region data. <code>fetch-rep</code> is used to obtain the data of rep offices, and <code>fetch-office</code> is used to obtain the data of offices. In addition, when the data field is not the default <code>name_cn</code> <code>org_id</code>, you can set the mapping field of the data through the <code>props</code> attribute. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN': '<p>可选值为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p>The options are as follows: <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Set Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置组件禁用默认值为 false 。</p>\n',
        'en-US': '<p>Use <code>disabled</code> to disable the component. The default value is false. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'area-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p>Region 下拉框的值改变时触发 <code>change-region</code> 事件，Rep 下拉框的值改变时触发 <code>change-rep</code> 事件，Office 下拉框的值改变时触发 <code>change-office</code> 事件。</p>\n',
        'en-US':
          'The <code>change-region</code> event is triggered when the value of the Region drop-down list box changes. The <code>change-rep</code> event is triggered when the value of the Rep drop-down list box changes. The <code>change-office</code> event is triggered when the value of the Office drop-down list box changes. </p>\n'
      },
      'codeFiles': ['area-events.vue']
    }
  ],
  apis: [
    {
      'name': 'area',
      'type': 'component',
      'props': [
        {
          'name': 'modelValue / v-model',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置片区默认值', 'en-US': 'Set the default value of a region.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件大小，可设置值为：medium，small，mini',
            'en-US': 'Set the component size. The options are medium, small, and mini.'
          },
          'demoId': 'size'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '当数据为空时的占位符', 'en-US': 'Placeholder when data is empty' },
          'demoId': 'custom-service'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, set this parameter to false (for details, see the select component)'
          },
          'demoId': ''
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '禁用输入框;默认为 false', 'en-US': 'Disable the text box. The default value is false' },
          'demoId': 'disabled'
        },
        {
          'name': 'props',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "自定义服务时，设置数据的映射字段;默认为 {label: 'name_cn',// 显示文本对应的字段  value: 'org_id'// 值对应的字段}",
            'en-US':
              "Set the data mapping field when customizing a service. The default value is {label:'name_cn', //Display the field corresponding to the text value:'org_id' //Display the field corresponding to the value}"
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetch-jcr',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义获取片区 JCR 的服务', 'en-US': 'User-defined service for obtaining regional JCRs' },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetch-region',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义获取地区部 Region 的服务', 'en-US': 'Obtain the service of a region.' },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetch-rep',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义获取代表处 Rep 的服务',
            'en-US': 'Obtain services of rep offices and rep offices.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetch-office',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义获取办事处 Office 的服务', 'en-US': 'User-defined Office service' },
          'demoId': 'custom-service'
        }
      ],
      'events': [
        {
          'name': 'change-region',
          'type': 'Function(value, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Region 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例',
            'en-US':
              'This event is triggered when the value of a region changes. The callback parameter is the changed value. value: new value, vm: Area component instance'
          },
          'demoId': 'area-events'
        },
        {
          'name': 'change-rep',
          'type': 'Function(value, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Rep 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例',
            'en-US':
              'This event is triggered when the value of Rep changes. The callback parameter is the changed value. value: new value, vm: Area component instance'
          },
          'demoId': 'area-events'
        },
        {
          'name': 'change-office',
          'type': 'Function(value, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Office 的值发生变化时会触发该事件;回调参数为 改变的值;value: 改变后的值, vm: Area组件实例',
            'en-US':
              'This event is triggered when the value of Office changes. The callback parameter is the changed value. value: new value, vm: Area component instance'
          },
          'demoId': 'area-events'
        }
      ],
      'slots': []
    }
  ]
}
