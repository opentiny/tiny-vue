export default {
  mode: ['pc'],
  apis: [
    {
      name: 'color select panel',
      type: 'component',
      props: [
        {
          name: 'alpha',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用alpha选择',
            'en-US': 'enable alpha select or not'
          },
          mode: ['pc'],
          pcDemo: 'alpha'
        },
        {
          name: 'history',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '历史记录默认值',
            'en-US': 'Default values for historical records'
          },
          mode: ['pc'],
          pcDemo: 'history'
        },
        {
          name: 'predefine',
          type: 'string[] | undefined',
          defaultValue: 'undefined',
          desc: {
            'zh-CN': '预定义颜色色值',
            'en-US': 'predefine color values'
          },
          mode: ['pc'],
          pcDemo: 'predefine'
        },
        {
          name: 'enable-history',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用预定义颜色',
            'en-US': 'enable history or not'
          },
          mode: ['pc'],
          pcDemo: 'history',
          meta: {
            stable: '3.19.0'
          }
        },
        {
          name: 'enable-predefine-color',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用预定义颜色',
            'en-US': 'enable predefined colors or not'
          },
          mode: ['pc'],
          pcDemo: 'predefine',
          meta: {
            stable: '3.19.0'
          }
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认显示color select panel',
            'en-US': 'Is color select panel displayed by default'
          },
          mode: ['pc']
        },
        {
          name: 'format',
          type: "('hex'|'rgb'|'hsl'|'hsv')[]",
          defaultValue: '[]',
          desc: {
            'zh-CN': '点击确认后, confirm的事件将会返回对应的format数值. 如果为空数组则表示禁用颜色格式下拉选择',
            'en-US':
              'After clicking confirm, the confirm event will return the corresponding format value If it is an empty array, it means that the color format dropdown selection is disabled'
          },
          mode: ['pc'],
          pcDemo: 'format',
          meta: {
            stable: '3.19.0'
          }
        }
      ],
      events: [
        {
          name: 'cancel',
          type: '() =>void',
          defaultValue: '',
          desc: {
            'zh-CN': '按下取消或点击外部的时触发该事件',
            'en-US': 'When click cancel or click out-side will trigger cancel event'
          },
          mode: ['pc'],
          pcDemo: 'event'
        },
        {
          name: 'color-update',
          type: '(color:Color) => void',
          defaultValue: '',
          desc: {
            'zh-cn': '当颜色更新的时候会触发该事件，包括：点击预定义颜色、点击历史记录',
            'en-US': 'when click predefine color or history, will trigger color-update event'
          },
          mode: ['pc']
        },
        {
          name: 'confirm',
          type: '(hex:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '按下确认时触发该事件',
            'en-US': 'When click confirm will trigger confirm event'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
