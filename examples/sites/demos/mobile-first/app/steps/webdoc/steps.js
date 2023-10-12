export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'data-resource',
      name: {
        'zh-CN': '横向单链型',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>默认显示横向单链型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['data-resource.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直单链型',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>添加 `vertical` 属性开启垂直单链型，通过 `visible-num` 属性设置显示的节点数，默认为 5。</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['vertical.vue']
    },
    {
      demoId: 'advanced-steps',
      name: {
        'zh-CN': '高级向导1',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>添加属性 `advanced` 启用高级向导功能。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['advanced-steps.vue']
    },
    {
      demoId: 'advanced-flex',
      name: {
        'zh-CN': '高级向导2',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>添加属性 `flex` 开启总宽度响应，节点等宽，撑满父容器，节点名称超出省略，默认值为 `false`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['advanced-flex.vue']
    },
    {
      demoId: 'advanced-no-arrow',
      name: {
        'zh-CN': '高级向导3',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>添加属性 `no-arrow` 隐藏左右箭头，在 PC 端按住 `shift+鼠标滚轮` 进行节点左右滚动，移动端触屏左右滑动即可。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['advanced-no-arrow.vue']
    },

    {
      demoId: 'slot-item',
      name: {
        'zh-CN': '插槽1',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>`item` 节点插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽2',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>`prefix` 前置插槽，仅开启 `advanced` 高级向导模式有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'slot-bottom',
      name: {
        'zh-CN': '插槽3',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>`block-bottom` 滚动块底部插槽，仅开启 `advanced` 高级向导模式有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-bottom.vue']
    },

    {
      demoId: 'duration',
      name: {
        'zh-CN': '节点滚动时间',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>`duration` 设置节点左右滚动的持续时间，默认值为 300（单位 ms），设置 0 则无滚动动画，仅开启 `advanced` 高级向导模式有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['duration.vue']
    },

    {
      demoId: 'complicated',
      name: {
        'zh-CN': '综合示例',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>综合示例<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['complicated.vue']
    }
  ],
  apis: []
}
