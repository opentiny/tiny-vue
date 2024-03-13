export default {
  mode: ['pc'],
  apis: [
    {
      name: 'user-link',
      type: 'component',
      props: [
        {
          name: 'cache',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否开启用户数据缓存，默认为 ture 缓存用户数据',
            'en-US': 'Indicates whether to enable the user data cache function. The default value is true.'
          },
          mode: ['pc'],
          pcDemo: 'cache-users'
        },
        {
          name: 'cache-fields',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义缓存的字段',
            'en-US': 'Custom cached fields'
          },
          mode: ['pc'],
          pcDemo: 'cache-users'
        },
        {
          name: 'cache-key',
          type: 'string',
          defaultValue: '该属性的默认值为 tiny-user',
          desc: {
            'zh-CN': '自定义缓存 key 默认值为 tiny-user',
            'en-US': 'The default value of the customized cache key is tiny-user'
          },
          mode: ['pc'],
          pcDemo: 'cache-users'
        },
        {
          name: 'fetchUser',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '配置通过员区号查询用户信息（展示在卡片上）',
            'en-US': 'Configure the function of querying user information by area code (displayed on the card).'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetchW3Accounts',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义配置批量查询用户信息服务',
            'en-US': 'Customize the user information batch query service'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'getUserImageUrl',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义配置获取用户头像服务',
            'en-US': 'Customized configuration for obtaining user avatars'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: '该属性的默认值为 userCN',
          desc: {
            'zh-CN': '设置下拉框的文本对应的数据源的字段名称',
            'en-US': 'Set the field name of the data source corresponding to the text in the drop-down list box.'
          },
          mode: ['pc'],
          pcDemo: 'text-field'
        },
        {
          name: 'text-split',
          type: 'string',
          defaultValue: '该属性的默认值为 ,',
          desc: {
            'zh-CN': '在多选的情况下，设置输入框显示多个文本时的分隔符',
            'en-US': 'Separator for displaying multiple texts in the text box when multiple texts are selected.'
          },
          mode: ['pc'],
          pcDemo: 'text-split'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '配置默认值，默认为空',
            'en-US': 'The default value is empty.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: '该属性的默认值为 userId',
          desc: {
            'zh-CN': '设置下拉框的值所对应数据源的字段名称',
            'en-US': 'Field name of the data source corresponding to the value in the drop-down list box.'
          },
          mode: ['pc'],
          pcDemo: 'value-field'
        },
        {
          name: 'value-split',
          type: 'string',
          defaultValue: '该属性的默认值为 ,',
          desc: {
            'zh-CN':
              '在多选的情况下，设置输入框显示多个文本时的分隔符，默认为 ; 分号;在多选的情况下，设置输入框显示多个文本时的分隔符，默认为 , 逗号',
            'en-US':
              'Separator for displaying multiple texts in the text box. The default value is semicolon (;). Set the separator when multiple texts are displayed in the text box. The default value is, comma (,)'
          },
          mode: ['pc'],
          pcDemo: 'value-split'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
