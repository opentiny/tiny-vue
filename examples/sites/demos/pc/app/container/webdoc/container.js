export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基础用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
          组件接受<code>header</code>、<code> aside </code>、<code> footer </code>、<code> default </code> 四种插槽。<br>
          通过<code> pattern </code> 来设置预定好的组件版型,版型决定了插槽是否显示以及显示位置。<br>
        `,
        'en-US': `
          The component accepts <code>header</code>, <code>aside</code>, <code>footer</code>, and <code>default</code>. <br>
          The predefined component pattern is set by <code> pattern </code>. The pattern determines whether and where the slots are displayed. <br>
        `
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-with-height',
      'name': { 'zh-CN': '自定义宽度和高度', 'en-US': 'Custom width and height' },
      'desc': {
        'zh-CN': `
          通过 <code>headerHeight</code> 控制 <code>header（头部区域）</code>高度。<br>
          通过 <code>footerHeight</code> 控制 <code>footer（底部区域）</code>高度。<br>
          通过 <code>asideWidth</code> 控制 <code>aside(左侧区域)</code>高度。<br>
          而<code>default（主体区域）</code> 的宽度和高度是自适应的。
        `,
        'en-US': `
          The <code>header (header area) </code> height is controlled by <code>headerHeight</code>. <br>
          Control the height of <code>footer (bottom area) </code> by <code>footerHeight</code>. <br>
          Control the <code>aside(left area)</code> height using <code>asideWidth</code>. <br>
          The width and height of <code>main </code> are adaptive.
        `
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
          'name': 'pattern',
          'type': `'default' | 'simple' | 'legend' | 'classic' | 'fashion'`,
          'defaultValue': '"default"',
          'desc': {
            'zh-CN': '版型类型',
            'en-US': 'Measurement type'
          },
          'demoId': 'custom-container'
        },
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
