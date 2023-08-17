export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>action</code> 属性设置上传的服务接口。</p>\n',
        'en-US': '<p>Set the upload service interface through the <code>action</code> attribute. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-request-headers',
      'name': { 'zh-CN': '自定义请求头', 'en-US': 'Custom Request Header' },
      'desc': {
        'zh-CN': '<p>通过 <code>headers</code> 属性自定义上传请求头信息。</p>\n',
        'en-US':
          '<p>The <code>headers</code> attribute is used to customize the upload request header information. </p>\n'
      },
      'codeFiles': ['custom-request-headers.vue']
    },
    {
      'demoId': 'data',
      'name': { 'zh-CN': '上传时附带的额外参数', 'en-US': 'Extra parameters attached during upload' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 属性自定义上传时附带的额外参数。</p>\n',
        'en-US':
          '<p>The <code>data</code> attribute is used to customize the additional parameters attached to the upload. </p>\n'
      },
      'codeFiles': ['data.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN':
          '<p>可设置为：<code>medium</code>，<code>small</code>，<code>mini</code>\n通过 <code>disabled</code> 属性设置是否禁用，默认值为 false 。</p>\n',
        'en-US':
          '<p>The options are as follows: <code>medium</code>, <code>small</code>, <code>mini</code>\nThe <code>disabled</code> attribute is used to set whether to disable. The default value is false. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'http-request',
      'name': { 'zh-CN': '覆盖默认请求', 'en-US': 'Override the default request' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>http-request</code> 覆盖默认的上传行为，可以自定义上传的实现</p>\n',
        'en-US':
          '<p>You can configure <code>http-request</code> to overwrite the default upload behavior and customize the upload implementation</p>\n'
      },
      'codeFiles': ['http-request.vue']
    },
    {
      'demoId': 'upload-name1',
      'name': { 'zh-CN': '上传的文件字段名', 'en-US': 'Field name of the uploaded file' },
      'desc': {
        'zh-CN': '<p>通过 <code>upload-name</code> 属性设置上传的文件字段名，默认值为 file 。</p>\n',
        'en-US':
          '<p>Use the <code>upload-name</code> attribute to set the field name of the file to be uploaded. The default value is file. </p>\n'
      },
      'codeFiles': ['upload-name.vue']
    },
    {
      'demoId': 'upload-name',
      'name': { 'zh-CN': '发送 cookie 凭证信息', 'en-US': 'Send cookie credential information' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['upload-name.vue']
    },
    {
      'demoId': 'fill-button-text1',
      'name': {
        'zh-CN': '文件上传弹框中取消按钮的文本',
        'en-US': 'Text of the Cancel button in the dialog box for uploading files'
      },
      'desc': {
        'zh-CN': '<p>通过 <code>cancel-button-text</code> 属性指定取消按钮的文本内容</p>\n',
        'en-US':
          '<p>Specify the text content of the cancel button through the <code>cancel-button-text</code> attribute</p>\n'
      },
      'codeFiles': ['fill-button-text.vue']
    },
    {
      'demoId': 'fill-button-text2',
      'name': {
        'zh-CN': '文件上传弹框中提交按钮的文本',
        'en-US': 'Text of the Submit button in the dialog box for uploading files'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['fill-button-text.vue']
    },
    {
      'demoId': 'fill-button-text4',
      'name': { 'zh-CN': '打开弹出框的按钮的文本', 'en-US': 'Text of the button for opening a dialog box' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['fill-button-text.vue']
    },
    {
      'demoId': 'file-limit',
      'name': { 'zh-CN': '最大上传文件数', 'en-US': 'Maximum number of files to be uploaded' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>limit</code> 属性可以指定最大上传的文件数量，配置 <code>multiple</code> 属性后可同时选择多个文件。</p>\n',
        'en-US':
          '<p>You can use the <code>limit</code> attribute to specify the maximum number of files to be uploaded. After the <code>multiple</code> attribute is configured, you can select multiple files at the same time. </p>\n'
      },
      'codeFiles': ['file-limit.vue']
    },
    {
      'demoId': 'file-type',
      'name': { 'zh-CN': '可上传文件类型', 'en-US': 'File types that can be uploaded' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>accept</code> 属性可以对选择文件时的文件类型进行控制，而 <code>upload-file-type</code> 属性可以指定在上传时进行校验的文件类型。</p>\n',
        'en-US':
          '<p>The <code>accept</code> attribute can be used to control the file type when a file is selected, and the <code>upload-file-type</code> attribute can be used to specify the file type to be verified during upload. </p>\n'
      },
      'codeFiles': ['file-type.vue']
    },
    {
      'demoId': 'max-upload-file-size',
      'name': { 'zh-CN': '可上传文件大小', 'en-US': 'Size of files that can be uploaded' },
      'desc': {
        'zh-CN': '<p>通过 <code>max-upload-file-size</code> 属性指定可上传文件的大小。</p>\n',
        'en-US':
          '<p>The <code>max-upload-file-size</code> attribute specifies the size of the file that can be uploaded. </p>\n'
      },
      'codeFiles': ['max-upload-file-size.vue']
    },
    {
      'demoId': 'prevent-delete-file',
      'name': { 'zh-CN': '阻止删除文件', 'en-US': 'Do not delete files' },
      'desc': {
        'zh-CN': '<p>:before-remove（移除文件前回调事件）,方法里面return true/false，表示是否可以删除</p>\n',
        'en-US':
          '<p>:before-remove (callback event before removing a file). In the method, return true/false indicates whether the file can be deleted.</p>\n'
      },
      'codeFiles': ['prevent-delete-file.vue']
    },
    {
      'demoId': 'before-upload',
      'name': { 'zh-CN': '阻止上传文件', 'en-US': 'Do not upload files' },
      'desc': {
        'zh-CN':
          '<p>:before-upload 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传</p>\n',
        'en-US':
          '<p>:before-upload Indicates the hook before uploading a file. The parameter is the uploaded file. If false is returned or Promise is returned and rejected, the upload stops.</p>\n'
      },
      'codeFiles': ['before-upload.vue']
    }
  ],
  apis: [
    {
      'name': 'pop-upload',
      'type': 'component',
      'properties': [
        {
          'name': 'dialog-title',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文件上传弹框的标题;默认为 文件上传',
            'en-US': 'Set the title of the file upload dialog box. The default value is file upload'
          },
          'demoId': 'fill-button-text1'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置组件大小', 'en-US': 'Set the component size' },
          'demoId': 'size'
        },
        {
          'name': 'submit-button-text',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文件上传弹框中提交按钮的文本;默认为 开始上传',
            'en-US':
              'Set the text of the Submit button in the file upload dialog box. The default value is Start uploading'
          },
          'demoId': 'fill-button-text2'
        },
        {
          'name': 'cancel-button-text',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文件上传弹框中取消按钮的文本;默认为 取消',
            'en-US': 'Set the text of the Cancel button in the file upload dialog box. The default value is Cancel'
          },
          'demoId': 'fill-button-text1'
        },
        {
          'name': 'action',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '必选参数，设置上传的地址',
            'en-US': 'This parameter is mandatory and specifies the upload address.'
          },
          'demoId': 'custom-request-headers'
        },
        {
          'name': 'headers',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置上传的请求头部', 'en-US': 'Set the upload request header' },
          'demoId': 'custom-request-headers'
        },
        {
          'name': 'limit',
          'type': 'Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大允许上传个数', 'en-US': 'Maximum number of files that can be uploaded' },
          'demoId': 'file-limit'
        },
        {
          'name': 'multiple',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否支持多选文件', 'en-US': 'Specifies whether multiple files can be selected.' },
          'demoId': 'file-limit'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否禁用;默认为 false', 'en-US': 'Whether to disable; The default value is false' },
          'demoId': 'size'
        },
        {
          'name': 'accept',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '接受上传的文件类型', 'en-US': 'File type to be uploaded' },
          'demoId': 'file-type'
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
          'name': 'max-upload-file-size',
          'type': 'Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大上传文件大小', 'en-US': 'Maximum size of files to be uploaded' },
          'demoId': 'max-upload-file-size'
        },
        {
          'name': 'upload-name',
          'type': 'String',
          'defaultValue': '该属性的默认值为 file',
          'desc': { 'zh-CN': '上传的文件字段名', 'en-US': 'Field name of the uploaded file' },
          'demoId': 'upload-name'
        },
        {
          'name': 'upload-button-text',
          'type': 'String',
          'defaultValue': '该属性的默认值为 选择文件',
          'desc': {
            'zh-CN': '打开弹出框的按钮的文本配置属性',
            'en-US': 'Text configuration attribute of the button for opening a dialog box'
          },
          'demoId': 'fill-button-text4'
        },
        {
          'name': 'with-credentials',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '支持发送 cookie 凭证信息', 'en-US': 'Cookie credential information can be sent.' },
          'demoId': 'upload-name'
        },
        {
          'name': 'before-remove',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在上传文件列表点击删除成功前触发;arg1:{Object 点击删除的文件信息}',
            'en-US':
              'This event is triggered before the upload file list is deleted successfully. arg1:{Information about the file to be deleted by clicking Object}'
          },
          'demoId': 'prevent-delete-file'
        },
        {
          'name': 'before-upload',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。;arg1:{Object 上传的文件信息}',
            'en-US':
              'Hook before uploading a file. The parameter is the file to be uploaded. If false is returned or Promise is returned and rejected, the upload stops. ;arg1:{Object uploaded file information}'
          },
          'demoId': 'before-upload'
        },
        {
          'name': 'http-request',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '覆盖默认的上传行为，可以自定义上传的实现',
            'en-US': 'Overwrite the default upload behavior. You can customize the upload implementation.'
          },
          'demoId': 'http-request'
        },
        {
          'name': 'data',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '上传时附带的额外参数', 'en-US': 'Extra parameters attached during upload' },
          'demoId': 'data'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
