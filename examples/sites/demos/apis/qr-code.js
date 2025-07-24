export default {
  mode: ['pc'],
  apis: [
    {
      name: 'qr-code',
      type: 'component',
      props: [
        {
          name: 'bordered',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否有边框',
            'en-US': 'Whether has border style'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'color',
          type: 'string',
          defaultValue: "'#000'",
          desc: {
            'zh-CN': '二维码颜色, 仅支持十六进制',
            'en-US': 'QRCode Color'
          },
          mode: ['pc'],
          pcDemo: 'style'
        },
        {
          name: 'icon',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '二维码中图片的地址（目前只支持图片地址）',
            'en-US': 'include image url (only image link are supported)'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'icon-size',
          type: 'number',
          defaultValue: '50',
          desc: {
            'zh-CN': '二维码中图片的大小，icon 覆盖面积不能超过二维码面积的 30%， 否则影响扫码',
            'en-US': 'include image size，no more than 30%'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'level',
          type: 'string',
          defaultValue: "'Medium'",
          desc: {
            'zh-CN': "二维码纠错等级, 可选 'Low' | 'Medium' | 'Quality' | 'High'",
            'en-US': 'Error Code Level'
          },
          mode: ['pc'],
          pcDemo: 'level'
        },
        {
          name: 'size',
          type: 'number',
          defaultValue: '200',
          desc: {
            'zh-CN': '二维码大小',
            'en-US': 'QRCode size'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '扫描后的文本',
            'en-US': 'scanned text'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'change',
          type: '() => void',
          desc: {
            'zh-CN': '二维码发生变化后的回调',
            'en-US': 'chang callback'
          },
          mode: ['pc'],
          pcDemo: 'level'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
