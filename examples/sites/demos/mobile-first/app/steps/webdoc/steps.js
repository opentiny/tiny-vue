export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'data-resource',
      name: {
        'zh-CN': '横向单链型',
        'en-US': 'transverse single-stranded type'
      },
      desc: {
        'zh-CN': '<p>默认显示横向单链型</p>',
        'en-US': '<p>he horizontal single-chain type is displayed by default.</p>'
      },
      codeFiles: ['data-resource.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直单链型',
        'en-US': 'vertical single-stranded type'
      },
      desc: {
        'zh-CN': '<p>添加 `vertical` 属性开启垂直单链型，通过 `visible-num` 属性设置显示的节点数，默认为 5。</p>',
        'en-US':
          '<p>Add the `vertical` attribute to enable the vertical single-link mode. Use the `visible-num` attribute to set the number of nodes to be displayed. The default value is 5.</p>'
      },
      codeFiles: ['vertical.vue']
    },
    {
      demoId: 'advanced-steps',
      name: {
        'zh-CN': '高级向导1',
        'en-US': 'Advanced Wizard 1'
      },
      desc: {
        'zh-CN': '<p>添加属性 `advanced` 启用高级向导功能。</p>',
        'en-US': '<p>Add the attribute `advanced` to enable the advanced wizard feature</p>'
      },
      codeFiles: ['advanced-steps.vue']
    },
    {
      demoId: 'advanced-flex',
      name: {
        'zh-CN': '高级向导2',
        'en-US': 'Advanced Wizard 2'
      },
      desc: {
        'zh-CN': '<p>添加属性 `flex` 开启总宽度响应，节点等宽，撑满父容器，节点名称超出省略，默认值为 `false`。</p>',
        'en-US':
          '<p>added attributes flex ,Enable the response to the total width. Nodes have the same width and are full of the parent container. If the node name exceeds the maximum, omit the node name. The default value is `false`</p>'
      },
      codeFiles: ['advanced-flex.vue']
    },
    {
      demoId: 'advanced-no-arrow',
      name: {
        'zh-CN': '高级向导3',
        'en-US': 'Advanced Wizard 3'
      },
      desc: {
        'zh-CN':
          '<p>添加属性 `no-arrow` 隐藏左右箭头，在 PC 端按住 `shift+鼠标滚轮` 进行节点左右滚动，移动端触屏左右滑动即可。</p>',
        'en-US':
          '<p>Add the attribute `no-arrow` to hide the left and right arrows. On the PC, press and hold `shift+mouse wheel` to scroll the node left and right. On the mobile end, swipe left and right on the touch screen.</p>'
      },
      codeFiles: ['advanced-no-arrow.vue']
    },

    {
      demoId: 'slot-item',
      name: {
        'zh-CN': '插槽1',
        'en-US': 'slot 1'
      },
      desc: {
        'zh-CN': '<p>`item` 节点插槽。</p>',
        'en-US': '<p>`item`Node Slot</p>'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽2',
        'en-US': 'slot 2'
      },
      desc: {
        'zh-CN': '<p>`prefix` 前置插槽，仅开启 `advanced` 高级向导模式有效。</p>',
        'en-US': '<p>prefix` front slot, valid only when `advanced` advanced wizard mode is enabled</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'slot-bottom',
      name: {
        'zh-CN': '插槽3',
        'en-US': 'slot 3'
      },
      desc: {
        'zh-CN': '<p>`block-bottom` 滚动块底部插槽，仅开启 `advanced` 高级向导模式有效。</p>',
        'en-US':
          '<p>`block-bottom` scroll block bottom slot, valid only when `advanced` advanced wizard mode is enabled</p>'
      },
      codeFiles: ['slot-bottom.vue']
    },

    {
      demoId: 'duration',
      name: {
        'zh-CN': '节点滚动时间',
        'en-US': 'Node scrolling time'
      },
      desc: {
        'zh-CN':
          '<p>`duration` 设置节点左右滚动的持续时间，默认值为 300（单位 ms），设置 0 则无滚动动画，仅开启 `advanced` 高级向导模式有效。</p>',
        'en-US':
          '<p>`duration` Sets the duration for scrolling left and right of a node. The default value is 300 (unit: ms). If this parameter is set to 0, there is no scrolling animation. This parameter is valid only when the advanced wizard mode is enabled.</p>'
      },
      codeFiles: ['duration.vue']
    },

    {
      demoId: 'complicated',
      name: {
        'zh-CN': '综合示例',
        'en-US': 'Comprehensive example'
      },
      desc: {
        'zh-CN': '<p>综合示例</p>',
        'en-US': '<p>Comprehensive example</p>'
      },
      codeFiles: ['complicated.vue']
    }
  ],
  apis: [
    {
      'name': 'Steps',
      'type': 'component',
      'props': [
        {
          'name': 'advanced',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否开启高级向导模式', 'en-US': 'Enable Advanced Wizard Mode' },
          'demoId': 'advanced-steps'
        },
        {
          'name': 'description-field',
          'type': 'String',
          'defaultValue': 'description',
          'desc': { 'zh-CN': '描述字段', 'en-US': 'Description field' }
        },
        {
          'name': 'duration',
          'type': 'Number',
          'defaultValue': '300',
          'desc': {
            'zh-CN':
              '设置节点左右滚动的持续时间，默认值为 300（单位 ms），设置 0 则无滚动动画，仅开启 advanced 高级向导模式有效',
            'en-US':
              'Duration for scrolling left and right of a node. The default value is 300 (unit: ms). If this parameter is set to 0, there is no scrolling animation. This parameter is valid only when the advanced wizard mode is enabled.'
          },
          'demoId': 'duration'
        },
        {
          'name': 'no-arrow ',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '添加属性 no-arrow 隐藏左右箭头，在 PC 端按住 shift+鼠标滚轮 进行节点左右滚动，移动端触屏左右滑动即可，仅开启 advanced 高级向导模式有效。',
            'en-US':
              'Add the no-arrow attribute to hide the left and right arrows. On the PC, press Shift and scroll the mouse wheel to scroll the node left and right. Swipe left and right on the touch screen of the mobile end. This function is valid only when the advanced wizard mode is enabled.'
          },
          'demoId': 'advanced-no-arrow'
        },
        {
          'name': 'vertical',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否开启垂直单链型',
            'en-US': 'Indicates whether to enable the vertical single chain mode.'
          },
          'demoId': 'vertical'
        },
        {
          'name': 'visible-num',
          'type': 'Number',
          'defaultValue': '5',
          'desc': {
            'zh-CN': '显示模块数量，超出隐藏',
            'en-US': 'Display the number of modules. The number of modules exceeds the hidden value'
          },
          'demoId': 'vertical'
        }
      ],
      'slots': [
        {
          'name': 'block-bottom ',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '滚动块底部插槽，仅开启 advanced 高级向导模式有效。',
            'en-US':
              'Slot at the bottom of the scroll block. This parameter is valid only when the advanced wizard mode is enabled.'
          },
          'demoId': 'slot-bottom'
        },
        {
          'name': 'prefix ',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '前置插槽，仅开启 advanced 高级向导模式有效。',
            'en-US': 'Front slot, valid only when the advanced wizard mode is enabled.'
          },
          'demoId': 'slot'
        }
      ]
    }
  ]
}
