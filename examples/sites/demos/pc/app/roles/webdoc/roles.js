export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<blockquote>\n<p>注意 Roles 组件请求的是 mock 数据，开发时请用真实服务。\n通过 <code>change(userId)</code> 可以监听切换事件，入参是切换后的用户ID。</p>\n</blockquote>\n',
        'en-US':
          '<blockquote>\n<p> Note that the Roles component requests mock data. Use real services during development. \n The <code>change(userId)</code> interface is used to listen to the switchover event. The input parameter is the user ID after the switchover. </p>\n</blockquote>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'fetch-role',
      'name': { 'zh-CN': '自定义查询服务', 'en-US': 'Customized Query Service' },
      'desc': {
        'zh-CN':
          '<blockquote>\n<p>注意 Roles 组件请求的是 mock 数据，开发时请用真实服务。\n通过 <code>fetch-role</code> 自定义查询服务。</p>\n</blockquote>\n',
        'en-US':
          '<blockquote>\n<p> Note that the Roles component requests mock data. Use real services during development. \n Use <code>fetch-role</code> to customize the query service. </p>\n</blockquote>\n'
      },
      'codeFiles': ['fetch-role.vue']
    }
  ],
  apis: [
    {
      'name': 'roles',
      'type': 'component',
      'properties': [
        {
          'name': 'fetch-role',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义接口，返回一个Promise对象，未使用框架服务时必填。',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'fetch-role'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中值发生变化时触发',
            'en-US': 'This event is triggered when the selected value changes.'
          },
          'demoId': 'base'
        }
      ],
      'slots': []
    }
  ]
}
