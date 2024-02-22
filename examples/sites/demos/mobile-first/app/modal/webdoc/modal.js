export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `Modal.alert` 方法设置弹出框，通过 `Modal.confirm` 方法设置确认弹出框。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'div-button-content',
      name: {
        'zh-CN': '按钮内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可在 `Modal.alert` 方法里通过添加 `confirmContent` 属性设置确定按钮内容，通过 `cancelContent` 属性设置取消按钮内容。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['div-button-content.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '最大化显示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `fullscreen` 属性设置是否最大化显示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'esc-closable',
      name: {
        'zh-CN': '按 Esc 键关闭弹出框',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `esc-closable` 属性设置是否允许按 Esc 键关闭窗口，默认为 `false`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['esc-closable.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '自动关闭延时',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `duration` 属性设置自动关闭的延迟时间，只对 type=message 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'id',
      name: {
        'zh-CN': '防止重复提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>如果不想窗口重复点击，可以设置唯一的 `id` 防止重复提示，只对 type=message 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['id.vue']
    },
    {
      demoId: 'lock-scroll',
      name: {
        'zh-CN': '锁住滚动条',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `lock-scroll` 属性设置是否锁住滚动条，不允许页面滚动。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['lock-scroll.vue']
    },
    {
      demoId: 'lock-view',
      name: {
        'zh-CN': '锁住页面',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `lock-view` 属性设置是否锁住页面，不允许窗口之外的任何操作。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['lock-view.vue']
    },
    {
      demoId: 'mask-closable',
      name: {
        'zh-CN': '点击遮罩层关闭窗口',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `mask-closable` 属性设置是否允许点击遮罩层关闭窗口。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mask-closable.vue']
    },
    {
      demoId: 'message',
      name: {
        'zh-CN': '自定义内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `message` 属性设置窗口的内容。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['message.vue']
    },
    {
      demoId: 'showFooter',
      name: {
        'zh-CN': '不显示底部',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `showFooter` 属性设置是否显示底部，默认为 `true`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['showFooter.vue']
    },
    {
      demoId: 'showHeader',
      name: {
        'zh-CN': '不显示头部',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `showHeader` 属性设置是否显示头部，默认为 `true`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['showHeader.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '消息状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `status` 属性设置消息状态，可选值有 `info | success | warning | error | loading | 自定义组件`，`status` 可以是自定义组件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '标题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `title` 属性设置窗口的标题。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '窗口类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `type` 属性设置窗口类型，可选值 `alert | confirm | message`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'value',
      name: {
        'zh-CN': '绑定值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `v-model` 属性绑定值。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['value.vue']
    },
    {
      demoId: 'zIndex',
      name: {
        'zh-CN': '自定义堆叠顺序',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `zIndex` 属性设置自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['zIndex.vue']
    },
    {
      demoId: 'cancel-event',
      name: {
        'zh-CN': '取消按钮事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击取消按钮时触发 `cancel` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['cancel-event.vue']
    },
    {
      demoId: 'close-event',
      name: {
        'zh-CN': '关闭按钮事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击关闭按钮时会触发 `close` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['close-event.vue']
    },
    {
      demoId: 'confirm-event',
      name: {
        'zh-CN': '确定按钮事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击确定按钮时会触发 `confirm` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['confirm-event.vue']
    },
    {
      demoId: 'hide-event',
      name: {
        'zh-CN': '窗口关闭事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>窗口关闭时会触发 `hide` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['hide-event.vue']
    },
    {
      demoId: 'show-event',
      name: {
        'zh-CN': '窗口显示事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>在窗口显示时会触发 `show` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-event.vue']
    },
    {
      demoId: 'zoom-event',
      name: {
        'zh-CN': '窗口缩放事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>窗口缩放时会触发 `zoom` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['zoom-event.vue']
    },
    {
      demoId: 'value',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `templete` 设置默认插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['value.vue']
    },
    {
      demoId: 'footer-slot',
      name: {
        'zh-CN': '底部插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `slot="footer"` 设置底部插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['footer-slot.vue']
    },
    {
      demoId: 'grid',
      name: {
        'zh-CN': '嵌套 grid',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过插槽嵌套 grid<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['grid.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '拦截弹窗关闭',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `before-close` 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截<br> 可以通过该拦截方法传入的参数获取关闭的操作类型<br>confirm 弹窗有以下关闭类型：<br> - confirm：点击确认时关闭<br>- cancel：点击取消时关闭<br> - close：点击关闭按钮时关闭<br>- mask: 点击遮罩时关闭<br>- esc：通过按钮 esc 时关闭<br>alert 弹窗比 confirm 弹窗少了 `confirm` 类型<br> message 弹窗只有 `show` 一种关闭类型<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['before-close.vue']
    }
  ],
  apis: []
}
