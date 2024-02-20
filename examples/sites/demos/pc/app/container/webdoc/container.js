export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '\n          组件接受<code>header</code>、<code> aside </code>、<code> footer </code>、<code> default </code> 四种插槽。<br>\n          通过<code> pattern </code> 来设置预定好的组件版型,版型决定了插槽是否显示以及显示位置。<br>\n        ',
        'en-US':
          '\n          The component accepts <code>header</code>, <code>aside</code>, <code>footer</code>, and <code>default</code>. <br>\n          The predefined component pattern is set by <code> pattern </code>. The pattern determines whether and where the slots are displayed. <br>\n        '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-with-height',
      name: {
        'zh-CN': '自定义宽度和高度',
        'en-US': 'Custom width and height'
      },
      desc: {
        'zh-CN':
          '\n          通过 <code>headerHeight</code> 控制 <code>header（头部区域）</code>高度。<br>\n          通过 <code>footerHeight</code> 控制 <code>footer（底部区域）</code>高度。<br>\n          通过 <code>asideWidth</code> 控制 <code>aside(左侧区域)</code>高度。<br>\n          而<code>default（主体区域）</code> 的宽度和高度是自适应的。\n        ',
        'en-US':
          '\n          The <code>header (header area) </code> height is controlled by <code>headerHeight</code>. <br>\n          Control the height of <code>footer (bottom area) </code> by <code>footerHeight</code>. <br>\n          Control the <code>aside(left area)</code> height using <code>asideWidth</code>. <br>\n          The width and height of <code>main </code> are adaptive.\n        '
      },
      codeFiles: ['custom-with-height.vue']
    }
  ]
}
