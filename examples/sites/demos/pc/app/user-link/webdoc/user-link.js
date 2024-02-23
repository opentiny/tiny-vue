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
        'zh-CN': '<p>注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Note that the UserLink component requests mock data, which cannot be queried by other users. Use real services during development. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'text-field',
      name: {
        'zh-CN': '显示字段映射',
        'en-US': 'Display Field Mapping'
      },
      desc: {
        'zh-CN':
          '<p>通过 text-field 设置显示字段信息,默认是 userCN\n注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Use text-field to set the displayed field information. The default value is userCN.\nNote that the UserLink component requests mock data, which cannot be queried by other users. Use the real service during development. </p>\n'
      },
      codeFiles: ['text-field.vue']
    },
    {
      demoId: 'text-split',
      name: {
        'zh-CN': '自定义文本分隔符',
        'en-US': 'Custom Text Separator'
      },
      desc: {
        'zh-CN':
          "<p>通过 text-split 自定义文本分隔符,默认是 ','\n注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n",
        'en-US':
          "<p>Use text-split to customize the text separator. The default value is ','\nNote that the UserLink component requests mock data, which cannot be queried by other users. Use the real service during development. </p>\n"
      },
      codeFiles: ['text-split.vue']
    },
    {
      demoId: 'value-field',
      name: {
        'zh-CN': '值字段映射',
        'en-US': 'Value Field Mapping'
      },
      desc: {
        'zh-CN':
          '<p>通过 value-field 设置值字段映射，默认是 userId\n注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Use value-field to set the value field mapping. The default value is userId.\nNote that the UserLink component requests mock data, which cannot be queried by other users. Use the real service during development. </p>\n'
      },
      codeFiles: ['value-field.vue']
    },
    {
      demoId: 'value-split',
      name: {
        'zh-CN': '自定义值分隔符',
        'en-US': 'Customized value separator'
      },
      desc: {
        'zh-CN':
          "<p>通过 value-split 自定义值分隔符，默认是 ','\n注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n",
        'en-US':
          "<p>Use value-split to define the value separator. The default value separator is ','.\nNote that the UserLink component requests mock data, which cannot be queried by other users. Use real services during development. </p>\n"
      },
      codeFiles: ['value-split.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN': '<p>注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Note that the UserLink component requests mock data, which cannot be queried by other users. Use real services during development. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'cache-users',
      name: {
        'zh-CN': '用户数据缓存',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>注意 UserLink 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Note that the UserLink component requests mock data, which cannot be queried by other users. Use real services during development. </p>\n'
      },
      codeFiles: ['cache-users.vue']
    },
    {
      demoId: 'value',
      name: {
        'zh-CN': '自定义默认值',
        'en-US': 'Custom Default Value'
      },
      desc: {
        'zh-CN':
          '<p>通过 value 自定义默认值，默认为空注意 value 值与 v-model 不能同时使用，同时使用时 v-model 权重更高</p>\n',
        'en-US':
          '<p>Customize the default value by value. The default value is empty. Note that value and v-model cannot be used at the same time. When v-model is used at the same time, v-model has a higher weight.</p>\n'
      },
      codeFiles: ['value.vue']
    }
  ]
}
