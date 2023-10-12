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
      'desc': { 'zh-CN': '<p>设置自定义服务</p>\n', 'en-US': '<p>Setting a Custom Service</p>\n' },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'custom-operation',
      'name': { 'zh-CN': '自定义功能', 'en-US': 'Custom Function' },
      'desc': { 'zh-CN': '<p>通过默认插槽自定义功能</p>\n', 'en-US': '<p>Customize functions by default slot</p>\n' },
      'codeFiles': ['custom-operation.vue']
    }
  ],
  apis: [
    {
      'name': 'user-account',
      'type': 'component',
      'properties': [
        {
          'name': 'getUserInfo',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义配置用户查询服务', 'en-US': 'User-defined configuration query service' },
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
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'getUserImageUrl',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义配置获取用户头像服务',
            'en-US': 'Customized configuration for obtaining user avatars'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'showArrow',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置为true时，箭头会与Roles组件的箭头方向保持一致',
            'en-US': 'If this parameter is set to true, the arrow direction is the same as that of the Roles component.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'beforeLogout',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': { 'zh-CN': '注销前的回调函数', 'en-US': 'Callback function before deregistration' },
          'demoId': ''
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'custom-operation'
        }
      ]
    }
  ]
}
