export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  meta: {
    stable: '3.12.0'
  },
  demos: [
    {
      demoId: 'basic',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>content</code> 属性设置水印的文字。</br>通过 <code>font</code> 属性设置水印的样式。</p>',
        'en-US':
          'Set the text of the watermark through the <code>content</code> attribute.</br> Set the style of the watermark through the <code>font</code> attribute. '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'image',
      name: {
        'zh-CN': '图片水印',
        'en-US': 'Basic Usage Image'
      },
      desc: {
        'zh-CN': '<p>通过 <code>image</code> 属性设置水印的图片。</p>',
        'en-US': 'Set the watermark image through the <code>image</code> property. '
      },
      codeFiles: ['image.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 content 设置水印文字，font 设置水印样式。',
      cloud: {
        value: false
      },
      apis: ['content', 'font'],
      demos: ['basic']
    },
    {
      id: 'image',
      name: '图片水印',
      support: {
        value: true
      },
      description: '通过 image 属性设置水印图片。',
      cloud: {
        value: false
      },
      apis: ['image'],
      demos: ['image']
    }
  ]
}
