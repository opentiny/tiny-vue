## file-upload

### Props

| 属性名             | 类型                                                   | 默认值 | 说明                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept             | string                                                 |        | 限制文件类型（thumbnail-mode 模式下此参数无效）                                                                                                                             |
| action             | string                                                 |        | 上传的地址，必填参数                                                                                                                                                        |
| auto-upload        | boolean                                                | true   | 是否在选取文件后立即进行上传                                                                                                                                                |
| before-add-file    | (callback: () => void) => void                         |        | 文件选择之前的钩子，若返回 false 或者返回 Promise 且被 reject，则停止添加文件。如果不用以上 2 种方式，也可以通过执行参数中的回调函数继续进行上传【3.13.0版本新增】          |
| before-remove      | (file: IFile, fileList: IFile[]) => boolean \| Promise |        | 删除文件前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除                                                                         |
| before-upload      | (file: IFile) => boolean \| Promise                    |        | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传                                                                                 |
| cache-token        | boolean                                                |        | 使用 EDM 时，可配置是否缓存token（存在多个file-upload时，若配置cache-token为false，token会调用多次。否则，只调用一次）                                                      |
| custom-class       | string                                                 |        | 自定义class                                                                                                                                                                 |
| data               | IData                                                  |        | 上传时附带的额外参数，参数自定义                                                                                                                                            |
| disabled           | boolean                                                | false  | 是否禁用                                                                                                                                                                    |
| display-only       | boolean                                                |        | 文件上传模式，通过 display-only 设置组件是否只读                                                                                                                            |
| download           | Object                                                 |        | 配置 EDM 下载功能所需的参数,例如：edm:{download:{token:() =>{}}},token为鉴权token                                                                                           |
| drag               | boolean                                                | false  | 是否启用拖拽上传                                                                                                                                                            |
| edm                | Object                                                 |        | 使用 EDM 的上传下载预览功能，可在该对象里边配置上传、下载、预览功能的参数                                                                                                   |
| encrypt-config     | IEncryptConfig                                         |        | 设置水印和加密弹窗                                                                                                                                                          |
| file-list          | IFileListItem[]                                        |        | 上传的文件列表                                                                                                                                                              |
| file-size          | Number \| Array                                        |        | 限制文件大小，单位为 KB；当为 Number 类型时，小于该值停止上传；为数组时[min,max] 设置上传范围                                                                               |
| headers            | IHeaders                                               |        | 设置上传的请求头部;通过设置 headers 为头部请求信息                                                                                                                          |
| http-request       | (file: ICustomParam) => Promise<any>                   |        | 覆盖默认的上传行为，可以自定义上传的实现; 由于 TinyVue 官网为 Mock 上传不能执行上传                                                                                         |
| hwh5               | Object                                                 |        | 在we码小程序中，可配置 hwh5属性 进行原生的上传和下载                                                                                                                        |
| image-bg-color     | string                                                 |        | 配置 `list-type` 等于 `picture-single` 或 `picture-card` 模式下图片的背景色。                                                                                               |
| is-folder-title    | boolean                                                |        | 配置为 true,则在文件列表模式（show-file-list为true），hover文件名时，展示对应的文件路径，没有文件路径则只展示文件名                                                         |
| is-hidden          | boolean                                                | false  | 达到最大上传个数时，是否隐藏上传按钮，默认不隐藏                                                                                                                            |
| isFolder           | boolean                                                |        | 配置为 true,启用 EDM 上传文件夹的功能，最多只能上传 5 层;{edm:upload:{isFolder:true,token:() =>{}}}                                                                         |
| limit              | number                                                 |        | 最大允许上传个数                                                                                                                                                            |
| list-option        | Object                                                 |        | EDM文件列表模式下，配置更新和删除文件的功能                                                                                                                                 |
| list-type          | IListType                                              | 'text' | 文件列表的类型                                                                                                                                                              |
| max-name-length    | number                                                 | 20     | 列表项的文件名最大字符数，默认超出20个字符隐藏                                                                                                                              |
| merge-service      | boolean                                                | false  | 配置 merge-service 为 true 且开启多文件上传走默认服务会将多个上传服务合并为一个服务上传                                                                                     |
| mergeService       | boolean                                                |        | 配置 mergeService 为true 且开启多文件上传走默认服务会将多个上传服务合并为一个服务上传                                                                                       |
| mode               | string                                                 |        | 气泡上传，在 list-type 为默认值 text 时，设置 mode 为 bubble 时进行气泡模式的上传                                                                                           |
| multiple           | boolean                                                | false  | 是否支持多选文件                                                                                                                                                            |
| name               | string                                                 | 'file' | 上传的文件字段名                                                                                                                                                            |
| open-download-file | boolean                                                | false  | 是否开启点击下载文件，默认不开启                                                                                                                                            |
| packageToken       | Function                                               |        | 配置 EDM 批量打包下载的 token；配置结构为 edm:{download:packageToken:() =>{}},返回一个 Promise                                                                              |
| paramsWhitelist    | array                                                  |        | 配置 EDM 单文件下载参数白名单（默认会携带docId，wmType，docVersion）,若需携带其他参数，需配置paramsWhitelist，例如：edm:{download:{paramsWhitelist: ['paramA', 'paramB']}}, |
| paste-upload       | boolean                                                | false  | 是否启用粘贴键快捷上传功能【3.11.0版本新增】                                                                                                                                |
| preivew            | Object                                                 |        | 配置 EDM 预览功能所需的参数,例如：edm:{preview:{plugin：util.default,previewUrl:./\_index.html?appid=应用Id,packageName: 'jslib',token:() =>{}}}                            |
| prompt-tip         | boolean                                                | false  | 设置提示是否为 tip 类型，悬浮图标时显示 tip 提示                                                                                                                            |
| re-upload-tip      | (count: number) => string                              |        | 自定义重新上传的左侧提示文字，需要与 re-uploadable 搭配使用【3.12.0版本新增】                                                                                               |
| re-uploadable      | boolean                                                | false  | 是否启用重新上传功能【3.12.0版本新增】                                                                                                                                      |
| show-file-list     | boolean                                                | true   | 是否显示已上传文件列表                                                                                                                                                      |
| show-name          | boolean                                                |        | 上传请求参数，默认为 false                                                                                                                                                  |
| show-title         | boolean                                                |        | 配置 show-title 为 false 隐藏标题，默认为 true                                                                                                                              |
| source-type        | string                                                 |        | 数据源类型                                                                                                                                                                  |
| thumb-option       | IThumbOption                                           |        | 文件列表的显示类型为 thumb 时的相关配置                                                                                                                                     |
| title              | string                                                 |        | 通过 title 可自定义标题                                                                                                                                                     |
| token              | Function                                               |        | 使用 EDM 上传下载预览所需的token,返回值为 Promise                                                                                                                           |
| updateId           | string                                                 |        | EDM 需要更新文档的 docId                                                                                                                                                    |
| upload             | Object                                                 |        | 配置 EDM 上传功能所需的参数,例如：edm:{upload:{token:() =>{}}}                                                                                                              |
| with-credentials   | boolean                                                | false  | 支持发送 cookie 凭证信息                                                                                                                                                    |

