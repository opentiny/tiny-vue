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
        'zh-CN': '<p>可通过<code>type="icon"</code>属性设置头像类型</p>',
        'en-US': '<p>The <code>type="icon"</code> attribute can be used to set the avatar type.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'user-head-style',
      name: {
        'zh-CN': '圆形头像',
        'en-US': 'Round head'
      },
      desc: {
        'zh-CN': '<p>可通过<code>round</code>设置圆形头像。<p>',
        'en-US': '<p>You can use <code>round</code> to set a round avatar.</p>'
      },
      codeFiles: ['user-head-style.vue']
    },
    {
      demoId: 'user-head-size',
      name: {
        'zh-CN': '头像尺寸',
        'en-US': 'Head size'
      },
      desc: {
        'zh-CN': '<p>可通过<code>size</code>设置圆形头像尺寸大小。</p>',
        'en-US': '<p>You can use <code>size</code> to set the size of a round avatar.</p>'
      },
      codeFiles: ['user-head-size.vue']
    },
    {
      demoId: 'user-head-group',
      name: {
        'zh-CN': '群组头像',
        'en-US': 'Group avatar'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>group-size</code>属性设置群组头像整体尺寸大小，通过<code>list</code>传入对应数据<br><code>type</code>：表示传入的类型<br><code>modelValue</code>：文字头像传入字符串，图标头像不传，图片头像传入图片链接<br><code>round</code>：是否展示圆形<br>群组头像最多只展示 4 个头像</p>',
        'en-US':
          '<p>Use the <code>group-size</code> attribute to set the overall size of the group avatar, and use the <code>list</code> to transfer the corresponding data <br><code>type</code>. Indicates the input type.<br><code>modelValue</code>: The character string is transferred for the text avatar. The icon avatar is not transferred. The image avatar is transferred for the image link.<br><code>round</code>: Indicates whether to display round <br>Group avatars. A maximum of four avatars can be displayed.</p>'
      },
      codeFiles: ['user-head-group.vue']
    },
    {
      demoId: 'user-head-event',
      name: {
        'zh-CN': '头像事件',
        'en-US': 'Avatar events'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>click</code>属性设置头像点击，<code>hover</code>属性设置头像悬浮提示，<code>horizontal</code>设置圆形头像横向布局，<code>show-max</code>展示最大显示数为 6 个，默认为 4 个。</p>',
        'en-US':
          '<p>The<code>click</code>attribute is used to set the avatar clicking and <code>hover</code> attribute is used to set the avatar floating prompt,<code>horizontal</code> sets the horizontal layout of round avatars. <code>show-max</code> can display a maximum of six portraits. The default value is 4.</p>'
      },
      codeFiles: ['user-head-event.vue']
    }
  ]
}
