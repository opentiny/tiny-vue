export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'tiny-first-menu-grid-optimization',
      'name': { 'zh-CN': '优化配置项', 'en-US': 'Optimized Configuration Items' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">optimization(object) 配置说明</p>\n<p>| animat(boolean) | 表格动画效果开关（关闭后视觉效果更快）默认为 true |\n| delayHover(number) | 当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件 默认 250ms |\n| scrollX(object) | 横向 X 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 100 } |\n| scrollY(object) | 纵向 Y 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 500 } |</p>\n</div>\n<p></p>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">optimization(object) Configuration Description </p>\n<p>| animat(boolean) | Table animation effect switch. The default value is true. |\n| delayHover(number) | When the table is dragged or scrolled, Minimum milliseconds after which the hover event can be triggered. The default value is 250 ms. |\n| scrollX(object) | Horizontal X virtual scrolling configuration (for manual optimization in special scenarios). Example: {gt: 100} |\n| scrollY(object) | Vertical Y virtual scrolling configuration (for manual optimization in special scenarios) Example: {gt: 500} |</p>\n</div>\n<p></p>\n'
      },
      'codeFiles': ['tiny-first-menu/grid-optimization.vue']
    }
  ],
  apis: [{ 'name': 'grid-grid-optimization', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
