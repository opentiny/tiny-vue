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
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '默认主題样式',
        'en-US': 'Default Theme Style'
      },
      desc: {
        'zh-CN': '<p>`type` 设置显示主题，可选值：danger(默认)、primary、success、warning、info</p>',
        'en-US': '<p>`type`Set the display theme. The options are danger (default), primary, success, warning, and info.</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'type-left',
      name: {
        'zh-CN': '圆点向左排列样式',
        'en-US': 'Dot Left Arrange Style'
      },
      desc: {
        'zh-CN': '<p>`show-left` 设置是否向左展示，仅对圆点生效</p>',
        'en-US': '<p>`show-left` Sets whether to display the dots to the left. This parameter is valid only for dots.</p>'
      },
      codeFiles: ['type-left.vue']
    },
    {
      demoId: 'is-dot',
      name: {
        'zh-CN': '小圆点标记',
        'en-US': 'small dot mark'
      },
      desc: {
        'zh-CN': '<p>通过`is-dot` 显示小圆点标记</p>',
        'en-US': '<p>Display small dot markers with `is-dot`</p>'
      },
      codeFiles: ['is-dot.vue']
    },
    {
      demoId: 'max',
      name: {
        'zh-CN': '计数最大值',
        'en-US': 'Maximum count value'
      },
      desc: {
        'zh-CN': '<p>`max` 超过最大值会显示 `{max}+` </p>',
        'en-US': '<p>`max` If the maximum value is exceeded, `{max}+` is displayed.</p>'
      },
      codeFiles: ['max.vue']
    },
    {
      demoId: 'target',
      name: {
        'zh-CN': '跳转链接',
        'en-US': 'Jump link'
      },
      desc: {
        'zh-CN': '<p>`href`定义跳转链接</p>',
        'en-US': '<p>`href`Define Jump Link</p>'
      },
      codeFiles: ['target.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '自定义标记目标',
        'en-US': 'Custom Marker Targets'
      },
      desc: {
        'zh-CN': '<p>`default slot` 标记内容自定义</p>',
        'en-US': '<p>`default slot` tag content customization</p>'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'slot-content',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'Customized prompt content'
      },
      desc: {
        'zh-CN': '<p>`content slot` 自定义提示内容</p>',
        'en-US': '<p>`content slot` Customized prompt content</p>'
      },
      codeFiles: ['slot-content.vue']
    },
    {
      demoId: 'dynamic-hidden',
      name: {
        'zh-CN': '消息已读动态隐藏标记',
        'en-US': 'Message Read Dynamic Hide Flag'
      },
      desc: {
        'zh-CN': '<p>`hidden` 隐藏标记</p>',
        'en-US': '<p>`hidden`hide markup</p>'
      },
      codeFiles: ['dynamic-hidden.vue']
    },
    {
      demoId: 'props-content',
      name: {
        'zh-CN': '属性传值显示内容',
        'en-US': 'Displayed content of attribute value transfer'
      },
      desc: {
        'zh-CN': '<p>通过绑定`data`属性传入自定义内容</p>',
        'en-US': '<p>Transfer the customized content by binding the `data` attribute.</p>'
      },
      codeFiles: ['props-content.vue']
    }
  ],
  apis: [
    {
      'name': 'Badge',
      'type': 'component',
      'props': [
        {
          'name': 'show-Left',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置是否向左展示，仅对圆点生效。',
            'en-US': 'Indicates whether to display the dots to the left. This parameter is valid only for dots.'
          },
          'demoId': 'type-left'
        },
      ]
    },
  ]
}
