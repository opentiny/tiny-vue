export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'style',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'style' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example' },
      'codeFiles': ['style.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '自定义icon', 'en-US': 'icon' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example' },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'level',
      'name': { 'zh-CN': '二维码纠错等级', 'en-US': 'Error Code Level' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example' },
      'codeFiles': ['level.vue']
    }
  ],
  apis: [
    {
      'name': 'qr-code',
      'type': 'component',
      'properties': [
        {
          'name': 'value',
          'type': 'String',
          'desc': {
            'zh-CN': '扫描后的文本',
            'en-US': 'scanned text'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'size',
          'type': 'Number',
          'defaultValue': '200',
          'desc': {
            'zh-CN': '二维码大小',
            'en-US': 'QRCode size'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'color',
          'type': 'String',
          'defaultValue': '#000',
          'desc': {
            'zh-CN': '二维码颜色, 仅支持十六进制',
            'en-US': 'QRCode Color'
          },
          'demoId': 'style'
        },
        {
          'name': 'bordered',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否有边框',
            'en-US': 'Whether has border style'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'icon',
          'type': 'String',
          'desc': {
            'zh-CN': '二维码中图片的地址（目前只支持图片地址）',
            'en-US': 'include image url (only image link are supported)'
          },
          'demoId': 'icon'
        },
        {
          'name': 'iconSize',
          'type': 'Number',
          'defaultValue': '50',
          'desc': {
            'zh-CN': '二维码中图片的大小，icon 覆盖面积不能超过 30%， 否则影响扫码',
            'en-US': 'include image size，no more than 30%'
          },
          'demoId': 'icon'
        },
        {
          'name': 'level',
          'type': "'Low' | 'Medium' | 'Quality' | 'High'",
          'defaultValue': 'Medium',
          'desc': {
            'zh-CN': '二维码纠错等级',
            'en-US': 'Error Code Level'
          },
          'demoId': 'level'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'function',
          'desc': {
            'zh-CN': '二维码变化回调',
            'en-US': 'chang callback'
          },
          'demoId': 'level'
        }
      ],
      'slots': []
    }
  ]
}
