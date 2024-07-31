export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'fluent-editor',
      type: 'component',
      props: [
        {
          name: 'data-type',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '初始化的富文本数据格式是否为 Delta 格式，默认为 Delta 格式，设置成 false，则为 HTML 格式',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'data-switch'
        },
        {
          name: 'data-upgrade',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '富文本数据输出格式是否为 Delta 格式，默认为 Delta 格式，设置成 false，则为 HTML 格式',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'data-switch'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为不可编辑状态',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled'
        },
        {
          name: 'image-upload',
          typeAnchorName: 'IImageUploadOptions',
          type: 'IImageUploadOptions',
          defaultValue: '',
          desc: {
            'zh-CN': '图片上传模块配置项',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'image-upload'
        },
        {
          name: 'modelValue / v-model',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'options',
          type: 'object',
          defaultValue: "",
          desc: {
            'zh-CN': '编辑器配置项，参考 <a href="https://quilljs.com/docs/configuration#options" target="_blank">Quill</a> 文档',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'options'
        },
        {
          name: 'zIndex',
          type: 'number',
          defaultValue: "",
          desc: {
            'zh-CN': '编辑器的 z-index',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IImageUploadOptions',
      type: 'interface',
      code: `
interface IImageUploadOptions {
  url: string, // 图片上传地址
  method: string, // 上传方法
  name: string, // 图片名称
  withCredentials: boolean, // 是否需要认证，开启后会在请求里带上 cookie 信息
  headers: object, // 上传请求头部信息
  csrf: string, // 请求 csrf 携带信息
  success: (serverResponse: { file: { downloadUrl: string } }[], next: (imageUrl: string) => void) => void, // 上传成功回调信息
  fail: (serverError: string) => void // 上传失败回调信息
}
      `
    },
  ]
}
