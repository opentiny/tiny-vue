export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disable-currency',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置组件是否禁用，默认值为 false。</p>\n',
        'en-US':
          '<p>The <code>disabled</code> attribute is used to set whether to disable the component. The default value is false. </p>\n'
      },
      'codeFiles': ['disable-currency.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fetch-currency</code> 属性可以指定一个方法，在方法中可实现请求自定义的服务。\n通过 <code>clearable</code> 属性设置是否可以清空，默认值为 true。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-currency</code> attribute to specify a method in which the service customized by the request can be implemented. \n The <code>clearable</code> attribute is used to set whether data can be cleared. The default value is true. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN': '<p>可设置为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    }
  ],
  apis: [
    {
      'name': 'currency',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'String , Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置下拉框的值。', 'en-US': 'Set the value of the drop-down list box.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置输入框内的提示占位文本。',
            'en-US': 'Set the prompt placeholder text in the text box.'
          },
          'demoId': 'disable-currency'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If an error occurs in locating a fault in the dialog box that is displayed, set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'fetch-currency',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义金额查询接口，返回一个Promise对象',
            'en-US': 'The user-defined amount query interface returns a Promise object.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fields',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义数据映射，在没有使用框架服务时必填',
            'en-US': 'User-defined data mapping. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸，只在 type!="textarea" 时有效;该属性的可选值为 medium / small / mini',
            'en-US':
              'Size of the text box. This parameter is valid only when type!="textarea". The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'size'
        },
        {
          'name': 'clearable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示清除按钮;是否可清空', 'en-US': 'Whether to display the Clear button; Clearable' },
          'demoId': 'custom-service'
        },
        {
          'name': 'disabled',
          'type': 'Boolen',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
          'demoId': 'disable-currency'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
