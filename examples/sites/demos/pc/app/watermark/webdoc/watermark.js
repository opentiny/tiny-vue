export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example ' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'image',
      'name': { 'zh-CN': '图片水印', 'en-US': 'Basic Usage Image' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example ' },
      'codeFiles': ['image.vue']
    }
  ],
  apis: [
    {
      'name': 'watermark',
      'type': 'component',
      'properties': [
        {
          'name': 'width',
          'type': 'Number',
          'defaultValue': '120',
          'desc': {
            'zh-CN': '水印的宽度, 最小宽度120',
            'en-US': 'The width of the watermark, minimum width 120'
          },
          'demoId': 'basic'
        },
        {
          'name': 'height',
          'type': 'Number',
          'defaultValue': '64',
          'desc': {
            'zh-CN': '水印的高度, 最小高度64',
            'en-US': 'The height of the watermark, minimum height 120'
          },
          'demoId': 'basic'
        },
        {
          'name': 'rotate',
          'type': 'Number',
          'defaultValue': '-22',
          'desc': {
            'zh-CN': '水印绘制时，旋转的角度，单位 °',
            'en-US': 'When the watermark is drawn, the rotation Angle, unit ° '
          },
          'demoId': 'basic'
        },
        {
          'name': 'zIndex',
          'type': 'Number',
          'defaultValue': '9',
          'desc': {
            'zh-CN': '追加的水印元素的 `z-index `',
            'en-US': 'The z-index of the appended watermark element'
          },
          'demoId': 'basic'
        },
        {
          'name': 'image',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式),此属性高于content',
            'en-US': 'Image source, it is recommended to export 2x or 3x image, high priority, higher content'
          },
          'demoId': 'image'
        },
        {
          'name': 'content',
          'type': 'String | String[]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '水印文字内容，此属性低于image',
            'en-US': 'Watermark text content, lower image'
          },
          'demoId': 'basic'
        },
        {
          'name': 'font',
          'type': 'Font',
          'defaultValue': '',
          'desc': {
            'zh-CN': `文字样式,可配置字段如下{
              color:'rgba(0,0,0,.15)',
              fontSize:'16',
              "fontWeight":'normal',
              "fontFamily":'sans-serif',
              "fontStyle":'normal'
            }`,
            'en-US': 'Text style'
          },
          'demoId': 'basic'
        },
        {
          'name': 'gap',
          'type': '[Number, Number] ',
          'defaultValue': '[100, 100]',
          'desc': {
            'zh-CN': '水印之间的间距',
            'en-US': 'The spacing between watermarks'
          },
          'demoId': 'basic'
        },
        {
          'name': 'offset',
          'type': '[Number, Number] ',
          'defaultValue': '[20, 20] ',
          'desc': {
            'zh-CN': '水印距离容器左上角的偏移量，默认为`20 `',
            'en-US': 'The offset of the watermark from the upper left corner of the container. '
          },
          'demoId': 'basic'
        },
        {
          'name': 'interlaced',
          'type': 'Boolean',
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
  ]
}
