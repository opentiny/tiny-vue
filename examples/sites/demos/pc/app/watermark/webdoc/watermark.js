export default {
  column: '2',
  owner: '',
  metaData: {
    stable: '3.12.0'
  },
  versionTipOption: {
    stages: ['stable']
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
          '<p>通过 <code>content</code> 属性设置水印的文字。</br>通过 <code>font</code> 属性设置水印的样式</p>。',
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
  ]
}
