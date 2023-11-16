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
      'demoId': 'change-role-event',
      'name': { 'zh-CN': 'change 事件', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '<p>切换下拉角色时触发 change 事件，需要通过 change 事件回调方法去发送请求。</p>\n',
        'en-US':
          '<p>The change event is triggered when the drop-down role is switched. The change event callback method needs to be used to send the request. </p>\n'
      },
      'codeFiles': ['change-role-event.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN': '<p>可设置为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>fetch-role</code> 和 <code>fetch-current-role</code> 两个方法自定义服务，同时可通过 <code>fields</code> 属性指定显示和绑定值对应的字段。\n可通过 <code>placeholder</code> 展示占位符。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-role</code> and <code>fetch-current-role</code> methods to customize services. In addition, you can use the <code>fields</code> attribute to specify the fields corresponding to the display and binding values. \n You can use <code>placeholder</code> to display placeholders. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    }
  ],
  apis: [
    {
      'name': 'drop-roles',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'string , number',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置文本显示的值。;绑定值', 'en-US': 'Sets the text display value. ;Bound Value' },
          'demoId': 'change-role-event'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置组件大小', 'en-US': 'Set the component size' },
          'demoId': 'size'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置输入框内的提示占位文本。', 'en-US': 'Set the placeholder text in the text box.' },
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
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'fetchRole',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义获取角色列表接口，未使用框架服务时必填',
            'en-US':
              'User-defined API for obtaining the role list. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetchCurrentRole',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义获取当前用户角色接口，未使用框架服务时必填',
            'en-US':
              'User-defined interface for obtaining the role of the current user. This parameter is mandatory when the framework service is not used.'
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
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当前角色切换后触发',
            'en-US': 'This event is triggered after the current role is switched.'
          },
          'demoId': 'change-role-event'
        }
      ],
      'slots': []
    }
  ]
}
