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
      demoId: 'action',
      name: {
        'zh-CN': '操作列表模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 为 `action` 启用操作列表模式，设置 `title` 显示提示语。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['action.vue']
    },
    {
      demoId: 'show',
      name: {
        'zh-CN': '显示隐藏',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>- show-header: 显示头部，默认值为 true；- show-search: 显示头部搜索功能，默认值为 true；- show-footer: 显示底部，默认值为 false；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层1',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 `mask` 属性可以关闭遮罩层，默认值为 `true` 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'mask-event',
      name: {
        'zh-CN': '遮罩层2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 `mask-closable` 为 `false` 后将禁用该功能，默认值为 `true` 。        <p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mask-event.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>- header: 头部插槽，默认显示头部，设置 show-header="true" 时有效；- header-left: 头部左侧插槽，默认显示搜索功能；- header-right: 头部右侧插槽，默认显示关闭功能；- footer: 头部插槽，默认隐藏底部，设置 show-footer="true" 时有效；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'ellipsis',
      name: {
        'zh-CN': '超出省略',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加属性 `ellipsis` 选项内容会超出隐藏。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['ellipsis.vue']
    }
  ],
  apis: []
}
