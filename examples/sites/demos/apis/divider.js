export default {
  mode: ['pc'],
  apis: [
    {
      name: 'divider',
      type: 'component',
      props: [
        {
          name: 'border-style',
          type: 'string',
          defaultValue: "'solid'",
          desc: {
            'zh-CN': '设置分隔线的样式，该属性的可选值为 solid / dashed / dotted',
            'en-US':
              'Set the style of the separator line, with optional values of solid/dashed/dotted for this property'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-style',
          mfDemo: 'type'
        },
        {
          name: 'color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置分隔线的颜色',
            'en-US': 'Set the color of the divider.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-style',
          mfDemo: 'color'
        },
        {
          name: 'content-background-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置分割线文案的背景颜色',
            'en-US': 'Set the background color of the divider content'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'content-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置分隔线文案的颜色',
            'en-US': 'Set the color of the divider content'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'content-position',
          type: 'string',
          defaultValue: "'center'",
          desc: {
            'zh-CN': '设置分隔线文案的位置，该属性的可选值为 left / center / right',
            'en-US':
              'Set the position of the separator text, with optional values of left/center/right for this attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content-position',
          mfDemo: 'content-position'
        },
        {
          name: 'direction',
          type: 'string',
          defaultValue: "'horizontal'",
          desc: {
            'zh-CN': '设置分隔线的方向，该属性的可选值为 horizontal / vertical',
            'en-US':
              'Set the direction of the divider; the possible values for this property are "horizontal" or "vertical"'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'direction',
          mfDemo: 'vertical'
        },
        {
          name: 'margin',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置分割线上下左右的边距',
            'en-US': 'Sets the margins of the split line'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-style',
          mfDemo: 'divider-margin'
        },
        {
          name: 'offset',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置文本位置偏移量，需同时配合`text-position`属性使用，以确定偏移的方向',
            'en-US':
              'Sets the text position offset. This parameter must be used together with the `text-position` attribute to determine the offset direction'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content-position',
          mfDemo: 'offset'
        },
        {
          name: 'height',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置整体的高度',
            'en-US': 'Sets the overall height'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'font-size',
          type: 'string',
          defaultValue: '14px',
          desc: {
            'zh-CN': '文本字体大小',
            'en-US': 'Text font size'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'status',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '分割线状态',
            'en-US': 'Splitting Line Status'
          },
          meta: {
            stable: '3.21.0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'status',
          mfDemo: 'status'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'content-position'
        }
      ]
    }
  ]
}