### Events

| 事件名        | 回调参数                                                         | 说明                                                                                                              |
| ------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| change        | (file: IFile, fileList: IFile[]) => void                         | 文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发                                                |
| download      | function(arg1, arg2)                                             | 文件下载时触发的事件                                                                                              |
| drop-error    | (file: IFile) => void                                            | 拖拽文件失败时触发的事件，开启拖拽时有效； file 为上传失败文件信息                                                |
| error         | (message: ProgressEvent, file: IFile, fileList: IFile[]) => void | 文件上传失败时触发的事件； message 为错误信息事件对象，file 为当前上传失败文件信息，fileList 为上传成功 file 数组 |
| exceed        | (files: File \| File[], fileList: IFile[]) => void               | 文件超出个数限制时触发的事件； files 为上传的文件                                                                 |
| hash-progress | (percentage: number) => void                                     | 文件上传生成 hash 值触发的事件； percentage 为生成的进度值                                                        |
| preview       | (file: IFile) => void                                            | 点击文件列表中已上传的文件时触发的事件                                                                            |
| progress      | (message: ProgressEvent, file: IFile) => void                    | 文件上传时触发的事件； message 为进度条事件对象                                                                   |
| remove        | (file: IFile) => void                                            | 从文件列表移除文件时触发的事件； file 为当前移除的文件信息                                                        |
| success       | (res: ProgressEvent, file: IFile, fileList: IFile[]) => void     | 文件上传成功时触发的事件； res 为上传成功后的响应信息事件对象，file 为当前上传的文件，fileList 为所有上传文件数组 |

