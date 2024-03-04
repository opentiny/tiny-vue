export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'rate',
      type: 'component',
      props: [
        {
          name: 'allow-half',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许半选',
            'en-US': 'Whether to allow half selection'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'allow-half',
          mfDemo: ''
        },
        {
          name: 'colors',
          type: '[string, string, string]',
          defaultValue: "['#FADB14', '#FADB14', '#FADB14']",
          desc: {
            'zh-CN': 'icon 的颜色数组，为 Threshold 三个分段所对应的颜色',
            'en-US': 'icon color array, which is the color corresponding to the Threshold three segments.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-3-threshold-colors',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为只读',
            'en-US': 'Read-only'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'dynamic-disable',
          mfDemo: ''
        },
        {
          name: 'disabled-void-color',
          type: 'string',
          defaultValue: "'#D9D9D9'",
          desc: {
            'zh-CN': '禁用状态下未选中 icon 的颜色',
            'en-US': 'Color of unselected icons in disabled state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled-not-selected-color',
          mfDemo: ''
        },
        {
          name: 'disabled-void-icon-class',
          typeAnchorName: 'IRateIconName',
          type: 'IRateIconName',
          defaultValue: "'icon-starActive'",
          desc: {
            'zh-CN': '只读状态下未选中的图标样式名',
            'en-US': 'Icon style name that is not selected in read-only state.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled-not-selected-class',
          mfDemo: ''
        },
        {
          name: 'high-threshold',
          type: 'number',
          defaultValue: '4',
          desc: {
            'zh-CN': '高分和中等分数的界限值，值本身被划分在高分中',
            'en-US':
              'The threshold between the high score and the medium score. The value is divided into the high score.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'threshold-value',
          mfDemo: ''
        },
        {
          name: 'icon-classes',
          typeAnchorName: 'IRateIconName',
          type: '[IRateIconName, IRateIconName, IRateIconName]',
          defaultValue: "['icon-starActive', 'icon-starActive', 'icon-starActive']",
          desc: {
            'zh-CN': '三个分段对应的图标样式名',
            'en-US': 'Icon style name corresponding to the three segments'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-3-threshold-icon',
          mfDemo: ''
        },
        {
          name: 'low-threshold',
          type: 'number',
          defaultValue: '2',
          desc: {
            'zh-CN': '低分和中等分数的界限值，值本身被划分在低分中',
            'en-US':
              'The threshold value of the low score and the medium score. The value is divided into the low score.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'threshold-value',
          mfDemo: ''
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '5',
          desc: {
            'zh-CN': '最大分值',
            'en-US': 'Maximum score'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'max-score',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'radio',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '评分其他形态单选',
            'en-US': 'Single choice for scoring other forms'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'radio-rate',
          mfDemo: ''
        },
        {
          name: 'score-template',
          type: 'string',
          defaultValue: "'{value}'",
          desc: {
            'zh-CN': '分数显示模板，用“{value}”代表分数',
            'en-US': 'Score display template'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-score',
          mfDemo: ''
        },
        {
          name: 'show-score',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示当前分数，show-score 和 show-text 不能同时为真',
            'en-US':
              'Whether to display the current score. The values of show-score and show-text cannot be true at the same time.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-score',
          mfDemo: ''
        },
        {
          name: 'show-text',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
            'en-US':
              'Indicates whether to display auxiliary text. If yes, the text corresponding to the current score is selected from the texts array.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'texts-and-text-color',
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: "'18px'",
          desc: {
            'zh-CN': '图标字体大小',
            'en-US': 'Icon font size'
          },
          mode: ['pc'],
          pcDemo: 'size-and-space'
        },
        {
          name: 'space',
          type: 'string',
          defaultValue: "'24px'",
          desc: {
            'zh-CN': '每个图标所占宽度',
            'en-US': 'Width of each icon'
          },
          mode: ['pc'],
          pcDemo: 'size-and-space'
        },
        {
          name: 'text-color',
          type: 'string',
          defaultValue: "'#666666'",
          desc: {
            'zh-CN': '辅助文字的颜色',
            'en-US': 'Color of auxiliary text'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'texts-and-text-color',
          mfDemo: ''
        },
        {
          name: 'text-on-bottom',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否在图标下显示对应的文字',
            'en-US': 'Whether to display the corresponding text under the icon'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'text-on-bottom',
          mfDemo: ''
        },
        {
          name: 'texts',
          type: 'string[]',
          defaultValue: "['很差', '差', '一般', '好', '很好']",
          desc: {
            'zh-CN': '辅助文字数组，文字的数量应该与max属性一致',
            'en-US': 'Auxiliary text array'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'texts-and-text-color',
          mfDemo: ''
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置尺寸 large small(默认)',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'void-color',
          type: 'string',
          defaultValue: "'#BFBFBF'",
          desc: {
            'zh-CN': '未选中 icon 的颜色',
            'en-US': 'Color of unselected icons'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'not-selected-color',
          mfDemo: ''
        },
        {
          name: 'void-icon-class',
          typeAnchorName: 'IRateIconName',
          type: 'IRateIconName',
          defaultValue: "'icon-starDisable'",
          desc: {
            'zh-CN': '未选中 icon 的图标样式名',
            'en-US': 'Class name of unselected icons.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'not-selected-class',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '分值改变时触发',
            'en-US': 'This event is triggered when the score changes.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'rate-events',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IRateIconName',
      type: 'type',
      code: `type IRateIconName = 'icon-starDisable' | 'icon-starActive' | 'icon-frown' | 'icon-meh' | 'icon-smile'`
    }
  ]
}
