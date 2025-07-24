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
          '\n          组件接受<code>header</code>、<code> aside </code>、<code> footer </code>、<code> default </code> 四种插槽。<br>\n          通过<code> pattern </code> 来设置预定好的组件版型，版型决定了插槽是否显示以及显示位置。<br>\n        ',
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
          '\n          通过 <code>headerHeight</code> 控制 header（头部区域）的高度。<br>\n          通过 <code>footerHeight</code> 控制 footer（底部区域）的高度。<br>\n          通过 <code>asideWidth</code> 控制 aside（左侧区域）的宽度。<br>\n          而 main（主体区域）的宽度和高度是自适应的。\n        ',
        'en-US':
          '\n          The header (header area) height is controlled by <code>headerHeight</code>. <br>\n          Control the height of footer (bottom area) by <code>footerHeight</code>. <br>\n          Control the aside(left area) width using <code>asideWidth</code>. <br>\n          The width and height of <code>main </code> are adaptive.\n        '
      },
      codeFiles: ['custom-with-height.vue']
    }
  ]
}
