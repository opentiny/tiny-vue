export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-3-threshold-colors',
      name: {
        'zh-CN': '分段颜色',
        'en-US': 'Segment color'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>colors</code> 定义 3 分段颜色。</p>\n',
        'en-US': '<p>You can use <code>colors</code> to define three-segment colors. </p>\n'
      },
      codeFiles: ['custom-3-threshold-colors.vue']
    },
    {
      demoId: 'disabled-not-selected-color',
      name: {
        'zh-CN': '禁用时未选中图标颜色',
        'en-US': 'Unselected icon color when customized is disabled'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled-void-color</code> 自定义禁用时未选中图标颜色。</p>\n',
        'en-US': '<p>You can use <code>disabled-void-color</code> to customize the color of the unselected icon. </p>\n'
      },
      codeFiles: ['disabled-not-selected-color.vue']
    },
    {
      demoId: 'disabled-not-selected-class',
      name: {
        'zh-CN': '禁用时未选中图标类名',
        'en-US': 'Icon class name that is not selected when user-defined is disabled'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled-void-icon-class</code> 自定义禁用时未选中图标类名。</p>\n',
        'en-US':
          '<p>You can use <code>disabled-void-icon-class</code> to customize the class name of the icon that is not selected during disabling. </p>\n'
      },
      codeFiles: ['disabled-not-selected-class.vue']
    },
    {
      demoId: 'custom-3-threshold-icon',
      name: {
        'zh-CN': '分段图标类名',
        'en-US': 'Segment icon class name'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>icon-classes</code> 自定义 3 分段图标。</p>\n',
        'en-US': '<p>You can use <code>icon-classes</code> to customize the 3-part icon. </p>\n'
      },
      codeFiles: ['custom-3-threshold-icon.vue']
    },
    {
      demoId: 'texts-and-text-color',
      name: {
        'zh-CN': '辅助文字及颜色',
        'en-US': 'Auxiliary Text and Color'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>texts show-text text-color</code> 三个属性分别设置辅助文字内容、是否显示辅助文字及辅助文字颜色。</p>\n',
        'en-US':
          '<p>You can set the auxiliary text content, whether to display the auxiliary text, and the auxiliary text color through the <code>texts show-text text-color</code> attributes. </p>\n'
      },
      codeFiles: ['texts-and-text-color.vue']
    },
    {
      demoId: 'size-and-space',
      name: {
        'zh-CN': '大小及占位宽度',
        'en-US': 'Size and Placeholder Width'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>size space</code> 分别大小和占位宽度。</p>\n',
        'en-US': '<p>You can use <code>size space</code> to separate the size and placeholder width. </p>\n'
      },
      codeFiles: ['size-and-space.vue']
    },
    {
      demoId: 'not-selected-color',
      name: {
        'zh-CN': '未选中图标颜色',
        'en-US': 'The color of unselected icons'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>void-color</code> 定义未选中图标颜色。</p>\n',
        'en-US': '<p>You can use <code>void-color</code> to define the color of an unselected icon. </p>\n'
      },
      codeFiles: ['not-selected-color.vue']
    },
    {
      demoId: 'not-selected-class',
      name: {
        'zh-CN': '未选中图标类名',
        'en-US': 'Customized unselected icon name'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>void-icon-class</code> 定义未选中图标类名。</p>\n',
        'en-US': '<p>You can use <code>void-icon-class</code> to define the unselected icon class name. </p>\n'
      },
      codeFiles: ['not-selected-class.vue']
    },
    {
      demoId: 'text-on-bottom',
      name: {
        'zh-CN': '图标下文字提示',
        'en-US': 'Text prompt under the icon'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>text-on-bottom</code> 定义是否在图标下显示文字提示。</p>\n',
        'en-US':
          '<p>You can use <code>text-on-bottom</code> to define whether to display text prompts under icons. </p>\n'
      },
      codeFiles: ['text-on-bottom.vue']
    },
    {
      demoId: 'allow-half',
      name: {
        'zh-CN': '半选',
        'en-US': 'Half Selection'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>allow-half</code> 定义是否支持半选。</p>\n',
        'en-US': '<p>You can use <code>allow-half</code> to define whether half selection is supported. </p>\n'
      },
      codeFiles: ['allow-half.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled</code> 定义是否禁用。</p>\n',
        'en-US': '<p>You can use <code>disabled</code> to define whether to disable the function. </p>\n'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'show-score',
      name: {
        'zh-CN': '分数显示',
        'en-US': 'Score Display'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>show-score score-template</code> 分别定义是否显示分数和显示的模板。</p>\n',
        'en-US':
          '<p>You can use <code>show-score score-template</code> to define whether to display scores and the display template. </p>\n'
      },
      codeFiles: ['show-score.vue']
    },
    {
      demoId: 'radio-rate',
      name: {
        'zh-CN': '单选模式',
        'en-US': 'Single Choice Mode'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>radio</code> 设置单选模式。</p>\n',
        'en-US': '<p>You can use <code>radio</code> to set the single-choice mode. </p>\n'
      },
      codeFiles: ['radio-rate.vue']
    },
    {
      demoId: 'max-score',
      name: {
        'zh-CN': '最大分值',
        'en-US': 'Maximum Score'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>max</code> 设置最大分值。</p>\n',
        'en-US': '<p>You can use <code>max</code> to set the maximum score. </p>\n'
      },
      codeFiles: ['max-score.vue']
    },
    {
      demoId: 'threshold-value',
      name: {
        'zh-CN': '界限值',
        'en-US': 'Boundaries'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>low-threshold high-threshold</code> 分别设置下限值和上限值，通过<code>colors</code>配置显示星的颜色。</p>',
        'en-US':
          '<p>You can set the lower limit and upper limit by using <code>low-threshold high-threshold</code>, and set the color of the displayed star by using <code>colors</p>\n'
      },
      codeFiles: ['threshold-value.vue']
    },
    {
      demoId: 'rate-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': '<p>监听 <code>change</code> 事件触发处理方法。</p>\n',
        'en-US': '<p>Listen to the <code>change</code> event triggering method. </p>\n'
      },
      codeFiles: ['rate-events.vue']
    }
  ]
}
