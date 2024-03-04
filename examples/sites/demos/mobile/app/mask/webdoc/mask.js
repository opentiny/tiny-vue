export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本使用',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>通过 <code>v-model:visible</code> 属性设置显示与隐藏遮罩层；<code>click</code> 监听点击事件。</p>',
        'en-US': '<p>double-line</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'cancel-touch',
      name: {
        'zh-CN': '点击遮罩层不隐藏',
        'en-US': 'No hide after clicking'
      },
      desc: {
        'zh-CN': '<p>通过 <code>cancel-touch</code> 属性设置点击遮罩层后组件不隐藏</p>',
        'en-US':
          '<p>"By setting the <code>cancel-touch</code> attribute, the component will not be hidden when clicking on the mask layer.</p>'
      },
      codeFiles: ['click-no-hide.vue']
    },
    {
      demoId: 'z-index',
      name: {
        'zh-CN': '层叠数值',
        'en-US': 'z-index'
      },
      desc: {
        'zh-CN': '<p>通过 <code>z-index</code> 属性设置层叠数值。</p>',
        'en-US': '<p>"Use the <code>z-index</code> attribute to set z-index of CSS property.</p>'
      },
      codeFiles: ['z-index.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'Default slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default</code> 默认插槽自定义嵌入内容。</p>',
        'en-US':
          '<p>"By setting the <code>cancel-touch</code> attribute, the component will not be hidden when clicking on the mask layer.</p>'
      },
      codeFiles: ['slot-default.vue']
    }
  ]
}
