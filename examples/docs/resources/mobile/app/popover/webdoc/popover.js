export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['base.vue'],
    },
    {
      demoId: 'direction',
      name: {
        'zh-CN': '方向',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>展开方向</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['direction.vue'],
    },
  ],
  apis: [
    {
      name: 'Popover', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'trigger',
          type: 'string',
          defaultValue: 'click',
          desc: {
            'zh-CN': '<p>触发方式;该属性的可选值为 click / focus / hover / manual</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'content',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>显示的内容，也可以通过 slot 传入 DOM</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'width',
          type: 'string| number',
          defaultValue: 'auto',
          desc: {
            'zh-CN': '<p>宽度，该属性的默认值为auto，最小宽度 150px</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'placement',
          type: 'String',
          defaultValue: 'bottom',
          desc: {
            'zh-CN': '<p>出现位置;该属性的可选值为 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>Popover 是否可用</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'modelValue / v-model',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>状态是否可见</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'offset',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>出现位置的偏移量</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'arrow-offset',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>箭头的位置偏移</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'transform-origin',
          type: 'Boolean | String',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>组件的旋转中心点</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'append-to-body',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否添加到body上</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'transition',
          type: 'String',
          defaultValue: 'fade-in-linear',
          desc: {
            'zh-CN': '<p>定义渐变动画</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'visible-arrow',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示 Tooltip 箭头</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'popper-options',
          type: 'Object',
          defaultValue: '{ boundariesElement: "body", gpuAcceleration: false }',
          desc: {
            'zh-CN': '<p>popper.js 的参数;该属性的可选值为 参考popper.js文档</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'popper-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>为 popper 添加类名</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'open-delay',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>触发方式为 hover 时的显示延迟，单位为毫秒</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'close-delay',
          type: 'Number',
          defaultValue: '200',
          desc: {
            'zh-CN': '<p>触发方式为 hover 时的隐藏延迟，单位为毫秒</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'maxHeight',
          type: 'Number  | String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>最大高度</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'listData',
          type: 'Array | Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>内容对象列表，对象字段包含：icon图片地址、label标题、subLabel子标题</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
      ],
      events: [
        {
          name: 'show',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>显示时触发</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'hide',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>隐藏时触发</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'after-enter',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>显示动画播放完毕后触发</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'after-leave',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>隐藏动画播放完毕后触发</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Popover 内嵌 HTML 文本</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'reference',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>触发 Popover 显示的 HTML 元素</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
      ]
    }
  ]
}
