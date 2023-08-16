export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>属性 action(type：String) 上传服务器地址。</p>\n',
        'en-US': '<p>Attribute action (type: String) upload server address. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN': '<p>可选值为<code>large</code>，<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US':
          '<p>The options are <code>large</code>, <code>medium</code>, <code>small</code>, and <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'accept-file-image',
      'name': { 'zh-CN': '可上传的文件类型', 'en-US': 'File types that can be uploaded' },
      'desc': {
        'zh-CN': '<p>通过配置 accept(image) 来限制上传文件的格式为 image</p>\n',
        'en-US': '<p>You can configure accept(image) to restrict the format of uploaded files to image</p>\n'
      },
      'codeFiles': ['accept-file-image.vue']
    },
    {
      'demoId': 'manual-upload',
      'name': { 'zh-CN': '手动上传', 'en-US': 'Manual Upload' },
      'desc': {
        'zh-CN': '<p>通过 action 配置上传地址，通过 submit 设置手动上传</p>\n',
        'en-US': '<p>Configure the upload address through action and manually upload through submit</p>\n'
      },
      'codeFiles': ['manual-upload.vue']
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
      'demoId': 'prevent-upload-file',
      'name': { 'zh-CN': '阻止上传文件', 'en-US': 'Do not upload files' },
      'desc': {
        'zh-CN': '<p>before-upload（上传前回调事件）,方法里面 return true/false，表示是否可以进行上传文件</p>\n',
        'en-US':
          '<p>before-upload (callback event before upload). In the method, return true/false indicates whether files can be uploaded.</p>\n'
      },
      'codeFiles': ['prevent-upload-file.vue']
    },
    {
      'demoId': 'upload-request',
      'name': { 'zh-CN': '上传请求', 'en-US': 'Upload Request' },
      'desc': {
        'zh-CN': '<p>可通过配置 action 为上传地址，可通过配置 headers 为头部请求信息</p>\n',
        'en-US': '<p>You can set action to the upload address and headers to the header request information</p>\n'
      },
      'codeFiles': ['upload-request.vue']
    },
    {
      'demoId': 'mini-mode',
      'name': { 'zh-CN': 'mini 模式', 'en-US': 'mini mode' },
      'desc': {
        'zh-CN': '<p>\n可通过配置 mini-mode，设置显示 mini 模式</p>\n',
        'en-US': '<p>\nYou can configure mini-mode to set the display mode.</p>\n'
      },
      'codeFiles': ['mini-mode.vue']
    },
    {
      'demoId': 'drag-upload',
      'name': { 'zh-CN': '是否可以拖拽文件上传', 'en-US': 'Whether files can be uploaded by dragging' },
      'desc': {
        'zh-CN':
          '<p>可配置 <code>drag(type:boolean)</code>，来控制组件是否可以拖拽文件上传，如果配置了 <code>accept</code> 属性，可通过 <code>@drop-error</code> 事件获取不合规的拖拽文件。</p>\n',
        'en-US':
          '<p> <code>drag(type:boolean)</code> can be configured to control whether a component can drag files to upload. If the <code>accept</code> attribute is configured, the <code>@drop-error</code> event can be used to obtain non-compliant dragged files. </p>\n'
      },
      'codeFiles': ['drag-upload.vue']
    },
    {
      'demoId': 'drag-select-file',
      'name': { 'zh-CN': '拖拽上传', 'en-US': 'Drag Upload' },
      'desc': {
        'zh-CN': '<p>可配置drag(type:boolean)，来控制组件是否可以拖拽文件</p>\n',
        'en-US': '<p>The drag(type:boolean) parameter can be set to control whether the component can drag files.</p>\n'
      },
      'codeFiles': ['drag-select-file.vue']
    },
    {
      'demoId': 'upload-file-list',
      'name': { 'zh-CN': '上传的文件列表', 'en-US': 'Uploaded File List' },
      'desc': {
        'zh-CN': '<p>通过 <code>file</code> 插槽自定义文件列表</p>\n',
        'en-US':
          '<p>You can use <code>show-file-list</code> to configure whether to display the list of uploaded files. The default value is true. This parameter must be used together with file-list.\nYou can configure <code>:file-list (type: Object) </code> to display the name and address of the uploaded file</p>\n'
      },
      'codeFiles': ['upload-file-list.vue']
    },
    {
      'demoId': 'upload-file-list-slot',
      'name': { 'zh-CN': '自定义文件列表', 'en-US': 'User-defined File List' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-file-list</code> 配置是否显示是否显示已上传文件列表，默认值为 true ，需要与 file-list 同时使用\n可配置 <code>:file-list（type：Object）</code>来显示已上传的文件名和地址</p>\n',
        'en-US':
          '<p>You can use <code>show-file-list</code> to configure whether to display the list of uploaded files. The default value is true and must be used together with file-list.\nYou can configure <code>:file-list (type: Object) </code> to display the name and address of the uploaded file</p>\n'
      },
      'codeFiles': ['upload-file-list-slot.vue']
    },
    {
      'demoId': 'upload-file-list-thumb',
      'name': { 'zh-CN': '上传的文件列表弹出显示', 'en-US': 'The list of uploaded files is displayed.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>list-type = thumb</code> 开启文件列表弹窗显示,<code>thumbOption</code> 设置弹窗相关数据；</p>\n',
        'en-US':
          '<p>Use <code>list-type = thumb</code> to enable the display of the file list pop-up window, and <code>thumbOption</code> to set the data related to the pop-up window. </p>\n'
      },
      'codeFiles': ['upload-file-list-thumb.vue']
    },
    {
      'demoId': 'custom-upload-request',
      'name': { 'zh-CN': '自定义上传请求', 'en-US': 'Customized upload request' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>headers</code> ，设置自定义上传请求头信息</p>\n',
        'en-US': '<p>Configure <code>headers</code> to customize the upload request header information</p>\n'
      },
      'codeFiles': ['custom-upload-request.vue']
    },
    {
      'demoId': 'http-request',
      'name': { 'zh-CN': '覆盖默认请求', 'en-US': 'Override the default request' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>http-request</code> ，覆盖默认的上传行为，可以自定义上传的实现</p>\n',
        'en-US':
          '<p>You can configure <code>http-request</code> to overwrite the default upload behavior. You can customize the upload implementation</p>\n'
      },
      'codeFiles': ['http-request.vue']
    },
    {
      'demoId': 'upload-limit',
      'name': { 'zh-CN': '最大上传限制', 'en-US': 'Maximum Upload Limit' },
      'desc': {
        'zh-CN': '<p>可配置:before-upload（上传前事件回调），对文件类型和大小做限制</p>\n',
        'en-US':
          '<p>Configurable: before-upload (event callback before upload), restricting the file type and size</p>\n'
      },
      'codeFiles': ['upload-limit.vue']
    },
    {
      'demoId': 'picture-card',
      'name': { 'zh-CN': '照片墙', 'en-US': 'Photo Wall' },
      'desc': {
        'zh-CN': "<p>可配置list-type = 'picture-card'开启照片墙模式</p>\n",
        'en-US': "<p>Set list-type to 'picture-card' to enable the photo wall mode</p>\n"
      },
      'codeFiles': ['picture-card.vue']
    },
    {
      'demoId': 'file-picture-card',
      'name': { 'zh-CN': '文件缩略图', 'en-US': 'File Thumbnail' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['file-picture-card.vue']
    },
    {
      'demoId': 'picture-list',
      'name': { 'zh-CN': '图片列表缩略图', 'en-US': 'Image List Thumbnail' },
      'desc': {
        'zh-CN': '<p>\n可通过配置list-type=&quot;picture&quot;，来实现图片列表缩略图显示</p>\n',
        'en-US': '<p>\nYou can set list-type to &quot;picture&quot; to display the picture list thumbnail</p>\n'
      },
      'codeFiles': ['picture-list.vue']
    },
    {
      'demoId': 'max-file-count',
      'name': { 'zh-CN': '最大上传文件数', 'en-US': 'Maximum number of files to be uploaded' },
      'desc': {
        'zh-CN': '<p>\n可通过配置limit（type:Number，大于0的整数）来限制上传文件的个数</p>\n',
        'en-US':
          '<p>\nYou can set limit (type:Number, an integer greater than 0) to limit the number of files to be uploaded.</p>\n'
      },
      'codeFiles': ['max-file-count.vue']
    },
    {
      'demoId': 'multiple-file',
      'name': { 'zh-CN': '文件多选', 'en-US': 'Multiple File Selection' },
      'desc': {
        'zh-CN': "<p>文件选择默认单选\n可配置multiple = 'true' 实现文件多选</p>\n",
        'en-US':
          "<p>The default file selection is single. \nYou can set multiple to'true' to select multiple files.</p>\n"
      },
      'codeFiles': ['multiple-file.vue']
    },
    {
      'demoId': 'custom-prefix',
      'name': { 'zh-CN': '钩子函数', 'en-US': 'Hook Function' },
      'desc': {
        'zh-CN':
          '<p><code>before-remove</code> 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。<code>before-upload</code> 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</p>\n',
        'en-US':
          '<p><code>before-remove</code>: indicates the hook before deleting files. The parameters are the uploaded files and file list. If false is returned or Promise is returned and rejected, the deletion stops. <code>before-upload</code> Hook before uploading a file. The parameter is the uploaded file. If false is returned or Promise is returned and rejected, the upload stops. </p>\n'
      },
      'codeFiles': ['custom-prefix.vue']
    },
    {
      'demoId': 'upload-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p><code>preview</code> 点击文件列表中已上传的文件时触发的事件。\n<code>remove</code> 文件列表移除文件时触发的事件。\n<code>error</code> 文件上传失败时触发的事件。\n<code>exceed</code> 文件超出个数限制时触发的事件。\n<code>progress</code> 文件上传时触发的事件。\n<code>change</code> 文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发。\n<code>success</code> 文件上传成功时触发的事件。</p>\n',
        'en-US':
          '<p><code>preview</code> Event triggered when an uploaded file is clicked in the file list. \n<code>remove</code>Event triggered when a file is removed from the file list. \n<code>error</code>Event triggered when a file fails to be uploaded. \n<code>exceed</code> Event triggered when the number of files exceeds the upper limit. \n<code>progress</code>Event triggered when a file is uploaded. \n<code>change</code>This event is triggered when the file status changes. It is triggered when a file is added, uploaded successfully, or uploaded unsuccessfully. \n<code>success</code> Event triggered when a file is successfully uploaded. </p>\n'
      },
      'codeFiles': ['upload-events.vue']
    },
    {
      'demoId': 'upload-request1',
      'name': { 'zh-CN': '支持发送 cookie 凭证信息', 'en-US': 'Cookie credential information can be sent.' },
      'desc': {
        'zh-CN': "<p>可通过配置:with-credentials = 'true' 开启访问服务器携带 cookie，默认为 false 。</p>\n",
        'en-US':
          "<p>You can set with-credentials ='true' to enable the server to carry cookies. The default value is false. </p>\n"
      },
      'codeFiles': ['upload-request.vue']
    },
    {
      'demoId': 'clear-files',
      'name': { 'zh-CN': '手动清空已上传文件列表', 'en-US': 'Manually clear the list of uploaded files.' },
      'desc': {
        'zh-CN': '<p>调用组件clearFiles方法，清空已上传的文件列表（该方法不支持在 before-upload 中调用）</p>\n',
        'en-US':
          '<p>Invoke the clearFiles method of the component to clear the list of uploaded files. (This method cannot be invoked in before-upload.) </p>\n'
      },
      'codeFiles': ['clear-files.vue']
    },
    {
      'demoId': 'abort-quest',
      'name': { 'zh-CN': '手动取消上传请求', 'en-US': 'Manually cancel the upload request' },
      'desc': {
        'zh-CN': '<p>调用组件abort方法，取消上传请求</p>\n',
        'en-US': '<p>Invoke the abort method of the component to cancel the upload request</p>\n'
      },
      'codeFiles': ['abort-quest.vue']
    },
    {
      'demoId': 'custom-upload-tip',
      'name': { 'zh-CN': '自定义上传提示', 'en-US': 'Customized Upload Prompt' },
      'desc': {
        'zh-CN': '<p>可通过 tip 插槽来自定义上传提示</p>\n',
        'en-US': '<p>You can customize the upload prompt through the tip slot</p>\n'
      },
      'codeFiles': ['custom-upload-tip.vue']
    },
    {
      'demoId': 'custom-trigger',
      'name': { 'zh-CN': '自定义触发文件选项框', 'en-US': 'Customized trigger file option box' },
      'desc': {
        'zh-CN': '<p>可在组件中写一个名为trigger的插槽，来触发弹出文件选项框</p>\n',
        'en-US': '<p>You can write a slot named trigger in the component to trigger the pop-up file selection box</p>\n'
      },
      'codeFiles': ['custom-trigger.vue']
    },
    {
      'demoId': 'upload-user-head',
      'name': { 'zh-CN': '用户头像上传', 'en-US': 'User avatar upload' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['upload-user-head.vue']
    },
    {
      'demoId': 'image-size',
      'name': { 'zh-CN': '获取上传的片的原始尺寸', 'en-US': 'Obtain the original size of the uploaded video.' },
      'desc': {
        'zh-CN': '<p>\n获取上传的片的原始尺寸</p>\n',
        'en-US': '<p>\nObtain the original size of the uploaded video</p>\n'
      },
      'codeFiles': ['image-size.vue']
    }
  ],
  apis: [
    {
      'name': 'file-upload',
      'type': 'component',
      'properties': [
        {
          'name': 'action',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '上传的地址，当不配置 action 时，会生成默认网关链接',
            'en-US': 'Upload URL. If no action is configured, the default gateway link is generated.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'open-download-file',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否开启点击下载文件，默认不开启 false',
            'en-US': 'Whether to enable file download by clicking. By default, this function is disabled.'
          },
          'demoId': 'upload-file-list'
        },
        {
          'name': 'headers',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "设置上传的请求头部;可通过配置 headers 为头部请求信息, 例如 ①:headers='headers' ②headers:{'Accept-Language': 'en,zh',Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}",
            'en-US':
              "Set the upload request header. You can set headers to the header request information, for example, 1:headers='headers'2headers:{'Accept-Language':'en,zh', Authorization:' Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}"
          },
          'demoId': 'custom-upload-request'
        },
        {
          'name': 'multiple',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否支持多选文件', 'en-US': 'Specifies whether multiple files can be selected.' },
          'demoId': 'multiple-file'
        },
        {
          'name': 'data',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '上传时附带的额外参数', 'en-US': 'Extra parameters attached during upload' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name',
          'type': 'String',
          'defaultValue': '该属性的默认值为 file',
          'desc': { 'zh-CN': '上传的文件字段名', 'en-US': 'Field name of the uploaded file' },
          'demoId': 'upload-file-list'
        },
        {
          'name': 'with-credentials',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '支持发送 cookie 凭证信息', 'en-US': 'Cookie credential information can be sent.' },
          'demoId': 'upload-request1'
        },
        {
          'name': 'show-file-list',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示已上传文件列表', 'en-US': 'Whether to display the list of uploaded files' },
          'demoId': 'upload-file-list'
        },
        {
          'name': 'drag',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否启用拖拽上传', 'en-US': 'Whether to enable drag-and-drop upload' },
          'demoId': 'drag-upload'
        },
        {
          'name': 'accept',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
            'en-US': 'File type to be uploaded. This parameter is invalid in thumbnail-mode mode.'
          },
          'demoId': 'accept-file-image'
        },
        {
          'name': 'before-upload',
          'type': 'Function(file)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
            'en-US':
              'Hook before uploading a file. The parameter is the file to be uploaded. If false is returned or Promise is returned and rejected, the upload stops.'
          },
          'demoId': 'prevent-upload-file'
        },
        {
          'name': 'list-type',
          'type': 'String',
          'defaultValue': '该属性的默认值为 text',
          'desc': {
            'zh-CN': '文件列表的类型;该属性的可选值为 text / picture / picture-card / thumb',
            'en-US': 'File list type; The optional values of this attribute are text / picture / picture-card / thumb'
          },
          'demoId': 'picture-card'
        },
        {
          'name': 'thumb-option',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件列表的显示类型为 thumb 时，相关配置;popperClass 弹窗列表自定义类名;width 弹窗宽度，默认270,number类型;showDownload 是否显示下载按钮,布尔值默认为false;showDel 是否显示删除按钮,布尔值默认为false;downloadFile 点击下载按钮执行函数,开启 EDM 模式配置必要的token后即可下载，可省略该配置;show-tooltip 文件名超出隐藏显示时是否启用tip,默认值为false;列表结果前 icon,默认为 icon-attachment',
            'en-US':
              'Configure the file list when the display type is thumb. popperClass pop-up window list custom class name; width: width of the pop-up window. The default value is 270. The value is of the number type. ShowDownload indicates whether to display the download button. The default Boolean value is false. ShowDel indicates whether to display the delete button. The default Boolean value is false. DownloadFile: Click the download button to execute the function. Enable the EDM mode and configure the necessary token. This configuration can be omitted. show-tooltip: Indicates whether to enable tip when the file name exceeds the hidden value. The default value is false. The icon before the list result. The default value is icon-attachment'
          },
          'demoId': 'upload-file-list-thumb'
        },
        {
          'name': 'before-remove',
          'type': 'Function(file, fileList)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除',
            'en-US':
              'Hook before deleting files. The parameters are the uploaded files and file list. If false is returned or Promise is returned and rejected, the deletion stops.'
          },
          'demoId': 'prevent-delete-file'
        },
        {
          'name': 'auto-upload',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否在选取文件后立即进行上传',
            'en-US': 'Whether to upload a file immediately after it is selected'
          },
          'demoId': 'manual-upload'
        },
        {
          'name': 'file-list',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
            'en-US': "List of uploaded files, for example, [{name:'food.jpg', url:' https://xxx.cdn.com/xxx.jpg '}]"
          },
          'demoId': 'accept-file-image'
        },
        {
          'name': 'http-request',
          'type': 'Function',
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
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': ''
        },
        {
          'name': 'limit',
          'type': 'Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大允许上传个数', 'en-US': 'Maximum number of files that can be uploaded' },
          'demoId': 'upload-limit'
        },
        {
          'name': 'is-hidden',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '达到最大上传个数时，是否隐藏上传按钮，默认不隐藏',
            'en-US':
              'Whether to hide the upload button when the number of uploaded files reaches the maximum. By default, the button is not hidden.'
          },
          'demoId': 'upload-limit'
        },
        {
          'name': 'edm',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用 EDM 的上传下载预览功能，可在该对象里边配置上传、下载、预览功能的参数',
            'en-US':
              'To use the upload, download, and preview functions of the EDM, you can configure the upload, download, and preview parameters in the object.'
          },
          'demoId': ''
        },
        {
          'name': 'token',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用 EDM 上传下载预览所需的token,返回值为 Promise',
            'en-US': 'Token required for uploading, downloading, and previewing using EDM. The return value is Promise.'
          },
          'demoId': ''
        },
        {
          'name': 'isFolder',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '配置为 true,启用 EDM 上传文件夹的功能，最多只能上传 5 层;{edm:upload:{plugin:sha256,isFolder:true,token:()=>{}}}',
            'en-US':
              'If this parameter is set to true, the function of uploading folders is enabled. A maximum of five folders can be uploaded. {edm:upload:{plugin:sha256,isFolder:true,token:()=>{}}}'
          },
          'demoId': 'edm-folder-upload'
        },
        {
          'name': 'fileSize',
          'type': 'Number | Array',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '限制文件大,小单位为 KB;启用 EDM 上传时设置有效;当为 Number 类型时，小于该值停止上传;为数组时[min,max] 设置上传范围,值为 Number 类型；最大值不能超过 2G;设置为数组时最大值将与 EDM 服务侧设置的值做对比，取最小值',
            'en-US':
              'Restrict the file size. The unit is KB. This parameter is valid when EDM upload is enabled. When the value is of the Number type, the upload stops if the value is less than the value of this parameter. When the value is an array, [min,max] sets the upload range. The value is of the Number type. The maximum value cannot exceed 2 GB. When this parameter is set to an array, the maximum value is compared with the value set on the EDM server and the minimum value is used.'
          },
          'demoId': ''
        },
        {
          'name': 'packageToken',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置 EDM 批量打包下载的 token；配置结构为 edm:{download:packageToken:()=>{}},返回一个 Promise',
            'en-US':
              'Configure the token for EDM batch packaging and downloading. The configuration structure is edm:{download:packageToken:()=>{}} and a Promise is returned'
          },
          'demoId': ''
        },
        {
          'name': 'upload',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '配置 EDM 上传功能所需的参数,例如：edm:{upload:{plugin:sha256,token:()=>{}}},plugin 为第三方依赖可生成文档内容校验 hash 值，token为鉴权token，类型为Function,返回 Promise',
            'en-US':
              'Parameters required for configuring the EDM upload function. For example, edm:{upload:{plugin:sha256,token:()=>{}}},plugin indicates the hash value for verifying the document content generated by the third-party dependency, token indicates the authentication token, and the type is Function. Promise is returned.'
          },
          'demoId': ''
        },
        {
          'name': 'download',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置 EDM 下载功能所需的参数,例如：edm:{download:{token:()=>{}}},token为鉴权token',
            'en-US':
              'Configure the parameters required for the EDM download function. For example, edm:{download:{token:()=>{}}},token is the authentication token.'
          },
          'demoId': ''
        },
        {
          'name': 'preivew',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "配置 EDM 预览功能所需的参数,例如：edm:{preview:{plugin：util.default,previewUrl:./_index.html?appid=应用Id,packageName: 'jslib',token:()=>{}}}",
            'en-US':
              "Parameters required for configuring the EDM preview function, for example, edm:{preview:{plugin: util.default,previewUrl:./_index.html?appid= application ID,packageName:'jslib',token:()=>{}}}"
          },
          'demoId': ''
        },
        {
          'name': 'mergeService',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置 mergeService 为true 且开启多文件上传走默认服务会将多个上传服务合并为一个服务上传',
            'en-US':
              'If mergeService is set to true and multiple files are uploaded using the default service, multiple upload services are combined into one service.'
          },
          'demoId': ''
        },
        {
          'name': 'updateId',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': 'EDM 需要更新文档的 docId', 'en-US': 'DocId of the document to be updated on the EDM' },
          'demoId': ''
        },
        {
          'name': 'max-name-length',
          'type': 'Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '文件名最大的显示长度', 'en-US': 'Maximum length of a file name' },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'drop-error',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽文件失败时触发的事件，开启拖拽时有效。;dropError(arg1){\n// arg1 上传失败文件信息\n {name: 上传文件名,\npercentage: 上传进度百分比,\nraw: 文件信息,\nsize: 文件大小,\nstatus: 上传状态,\nuid: uid} \n// do something you want... }',
            'en-US':
              'This event is triggered when a file fails to be dragged. This event is valid only when the drag function is enabled. ; dropError(arg1){\n// arg1 Information about the file that fails to be uploaded.\n {name: name of the file to be uploaded, \npercentage: percentage of the upload progress, \nraw: file information, \nsize: file size, \nstatus: upload status, \nuid: uid} \n// do something you want...}'
          },
          'demoId': 'drag-upload'
        },
        {
          'name': 'preview',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '点击文件列表中已上传的文件时触发的事件;preview(arg1){\n arg1 = {name: 上传文件名,percentage: 上传进度百分比,raw: 文件信息,size: 文件大小,status: 上传状态,uid: uid}}',
            'en-US':
              'Event triggered when an uploaded file is clicked in the file list. preview(arg1){\n arg1 = {name: Upload file name, percentage: upload progress percentage, raw: file information, size: file size, status: upload status, uid: uid}}'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'remove',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '从文件列表移除文件时触发的事件;onRomove(arg1){\n //arg1当前移除的文件信息：\n{name: 上传文件名,percentage: 上传进度百分比,raw: 文件信息,size: 文件大小,status: 上传状态,uid: uid }\n// do something you want...}',
            'en-US':
              'Event triggered when a file is removed from the file list; onRomove(arg1){\n //arg1 Information about the file to be removed:\n{name: name of the file to be uploaded, percentage: percentage of the upload progress, raw: file information, size: file size, status: upload status, uid: uid}\n// do something you want...}'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'error',
          'type': 'Function(arg1,arg2,arg3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件上传失败时触发的事件;onError(arg1,arg2, arg3 ){\n arg1 = 错误信息\n arg2 = {name: 上传文件名,percentage: 上传进度百分比,raw: 文件信息,size: 文件大小,status: 上传状态,uid: uid } arg2为当前上传失败文件信息// arg3 = []  数组类型Array 上传成功file数组// do something you want...}',
            'en-US':
              'Event triggered when a file fails to be uploaded; onError(arg1, arg2, arg3){\n arg1 = error information\n arg2 = {name: upload file name, percentage: upload progress percentage, raw: file information, size: file size, status: upload status, uid: uid} arg2 is the information about the file that fails to be uploaded. // arg3 = [] Array type Array file array that is successfully uploaded. // do something you want...}'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'exceed',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件超出个数限制时触发的事件',
            'en-US': 'This event is triggered when the number of files exceeds the upper limit.'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'hash-progress',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文件上传生成hash值触发的事件',
            'en-US': 'This event is triggered when the hash value is generated during file upload.'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'download',
          'type': 'Function(arg1, arg2)',
          'defaultValue': '',
          'desc': { 'zh-CN': '文件下载时触发的事件', 'en-US': 'File download event' },
          'demoId': ''
        },
        {
          'name': 'progress',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件上传时触发的事件;progress(arg1,arg2){\narg1 =  event 对象   当前event对象\n arg2 = {name: 上传文件名,percentage: 上传进度百分比,raw: 文件信息,size: 文件大小, status: 上传状态,uid: uid }  arg2为上传的文件信息\n// do something you want...}',
            'en-US':
              'Event triggered when a file is uploaded; progress(arg1, arg2){\narg1 = event object current event object\n arg2 = {name: upload file name, percentage: upload progress percentage, raw: file information, size: file size, status: upload status, uid: uid} arg2 is the information about the uploaded file.\n// do something you want...}'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'change',
          'type': 'Function(file, fileList)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发;change(file, fileList)\n//file 当前上传成功文件信息 \n {name: 上传文件名,percentage: 上传进度百分比,raw: 文件信息,size: 文件大小,status: 上传状态,uid: uid } \n// fileList: 数组类型Array 上传成功file数\n}',
            'en-US':
              'The event is triggered when the file status changes. The event is triggered when a file is added, uploaded successfully, or uploaded unsuccessfully. change(file, fileList)\n//file Information about the file that is successfully uploaded.\n {name: file name, percentage: upload progress percentage, raw: file information, size: file size, status: upload status, uid: uid} \n// fileList: array type: number of files that are successfully uploaded.\n}'
          },
          'demoId': 'upload-events'
        },
        {
          'name': 'success',
          'type': 'Function(arg1,arg2,arg3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '文件上传成功时触发的事件;success(arg1,arg2,arg3){// arg1 = res  arg1为上传成功后的响应信息// arg2 = {name: 上传文件名,percentage: 上传进度百分比,raw: 文件信息,size: 文件大小,status: 上传状态,uid: uid}    arg2为当前上传的文件//  arg3 = [ ] arg3为所有上传文件数组// do something you want...}',
            'en-US':
              'Event triggered when a file is successfully uploaded; success(arg1, arg2, arg3){// arg1 = res arg1 indicates the response information after the upload is successful. // arg2 = {name: upload file name, percentage: upload progress percentage, raw: file information, size: file size, status: upload status, uid: uid} arg2 is the currently uploaded file // arg3 = [] arg3 is the array of all uploaded files // do something you want...}'
          },
          'demoId': 'upload-events'
        }
      ],
      'slots': [
        {
          'name': 'trigger',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '触发文件选择框的内容', 'en-US': 'Content of the triggering file selection box' },
          'demoId': 'custom-trigger'
        },
        {
          'name': 'tip',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '提示说明文字', 'en-US': 'Prompt Description' },
          'demoId': 'custom-upload-tip'
        },
        {
          'name': 'file',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义文件显示内容', 'en-US': 'Custom File Display Content' },
          'demoId': 'upload-file-list-slot'
        }
      ],
      'methods': [
        {
          'name': 'clearFiles',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
            'en-US': 'Clear the list of uploaded files. (This method cannot be invoked in before-upload.)'
          },
          'demoId': 'clear-files'
        },
        {
          'name': 'abort',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '取消上传请求', 'en-US': 'Cancel the upload request' },
          'demoId': 'abort-quest'
        },
        {
          'name': 'submit',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '手动上传文件列表', 'en-US': 'List of manually uploaded files' },
          'demoId': 'manual-upload'
        },
        {
          'name': 'downloadFile',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '下载 EDM 文件', 'en-US': 'Downloading an EDM File' },
          'demoId': ''
        },
        {
          'name': 'previewFile',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '预览 EDM 文件', 'en-US': 'Previewing an EDM File' },
          'demoId': ''
        },
        {
          'name': 'getNewTabPreviewUrl',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '预览 EDM 文件预览的 Url，返回值为 Promise',
            'en-US': 'URL for previewing the EDM file. The return value is Promise.'
          },
          'demoId': ''
        },
        {
          'name': 'handleRemove',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '手动移除 EDM 文件', 'en-US': 'Manually remove EDM file' },
          'demoId': ''
        }
      ]
    }
  ]
}
