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
            'zh-CN': '设置分隔线的样式，该属性的可选值为 solid / dashed',
            'en-US': 'Set the style of the separator line, with optional values of solid/dashed for this property'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置分隔线的颜色',
            'en-US': 'Set the color of the divider.'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
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
          mode: ['pc'],
          pcDemo: 'content-position'
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
          mode: ['pc'],
          pcDemo: 'direction'
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
