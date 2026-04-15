## pop-upload

### Props

| 属性名               | 类型                                     | 默认值     | 说明                                                                                                                    |
| -------------------- | ---------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| accept               | string                                   |            | 接受上传的文件类型                                                                                                      |
| action               | string                                   |            | 必选参数，设置上传的地址                                                                                                |
| before-remove        | (file: IFile) => void                    |            | 删除文件之间的钩子函数，若返回 false 或者返回 Promise 且被 reject，则取消删除，反之则执行删除；入参为点击删除的文件信息 |
| before-upload        | (file: IFile) => void                    |            | 上传文件之前的钩子，若返回 false 或者返回 Promise 且被 reject，则停止上传，反之则继续上传；入参为上传的文件信息         |
| cancel-button-text   | string                                   |            | 设置文件上传弹框中取消按钮的文本；默认为 取消                                                                           |
| data                 | ICustomObject                            |            | 上传时附带的额外参数                                                                                                    |
| dialog-title         | string                                   |            | 设置文件上传弹框的标题;默认为 文件上传                                                                                  |
| disabled             | boolean                                  |            | 是否禁用;默认为 false                                                                                                   |
| headers              | ICustomObject                            |            | 设置上传的请求头部                                                                                                      |
| http-request         | () => void                               |            | 覆盖默认的上传行为，可以自定义上传的实现                                                                                |
| limit                | number                                   |            | 最大允许上传个数                                                                                                        |
| max-upload-file-size | number                                   |            | 最大上传文件大小                                                                                                        |
| multiple             | boolean                                  |            | 是否支持多选文件                                                                                                        |
| size                 | 'large' \| 'medium' \| 'small' \| 'mini' |            | 设置组件大小                                                                                                            |
| submit-button-text   | string                                   |            | 设置文件上传弹框中提交按钮的文本;默认为 开始上传                                                                        |
| upload-button-text   | string                                   | '选择文件' | 打开弹出框的按钮的文本配置属性                                                                                          |
| upload-file-type     | Array                                    |            | 对上传文件进行校验的类型，比如 ['.png', '.jpg']                                                                         |
| upload-name          | string                                   | 'file'     | 上传的文件字段名                                                                                                        |
| with-credentials     | boolean                                  | false      | 支持发送 cookie 凭证信息                                                                                                |

### Events

| 事件名   | 回调参数                                           | 说明                                                                                 |
| -------- | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| error    | (file: IFile) => void                              | 文件上传失败时触发的事件； file 为当前上传失败文件信息                               |
| exceed   | (files: File \| File[], fileList: IFile[]) => void | 文件超出个数限制时触发的事件； files 为上传的文件                                    |
| progress | (file: IFile) => void                              | 文件上传时触发的事件                                                                 |
| remove   | (file: IFile, fileList: IFile[]) => void           | 从文件列表移除文件时触发的事件； file 为当前移除的文件信息                           |
| success  | (res: ProgressEvent, file: IFile) => void          | 文件上传成功时触发的事件； res 为上传成功后的响应信息事件对象，file 为当前上传的文件 |

### Slots

| 插槽名    | 说明               |
| --------- | ------------------ |
| uploadTip | 自定义上传提示内容 |

## Types

### ICustomObject

```typescript
interface ICustomObject {
  [propName: string]: any // 自定义属性
}
```
