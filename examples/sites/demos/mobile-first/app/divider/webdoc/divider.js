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
        'zh-CN': '带文本的分割线',
        'en-US': 'Splitting line with text'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'divider-margin',
      name: {
        'zh-CN': '边距用法',
        'en-US': 'Margin Usage'
      },
      desc: {
        'zh-CN': '通过<code>margin</code>属性可以设置分割线上下左右的边距。',
        'en-US': 'You can use the <code>margin</code> attribute to set the margins of the split line.'
      },
      codeFiles: ['divider-margin.vue']
    },
    {
      demoId: 'color',
      name: {
        'zh-CN': '颜色用法',
        'en-US': 'Color Usage'
      },
      desc: {
        'zh-CN': '通过<code>color</code>属性可以自定义分割线颜色。',
        'en-US': 'You can use the <code>color</code> attribute to customize the color of the split line.'
      },
      codeFiles: ['color.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '偏移量用法',
        'en-US': 'Offset Usage'
      },
      desc: {
        'zh-CN':
          '通过<code>offset</code>属性可以设置文本位置偏移量，需同时配合<code>content-position</code>属性使用，以确定偏移的方向。',
        'en-US':
          '<code>offset</code> can be used to set the text position offset. It must be used together with the <code>content-position</code> attribute to determine the offset direction.'
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '分割线类型',
        'en-US': 'Type Usage'
      },
      desc: {
        'zh-CN':
          '通过<code>border-style</code>属性可以设置分割线类型，可选值有<code>solid</code><code>dashed</code><code>dotted</code>，默认为<code>solid</code>。',
        'en-US':
          'You can set the split line type through the <code>border-style</code> attribute. The options are <code>solid</code><code>dashed</code><code>dotted</code>. The default value is <code>solid</code>.'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'content-position',
      name: {
        'zh-CN': '文本位置用法',
        'en-US': 'Text Position'
      },
      desc: {
        'zh-CN':
          '通过<code>content-position</code>属性可以设置分割线文本位置，可选值有<code>center</code><code>left</code><code>right</code>三种，默认为<code>center</code>。',
        'en-US':
          'You can use the <code>content-position</code> attribute to set the text position of the split line. The options are as follows: <code>center</code><code>left</code><code>right</code>. The default value is <code>center</code>.'
      },
      codeFiles: ['content-position.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '状态',
        'en-US': 'Status'
      },
      desc: {
        'zh-CN':
          '通过<code>status</code>属性可以设置分割线状态，可选值有<code>default</code><code>success</code><code>warning</code><code>error</code><code>info</code>五种状态。',
        'en-US':
          'You can use the <code>status</code> attribute to set the split line status. The options are <code>default</code><code>success</code><code>warning</code><code>error</code><code>info</code>.'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直方向',
        'en-US': 'Vertical direction'
      },
      desc: {
        'zh-CN': '通过<code>direction</code>属性设置为<code>vertical</code>，垂直分割线，不支持默认插槽。',
        'en-US':
          'Set the <code>direction</code> attribute to <code>vertical</code>, which indicates a vertical split line. The default slot is not supported.'
      },
      codeFiles: ['vertical.vue']
    }
  ]
}
