export default {
  column: '2',
  owner: '',
  meta: {
    stable: '3.12.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过 <code>value</code> 设置二维码的内容， <code>size</code> 设置二维码的大小。',
        'en-US': 'Set the content of the QR code<code>value</code> , and <code>type</code> Set the size of the QR code.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'style',
      name: {
        'zh-CN': '自定义样式',
        'en-US': 'style'
      },
      desc: {
        'zh-CN': '<p>通过 <code>style</code> 设置二维码样式。</p>',
        'en-US': '<p> <code>style</code>, see QR code style</p>'
      },
      codeFiles: ['style.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义 icon ',
        'en-US': 'icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon</code> 设置二维码图标。</p>',
        'en-US': '<p> <code>icon</code>, see QR code icon</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'level',
      name: {
        'zh-CN': '二维码纠错等级',
        'en-US': 'Error Code Level'
      },
      desc: {
        'zh-CN': '<p>通过 <code>level</code> 设置二维码纠错等级。</p>',
        'en-US': '<p> <code>level</code> , see QR code error correction level</p>'
      },
      codeFiles: ['level.vue']
    }
  ]
}
