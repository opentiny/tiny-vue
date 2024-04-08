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
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: 'base'
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
