## fluent-editor

### Props

| 属性名               | 类型                   | 默认值 | 说明                                                                                                         |
| -------------------- | ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| before-editor-init   | (FluentEditor) => void |        | FluentEditor 初始化之前执行的钩子，用于注册自定义 FluentEditor 模块和格式。                                  |
| before-link-open     | IBeforeLinkOpen        |        | 点击富文本中的超链接前触发。返回 false（或 Promise resolve false）可拦截跳转；返回 true/undefined 继续跳转。 |
| data-type            | boolean                | true   | 初始化的富文本数据格式是否为 Delta 格式，默认为 Delta 格式，设置成 false，则为 HTML 格式                     |
| data-upgrade         | boolean                | true   | 富文本数据输出格式是否为 Delta 格式，默认为 Delta 格式，设置成 false，则为 HTML 格式                         |
| disabled             | boolean                | false  | 是否为不可编辑状态                                                                                           |
| image-upload         | IImageUploadOptions    |        | 图片上传模块配置项                                                                                           |
| modelValue / v-model | string                 | ''     | 绑定值                                                                                                       |
| options              | object                 |        | 编辑器配置项，参考 Quill 文档：https://quilljs.com/docs/configuration#options                                |
| zIndex               | number                 |        | 编辑器的 z-index                                                                                             |

## Types

### IBeforeLinkOpen

```typescript
type IBeforeLinkOpen = (payload: {
  url: string // 过滤后的安全链接
  rawUrl: string // 原始 href
  target: string // 超链接 target，默认 _blank
  rel: string // 超链接 rel
  event: MouseEvent // 点击事件对象
  quill: any // 当前编辑器实例
}) => boolean | void | Promise<boolean | void>
```

### IImageUploadOptions

```typescript
interface IImageUploadOptions {
  url: string // 图片上传地址
  method: string // 上传方法
  name: string // 图片名称
  withCredentials: boolean // 是否需要认证，开启后会在请求里带上 cookie 信息
  headers: object // 上传请求头部信息
  csrf: string // 请求 csrf 携带信息
  success: (serverResponse: { file: { downloadUrl: string } }[], next: (imageUrl: string) => void) => void // 上传成功回调信息
  fail: (serverError: string) => void // 上传失败回调信息
}
```