### Methods

| 方法名              | 返回值     | 说明                                                        |
| ------------------- | ---------- | ----------------------------------------------------------- |
| abort               | () => void | 取消上传请求                                                |
| abortDownload       |            | edm 取消下载请求                                            |
| clearFiles          | () => void | 清空已上传的文件列表（该方法不支持在 before-upload 中调用） |
| downloadFile        |            | 下载 EDM 文件                                               |
| getNewTabPreviewUrl |            | 预览 EDM 文件预览的 Url，返回值为 Promise                   |
| previewFile         |            | 预览 EDM 文件                                               |
| submit              | () => void | 手动上传文件列表                                            |

### Slots

| 插槽名  | 说明                 |
| ------- | -------------------- |
| file    | 定义文件显示内容     |
| tip     | 提示说明文字         |
| trigger | 触发文件选择框的内容 |

## Types

### IData

```typescript
interface IData {
  [propsName?: any]: any // 上传参数可自定义
}
```

### IFile

```typescript
interface IFile {
  name: string // 上传文件名
  percentage: string // 上传进度百分比
  raw: File // 原始文件信息
  size: number // 文件大小
  status: string // 上传状态
  uid: string // uid
}
```

### ICustomParam

```typescript
interface ICustomParam {
  action: string
  data: IData // 上传时附带的额外参数
  file: IFile
  filename: string
  headers: object // 头部请求信息
  onError: (error: any) => void // 上传失败回调函数，自定义入参
  onProgress: (event: any) => void // 上传中回调函数
  onSuccess: (res: any) => void // 上传成功回调函数
  withCredentials: boolean // 是否支持发送 cookie 凭证信息
}
```

### IEncryptConfig

```typescript
interface IEncryptConfig {
  enabled: boolean // 是否开启设置，默认关闭
  encrypt: boolean // 是否加密，默认否
  watermark: string // 水印文字，默认为空
}
```

### IFileListItem

```typescript
interface IFileListItem {
  name: string // 文件名
  url: string // 文件url 例如：'https://xxx.cdn.com/xxx.jpg'
}
```

### IHeaders

```typescript
interface IHeaders {
  'Accept-Language'?: string // 比如等于：'en,zh'
  Authorization?: string // 比如等于：'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
  [props: string]: any // headers的属性和属性值自定义
}
```

### IListType

```typescript
type IListType = 'text' | 'picture' | 'picture-card' | 'thumb' | 'saas' // saas为3.14.0版本新增
```

### IThumbOption

```typescript
interface IThumbOption {
  width: number // 弹窗宽度，默认270
  showDownload: boolean // 是否显示下载按钮，默认false
  showDel: boolean // 是否显示删除按钮，布尔false
  showTooltip: boolean // 文件名超出隐藏显示时是否启用tip，默认false
  popperClass: string // 弹窗列表自定义类名
  downloadFile: (file) => void // 点击下载按钮执行函数
  icon: string | Component // 列表结果前 icon ，默认为 'icon-attachment'
}
```
