export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过引用组件标签即可。',
        'en-US': 'You can refer to component label.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'direction',
      name: {
        'zh-CN': '垂直分隔线',
        'en-US': 'Vertical divider line'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>vertical</code>属性为<code>true</code>可以设置分隔线的方向。</p>',
        'en-US':
          '<p>You can set the direction of the divider by setting the <code>vertical</code> property to <code>true</code>.</p>'
      },
      codeFiles: ['direction.vue']
    },
    {
      demoId: 'content-position',
      name: {
        'zh-CN': '分隔线文案的位置',
        'en-US': 'The position of the separator copy'
      },
      desc: {
        'zh-CN': '通过<code>text-position</code> 属性设置分隔线文案的位置，<code>offset</code>属性设置左右偏移量。',
        'en-US':
          'The <code>text-position</code> attribute is used to set the position of the partition line copywriting, and the <code>offset</code> attribute is used to set the left and right offsets.'
      },
      codeFiles: ['content-position.vue']
    },
    {
      demoId: 'custom-style',
      name: {
        'zh-CN': '自定义分隔线样式',
        'en-US': 'Custom divider style'
      },
      desc: {
        'zh-CN':
          '通过<code>line-color</code>属性设置分割线颜色，<code>content-background-color</code>属性设置文案背景颜色，<code>content-color</code>属性设置文字颜色，<code>height</code>属性设置分割线整体内容高度，<code>margin</code>属性设置外边距值。',
        'en-US':
          'The <code>line-color</code> attribute sets the color of the split line, the <code>content-background-color</code> attribute sets the background color of the copywriting, the <code>content-color</code> attribute sets the text color, and the <code>height</code> Property Sets the overall content height of the split line. The <code>margin</code> property sets the outer margin value.'
      },
      codeFiles: ['custom-style.vue']
    },
    {
      demoId: 'divider-type',
      name: {
        'zh-CN': '分隔线类型',
        'en-US': 'Separator Line Type'
      },
      desc: {
        'zh-CN':
          '通过<code>type</code>设置分割线显示类型，默认值为<code>solid</code>，可选值为<code>dashed</code><code>dotted</code>。',
        'en-US':
          'Set the display type of the split line through <code>type</code>. The default value is <code>solid</code>. The options are <code>dashed</code><code>dotted</code>.'
      },
      codeFiles: ['divider-type.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '分隔线状态',
        'en-US': 'Separator Status'
      },
      desc: {
        'zh-CN': '通过<code>status</code>属性设置分割线显示状态颜色。',
        'en-US': 'Use the <code>status</code> attribute to set the color of the display status of the splitter line.'
      },
      codeFiles: ['status.vue']
    }
  ],
  features: [
    {
      id: 'vertical',
      name: '垂直分隔线',
      support: {
        value: true
      },
      description: '通过设置 vertical 属性为 true 可以设置分隔线的方向。',
      cloud: {
        value: true
      },
      apis: ['vertical'],
      demos: ['direction']
    },
    {
      id: 'text-position',
      name: '分隔线文案位置',
      support: {
        value: true
      },
      description: '通过 text-position 属性设置分隔线文案的位置，offset 属性设置左右偏移量。',
      cloud: {
        value: true
      },
      apis: ['text-position', 'offset'],
      demos: ['content-position']
    },
    {
      id: 'custom-style',
      name: '自定义样式',
      support: {
        value: true
      },
      description: '通过 line-color、content-background-color、content-color、height、margin 等属性自定义分隔线样式。',
      cloud: {
        value: true
      },
      apis: ['line-color', 'content-background-color', 'content-color', 'height', 'margin'],
      demos: ['custom-style']
    },
    {
      id: 'type',
      name: '分隔线类型',
      support: {
        value: true
      },
      description: '通过 type 设置分割线显示类型，可选值为 solid、dashed、dotted。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['divider-type']
    },
    {
      id: 'status',
      name: '分隔线状态',
      support: {
        value: true
      },
      description: '通过 status 属性设置分割线显示状态颜色。',
      cloud: {
        value: true
      },
      apis: ['status'],
      demos: ['status']
    }
  ]
}
