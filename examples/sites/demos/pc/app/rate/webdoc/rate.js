export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-3-threshold-colors',
      'name': { 'zh-CN': '分段颜色', 'en-US': 'Segment color' },
      'desc': {
        'zh-CN': '<p>可通过 <code>colors</code> 定义 3 分段颜色。</p>\n',
        'en-US': '<p>You can use <code>colors</code> to define three-segment colors. </p>\n'
      },
      'codeFiles': ['custom-3-threshold-colors.vue']
    },
    {
      'demoId': 'disabled-not-selected-color',
      'name': { 'zh-CN': '禁用时未选中图标颜色', 'en-US': 'Unselected icon color when customized is disabled' },
      'desc': {
        'zh-CN': '<p>可通过 <code>disabled-void-color</code> 自定义禁用时未选中图标颜色。</p>\n',
        'en-US': '<p>You can use <code>disabled-void-color</code> to customize the color of the unselected icon. </p>\n'
      },
      'codeFiles': ['disabled-not-selected-color.vue']
    },
    {
      'demoId': 'disabled-not-selected-class',
      'name': {
        'zh-CN': '禁用时未选中图标类名',
        'en-US': 'Icon class name that is not selected when user-defined is disabled'
      },
      'desc': {
        'zh-CN': '<p>可通过 <code>disabled-void-icon-class</code> 自定义禁用时未选中图标类名。</p>\n',
        'en-US':
          '<p>You can use <code>disabled-void-icon-class</code> to customize the class name of the icon that is not selected during disabling. </p>\n'
      },
      'codeFiles': ['disabled-not-selected-class.vue']
    },
    {
      'demoId': 'custom-3-threshold-icon',
      'name': { 'zh-CN': '分段图标类名', 'en-US': 'Segment icon class name' },
      'desc': {
        'zh-CN': '<p>可通过 <code>icon-classes</code> 自定义 3 分段图标。</p>\n',
        'en-US': '<p>You can use <code>icon-classes</code> to customize the 3-part icon. </p>\n'
      },
      'codeFiles': ['custom-3-threshold-icon.vue']
    },
    {
      'demoId': 'texts-and-text-color',
      'name': { 'zh-CN': '辅助文字及颜色', 'en-US': 'Auxiliary Text and Color' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>texts show-text text-color</code> 三个属性分别设置辅助文字内容、是否显示辅助文字及辅助文字颜色。</p>\n',
        'en-US':
          '<p>You can set the auxiliary text content, whether to display the auxiliary text, and the auxiliary text color through the <code>texts show-text text-color</code> attributes. </p>\n'
      },
      'codeFiles': ['texts-and-text-color.vue']
    },
    {
      'demoId': 'size-and-space',
      'name': { 'zh-CN': '大小及占位宽度', 'en-US': 'Size and Placeholder Width' },
      'desc': {
        'zh-CN': '<p>可通过 <code>size space</code> 分别大小和占位宽度。</p>\n',
        'en-US': '<p>You can use <code>size space</code> to separate the size and placeholder width. </p>\n'
      },
      'codeFiles': ['size-and-space.vue']
    },
    {
      'demoId': 'not-selected-color',
      'name': { 'zh-CN': '未选中图标颜色', 'en-US': 'The color of unselected icons' },
      'desc': {
        'zh-CN': '<p>可通过 <code>void-color</code> 定义未选中图标颜色。</p>\n',
        'en-US': '<p>You can use <code>void-color</code> to define the color of an unselected icon. </p>\n'
      },
      'codeFiles': ['not-selected-color.vue']
    },
    {
      'demoId': 'not-selected-class',
      'name': { 'zh-CN': '未选中图标类名', 'en-US': 'Customized unselected icon name' },
      'desc': {
        'zh-CN': '<p>可通过 <code>void-icon-class</code> 定义未选中图标类名。</p>\n',
        'en-US': '<p>You can use <code>void-icon-class</code> to define the unselected icon class name. </p>\n'
      },
      'codeFiles': ['not-selected-class.vue']
    },
    {
      'demoId': 'text-on-bottom',
      'name': { 'zh-CN': '图标下文字提示', 'en-US': 'Text prompt under the icon' },
      'desc': {
        'zh-CN': '<p>可通过 <code>text-on-bottom</code> 定义是否在图标下显示文字提示。</p>\n',
        'en-US':
          '<p>You can use <code>text-on-bottom</code> to define whether to display text prompts under icons. </p>\n'
      },
      'codeFiles': ['text-on-bottom.vue']
    },
    {
      'demoId': 'allow-half',
      'name': { 'zh-CN': '半选', 'en-US': 'Half Selection' },
      'desc': {
        'zh-CN': '<p>可通过 <code>allow-half</code> 定义是否支持半选。</p>\n',
        'en-US': '<p>You can use <code>allow-half</code> to define whether half selection is supported. </p>\n'
      },
      'codeFiles': ['allow-half.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>可通过 <code>disabled</code> 定义是否禁用。</p>\n',
        'en-US': '<p>You can use <code>disabled</code> to define whether to disable the function. </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'show-score',
      'name': { 'zh-CN': '分数显示', 'en-US': 'Score Display' },
      'desc': {
        'zh-CN': '<p>可通过 <code>show-score score-template</code> 分别定义是否显示分数和显示的模板。</p>\n',
        'en-US':
          '<p>You can use <code>show-score score-template</code> to define whether to display scores and the display template. </p>\n'
      },
      'codeFiles': ['show-score.vue']
    },
    {
      'demoId': 'radio-rate',
      'name': { 'zh-CN': '单选模式', 'en-US': 'Single Choice Mode' },
      'desc': {
        'zh-CN': '<p>可通过 <code>radio</code> 设置单选模式。</p>\n',
        'en-US': '<p>You can use <code>radio</code> to set the single-choice mode. </p>\n'
      },
      'codeFiles': ['radio-rate.vue']
    },
    {
      'demoId': 'max-score',
      'name': { 'zh-CN': '最大分值', 'en-US': 'Maximum Score' },
      'desc': {
        'zh-CN': '<p>可通过 <code>max</code> 设置最大分值。</p>\n',
        'en-US': '<p>You can use <code>max</code> to set the maximum score. </p>\n'
      },
      'codeFiles': ['max-score.vue']
    },
    {
      'demoId': 'threshold-value',
      'name': { 'zh-CN': '界限值', 'en-US': 'Boundaries' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>low-threshold high-threshold</code> 分别设置下限值和上限值，通过<code>colors</code>配置显示星的颜色</p>\n',
        'en-US':
          '<p>You can set the lower limit and upper limit by using <code>low-threshold high-threshold</code>, and set the color of the displayed star by using <code>colors</p>\n'
      },
      'codeFiles': ['threshold-value.vue']
    },
    {
      'demoId': 'rate-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>监听 <code>change</code> 事件触发处理方法。</p>\n',
        'en-US': '<p>Listen to the <code>change</code> event triggering method. </p>\n'
      },
      'codeFiles': ['rate-events.vue']
    }
  ],
  apis: [
    {
      'name': 'rate',
      'type': 'component',
      'properties': [
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': '5',
          'desc': { 'zh-CN': '最大分值', 'en-US': 'Maximum score' },
          'demoId': 'max-score'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否为只读', 'en-US': 'Read-only' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'allow-half',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否允许半选', 'en-US': 'Whether to allow half selection' },
          'demoId': 'allow-half'
        },
        {
          'name': 'colors',
          'type': '[string, string, string]',
          'defaultValue': "['#FADB14', '#FADB14', '#FADB14']",
          'desc': {
            'zh-CN': 'icon 的颜色数组，为 Threshold 3 个分段所对应的颜色',
            'en-US': 'icon color array, which is the color corresponding to the Threshold three segments.'
          },
          'demoId': 'custom-3-threshold-colors'
        },
        {
          'name': 'disabled-void-color',
          'type': 'string',
          'defaultValue': "'#D9D9D9'",
          'desc': { 'zh-CN': '禁用状态下未选中 icon 的颜色', 'en-US': 'Color of unselected icons in disabled state' },
          'demoId': 'disabled-not-selected-color'
        },
        {
          'name': 'disabled-void-icon-class',
          'typeAnchorName': 'IRateIconName',
          'type': "IRateIconName",
          'defaultValue': "'icon-starActive'",
          'desc': {
            'zh-CN': '只读状态下未选中的图标样式名',
            'en-US':
              "Icon style name that is not selected in read-only state."
          },
          'demoId': 'disabled-not-selected-class'
        },
        {
          'name': 'high-threshold',
          'type': 'number',
          'defaultValue': '4',
          'desc': {
            'zh-CN': '高分和中等分数的界限值，值本身被划分在高分中',
            'en-US':
              'The threshold between the high score and the medium score. The value is divided into the high score.'
          },
          'demoId': 'threshold-value'
        },
        {
          'name': 'icon-classes',
          'typeAnchorName': 'IRateIconName',
          'type': '[IRateIconName, IRateIconName, IRateIconName]',
          'defaultValue': "['icon-starActive', 'icon-starActive', 'icon-starActive']",
          'desc': {
            'zh-CN': '三个分段对应的图标样式名',
            'en-US': 'Icon style name corresponding to the three segments'
          },
          'demoId': 'custom-3-threshold-icon'
        },
        {
          'name': 'low-threshold',
          'type': 'number',
          'defaultValue': '2',
          'desc': {
            'zh-CN': '低分和中等分数的界限值，值本身被划分在低分中',
            'en-US':
              'The threshold value of the low score and the medium score. The value is divided into the low score.'
          },
          'demoId': 'threshold-value'
        },
        {
          'name': 'score-template',
          'type': 'string',
          'defaultValue': "'{value}'",
          'desc': { 'zh-CN': '分数显示模板，用“{value}”代表分数', 'en-US': 'Score display template' },
          'demoId': 'show-score'
        },
        {
          'name': 'show-score',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示当前分数，show-score 和 show-text 不能同时为真',
            'en-US':
              'Whether to display the current score. The values of show-score and show-text cannot be true at the same time.'
          },
          'demoId': 'show-score'
        },
        {
          'name': 'show-text',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
            'en-US':
              'Indicates whether to display auxiliary text. If yes, the text corresponding to the current score is selected from the texts array.'
          },
          'demoId': 'texts-and-text-color'
        },
        {
          'name': 'text-color',
          'type': 'string',
          'defaultValue': "'#666666'",
          'desc': { 'zh-CN': '辅助文字的颜色', 'en-US': 'Color of auxiliary text' },
          'demoId': 'texts-and-text-color'
        },
        {
          'name': 'texts',
          'type': 'string[]',
          'defaultValue': "['很差', '差', '一般', '好', '很好']",
          'desc': { 'zh-CN': '辅助文字数组，文字的数量应该与max属性一致', 'en-US': 'Auxiliary text array' },
          'demoId': 'texts-and-text-color'
        },
        {
          'name': 'void-color',
          'type': 'string',
          'defaultValue': "'#BFBFBF'",
          'desc': { 'zh-CN': '未选中 icon 的颜色', 'en-US': 'Color of unselected icons' },
          'demoId': 'not-selected-color'
        },
        {
          'name': 'void-icon-class',
          'type': 'IRateIconName',
          'typeAnchorName': 'IRateIconName',
          'defaultValue': "'icon-starActive'",
          'desc': {
            'zh-CN': '未选中 icon 的图标样式名',
            'en-US':
              "Class name of unselected icons."
          },
          'demoId': 'not-selected-class'
        },
        {
          'name': 'radio',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '评分其他形态单选', 'en-US': 'Single choice for scoring other forms' },
          'demoId': 'radio-rate'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '18px',
          'desc': { 'zh-CN': '图标字体大小', 'en-US': 'Icon font size' },
          'demoId': 'size-and-space'
        },
        {
          'name': 'space',
          'type': 'string',
          'defaultValue': '24px',
          'desc': { 'zh-CN': '每个图标所占宽度', 'en-US': 'Width of each icon' },
          'demoId': 'size-and-space'
        },
        {
          'name': 'text-on-bottom',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否在图标下显示对应的文字',
            'en-US': 'Whether to display the corresponding text under the icon'
          },
          'demoId': 'text-on-bottom'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: number) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '分值改变时触发', 'en-US': 'This event is triggered when the score changes.' },
          'demoId': 'rate-events'
        }
      ],
      'slots': []
    }
  ],
  types: [
    {
      name: 'IRateIconName',
      type: 'type',
      code: `type IRateIconName = 'icon-starDisable' | 'icon-frown' | 'icon-meh' | 'icon-smile'`
    }
  ]
}
