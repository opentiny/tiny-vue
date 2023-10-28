export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'card-type',
      name: {
        'zh-CN': '卡片类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>支持 `text image video logo` 4 种类型<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['card-type.vue']
    },
    {
      demoId: 'card-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>支持`mini small medium large`4 个尺寸的卡片<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['card-size.vue']
    },
    {
      demoId: 'card-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置属性`disabled`禁用卡片<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['card-disabled.vue']
    },
    {
      demoId: 'card-group',
      name: {
        'zh-CN': '卡片组',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`card-group` 与 `card` 结合一起使用，提供响应式布局的能力<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['card-group.vue']
    },
    {
      demoId: 'card-status',
      name: {
        'zh-CN': '卡片状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>支持 `success warning alerting danger` 4 种状态<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['card-status.vue']
    },
    {
      demoId: 'check-type-radio',
      name: {
        'zh-CN': '单选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过属性`check-type="radio"`设置卡片单选，需同时设置 label。 注意：目前仅支持在 text 类型开启单选<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['check-type-radio.vue']
    },
    {
      demoId: 'check-type-checkbox',
      name: {
        'zh-CN': '多选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过属性`check-type="checkbox"`设置卡片多选，需同时设置 label。注意：目前仅支持在 text 类型开启多选<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['check-type-checkbox.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义 class',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>属性`card-class`可自定义卡片的 class，属性`height`可设置卡片内容区的高度。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'operate-bar',
      name: {
        'zh-CN': '操作栏选项配置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过`options`属性配置操作栏，支持按钮的禁用（`disabled: true`）与隐藏（`hidden: true`）<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['operate-bar.vue']
    },
    {
      demoId: 'card-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`change` 事件：卡片勾选和取消勾选时触发;`icon-click` 事件：操作栏按钮点击时触发<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['card-events.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>组件提供`default、title-left、title-right、footer`4 个插槽<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    }
  ],
  apis: []
}
