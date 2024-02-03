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
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fetch-country</code> 属性可以指定一个方法，在方法中可实现请求自定义的服务。 <code>clearable</code> 设置是否可清空，默认值为 true。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-country</code> attribute to specify a method in which the service customized by the request can be implemented. <code>clearable</code>: indicates whether data can be cleared. The default value is true. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'fields',
      'name': { 'zh-CN': '自定义数据的字段', 'en-US': 'Custom Data Fields' },
      'desc': {
        'zh-CN': '当使用自定义的数据体时，需要使用<code>fields</code>来指定字段',
        'en-US': 'When a user-defined data body is used, <code>fields</code> must be used to specify fields.'
      },
      'codeFiles': ['fields.vue']
    }
  ],
  apis: [
    {
      'name': 'country',
      'type': 'component',
      'props': [
        {
          'name': 'modelValue / v-model',
          'type': 'string , number',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置下拉框的值。', 'en-US': 'Set the value of the drop-down list box.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置输入框内的提示占位文本。', 'en-US': 'Set the placeholder text in the text box.' },
          'demoId': 'basic-usage'
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
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'fetchCountry',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义国家查询接口，返回一个Promise对象，未使用框架服务时必填',
            'en-US':
              'The user-defined country query interface returns a Promise object. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fields',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义数据映射，未使用框架服务时必填',
            'en-US': 'Customized data mapping. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示清除按钮;是否可清空', 'en-US': 'Whether to display the Clear button; Clearable' },
          'demoId': 'custom-service'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
          'demoId': ''
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
