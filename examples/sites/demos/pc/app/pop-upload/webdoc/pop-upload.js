export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic usage' },
      'desc': {
        'zh-CN': `通过 <code>action</code> 设置上传的服务接口， <code>upload-name</code> 设置上传的文件字段名，<code>data</code> 自定义上传时附带的额外参数。`,
        'en-US': `Set the service interface for uploading through<code>action</code>,<code>upload-name</code>set the file field name for uploading, 
              and<code>data</code>customize the additional parameters that come with uploading.`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-request-headers',
      'name': { 'zh-CN': '定义请求头部', 'en-US': 'Custom request header' },
      'desc': {
        'zh-CN':
          '通过 <code>with-credentials</code> 开启支持发送 cookie 凭证信息，<code>headers</code> 自定义上传请求头信息。',
        'en-US':
          'Enable support for sending cookie credential information through<code>with-credentials</code>, and customize upload request header information through<code>headers</code>.'
      },
      'codeFiles': ['custom-request-headers.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸和禁用', 'en-US': 'Size and disabled' },
      'desc': {
        'zh-CN':
          '通过 <code>medium</code>，<code>small</code>，<code>mini</code> 设置组件尺寸，<code>disabled</code> 设置是否禁用，默认值为 false 。',
        'en-US':
          'Set the component size through<code>media</code>,<code>small</code>,<code>mini</code>, and whether to <code>disabled</code> it. The default value is false.'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'http-request',
      'name': { 'zh-CN': '自定义上传', 'en-US': 'Custom Upload' },
      'desc': {
        'zh-CN': '通过 <code>http-request</code> 配置覆盖默认的上传行为，自定义上传的实现。',
        'en-US':
          'You can configure <code>http-request</code> to overwrite the default upload behavior and customize the upload implementation'
      },
      'codeFiles': ['http-request.vue']
    },
    {
      'demoId': 'fill-button-text',
      'name': {
        'zh-CN': '定义按钮和标题',
        'en-US': 'Define Buttons And Titles'
      },
      'desc': {
        'zh-CN': `通过 <code>dialog-title</code> 设置弹框的标题，<code>cancel-button-text</code> 设置取消按钮的文本, 
          <code>submit-button-text</code> 设置提交按钮的文本， <code>cancel-button-text</code> 设置上传按钮的文本。`,
        'en-US': `Set the title of the pop-up box through<code>dialog-title</code>, and set the text of the cancel button through<code>cancel-button-text</code>,
          <code>submit-button-text</code>Set the text for the submit button,<code>cancel-button-text</code>Set the text for the upload button.`
      },
      'codeFiles': ['fill-button-text.vue']
    },
    {
      'demoId': 'file-limit',
      'name': { 'zh-CN': '上传数限制', 'en-US': 'Upload Quantity Limit' },
      'desc': {
        'zh-CN': '通过 <code>limit</code> 设置最大上传的文件数量，<code>multiple</code> 设置是否可同时选择多个文件。',
        'en-US':
          'Set the maximum number of uploaded files through<code>limit</code>, and whether <code>multiple</code> files can be selected simultaneously.'
      },
      'codeFiles': ['file-limit.vue']
    },
    {
      'demoId': 'file-type',
      'name': { 'zh-CN': '限制文件类型和大小', 'en-US': 'Restrict file types and sizes' },
      'desc': {
        'zh-CN':
          '通过 <code>max-upload-file-size</code> 设置上传文件的大小， <code>accept</code> 设置可上传的文件类型，还可通过 <code>upload-file-type</code> 指定在上传时进行校验的文件类型。',
        'en-US':
          'Set the size of the uploaded file through<code>max-upload-file-size</code>,<code>accept</code>to set the file types that can be uploaded, and also specify the file types to be verified during upload through<code>upload-file-type</code>.'
      },
      'codeFiles': ['file-type.vue']
    },
    {
      'demoId': 'prevent-delete-file',
      'name': { 'zh-CN': '阻止删除', 'en-US': 'Block deletion' },
      'desc': {
        'zh-CN':
          '在 <code>before-remove</code> 处理移除文件前的逻辑，若返回 false 或者返回 Promise 且被 reject，则阻止删除。',
        'en-US':
          'Process the logic before removing files in<code>before-remove</code>. If it returns false or Promise and is rejected, the deletion will be blocked.'
      },
      'codeFiles': ['prevent-delete-file.vue']
    },
    {
      'demoId': 'before-upload',
      'name': { 'zh-CN': '阻止上传', 'en-US': 'Block uploads' },
      'desc': {
        'zh-CN':
          '在 <code>before-upload</code> 回调中处理文件上传前的逻辑，若返回 false 或者返回 Promise 且被 reject，则阻止上传。',
        'en-US':
          'Process the logic before file upload in the<code>before-upload</code>callback. If it returns false or Promise and is rejected, the upload is blocked.'
      },
      'codeFiles': ['before-upload.vue']
    },
    {
      'demoId': 'upload-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': `<div class="tip custom-block"><code>remove</code> 监听文件移除事件；<br/> <code>error</code> 监听文件上传失败事件；<br/>
          <code>exceed</code> 监听文件超出个数限制事件；<br/> <code>progress</code> 监听文件上传过程事件；<br/>
          <code>success</code> 监听文件上传成功事件。</div>`,
        'en-US': `<div class="tip custom-block"> <code>remove</code> Listen for file removal events; <br /> <code>error</code> Listen for file upload failure events;<br />
        <code>exceeded</code> Listen for events where the number of files exceeds the limit; <br/> <code>progress</code> Listen for file upload process events;<br/> 
        <code>success</code> Listen for file upload success events.</div>`
      },
      'codeFiles': ['upload-events.vue']
    }
  ],
  apis: [
    {
      'name': 'pop-upload',
      'type': 'component',
      'props': [
        {
          'name': 'accept',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '接受上传的文件类型', 'en-US': 'File type to be uploaded' },
          'demoId': 'file-type'
        },
        {
          'name': 'action',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '必选参数，设置上传的地址',
            'en-US': 'This parameter is mandatory and specifies the upload address.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'before-remove',
          'type': '(file: IFile) => void',
          'typeAnchorName': 'file-upload#IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '删除文件之间的钩子函数，若返回 false 或者返回 Promise 且被 reject，则取消删除，反之则执行删除；入参为点击删除的文件信息',
            'en-US':
              'Delete the hook function between files. If it returns false or Promise and is rejected, cancel the deletion. Otherwise, execute the deletion; Enter the file information that was deleted by clicking on the input parameter'
          },
          'demoId': 'prevent-delete-file'
        },
        {
          'name': 'before-upload',
          'type': '(file: IFile) => void',
          'typeAnchorName': 'file-upload#IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '上传文件之前的钩子，若返回 false 或者返回 Promise 且被 reject，则停止上传，反之则继续上传；入参为上传的文件信息',
            'en-US':
              'If the hook before uploading the file returns false or Promise and is rejected, the upload will be stopped. Otherwise, the upload will continue; Enter the uploaded file information as input'
          },
          'demoId': 'before-upload'
        },
        {
          'name': 'cancel-button-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文件上传弹框中取消按钮的文本；默认为 取消',
            'en-US': 'Set the text of the Cancel button in the file upload dialog box. The default value is Cancel'
          },
          'demoId': 'fill-button-text'
        },
        {
          'name': 'data',
          'type': 'ICustomObject',
          'typeAnchorName': 'ICustomObject',
          'defaultValue': '',
          'desc': { 'zh-CN': '上传时附带的额外参数', 'en-US': 'Extra parameters attached during upload' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'dialog-title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文件上传弹框的标题;默认为 文件上传',
            'en-US': 'Set the title of the file upload dialog box. The default value is file upload'
          },
          'demoId': 'fill-button-text'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否禁用;默认为 false', 'en-US': 'Whether to disable; The default value is false' },
          'demoId': 'size'
        },
        {
          'name': 'headers',
          'type': 'ICustomObject',
          'typeAnchorName': 'ICustomObject',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置上传的请求头部', 'en-US': 'Set the upload request header' },
          'demoId': 'custom-request-headers'
        },
        {
          'name': 'http-request',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '覆盖默认的上传行为，可以自定义上传的实现',
            'en-US': 'Overwrite the default upload behavior. You can customize the upload implementation.'
          },
          'demoId': 'http-request'
        },
        {
          'name': 'limit',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大允许上传个数', 'en-US': 'Maximum number of files that can be uploaded' },
          'demoId': 'file-limit'
        },
        {
          'name': 'max-upload-file-size',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大上传文件大小', 'en-US': 'Maximum size of files to be uploaded' },
          'demoId': 'file-type'
        },
        {
          'name': 'multiple',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否支持多选文件', 'en-US': 'Specifies whether multiple files can be selected.' },
          'demoId': 'file-limit'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置组件大小', 'en-US': 'Set the component size' },
          'demoId': 'size'
        },
        {
          'name': 'submit-button-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文件上传弹框中提交按钮的文本;默认为 开始上传',
            'en-US':
              'Set the text of the Submit button in the file upload dialog box. The default value is Start uploading'
          },
          'demoId': 'fill-button-text'
        },
        {
          'name': 'upload-button-text',
          'type': 'string',
          'defaultValue': `'选择文件'`,
          'desc': {
            'zh-CN': '打开弹出框的按钮的文本配置属性',
            'en-US': 'Text configuration attribute of the button for opening a dialog box'
          },
          'demoId': 'fill-button-text'
        },
        {
          'name': 'upload-file-type',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': "对上传文件进行校验的类型，比如 ['.png', '.jpg']",
            'en-US': "Type of the uploaded file to be verified, for example, ['.png', '.jpg']"
          },
          'demoId': 'file-type'
        },
        {
          'name': 'upload-name',
          'type': 'string',
          'defaultValue': `'file'`,
          'desc': { 'zh-CN': '上传的文件字段名', 'en-US': 'Field name of the uploaded file' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'with-credentials',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '支持发送 cookie 凭证信息', 'en-US': 'Cookie credential information can be sent.' },
          'demoId': 'custom-request-headers'
        }
      ],
      'events': [
        {
          'name': 'error',
          'type': '(file: IFile) => void',
          'typeAnchorName': 'file-upload#IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件上传失败时触发的事件； file 为当前上传失败文件信息',
            'en-US': 'Event triggered when file upload fails; file is the current upload failure file information'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'exceed',
          'type': '(files: File | File[], fileList: IFile[]) => void',
          'typeAnchorName': 'file-upload#IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件超出个数限制时触发的事件； files 为上传的文件',
            'en-US': 'Event triggered when the number of files exceeds the limit; Files are uploaded files'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'progress',
          'type': '(file: IFile) => void',
          'typeAnchorName': 'file-upload#IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件上传时触发的事件',
            'en-US': 'Event triggered during file upload'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'remove',
          'type': '(file: IFile, fileList: IFile[]) => void',
          'typeAnchorName': 'file-upload#IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN': '从文件列表移除文件时触发的事件； file 为当前移除的文件信息',
            'en-US':
              'Event triggered when removing a file from the file list; File is the information of the currently removed file'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'success',
          'type': '(res: ProgressEvent, file: IFile) => void',
          'typeAnchorName': 'IFile',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件上传成功时触发的事件； res 为上传成功后的响应信息事件对象，file 为当前上传的文件',
            'en-US':
              'Event triggered when the file is successfully uploaded; Res is the response information event object after successful upload'
          },
          'demoId': 'upload-events'
        }
      ],
      'slots': []
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
