export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'data',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p><code>data</code> 属性设置组件数据，数组对象中包含选项有 type、value、icon。其中 type 的可选择值有：im、sip、mailto 。单击图标，将会打开 type 选项值对应的外部应用。</p>\n',
        'en-US':
          'The <p><code>data</code> attribute sets the component data. The array object contains the options type, value, and icon. The value of type can be im, sip, or mailto. Click to open the external application corresponding to the value of type. </p>\n'
      },
      'codeFiles': ['data.vue']
    },
    {
      'demoId': 'support-open-espace',
      'name': { 'zh-CN': '用户联系人使用 eSpace', 'en-US': 'User Contacts Use eSpace' },
      'desc': {
        'zh-CN':
          '<p>UserContact 联系人组件提供了 <code>espace</code> 属性配置 Espace 组件需要的数据。该组件内部实际使用了 Espace 组件。</p>\n',
        'en-US':
          '<p>The UserContact component provides the data required for configuring the <code>espace</code> attribute. This component actually uses the eSpace component. </p>\n'
      },
      'codeFiles': ['support-open-espace.vue']
    }
  ],
  apis: [
    {
      'name': 'espace',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'Array , object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件数据，数组对象中包含选项有 type、value、icon。type 的可选择值有：im、sip、mailto',
            'en-US':
              'Sets component data. The array object contains the options type, value, and icon. The value of type can be im, sip, or mailto'
          },
          'demoId': 'support-open-espace'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
