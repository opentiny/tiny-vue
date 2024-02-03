export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'user-head-style',
      name: {
        'zh-CN': '圆形头像',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `round` 设置圆形头像。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['user-head-style.vue']
    },
    {
      demoId: 'user-head-size',
      name: {
        'zh-CN': '头像尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `size` 设置圆形头像尺寸大小。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['user-head-size.vue']
    },
    {
      demoId: 'user-head-group',
      name: {
        'zh-CN': '群组头像',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过`group-size`属性设置群组头像整体尺寸大小，通过`list`传入对应数据<br>type：表示粗腰传入的类型<br>modelValue：文字头像传入字符串，图标头像不传，图片头像传入图片链接<br>round：是否展示圆形<br>群组头像最多只展示 4 个头像<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['user-head-group.vue']
    }
  ],
  apis: []
}
