export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基础用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过<code> pattern </code> 来设置版型组件的布局。',
        'en-US': 'Set the layout of the template component with <code> pattern </code>.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-with-height',
      'name': { 'zh-CN': '自定义宽度和高度', 'en-US': 'Custom width and height' },
      'desc': {
        'zh-CN': `<p>
            Container 布局容器支持用户通过设置 <code>headerHeight</code>、<code>footerHeight</code>、<code>asideWidth</code> 等属性来控制 <code>header（头部区域）</code>、<code>footer（底部区域）</code> 的高度和 <code>aside(左侧区域)</code> 的宽度。<code>main（主体区域）</code> 的宽度和高度是自适应的。
          </p>`,
        'en-US': `<p>
            Container layout container allows users to control <code>header by setting attributes such as <code>headerHeight</code>, <code>footerHeight</code>, and <code>asideWidth</code> (Header area)</code>, <code>footer (bottom area)</code>, and <code>aside (left area)</code>. The width and height of <code>main (main area)</code> are adaptive. 
          </p>`
      },
      'codeFiles': ['custom-with-height.vue']
    }
  ],
  apis: [
    {
      'name': 'container',
      'type': 'component',
      'properties': [
        {
          'name': 'aside-width',
          'type': 'number | string',
          'defaultValue': '200',
          'desc': { 'zh-CN': '左侧宽度', 'en-US': 'Left width' },
          'demoId': 'custom-with-height'
        },
        {
          'name': 'footer-height',
          'type': 'number | string',
          'defaultValue': '60',
          'desc': { 'zh-CN': '底部高度', 'en-US': 'Height at the bottom' },
          'demoId': 'custom-with-height'
        },
        {
          'name': 'header-height',
          'type': 'number | string',
          'defaultValue': '60',
          'desc': { 'zh-CN': '头部高度', 'en-US': 'Head height' },
          'demoId': 'custom-with-height'
        },
        {
          'name': 'pattern',
          'type': 'string',
          'defaultValue': 'default',
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
          'desc': { 'zh-CN': '主要内容插槽', 'en-US': 'Main Content Slot' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'header',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '头部内容插槽', 'en-US': 'Header Content Slot' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'aside',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '侧边内容插槽', 'en-US': 'Side Content Slot' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部内容插槽', 'en-US': 'Bottom Content Slot' },
          'demoId': 'classic'
        }
      ]
    }
  ]
}
