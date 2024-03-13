export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['base.jsx']
    },
    {
      'demoId': 'type',
      'name': {
        'zh-CN': '类型',
        'en-US': 'Type'
      },
      'desc': {
        'zh-CN':
          '<p>通过 <code>type</code> 设置不同的类型。可选值：success、warning、info、error，默认值：success 。</p>\n',
        'en-US':
          '<p>Set different types through <code>type</code>. The options are success, warning, info, and error. The default value is success. </p>\n'
      },
      'codeFiles': ['type.jsx']
    },
    {
      'demoId': 'size',
      'name': {
        'zh-CN': '大尺寸',
        'en-US': 'Large Size'
      },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性设置不同的尺寸，可选值：nomal、large，默认值：nomal 。</p>\n',
        'en-US':
          '<p>Set different sizes through the <code>size</code> attribute. The options are nomal and large. The default value is nomal. </p>\n'
      },
      'codeFiles': ['size.jsx']
    },
    {
      'demoId': 'title',
      'name': {
        'zh-CN': '自定义标题',
        'en-US': 'Custom Title'
      },
      'desc': {
        'zh-CN':
          '<p>当 <code>size</code> 为 large 时显示标题，可设置 <code>title</code> 或 <code>slot</code> 自定义标题。默认标题根据设置的 <code>type</code> 显示。</p>\n',
        'en-US':
          '<p>When <code>size</code> is set to large, the title is displayed. You can set <code>title</code> or <code>slot</code> to customize the title. The default title is displayed according to the set <code>type</code>. </p>\n'
      },
      'codeFiles': ['title.jsx']
    },
    {
      'demoId': 'center',
      'name': {
        'zh-CN': '文字居中',
        'en-US': 'Center text'
      },
      'desc': {
        'zh-CN': '<p>通过 <code>center</code> 属性可使文字显示居中。</p>\n',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>\n'
      },
      'codeFiles': ['center.jsx']
    }
  ]
}
