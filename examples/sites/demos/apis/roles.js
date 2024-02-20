export default {
  mode: ['pc'],
  apis: [
    {
      name: 'roles',
      type: 'component',
      props: [
        {
          name: 'fetch-role',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义接口，返回一个Promise对象，未使用框架服务时必填。',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'fetch-role'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '选中值发生变化时触发',
            'en-US': 'This event is triggered when the selected value changes.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
