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
        'zh-CN': '通过引用组件标签即可。',
        'en-US': 'You can refer to component label.'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'direction',
      name: {
        'zh-CN': '垂直分隔线',
        'en-US': 'Vertical divider line'
      },
      desc: {
        'zh-CN': '<p>通过 <code>direction</code> 属性可以设置分隔线的方向。</p>',
        'en-US': '<p>The direction of the separator line can be set through the<code>direction</code>attribute.</p>'
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
        'zh-CN': '<p>通过 <code>content-position</code> 属性 可以设置分隔线文案的位置。</p>',
        'en-US':
          '<p>The position of the separator text can be set through the<code>content position</code>attribute.</p>'
      },
      codeFiles: ['contentPosition.vue']
    },
    {
      demoId: 'custom-style',
      name: {
        'zh-CN': '自定义分隔线样式',
        'en-US': 'Custom divider style'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>color</code><code>border-style</code><code>content-color</code>属性，自定义分割线样式。</p>',
        'en-US':
          '<p>Customize the split line style through the<code>color</code><code>border style</code><code>content color</code>attribute.</p>'
      },
      codeFiles: ['customStyle.vue']
    }
  ]
}
