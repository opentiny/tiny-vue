export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例。', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-source',
      'name': { 'zh-CN': '设置数据源', 'en-US': 'Set Data Source' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>data</code> 设置数据源, <code>imgUrl</code> 表示的是图片路径, <code>userName</code> 表示的是姓名, <code>userDescription</code> 表示的是用户描述。</p>\n',
        'en-US':
          '<p>You can use <code>data</code> to set the data source. <code>imgUrl</code> indicates the image path, and <code>userName</code> indicates the name. <code>userDescription</code> indicates the user description. </p>\n'
      },
      'codeFiles': ['data-source.vue']
    },
    {
      'demoId': 'not-displayed-content',
      'name': {
        'zh-CN': '定制弹框不显示的内容',
        'en-US': 'Customize the content that is not displayed in the dialog box.'
      },
      'desc': {
        'zh-CN':
          '<p>定制弹框不显示的内容\n<code>show-img</code> 是否显示头像,值为 true 时显示， false 隐藏,默认 true。\n<code>show-name</code> 是否显示名字,值为  true 时显示， false 隐藏,默认 true。\n<code>show-number</code> 是否显示用户账号,值为  true 时显示， false 隐藏,默认 true。</p>\n',
        'en-US':
          '<p>Customize the content that is not displayed in the dialog box.\n<code>show-img</code>Indicates whether to display the avatar. The value true indicates that the avatar is displayed. The value false indicates that the avatar is hidden. The default value is true. \n<code>show-name</code> Indicates whether to display the name. The value true indicates that the name is displayed, and the value false indicates that the name is hidden. The default value is true. \n<code>show-number</code>Indicates whether to display the user account number. If the value is true, the user account number. is displayed. If the value is false, the user account number. is hidden. The default value is true. </p>\n'
      },
      'codeFiles': ['not-displayed-content.vue']
    },
    {
      'demoId': 'slots-usercontact',
      'name': { 'zh-CN': '自定义默认插槽', 'en-US': 'Customize the default slot' },
      'desc': { 'zh-CN': '详细用法参考如下示例。', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['slots-usercontact.vue']
    }
  ],
  apis: [
    {
      'name': 'user-contact',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置的数据。', 'en-US': 'Setted data; Data Settings.' },
          'demoId': 'data-source'
        },
        {
          'name': 'show-img',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否显示头像，默认 true。',
            'en-US': 'Indicates whether to display the avatar. The default value is true.'
          },
          'demoId': 'not-displayed-content'
        },
        {
          'name': 'show-name',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否显示姓名 userName,默认 true。',
            'en-US': 'Indicates whether to display userName. The default value is true.'
          },
          'demoId': 'not-displayed-content'
        },
        {
          'name': 'show-number',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否显示工号 roleNumber,默认 true。',
            'en-US': 'Indicates whether to display the employee ID roleNumber. The default value is true.'
          },
          'demoId': 'not-displayed-content'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)。',
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
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)。',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'espace',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': 'espace 信息配置。', 'en-US': 'Espace Configuration.' },
          'demoId': 'support-open-espace'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽。', 'en-US': 'Default slot.' },
          'demoId': 'slots-usercontact'
        }
      ]
    }
  ]
}
