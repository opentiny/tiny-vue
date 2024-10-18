export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic usage'
      },
      desc: {
        'zh-CN': '通过 <code>action</code> 设置上传的服务器地址， <code>data</code> 设置上传时附带的额外参数。',
        'en-US':
          'Set the server address for uploading through <code>action</code> , and set the additional parameters that come with uploading through <code>data</code> .'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '通过 <code>disabled</code> 设置禁用功能。',
        'en-US': 'Disable the function by setting <code>disabled</code> .'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'multiple-file',
      name: {
        'zh-CN': '文件多选',
        'en-US': 'Multiple file selection'
      },
      desc: {
        'zh-CN': '通过 <code>multiple</code> 设置实现文件多选，默认单选。',
        'en-US': 'By setting <code>multiple</code> , multiple files can be selected, with default single selection.'
      },
      codeFiles: ['multiple-file.vue']
    },
    {
      demoId: 'manual-upload',
      name: {
        'zh-CN': '手动上传',
        'en-US': 'Manual upload'
      },
      desc: {
        'zh-CN': '通过 <code>auto-upload</code> 取消自动上传，配合 <code>submit</code> 实例方法手动上传。',
        'en-US':
          'Cancel automatic upload through <code>auto-upload</code> and manually upload in conjunction with the <code>submit</code> instance method.'
      },
      codeFiles: ['manual-upload.vue']
    },
    {
      demoId: 'accept-file-image',
      name: {
        'zh-CN': '限制文件类型',
        'en-US': 'Restrict file types'
      },
      desc: {
        'zh-CN': '通过 <code>accept</code> 设置限制上传文件的格式。',
        'en-US': 'Limit the format of uploaded files by setting <code>accept</code> .'
      },
      codeFiles: ['accept-file-image.vue']
    },
    {
      demoId: 'max-file-count',
      name: {
        'zh-CN': '最大上传数',
        'en-US': 'Maximum number of uploads'
      },
      desc: {
        'zh-CN':
          '通过 <code>limit</code> 设置限制上传文件的个数， <code>is-hidden</code> 设置达到最大上传数时是否隐藏上传按钮。',
        'en-US':
          'Set a limit on the number of uploaded files by <code>limit</code> , and <code>is-hidden</code> whether to hide the upload button when the maximum number of uploads is reached.'
      },
      codeFiles: ['max-file-count.vue']
    },
    {
      demoId: 'custom-prefix',
      name: {
        'zh-CN': '文件选择前确认',
        'en-US': 'Confirm before selecting a file.'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-add-file</code> 执行文件选择之前的钩子，若返回 <code>false</code> 或者返回 <code>Promise</code> 且被 <code>reject</code>，则停止添加文件。\n          如果不用以上 2 种方式，也可以通过执行回调函数继续进行上传，参数为回调函数。',
        'en-US':
          'Use <code>before-add-file</code> to execute the hook before adding a file. If <code>false</code> is returned or <code>Promise</code> is returned and <code>reject</code> is returned, then stop adding files.\n        If you do not use the preceding two methods, you can continue the upload by executing the callback function. The parameter is the callback function.'
      },
      codeFiles: ['custom-prefix.vue']
    },
    {
      demoId: 'before-upload-limit',
      name: {
        'zh-CN': '自定义上传前限制',
        'en-US': 'Custom pre upload restrictions'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-upload</code> 执行上传文件前的操作，对文件类型和大小做限制，返回 <code>false</code> 或 <code>reject</code> 则阻止上传。',
        'en-US':
          'Use<code>before-upload</code>to perform the operation before uploading a file, and limit the file type and size , and return <code>false</code> or <code>reject</code> to block the upload.'
      },
      codeFiles: ['before-upload-limit.vue']
    },
    {
      demoId: 'prevent-delete-file',
      name: {
        'zh-CN': '阻止删除文件',
        'en-US': 'Prevent deleting files'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-remove</code> 执行移除文件前的操作，返回 <code>false</code> 或 <code>reject</code> 则阻止删除。',
        'en-US':
          'Perform the operation before removing the file by <code>before-remove</code> , and return <code>false</code> or <code>reject</code> to prevent deletion.'
      },
      codeFiles: ['prevent-delete-file.vue']
    },
    {
      demoId: 'upload-request',
      name: {
        'zh-CN': '定义请求头部',
        'en-US': 'Custom request header'
      },
      desc: {
        'zh-CN':
          '通过 <code>headers</code> 配置上传请求头部信息， <code>with-credentials</code> 设置允许发送 cookie 凭证信息。',
        'en-US':
          'Configure the upload request header information through <code>headers</code> , and set the permission to send cookie credential information through <code>with-credentials</code> settings.'
      },
      codeFiles: ['upload-request.vue']
    },
    {
      demoId: 'http-request',
      name: {
        'zh-CN': '覆盖默认请求',
        'en-US': 'Override the default request'
      },
      desc: {
        'zh-CN': '通过 <code>http-request</code> 配置覆盖默认的上传行为，自定义上传的实现。',
        'en-US':
          'Configure to override the default upload behavior and customize the upload implementation through <code>http-request</code> configuration.'
      },
      codeFiles: ['http-request.vue']
    },
    {
      demoId: 'drag-upload',
      name: {
        'zh-CN': '拖拽文件上传',
        'en-US': 'Dragging uploading files'
      },
      desc: {
        'zh-CN':
          '通过 <code>drag</code> 设置能否拖拽文件上传，若配置了 <code>accept</code> 属性，则通过监听 <code>drop-error</code> 事件来操作不合规的拖拽文件信息。',
        'en-US':
          'By setting whether files can be dragged and uploaded through <code>drag</code> , if the <code>accept</code> attribute is configured, non compliant drag file information can be operated by listening for <code>drop-error</code> events.'
      },
      codeFiles: ['drag-upload.vue']
    },
    {
      demoId: 'paste-upload',
      name: {
        'zh-CN': '粘贴上传',
        'en-US': 'Paste upload'
      },
      desc: {
        'zh-CN':
          '通过 <code>paste-upload</code> 设置能否粘贴文件上传， <code>max-name-length</code> 限制文件名显示的字符数。',
        'en-US':
          'Set whether to paste and upload files through <code>paste-upload</code> , and limit the number of characters displayed in file names <code>max-name-length</code> .'
      },
      codeFiles: ['paste-upload.vue']
    },
    {
      demoId: 'upload-file-list',
      name: {
        'zh-CN': '文件列表',
        'en-US': 'Uploaded file list'
      },
      desc: {
        'zh-CN':
          '通过 <code>file-list</code> 设置上传的文件列表，也可通过 <code>:show-file-list="false"</code> 关闭列表的显示； <code>open-download-file</code> 设置文件是否可下载。',
        'en-US':
          'Set the list of uploaded files through <code>file-list</code> , or turn off the display of the list through <code>: show-file-list="false"</code> ; <code>open-download-file</code> Set whether the file is downloadable.'
      },
      codeFiles: ['upload-file-list.vue']
    },
    {
      demoId: 'file-size',
      name: {
        'zh-CN': '文件大小限制',
        'en-US': 'Uploaded file size limit'
      },
      desc: {
        'zh-CN': '<p>通过 <code>file-size</code> 配置上传文件的大小。<p>',
        'en-US': '<p>Use <code>file-size</code> to configure the size of the uploaded file.</p>'
      },
      codeFiles: ['file-size.vue']
    },
    {
      demoId: 'file-size-array',
      name: {
        'zh-CN': '文件大小范围',
        'en-US': 'Uploaded file size range'
      },
      desc: {
        'zh-CN': '<p>通过 <code>file-size</code> 配置为数组类型限制上传文件的大小范围。<p>',
        'en-US': '<p>Set <code>file-size</code> to an array to limit the size of the file to be uploaded.</p>'
      },
      codeFiles: ['file-size-array.vue']
    },
    {
      demoId: 'prompt-tip',
      name: {
        'zh-CN': 'tip提示',
        'en-US': 'tip Hints'
      },
      desc: {
        'zh-CN': '<p>通过 <code>propmtTip</code> 为 `true` 设置提示为tip类型，悬浮图标时显示tip提示。<p>',
        'en-US':
          '<p>Set the prompt to the tip type by setting <code>propmtTip</code> to `true`. The tip prompt is displayed when the icon is suspended.</p>'
      },
      codeFiles: ['prompt-tip.vue']
    },
    {
      demoId: 'upload-file-list-slot',
      name: {
        'zh-CN': '定义文件列表',
        'en-US': 'Custom file list'
      },
      desc: {
        'zh-CN': '通过 <code>name</code> 设置上传的文件字段名， <code>file</code> 插槽自定义文件列表。',
        'en-US':
          'Set the field name of the uploaded file through <code>name</code> , and customize the file list for the <code>file</code> slot.'
      },
      codeFiles: ['upload-file-list-slot.vue']
    },
    {
      demoId: 'upload-file-list-thumb',
      name: {
        'zh-CN': '列表弹窗显示',
        'en-US': 'List pop-up display'
      },
      desc: {
        'zh-CN':
          '通过 <code>list-type="thumb"</code> 开启文件列表弹窗显示， <code>thumb-option</code> 设置弹窗相关数据。',
        'en-US':
          'Open the file list pop-up display by <code>list-type="thumb"</code> , and <code>thumb-option</code> set the pop-up related data.'
      },
      codeFiles: ['upload-file-list-thumb.vue']
    },
    {
      demoId: 'upload-file-list-saas',
      name: {
        'zh-CN': 'SaaS 风格文件列表',
        'en-US': 'SaaS style file list'
      },
      desc: {
        'zh-CN': '通过 <code>list-type = saas</code> 切换 SaaS 风格文件列表。',
        'en-US': 'Run the <code>list-type = saas</code> command to switch the SaaS style file list.'
      },
      codeFiles: ['upload-file-list-saas.vue']
    },
    {
      demoId: 'show-download-bar',
      name: {
        'zh-CN': '下载进度条',
        'en-US': 'Download progress bar'
      },
      desc: {
        'zh-CN':
          '通过给 file 对象设置 <code>showDownloadBar=true</code> 可以显示下载进度条， <code>downloadPercentage</code> 属性传入下载进度， <code>downloadStatus</code> 设置下载状态。',
        'en-US':
          'You can set the <code>showDownloadBar=true</code> attribute of the file object to display the download progress bar, set the <code>downloadPercentage</code> attribute to transfer the download progress, and set the <code>downloadStatus</code> to set the download status.'
      },
      codeFiles: ['show-download-bar.vue']
    },
    {
      demoId: 'picture-card',
      name: {
        'zh-CN': '照片墙',
        'en-US': 'Photo Wall'
      },
      desc: {
        'zh-CN':
          '通过设置 <code>list-type="picture-card"</code> 开启照片墙模式， <code>preview</code> 监听此模式下的图片预览按钮的点击事件。',
        'en-US':
          'By setting <code>list-type="picture-card"</code> to enable photo wall mode, <code>preview</code> listens to the click event of the picture preview button in this mode.'
      },
      codeFiles: ['picture-card.vue']
    },
    {
      demoId: 'file-picture-card',
      name: {
        'zh-CN': '定义照片墙列表',
        'en-US': 'Custom photo wall list'
      },
      desc: {
        'zh-CN':
          '通过 <code>downloadFile</code> 实例方法实现下载功能， <code>handleRemove</code> 实例方法实现删除功能。',
        'en-US':
          'The download function is implemented through the <code>downloadFile</code> instance method, while the <code>handleRemove</code> instance method implements the deletion function.'
      },
      codeFiles: ['file-picture-card.vue']
    },
    {
      demoId: 'picture-list',
      name: {
        'zh-CN': '图片列表缩略图',
        'en-US': 'Image List Thumbnail'
      },
      desc: {
        'zh-CN': '通过设置 <code>list-type="picture"</code> 实现图片列表缩略图显示。',
        'en-US':
          'By setting <code>list-type="picture"</code> , the thumbnail display of the image list can be achieved.'
      },
      codeFiles: ['picture-list.vue']
    },
    {
      demoId: 'clear-files',
      name: {
        'zh-CN': '手动清空列表',
        'en-US': 'Manually clear the list'
      },
      desc: {
        'zh-CN':
          '通过 <code>clearFiles</code> 实例方法实现清空已上传的文件列表（注意：该方法不支持在 <code>before-upload</code> 中调用）。',
        'en-US':
          'Clear the list of uploaded files through the <code>clearFiles</code> instance method (note: this method does not support calling in <code>before-upload</code> ).'
      },
      codeFiles: ['clear-files.vue']
    },
    {
      demoId: 'abort-quest',
      name: {
        'zh-CN': '手动取消上传请求',
        'en-US': 'Manually cancel the upload request'
      },
      desc: {
        'zh-CN': '通过 <code>abort</code> 实例方法取消上传请求。',
        'en-US': 'Cancel the upload request through the <code>abort</code> instance method.'
      },
      codeFiles: ['abort-quest.vue']
    },
    {
      demoId: 'form-validation',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'Form verification'
      },
      desc: {
        'zh-CN': '通过 <code>form</code> 表单结合，实现表单校验。',
        'en-US': 'By combining <code>form</code> forms, form validation is achieved.'
      },
      codeFiles: ['form-validation.vue']
    },
    {
      demoId: 'upload-user-head',
      name: {
        'zh-CN': '用户头像上传',
        'en-US': 'User avatar upload'
      },
      desc: {
        'zh-CN': '通过 <code>URL.createobjectURL</code> 创建出文件的URL对象，用来展示头像。',
        'en-US': 'Create a URL object for the file through <code>URL.createobjectURL</code> to display the avatar.'
      },
      codeFiles: ['upload-user-head.vue']
    },
    {
      demoId: 'image-size',
      name: {
        'zh-CN': '获取图片原始尺寸',
        'en-US': 'Obtain the original size of the image'
      },
      desc: {
        'zh-CN': '通过 <code>FileReader.readAsDataURL()</code> 读取文件中的内容，获取图片的原始尺寸。',
        'en-US':
          'Read the content of the file through <code>FileReader. readAsDataURL()</code> to obtain the original size of the image.'
      },
      codeFiles: ['image-size.vue']
    },
    {
      demoId: 'custom-trigger',
      name: {
        'zh-CN': '触发源插槽',
        'en-US': 'Trigger source slot'
      },
      desc: {
        'zh-CN': '通过 <code>trigger</code> 插槽自定义文件选择触发源的内容，有触发文件选项框弹出的功能。',
        'en-US':
          'Select the content of the trigger source through the <code>trigger</code> slot customization file, and there is a function to pop up the trigger file option box.'
      },
      codeFiles: ['custom-trigger.vue']
    },
    {
      demoId: 'custom-upload-tip',
      name: {
        'zh-CN': '定义上传提示',
        'en-US': 'Customized Upload Prompt'
      },
      desc: {
        'zh-CN':
          '通过 <code>tip</code> 插槽自定义上传提示， <code>re-uploadable</code> 启用重新上传功能， <code>re-upload-tip</code> 自定义重新上传提示的左侧文字。',
        'en-US':
          'Customize the upload prompt through the <code>tip</code> slot, <code>re-uploadable</code> enable the re upload function, and <code>re-upload-tip</code> customize the left text of the re upload prompt.'
      },
      codeFiles: ['custom-upload-tip.vue']
    },
    {
      demoId: 'encrypt-config',
      name: {
        'zh-CN': '水印和加密',
        'en-US': 'Watermarking and Encryption'
      },
      desc: {
        'zh-CN': '通过 <code>encrypt-config</code> 开启水印和加密弹窗配置。',
        'en-US': 'Use <code>encrypt-config</code> to enable the watermark and encryption pop-up window configuration.'
      },
      codeFiles: ['encrypt-config.vue']
    },
    {
      demoId: 'upload-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><code>preview</code> 监听文件点击事件；<br/> <code>remove</code> 监听文件移除事件；<br/> <code>error</code> 监听文件上传失败事件；<br/>\n          <code>exceed</code> 监听文件超出个数限制事件；<br/> <code>progress</code> 监听文件上传过程事件；<br/> <code>change</code> 监听文件改变事件（文件改变涵盖文件添加、上传成功和上传失败）；<br/>\n          <code>success</code> 监听文件上传成功事件；<br/> <code>hash-progress</code> 监听文件上传生成hash值事件。</div>',
        'en-US':
          '<div class="tip custom-block"><code>preview</code> Listen for file click events; <br /> <code>remove</code> Listen for file removal events; <br /> <code>error</code> Listen for file upload failure events;<br />\n        <code>exceeded</code> Listen for events where the number of files exceeds the limit; <br/> <code>progress</code> Listen for file upload process events;<br/> <code>change</code> Listen for file change events (file changes include file addition, successful upload, and failed upload);<br />\n        <code>success</code> Listen for file upload success events;<br/> <code>hash-progress</code> Listen for file upload to generate hash value events.</div>'
      },
      codeFiles: ['upload-events.vue']
    }
  ]
}
