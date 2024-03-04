export default {
  mode: ['pc'],
  apis: [
    {
      name: 'logout',
      type: 'component',
      props: [
        {
          name: 'before-logout',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '注销前的回调函数',
            'en-US': 'Callback function before deregistration'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'get-logout-url',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义获取注销服务接口',
            'en-US': 'User-defined interface for obtaining the deregistration service'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'is-guest-user',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义是否访客用户',
            'en-US': 'Customizing whether a user is a guest user'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'is-local',
          type: 'boolean',
          defaultValue: 'service.setting.local',
          desc: {
            'zh-CN': '是否本地注销',
            'en-US': 'Indicates whether to deregister locally. The default value is service.setting.local'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'is-mock',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启 mock 模拟服务，默认值为 false',
            'en-US': 'Indicates whether to enable the mock service. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'redirect-url',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义配置注销后跳转地址',
            'en-US': 'User-defined redirection address after deregistration'
          },
          mode: ['pc'],
          pcDemo: 'redirecturl'
        },
        {
          name: 'show-login',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义登录方法',
            'en-US': 'Custom Login Method'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
