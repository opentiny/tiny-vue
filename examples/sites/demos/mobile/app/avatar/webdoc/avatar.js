export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'avatar-size',
      name: {
        'zh-CN': '设置头像大小',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN':
          '<p><code>size</code>可设置为<code>large,medium,small</code>,如果不能满足需要，可以设置<code>size</code>为<code>number</code>类型自定义大小</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['avatar-size.vue']
    },
    {
      demoId: 'avatar-src-set',
      name: {
        'zh-CN': '设置头像',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN':
          '<p>\n        <code>src</code>设置<code>img</code>的展示源，<code>img</code>原生属性<br>\n        <code>srcSet</code>设置<code>img</code>在不同情况下的图片源的集合，<code>img</code>原生属性<br>\n        <code>icon</code>设置图标头像<br>\n        <code>fit</code>设置填充样式,默认为<code>cover</code>可选<code>fill，contain，cover，none，scale-down</code><br>\n        <code>error</code>设置<code>img</code>标签的<code>onerror</code>函数<br>\n        <code>shape</code>设置形状,默认为<code>circle可选circle,square</code>\n          </p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['avatar-src-set.vue']
    }
  ]
}
