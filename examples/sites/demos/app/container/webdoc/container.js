export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '默认布局', 'en-US': 'Default Layout' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'simple',
      'name': { 'zh-CN': '简约布局', 'en-US': 'Simple Layout' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['simple.vue']
    },
    {
      'demoId': 'classic',
      'name': { 'zh-CN': '经典布局', 'en-US': 'Classic Layout' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['classic.vue']
    },
    {
      'demoId': 'fashionid',
      'name': { 'zh-CN': '时尚布局', 'en-US': 'Fashion Layout' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['fashion.vue']
    },
    {
      'demoId': 'legend',
      'name': { 'zh-CN': '传奇布局', 'en-US': 'Legendary Layout' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['legend.vue']
    },
    {
      'demoId': 'custom-with-height',
      'name': { 'zh-CN': '自定义宽度和高度', 'en-US': 'Custom width and height' },
      'desc': {
        'zh-CN':
          '<p>Container 布局容器支持用户通过设置 <code>headerHeight</code>、<code>footerHeight</code>、<code>asideWidth</code> 等属性来控制 <code>header（头部区域）</code>、<code>footer（底部区域）</code> 的高度和 <code>aside(左侧区域)</code> 的宽度。<code>main（主体区域）</code> 的宽度和高度是自适应的。</p>\n',
        'en-US':
          '<p>Container layout container allows users to control <code>header by setting attributes such as <code>headerHeight</code>, <code>footerHeight</code>, and <code>asideWidth</code> (Header area)</code>, <code>footer (bottom area)</code>, and <code>aside (left area)</code>. The width and height of <code>main (main area)</code> are adaptive. </p>\n'
      },
      'codeFiles': ['custom-with-height.vue']
    },
    {
      'demoId': 'custom-container',
      'name': { 'zh-CN': '版型切换', 'en-US': 'Switch' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['custom-container.vue']
    }
  ],
  apis: [
    {
      'name': 'container',
      'type': 'component',
      'properties': [
        {
          'name': 'aside-width',
          'type': 'Number , String',
          'defaultValue': '该属性的默认值为 200',
          'desc': { 'zh-CN': '左侧宽度', 'en-US': 'Left width' },
          'demoId': 'custom-with-height'
        },
        {
          'name': 'footer-height',
          'type': 'Number , String',
          'defaultValue': '该属性的默认值为 60',
          'desc': { 'zh-CN': '底部高度', 'en-US': 'Height at the bottom' },
          'demoId': 'custom-with-height'
        },
        {
          'name': 'header-height',
          'type': 'Number , String',
          'defaultValue': '该属性的默认值为 60',
          'desc': { 'zh-CN': '头部高度', 'en-US': 'Head height' },
          'demoId': 'custom-with-height'
        },
        {
          'name': 'pattern',
          'type': 'String',
          'defaultValue': '该属性的默认值为 default',
          'desc': {
            'zh-CN': '版型类型;该属性的可选值为 default / simple / legend / classic / fashion',
            'en-US':
              'Measurement type; The optional values of this attribute are default / simple / legend / classic / fashion'
          },
          'demoId': 'custom-container'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '主要内容', 'en-US': 'Main Content' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'header',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '头部内容', 'en-US': 'Header Content' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'aside',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '侧边内容', 'en-US': 'Side Content' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部内容', 'en-US': 'Bottom Content' },
          'demoId': 'classic'
        }
      ]
    }
  ]
}
