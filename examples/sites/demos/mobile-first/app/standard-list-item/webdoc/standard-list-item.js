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
        'zh-CN':
          '<p>通过设置`:show-image="true"`可以显示图片区域<br>`user-head` 属性可以配置头像的类型、大小、背景色等，具体可查看 UserHead 用户头像组件的属性配置<br>传入`icon` 属性可以将头像区域替换为 icon 图标</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'type',
      name: {
        'zh-CN': '设置类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `type` 属性可以设置标准列表项的模式，支持 card 和 list 两种模式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'content-slot',
      name: {
        'zh-CN': '内容区插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `#default` 可以设置内容区插槽，`#tag` 可以设置标签插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['content-slot.vue']
    },
    {
      demoId: 'icon-click-event',
      name: {
        'zh-CN': '操作列按钮点击事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `icon-click` 给按钮加点击事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon-click-event.vue']
    },
    {
      demoId: 'icon-disabled',
      name: {
        'zh-CN': '操作列按钮隐藏与禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>操作列配置项 `options` 中添加属性 hidden 可以隐藏按钮，可以通过 disabled 属性禁用操作按钮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon-disabled.vue']
    },
    {
      demoId: 'image-operate-slot',
      name: {
        'zh-CN': '头像和操作列插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `#image` 可以设置头像插槽，通过 `#operate` 可以设置操作列插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['image-operate-slot.vue']
    }
  ],
  apis: []
}
