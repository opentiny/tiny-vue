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
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 value 设置二维码内容，size 设置二维码大小。',
      cloud: {
        value: false
      },
      apis: ['value', 'size'],
      demos: ['basic-usage']
    },
    {
      id: 'logo',
      name: 'Logo',
      support: {
        value: true
      },
      description: '通过 logo 设置二维码中心图片，logo-size 设置 logo 大小。',
      cloud: {
        value: false
      },
      apis: ['logo', 'logo-size'],
      demos: ['logo']
    },
    {
      id: 'color',
      name: '颜色配置',
      support: {
        value: true
      },
      description: '通过 foreground 设置前景色，background 设置背景色。',
      cloud: {
        value: false
      },
      apis: ['foreground', 'background'],
      demos: ['custom-color']
    },
    {
      id: 'level',
      name: '纠错级别',
      support: {
        value: true
      },
      description: '通过 level 设置纠错级别，可选值：L、M、Q、H。',
      cloud: {
        value: false
      },
      apis: ['level'],
      demos: ['error-level']
    },
    {
      id: 'download',
      name: '下载',
      support: {
        value: true
      },
      description: '通过 download 设置是否可下载，filename 设置下载文件名。',
      cloud: {
        value: false
      },
      apis: ['download', 'filename'],
      demos: ['download']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 click、error 等事件。',
      cloud: {
        value: false
      },
      apis: ['click', 'error'],
      demos: ['events']
    }
  ]
}
