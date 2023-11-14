export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic usage' },
      'desc': {
        'zh-CN': '通过<code>action</code>设置上传的服务器地址，<code>data</code>设置上传时附带的额外参数。',
        'en-US':
          'Set the server address for uploading through<code>action</code>, and set the additional parameters that come with uploading through<code>data</code>.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-trigger',
      'name': { 'zh-CN': '触发源插槽', 'en-US': 'Trigger source slot' },
      'desc': {
        'zh-CN': '通过<code>trigger</code>插槽自定义文件选择触发源的内容，有触发文件选项框弹出的功能。',
        'en-US':
          'Select the content of the trigger source through the<code>trigger</code>slot customization file, and there is a function to pop up the trigger file option box.'
      },
      'codeFiles': ['custom-trigger.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '通过<code>disabled</code>设置禁用功能。',
        'en-US': 'Disable the function by setting<code>disabled</code>.'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'accept-file-image',
      'name': { 'zh-CN': '限制文件类型', 'en-US': 'Restrict file types' },
      'desc': {
        'zh-CN': '通过<code>accept</code>设置限制上传文件的格式。',
        'en-US': 'Limit the format of uploaded files by setting<code>accept</code>.'
      },
      'codeFiles': ['accept-file-image.vue']
    },
    {
      'demoId': 'multiple-file',
      'name': { 'zh-CN': '文件多选', 'en-US': 'Multiple file selection' },
      'desc': {
        'zh-CN': '通过<code>multiple</code>设置实现文件多选，默认单选。',
        'en-US': 'By setting<code>multiple</code>, multiple files can be selected, with default single selection.'
      },
      'codeFiles': ['multiple-file.vue']
    },
    {
      'demoId': 'manual-upload',
      'name': { 'zh-CN': '手动上传', 'en-US': 'Manual upload' },
      'desc': {
        'zh-CN': '通过<code>auto-upload</code>取消自动上传，配合<code>submit</code>实例方法手动上传。',
        'en-US':
          'Cancel automatic upload through<code>auto-upload</code>and manually upload in conjunction with the<code>submit</code>instance method.'
      },
      'codeFiles': ['manual-upload.vue']
    },
    {
      'demoId': 'upload-file-list',
      'name': { 'zh-CN': '文件列表', 'en-US': 'Uploaded file list' },
      'desc': {
        'zh-CN':
          '通过<code>file-list</code>设置上传的文件列表，也可通过<code>:show-file-list="false"</code>关闭列表的显示；<code>open-download-file</code>设置文件是否可下载。',
        'en-US':
          'Set the list of uploaded files through<code>file-list</code>, or turn off the display of the list through<code>: show-file-list="false"</code>;<code>open-download-file</code>Set whether the file is downloadable.'
      },
      'codeFiles': ['upload-file-list.vue']
    },
    {
      'demoId': 'upload-file-list-slot',
      'name': { 'zh-CN': '定义文件列表', 'en-US': 'Custom file list' },
      'desc': {
        'zh-CN': '通过<code>name</code>设置上传的文件字段名，<code>file</code>插槽自定义文件列表。',
        'en-US':
          'Set the field name of the uploaded file through<code>name</code>, and customize the file list for the<code>file</code>slot.'
      },
      'codeFiles': ['upload-file-list-slot.vue']
    },
    {
      'demoId': 'prevent-delete-file',
      'name': { 'zh-CN': '阻止删除文件', 'en-US': 'Prevent deleting files' },
      'desc': {
        'zh-CN':
          '通过<code>before-remove</code>执行移除文件前的操作，返回<code>false</code>或<code>reject</code>则阻止删除。',
        'en-US':
          'Perform the operation before removing the file by<code>before-remove</code>, and return<code>false</code>or<code>reject</code>to prevent deletion.'
      },
      'codeFiles': ['prevent-delete-file.vue']
    },
    {
      'demoId': 'prevent-upload-file',
      'name': { 'zh-CN': '阻止上传文件', 'en-US': 'Prevent upload files' },
      'desc': {
        'zh-CN':
          '通过<code>before-upload</code>执行上传文件前的操作，返回<code>false</code>或<code>reject</code>则阻止上传。',
        'en-US':
          'Perform the operation before uploading the file by<code>before-upload</code>, and return<code>false</code>or<code>reject</code>to block the upload.'
      },
      'codeFiles': ['prevent-upload-file.vue']
    },
    {
      'demoId': 'upload-request',
      'name': { 'zh-CN': '请求头部配置', 'en-US': 'Request header configuration' },
      'desc': {
        'zh-CN':
          '通过<code>headers</code>配置上传请求头部信息，<code>with-credentials</code>设置允许发送 cookie 凭证信息。',
        'en-US':
          'Configure the upload request header information through<code>headers</code>, and set the permission to send cookie credential information through<code>with-credentials</code>settings.'
      },
      'codeFiles': ['upload-request.vue']
    },
    {
      'demoId': 'drag-upload',
      'name': { 'zh-CN': '拖拽文件上传', 'en-US': 'Dragging uploading files' },
      'desc': {
        'zh-CN':
          '通过<code>drag</code>设置能否拖拽文件上传，若配置了<code>accept</code>属性，则通过监听<code>drop-error</code>事件来操作不合规的拖拽文件信息。',
        'en-US':
          'By setting whether files can be dragged and uploaded through<code>drag</code>, if the<code>accept</code>attribute is configured, non compliant drag file information can be operated by listening for<code>drop-error</code>events.'
      },
      'codeFiles': ['drag-upload.vue']
    },
    {
      'demoId': 'paste-upload',
      'name': { 'zh-CN': '粘贴上传', 'en-US': 'Paste upload' },
      'desc': {
        'zh-CN':
          '通过<code>paste-upload</code>设置能否粘贴文件上传，<code>max-name-length</code>限制文件名显示的字符数。',
        'en-US':
          'Set whether to paste and upload files through<code>paste-upload</code>, and limit the number of characters displayed in file names<code>max-name-length</code>.'
      },
      'codeFiles': ['paste-upload.vue']
    },
    {
      'demoId': 'upload-file-list-thumb',
      'name': { 'zh-CN': '列表弹窗显示', 'en-US': 'List pop-up display' },
      'desc': {
        'zh-CN': '通过<code>list-type="thumb"</code>开启文件列表弹窗显示，<code>thumb-option</code>设置弹窗相关数据。',
        'en-US':
          'Open the file list pop-up display by<code>list-type="thumb"</code>, and<code>thumb-option</code>set the pop-up related data.'
      },
      'codeFiles': ['upload-file-list-thumb.vue']
    },
    {
      'demoId': 'http-request',
      'name': { 'zh-CN': '覆盖默认请求', 'en-US': 'Override the default request' },
      'desc': {
        'zh-CN': '通过<code>http-request</code>配置覆盖默认的上传行为，自定义上传的实现。',
        'en-US':
          'Configure to override the default upload behavior and customize the upload implementation through<code>http-request</code>configuration.'
      },
      'codeFiles': ['http-request.vue']
    },
    {
      'demoId': 'upload-limit',
      'name': { 'zh-CN': '上传前限制', 'en-US': 'Custom upload restrictions' },
      'desc': {
        'zh-CN': '通过<code>before-upload</code>设置上传前事件回调，对文件类型和大小做限制。',
        'en-US': 'Set pre upload event callbacks through<code>before-upload</code>to limit file types and sizes.'
      },
      'codeFiles': ['upload-limit.vue']
    },
    {
      'demoId': 'max-file-count',
      'name': { 'zh-CN': '最大上传数', 'en-US': 'Maximum number of uploads' },
      'desc': {
        'zh-CN':
          '通过<code>limit</code>设置限制上传文件的个数，<code>is-hidden</code>设置达到最大上传数时是否隐藏上传按钮。',
        'en-US':
          'Set a limit on the number of uploaded files by<code>limit</code>, and <code>is-hidden</code> whether to hide the upload button when the maximum number of uploads is reached.'
      },
      'codeFiles': ['max-file-count.vue']
    },
    {
      'demoId': 'picture-card',
      'name': { 'zh-CN': '照片墙', 'en-US': 'Photo Wall' },
      'desc': {
        'zh-CN':
          '通过设置<code>list-type="picture-card"</code>开启照片墙模式，<code>preview</code>监听此模式下的图片预览按钮的点击事件。',
        'en-US':
          'By setting<code>list-type="picture-card"</code>to enable photo wall mode,<code>preview</code>listens to the click event of the picture preview button in this mode.'
      },
      'codeFiles': ['picture-card.vue']
    },
    {
      'demoId': 'file-picture-card',
      'name': { 'zh-CN': '照片墙的预览、下载、删除', 'en-US': 'Preview, download, and delete photo walls' },
      'desc': {
        'zh-CN': '通过<code>downloadFile</code>实例方法实现下载功能，<code>handleRemove</code>实例方法实现删除功能。',
        'en-US':
          'The download function is implemented through the<code>downloadFile</code>instance method, while the<code>handleRemove</code>instance method implements the deletion function.'
      },
      'codeFiles': ['file-picture-card.vue']
    },
    {
      'demoId': 'picture-list',
      'name': { 'zh-CN': '图片列表缩略图', 'en-US': 'Image List Thumbnail' },
      'desc': {
        'zh-CN': '通过设置<code>list-type="picture"</code>实现图片列表缩略图显示。',
        'en-US': 'By setting<code>list-type="picture"</code>, the thumbnail display of the image list can be achieved.'
      },
      'codeFiles': ['picture-list.vue']
    },
    {
      'demoId': 'upload-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': `通过<code>preview</code>监听文件点击事件；<br/> <code>remove</code>监听文件移除事件；<br/> <code>error</code>监听文件上传失败事件；<br/>
          <code>exceed</code>监听文件超出个数限制事件；<br/> <code>progress</code>监听文件上传过程事件；<br/> <code>change</code>监听文件改变事件（文件改变涵盖文件添加、上传成功和上传失败）；<br/>
          <code>success</code>监听文件上传成功事件；<br/> <code>hash-progress</code>监听文件上传生成hash值事件。`,
        'en-US': `Listen for file click events through<code>preview</code>; <br /><code>remove</code>Listen for file removal events; <br /><code>error</code>Listen for file upload failure events;<br />
        <code>exceeded</code>Listen for events where the number of files exceeds the limit; <br/><code>progress</code>Listen for file upload process events;<br/> <code>change</code>Listen for file change events (file changes include file addition, successful upload, and failed upload);<br />
        <code>success</code>Listen for file upload success events;<br/> <code>hash-progress</code>Listen for file upload to generate hash value events.`
      },
      'codeFiles': ['upload-events.vue']
    },
    {
      'demoId': 'clear-files',
      'name': { 'zh-CN': '手动清空列表', 'en-US': 'Manually clear the list' },
      'desc': {
        'zh-CN':
          '通过<code>clearFiles</code>实例方法实现清空已上传的文件列表（注意：该方法不支持在<code>before-upload</code> 中调用）。',
        'en-US':
          'Clear the list of uploaded files through the<code>clearFiles</code>instance method (note: this method does not support calling in<code>before-upload</code>).'
      },
      'codeFiles': ['clear-files.vue']
    },
    {
      'demoId': 'abort-quest',
      'name': { 'zh-CN': '手动取消上传请求', 'en-US': 'Manually cancel the upload request' },
      'desc': {
        'zh-CN': '通过<code>abort</code>实例方法取消上传请求。',
        'en-US': 'Cancel the upload request through the<code>abort</code>instance method.'
      },
      'codeFiles': ['abort-quest.vue']
    },
    {
      'demoId': 'custom-upload-tip',
      'name': { 'zh-CN': '定义上传提示', 'en-US': 'Customized Upload Prompt' },
      'desc': {
        'zh-CN':
          '通过<code>tip</code>插槽自定义上传提示，<code>re-uploadable</code>启用重新上传功能，<code>re-upload-tip</code>自定义重新上传提示的左侧文字。',
        'en-US':
          'Customize the upload prompt through the<code>tip</code>slot, <code>re-uploadable</code>enable the re upload function, and <code>re-upload-tip</code>customize the left text of the re upload prompt.'
      },
      'codeFiles': ['custom-upload-tip.vue']
    },
    {
      'demoId': 'form-validation',
      'name': { 'zh-CN': '表单校验', 'en-US': 'Form verification' },
      'desc': {
        'zh-CN': '通过<code>form</code>表单结合，实现表单校验。',
        'en-US': 'By combining<code>form</code>forms, form validation is achieved.'
      },
      'codeFiles': ['form-validation.vue']
    },
    {
      'demoId': 'upload-user-head',
      'name': { 'zh-CN': '用户头像上传', 'en-US': 'User avatar upload' },
      'desc': {
        'zh-CN': '通过<code>URL.createobjectURL</code>创建出文件的URL对象，用来展示头像。',
        'en-US': 'Create a URL object for the file through<code>URL.createobjectURL</code>to display the avatar.'
      },
      'codeFiles': ['upload-user-head.vue']
    },
    {
      'demoId': 'image-size',
      'name': { 'zh-CN': '获取图片的原始尺寸', 'en-US': 'Obtain the original size of the image' },
      'desc': {
        'zh-CN': '通过<code>FileReader.readAsDataURL()</code>读取文件中的内容，获取图片的原始尺寸。',
        'en-US':
          'Read the content of the file through<code>FileReader. readAsDataURL()</code>to obtain the original size of the image.'
      },
      'codeFiles': ['image-size.vue']
    }
  ],
  apis: [
    {
      'name': 'file-upload',
      'type': 'component',
      'props': [
        {
          'name': 'accept',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '限制文件类型（thumbnail-mode 模式下此参数无效）',
            'en-US': 'Restrict the types of files. This parameter is invalid in thumbnail-mode mode'
          },
          'demoId': 'accept-file-image'
        },
        {
          'name': 'action',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '上传的地址，必填参数',
            'en-US': 'The address for uploading files, required parameter'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'auto-upload',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否在选取文件后立即进行上传',
            'en-US': 'Whether to upload a file immediately after it is selected'
          },
          'demoId': 'manual-upload'
        },
        {
          'name': 'before-remove',
          'type': '(file: File, fileList: File[]) => boolean | Promise',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '删除文件前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除',
            'en-US':
              'Hook before deleting files. The parameters are the uploaded files and file list. If false is returned or Promise is returned and rejected, the deletion stops'
          },
          'demoId': 'prevent-delete-file'
        },
        {
          'name': 'before-upload',
          'type': '(file: File) => boolean | Promise',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传',
            'en-US':
              'Hook before uploading a file. The parameter is the file to be uploaded. If false is returned or Promise is returned and rejected, the upload stops'
          },
          'demoId': 'prevent-upload-file'
        },
        {
          'name': 'data',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '上传时附带的额外参数', 'en-US': 'Extra parameters attached during upload' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Is it disabled' },
          'demoId': 'disabled'
        },
        {
          'name': 'drag',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否启用拖拽上传', 'en-US': 'Whether to enable drag-and-drop upload' },
          'demoId': 'drag-upload'
        },
        {
          'name': 'file-list',
          'type': 'array',
          'defaultValue': '',
          'desc': {
            'zh-CN': "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
            'en-US': "List of uploaded files, for example, [{name:'food.jpg', url:' https://xxx.cdn.com/xxx.jpg '}]"
          },
          'demoId': 'upload-file-list'
        },
        {
          'name': 'headers',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "设置上传的请求头部;通过设置 headers 为头部请求信息, 例如 ①:headers='headers' ②headers:{'Accept-Language': 'en,zh',Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}",
            'en-US':
              "Set the upload request header. You can set headers to the header request information, for example, 1:headers='headers'2headers:{'Accept-Language':'en,zh', Authorization:' Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}"
          },
          'demoId': 'upload-request'
        },
        {
          'name': 'http-request',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "覆盖默认的上传行为，可以自定义上传的实现;httpRequest: () => {this.$service.network.post('localhost:3000/tiny/upload', ['data']).then(res => {// 此处服务为自定义服务，由于 TinyVue 官网为 Mock 上传不能执行上传})}",
            'en-US':
              "Overwrite the default upload behavior. You can customize the upload implementation. httpRequest: () => {this.$service.network.post . ('localhost:3000/tiny/upload',['data']) .then (Res => {//The service is a customized service. The upload cannot be performed because the TinyVue official website uses Mock upload.}) }"
          },
          'demoId': 'http-request'
        },
        {
          'name': 'is-hidden',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '达到最大上传个数时，是否隐藏上传按钮，默认不隐藏',
            'en-US':
              'Whether to hide the upload button when the number of uploaded files reaches the maximum. By default, the button is not hidden'
          },
          'demoId': 'max-file-count'
        },
        {
          'name': 'limit',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大允许上传个数', 'en-US': 'Maximum number of files that can be uploaded' },
          'demoId': 'max-file-count'
        },
        {
          'name': 'list-type',
          'type': 'string',
          'defaultValue': 'text',
          'desc': {
            'zh-CN': '文件列表的类型;该属性的可选值为 text / picture / picture-card / thumb',
            'en-US': 'File list type; The optional values of this attribute are text / picture / picture-card / thumb'
          },
          'demoId': 'picture-card'
        },
        {
          'name': 'max-name-length',
          'type': 'number',
          'defaultValue': '20',
          'desc': {
            'zh-CN': '列表项的文件名最大字符数，默认超出20个字符隐藏',
            'en-US':
              'The maximum number of characters in the file name of a list item, which is hidden if it exceeds 20 characters by default'
          },
          'demoId': 'paste-upload'
        },
        {
          'name': 'merge-service',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '配置 merge-service 为true 且开启多文件上传走默认服务会将多个上传服务合并为一个服务上传',
            'en-US':
              'If merge-service is set to true and multiple files are uploaded using the default service, multiple upload services are combined into one service'
          },
          'demoId': ''
        },
        {
          'name': 'multiple',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否支持多选文件', 'en-US': 'Specifies whether multiple files can be selected' },
          'demoId': 'multiple-file'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': 'file',
          'desc': { 'zh-CN': '上传的文件字段名', 'en-US': 'Field name of the uploaded file' },
          'demoId': 'upload-file-list-slot'
        },
        {
          'name': 'open-download-file',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否开启点击下载文件，默认不开启',
            'en-US': 'Whether to enable file download by clicking. By default, this function is disabled'
          },
          'demoId': 'upload-file-list'
        },
        {
          'name': 'paste-upload',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否启用粘贴键快捷上传功能【3.11.0版本新增】',
            'en-US': 'Is the paste key quick upload function enabled [New in version 3.11.0]'
          },
          'demoId': 'paste-upload'
        },
        {
          'name': 're-uploadable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否启用重新上传功能【3.12.0版本新增】',
            'en-US': 'Is the re upload function enabled [New in version 3.12.0]'
          },
          'demoId': 'custom-upload-tip'
        },
        {
          'name': 're-upload-tip',
          'type': '(count: number) => string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义重新上传的左侧提示文字，需要与re-uploadable搭配使用【3.12.0版本新增】',
            'en-US':
              'Customize the left prompt for re uploading, which needs to be used in conjunction with re uploadable [added in version 3.12.0]'
          },
          'demoId': 'custom-upload-tip'
        },
        {
          'name': 'show-file-list',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示已上传文件列表', 'en-US': 'Whether to display the list of uploaded files' },
          'demoId': 'upload-file-list'
        },
        {
          'name': 'thumb-option',
          'type': 'IThumbOption',
          'typeAnchorName': 'IThumbOption',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件列表的显示类型为 thumb 时的相关配置',
            'en-US': 'Related configurations when the display type of the file list is thumb'
          },
          'demoId': 'upload-file-list-thumb'
        },
        {
          'name': 'with-credentials',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '支持发送 cookie 凭证信息', 'en-US': 'Cookie credential information can be sent' },
          'demoId': 'upload-request'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(file: File, fileList: File[]) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发',
            'en-US':
              'The event triggered when the file status changes, including adding a file, successfully uploading, and failing to upload, will be triggered'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'drop-error',
          'type': '(file: File) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖拽文件失败时触发的事件，开启拖拽时有效；// file 为上传失败文件信息',
            'en-US':
              'Event triggered when dragging a file fails, effective when dragging is enabled// File is the information of the failed upload file'
          },
          'demoId': 'drag-upload'
        },
        {
          'name': 'error',
          'type': '(message: ProgressEvent, file: File, fileList: File[]) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件上传失败时触发的事件；// message 为错误信息事件对象，file 为当前上传失败文件信息，fileList为上传成功file数组',
            'en-US':
              'Event triggered when file upload fails// Message is the error message event object, file is the current upload failure file information, and fileList is the upload success file array'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'exceed',
          'type': '(files: File | File[], fileList: File[]) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件超出个数限制时触发的事件；// files 为上传的文件',
            'en-US': 'Event triggered when the number of files exceeds the limit// Files are uploaded files'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'hash-progress',
          'type': '(arg: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件上传生成hash值触发的事件；// arg为生成的进度值',
            'en-US': 'Event triggered by file upload to generate hash value// Arg is the generated progress value'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'preview',
          'type': '(file: File) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击文件列表中已上传的文件时触发的事件',
            'en-US': 'Event triggered when clicking on an uploaded file in the file list'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'progress',
          'type': '(message: ProgressEvent, file: File) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件上传时触发的事件；// message 为进度条事件对象',
            'en-US': 'Event triggered during file upload// Message is the progress bar event object'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'remove',
          'type': '(file: File) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN': '从文件列表移除文件时触发的事件；// file 为当前移除的文件信息',
            'en-US':
              'Event triggered when removing a file from the file list// File is the information of the currently removed file'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'success',
          'type': '(res: ProgressEvent, file: File, fileList: File[]) => void',
          'typeAnchorName': 'File',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件上传成功时触发的事件；// res 为上传成功后的响应信息事件对象，file 为当前上传的文件，fileList 为所有上传文件数组',
            'en-US':
              'Event triggered when the file is successfully uploaded// Res is the response information event object after successful upload, file is the current uploaded file, and fileList is an array of all uploaded files'
          },
          'demoId': 'upload-events'
        }
      ],
      'slots': [
        {
          'name': 'file',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义文件显示内容', 'en-US': 'Custom File Display Content' },
          'demoId': 'upload-file-list-slot'
        },
        {
          'name': 'tip',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '提示说明文字', 'en-US': 'Prompt Description' },
          'demoId': 'custom-upload-tip'
        },
        {
          'name': 'trigger',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '触发文件选择框的内容', 'en-US': 'Content of the triggering file selection box' },
          'demoId': 'custom-trigger'
        }
      ],
      'methods': [
        {
          'name': 'abort',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '取消上传请求', 'en-US': 'Cancel the upload request' },
          'demoId': 'abort-quest'
        },
        {
          'name': 'clearFiles',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
            'en-US': 'Clear the list of uploaded files. (This method cannot be invoked in before-upload)'
          },
          'demoId': 'clear-files'
        },
        {
          'name': 'submit',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '手动上传文件列表', 'en-US': 'List of manually uploaded files' },
          'demoId': 'manual-upload'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IThumbOption',
      type: 'interface',
      code: `
interface IThumbOption {
  width: number // 弹窗宽度，默认270
  showDownload: boolean // 是否显示下载按钮，默认false
  showDel: boolean // 是否显示删除按钮，布尔false
  showTooltip: boolean // 文件名超出隐藏显示时是否启用tip，默认false
  popperClass: string // 弹窗列表自定义类名
  downloadFile: (file) => void // 点击下载按钮执行函数
  icon: string | Component // 列表结果前 icon ，默认为 'icon-attachment'
}
      `
    },
    {
      name: 'File',
      type: 'interface',
      code: `
interface file {
  name: string // 上传文件名
  percentage: string // 上传进度百分比
  raw: object // 文件信息
  size: number // 文件大小
  status: string // 上传状态
  uid: string // uid 
}
      `
    }
  ]
}
