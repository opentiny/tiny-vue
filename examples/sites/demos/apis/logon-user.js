export default {
  mode: ['pc'],
  apis: [
    {
      name: 'logon-user',
      type: 'component',
      props: [
        {
          name: 'getUserInfo',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '配置查询系统当前用户接口',
            'en-US': 'Configure the interface for querying current system users.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
