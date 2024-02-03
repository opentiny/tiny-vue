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
      'demoId': 'basic',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>content</code> 属性设置水印的文字。</br>通过 <code>font</code> 属性设置水印的样式</p>。',
        'en-US':
          'Set the text of the watermark through the <code>content</code> attribute.</br> Set the style of the watermark through the <code>font</code> attribute. '
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'image',
      'name': { 'zh-CN': '图片水印', 'en-US': 'Basic Usage Image' },
      'desc': {
        'zh-CN': '<p>通过 <code>image</code> 属性设置水印的图片。</p>',
        'en-US': 'Set the watermark image through the <code>image</code> property. '
      },
      'codeFiles': ['image.vue']
    }
  ],
  apis: [
    {
      'name': 'watermark',
      'type': 'component',
      'props': [
        {
          'name': 'width',
          'type': 'number',
          'defaultValue': '120',
          'desc': {
            'zh-CN': '水印的宽度, 最小宽度120px',
            'en-US': 'The width of the watermark, minimum width 120'
          },
          'demoId': 'basic'
        },
        {
          'name': 'height',
          'type': 'number',
          'defaultValue': '64',
          'desc': {
            'zh-CN': '水印的高度, 最小高度64px',
            'en-US': 'The height of the watermark, minimum height 120'
          },
          'demoId': 'basic'
        },
        {
          'name': 'rotate',
          'type': 'number',
          'defaultValue': '-22',
          'desc': {
            'zh-CN': '水印绘制时，旋转的角度，单位 °',
            'en-US': 'When the watermark is drawn, the rotation Angle, unit ° '
          },
          'demoId': 'basic'
        },
        {
          'name': 'zIndex',
          'type': 'number',
          'defaultValue': '9',
          'desc': {
            'zh-CN': "追加的水印元素的 'z-index' ",
            'en-US': 'The z-index of the appended watermark element'
          },
          'demoId': 'basic'
        },
        {
          'name': 'image',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '图片源，建议导出 2 倍或 3 倍图，优先级高（支持 base64 格式），此属性高于 content ',
            'en-US': 'Image source, it is recommended to export 2x or 3x image, high priority, higher content'
          },
          'demoId': 'image'
        },
        {
          'name': 'content',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '水印文字内容，此属性低于 image',
            'en-US': 'Watermark text content, lower image'
          },
          'demoId': 'basic'
        },
        {
          'name': 'font',
          'type': 'Font',
          'defaultValue': '',
          'typeAnchorName': 'Font',
          'desc': {
            'zh-CN': `水印文字样式`,
            'en-US': 'Text style'
          },
          'demoId': 'basic'
        },
        {
          'name': 'gap',
          'type': 'array',
          'defaultValue': '[100, 100]',
          'desc': {
            'zh-CN': '水印之间的间距',
            'en-US': 'The spacing between watermarks'
          },
          'demoId': 'basic'
        },
        {
          'name': 'offset',
          'type': 'array',
          'defaultValue': '[20, 20] ',
          'desc': {
            'zh-CN': '水印距离容器左上角的偏移量',
            'en-US': 'The offset of the watermark from the upper left corner of the container. '
          },
          'demoId': 'basic'
        },
        {
          'name': 'interlaced',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '水印是否交错',
            'en-US': 'Whether the watermark is interlaced'
          },
          'demoId': 'basic'
        }
      ],
      'events': [],
      'slots': []
    }
  ],
  types: [
    {
      name: 'Font',
      type: 'type',
      code: `type Font = { 
        color:string,
        fontSize:number,
        fontWeight:string,
        fontFamily:string,
        fontStyle:string
       }`
    }
  ]
}
