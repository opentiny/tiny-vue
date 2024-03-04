export default {
  mode: ['pc'],
  apis: [
    {
      name: 'espace',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'Array , object',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件数据，数组对象中包含选项有 type、value、icon。type 的可选择值有：im、sip、mailto',
            'en-US':
              'Sets component data. The array object contains the options type, value, and icon. The value of type can be im, sip, or mailto'
          },
          mode: ['pc'],
          pcDemo: 'support-open-espace'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
