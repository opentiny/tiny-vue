export default {
  mode: ['pc'],
  apis: [
    {
      name: 'pop-upload',
      type: 'component',
      props: [
        {
          name: 'accept',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '接受上传的文件类型',
            'en-US': 'File type to be uploaded'
          },
          mode: ['pc'],
          pcDemo: 'file-type'
        },
        {
          name: 'action',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '必选参数，设置上传的地址',
            'en-US': 'This parameter is mandatory and specifies the upload address.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'before-remove',
          linkTo: 'file-upload#IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '删除文件之间的钩子函数，若返回 false 或者返回 Promise 且被 reject，则取消删除，反之则执行删除；入参为点击删除的文件信息',
            'en-US':
              'Delete the hook function between files. If it returns false or Promise and is rejected, cancel the deletion. Otherwise, execute the deletion; Enter the file information that was deleted by clicking on the input parameter'
          },
          mode: ['pc'],
          pcDemo: 'prevent-delete-file'
        },
        {
          name: 'before-upload',
          linkTo: 'file-upload#IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '上传文件之前的钩子，若返回 false 或者返回 Promise 且被 reject，则停止上传，反之则继续上传；入参为上传的文件信息',
            'en-US':
              'If the hook before uploading the file returns false or Promise and is rejected, the upload will be stopped. Otherwise, the upload will continue; Enter the uploaded file information as input'
          },
          mode: ['pc'],
          pcDemo: 'before-upload'
        },
        {
          name: 'cancel-button-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置文件上传弹框中取消按钮的文本；默认为 取消',
            'en-US': 'Set the text of the Cancel button in the file upload dialog box. The default value is Cancel'
          },
          mode: ['pc'],
          pcDemo: 'fill-button-text'
        },
        {
          name: 'data',
          typeAnchorName: 'ICustomObject',
          type: 'ICustomObject',
          defaultValue: '',
          desc: {
            'zh-CN': '上传时附带的额外参数',
            'en-US': 'Extra parameters attached during upload'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'dialog-title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置文件上传弹框的标题;默认为 文件上传',
            'en-US': 'Set the title of the file upload dialog box. The default value is file upload'
          },
          mode: ['pc'],
          pcDemo: 'fill-button-text'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否禁用;默认为 false',
            'en-US': 'Whether to disable; The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'headers',
          typeAnchorName: 'ICustomObject',
          type: 'ICustomObject',
          defaultValue: '',
          desc: {
            'zh-CN': '设置上传的请求头部',
            'en-US': 'Set the upload request header'
          },
          mode: ['pc'],
          pcDemo: 'custom-request-headers'
        },
        {
          name: 'http-request',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '覆盖默认的上传行为，可以自定义上传的实现',
            'en-US': 'Overwrite the default upload behavior. You can customize the upload implementation.'
          },
          mode: ['pc'],
          pcDemo: 'http-request'
        },
        {
          name: 'limit',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '最大允许上传个数',
            'en-US': 'Maximum number of files that can be uploaded'
          },
          mode: ['pc'],
          pcDemo: 'file-limit'
        },
        {
          name: 'max-upload-file-size',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '最大上传文件大小',
            'en-US': 'Maximum size of files to be uploaded'
          },
          mode: ['pc'],
          pcDemo: 'file-type'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否支持多选文件',
            'en-US': 'Specifies whether multiple files can be selected.'
          },
          mode: ['pc'],
          pcDemo: 'file-limit'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'submit-button-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置文件上传弹框中提交按钮的文本;默认为 开始上传',
            'en-US':
              'Set the text of the Submit button in the file upload dialog box. The default value is Start uploading'
          },
          mode: ['pc'],
          pcDemo: 'fill-button-text'
        },
        {
          name: 'upload-button-text',
          type: 'string',
          defaultValue: "'选择文件'",
          desc: {
            'zh-CN': '打开弹出框的按钮的文本配置属性',
            'en-US': 'Text configuration attribute of the button for opening a dialog box'
          },
          mode: ['pc'],
          pcDemo: 'fill-button-text'
        },
        {
          name: 'upload-file-type',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': "对上传文件进行校验的类型，比如 ['.png', '.jpg']",
            'en-US': "Type of the uploaded file to be verified, for example, ['.png', '.jpg']"
          },
          mode: ['pc'],
          pcDemo: 'file-type'
        },
        {
          name: 'upload-name',
          type: 'string',
          defaultValue: "'file'",
          desc: {
            'zh-CN': '上传的文件字段名',
            'en-US': 'Field name of the uploaded file'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'with-credentials',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '支持发送 cookie 凭证信息',
            'en-US': 'Cookie credential information can be sent.'
          },
          mode: ['pc'],
          pcDemo: 'custom-request-headers'
        }
      ],
      events: [
        {
          name: 'error',
          linkTo: 'file-upload#IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件上传失败时触发的事件； file 为当前上传失败文件信息',
            'en-US': 'Event triggered when file upload fails; file is the current upload failure file information'
          },
          mode: ['pc'],
          pcDemo: 'upload-events'
        },
        {
          name: 'exceed',
          linkTo: 'file-upload#IFile',
          type: '(files: File | File[], fileList: IFile[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件超出个数限制时触发的事件； files 为上传的文件',
            'en-US': 'Event triggered when the number of files exceeds the limit; Files are uploaded files'
          },
          mode: ['pc'],
          pcDemo: 'upload-events'
        },
        {
          name: 'progress',
          linkTo: 'file-upload#IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件上传时触发的事件',
            'en-US': 'Event triggered during file upload'
          },
          mode: ['pc'],
          pcDemo: 'upload-events'
        },
        {
          name: 'remove',
          linkTo: 'file-upload#IFile',
          type: '(file: IFile, fileList: IFile[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '从文件列表移除文件时触发的事件； file 为当前移除的文件信息',
            'en-US':
              'Event triggered when removing a file from the file list; File is the information of the currently removed file'
          },
          mode: ['pc'],
          pcDemo: 'upload-events'
        },
        {
          name: 'success',
          linkTo: 'file-upload#IFile',
          type: '(res: ProgressEvent, file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件上传成功时触发的事件； res 为上传成功后的响应信息事件对象，file 为当前上传的文件',
            'en-US':
              'Event triggered when the file is successfully uploaded; Res is the response information event object after successful upload'
          },
          mode: ['pc'],
          pcDemo: 'upload-events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'uploadTip',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义上传提示内容',
            'en-US': 'Customize upload prompt content'
          },
          meta: {
            stable: '3.18.0'
          },
          mode: ['pc'],
          pcDemo: 'upload-tip'
        }
      ]
    }
  ],
  types: [
    {
      name: 'ICustomObject',
      type: 'interface',
      code: `
interface ICustomObject {
  [propName: string]: any // 自定义属性
}
      `
    }
  ]
}
