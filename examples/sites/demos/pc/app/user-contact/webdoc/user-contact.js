export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '通过<code>:data</code>设置数据源。<code>imgUrl:图片路径</code><code>userName:姓名</code><code>userDescription:用户描述</code>。',
        'en-US':
          'Set the data source through<code>: data</code>.<code>imgUrl:"Image URL"</code><code>userName:"Name"</code><code>userDescription: User Description</code>.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'data-source',
      name: {
        'zh-CN': '设置数据源',
        'en-US': 'Set Data Source'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>:data</code> 设置数据源, <code>imgUrl</code> 表示的是图片路径, <code>userName</code> 表示的是姓名, <code>userDescription</code> 表示的是用户描述。</p>\n',
        'en-US':
          '<p>Set the data source through<code>: data</code>. <code>imgUrl</code> indicates the image path, and <code>userName</code> indicates the name. <code>userDescription</code> indicates the user description. </p>\n'
      },
      codeFiles: ['data-source.vue']
    },
    {
      demoId: 'not-displayed-content',
      name: {
        'zh-CN': '定制弹框不显示的内容',
        'en-US': 'Customize the content that is not displayed in the dialog box.'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>show-img</code> 是否显示头像，<code>show-name</code> 是否显示名字,<code>show-number</code> 是否显示用户账号,默认值为<code>true</code>。</p>',
        'en-US':
          '<p>By setting<code>show img</code>to display avatars,<code>show name</code>to display names, and<code>show number</code>to display user accounts, the default value is<code>true</code>.</p> '
      },
      codeFiles: ['not-displayed-content.vue']
    },
    {
      demoId: 'slots-usercontact',
      name: {
        'zh-CN': '自定义默认插槽',
        'en-US': 'Customize the default slot'
      },
      desc: {
        'zh-CN': '通过在组件内插入<code>div</code>元素即可。',
        'en-US': 'You can insert the<code>div</code>element within the component.'
      },
      codeFiles: ['slots-usercontact.vue']
    },
    {
      demoId: 'contact-espace',
      name: {
        'zh-CN': '连接eSpace',
        'en-US': 'Connecting to the eSpace'
      },
      desc: {
        'zh-CN': '通过设置<code>espace</code>属性传值即可。',
        'en-US': 'Set the <code>espace</code> attribute to transfer the value.'
      },
      codeFiles: ['contact-espace.vue']
    }
  ]
}
