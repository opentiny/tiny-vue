export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'tag',
      type: 'component',
      props: [
        {
          name: 'color',
          type: 'IColor | string[]',
          typeAnchorName: 'IColor',
          defaultValue: '',
          desc: {
            'zh-CN':
              '控制标签文本色和背景色，可使用 IColor 类型中的预设值，也可自定义值，若自定义值为字符串则只能设置标签的背景色；若为数组则第一个值设置背景色，第二个设置文本色；【注：3.15.0新增支持数组类型】',
            'en-US':
              'Control the text color and background color of the label. You can use the preset value in the IColor type or customize the value. If the customized value is a character string, you can only set the background color of the label. If it is an array, the first value sets the background color and the second sets the text color. [Note: The array type is supported in 3.15.0]'
          },
          demoId: 'different-color'
        },
        {
          name: 'max-width',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '最大宽度',
            'en-US': 'max width'
          },
          demoId: 'max-width'
        },
        {
          name: 'mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '小尺寸',
            'en-US': 'mini'
          },
          demoId: 'mini'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '文字',
            'en-US': 'Text'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'theme',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '彩色标签，该属性的可选值为 pink、purple、cyan',
            'en-US': 'Color label. The value can be pink, purple, or cyan.'
          }
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标签内容',
            'en-US': 'Label Content'
          },
          demoId: 'slot-default'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'different-color',
      name: {
        'zh-CN': '不同颜色',
        'en-US': 'Different Color'
      },
      desc: {
        'zh-CN': '不同颜色',
        'en-US': 'Different Color'
      },
      codeFiles: ['different-color.vue']
    },
    {
      demoId: 'max-width',
      name: {
        'zh-CN': '最大宽度',
        'en-US': 'Max Width'
      },
      desc: {
        'zh-CN': '最大宽度',
        'en-US': 'Max Width'
      },
      codeFiles: ['max-width.vue']
    },
    {
      demoId: 'mini',
      name: {
        'zh-CN': '小尺寸',
        'en-US': 'Mini'
      },
      desc: {
        'zh-CN': '小尺寸',
        'en-US': 'Mini'
      },
      codeFiles: ['mini.vue']
    }
  ],
  types: [
    {
      name: 'IColor',
      type: 'type',
      code: `
type IColor = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'brown' | 'grey' | string // 除了预设值，也可以是其他任意自定义颜色值
`
    }
  ]
}
