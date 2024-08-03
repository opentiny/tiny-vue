export default {
  mode: ['pc'],
  apis: [
    {
      name: 'virtual-scroll',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数据源, 默认通过data属性来传入，在item中显示数据',
            'en-US':
              'Set the data source, which is passed through the data attribute by default, to display the data in the item.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: []
}
