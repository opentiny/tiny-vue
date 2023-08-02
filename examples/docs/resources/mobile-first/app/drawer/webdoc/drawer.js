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
      demoId: 'placement',
      name: {
        'zh-CN': '抽屉方向',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 `placement` 属性设置抽屉的方向，可选值有 `left|right|top|bottom`，默认值为 `right`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['placement.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '抽屉宽度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 `width` 属性设置抽屉的宽度，默认值为 `300px`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'dragable',
      name: {
        'zh-CN': '拖拽功能',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 `dragable` 属性开启抽屉宽度拖拽功能，默认值为 `false`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dragable.vue']
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
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 `mask-closable` 为 `false` 后将禁用该功能，默认值为 `true` 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mask-event.vue']
    },
    {
      demoId: 'show',
      name: {
        'zh-CN': '显示隐藏',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>- show-header: 显示头部，默认值为 true；- show-footer: 显示底部，默认值为 false；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>- header: 头部插槽，默认显示头部，设置 :show-header="true" 时有效；- header-right: 头部右侧插槽，默认显示关闭功能；- footer: 底部插槽，默认隐藏底部，设置 :show-footer="true" 时有效；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>- hide: 关闭抽屉事件；- confirm: 确认事件，设置 :show-footer="true" 时有效；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event.vue']
    }
  ],
  apis: []
}
