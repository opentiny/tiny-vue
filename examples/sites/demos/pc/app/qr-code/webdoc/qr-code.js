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
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 <code>value</code> 设置二维码的内容， <code>size</code> 设置二维码的大小。',
        'en-US': 'Set the content of the QR code<code>value</code> , and <code>type</code> Set the size of the QR code.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'style',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'style' },
      'desc': {
        'zh-CN': '<p>通过 <code>style</code> 设置二维码样式。</p>',
        'en-US': '<p> <code>style</code>, see QR code style</p>'
      },
      'codeFiles': ['style.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '自定义 icon ', 'en-US': 'icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>icon</code> 设置二维码图标。</p>',
        'en-US': '<p> <code>icon</code>, see QR code icon</p>'
      },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'level',
      'name': { 'zh-CN': '二维码纠错等级', 'en-US': 'Error Code Level' },
      'desc': {
        'zh-CN': '<p>通过 <code>level</code> 设置二维码纠错等级。</p>',
        'en-US': '<p> <code>level</code> , see QR code error correction level</p>'
      },
      'codeFiles': ['level.vue']
    }
  ],
  apis: [
    {
      'name': 'qr-code',
      'type': 'component',
      'props': [
        {
          'name': 'value',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '扫描后的文本',
            'en-US': 'scanned text'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'size',
          'type': 'number',
          'defaultValue': '200',
          'desc': {
            'zh-CN': '二维码大小',
            'en-US': 'QRCode size'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'color',
          'type': 'string',
          'defaultValue': "'#000'",
          'desc': {
            'zh-CN': '二维码颜色, 仅支持十六进制',
            'en-US': 'QRCode Color'
          },
          'demoId': 'style'
        },
        {
          'name': 'bordered',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否有边框',
            'en-US': 'Whether has border style'
          },
          'demoId': ''
        },
        {
          'name': 'icon',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '二维码中图片的地址（目前只支持图片地址）',
            'en-US': 'include image url (only image link are supported)'
          },
          'demoId': 'icon'
        },
        {
          'name': 'icon-size',
          'type': 'number',
          'defaultValue': '50',
          'desc': {
            'zh-CN': '二维码中图片的大小，icon 覆盖面积不能超过二维码面积的 30%， 否则影响扫码',
            'en-US': 'include image size，no more than 30%'
          },
          'demoId': 'icon'
        },
        {
          'name': 'level',
          'type': 'string',
          'defaultValue': "'Medium'",
          'desc': {
            'zh-CN': "二维码纠错等级, 可选 'Low' | 'Medium' | 'Quality' | 'High'",
            'en-US': 'Error Code Level'
          },
          'demoId': 'level'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '()=> void',
          'desc': {
            'zh-CN': '二维码发生变化后的回调',
            'en-US': 'chang callback'
          },
          'demoId': 'level'
        }
      ],
      'slots': []
    }
  ]
}
