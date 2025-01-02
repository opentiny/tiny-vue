export default {
  column: '2',
  owner: '',
  demos: [
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
      demoId: 'header-show',
      name: {
        'zh-CN': '手动上传',
        'en-US': 'Manual upload'
      },
      desc: {
        'zh-CN':
          '通过<code>header-show</code>设置是否显示头部，该属性默认为true。<code>file-title</code> 设置头部标题。',
        'en-US':
          'Set whether to display the header through<code>header show</code>, which defaults to true<code>file title</code>Set the header title.'
      },
      codeFiles: ['header-show.vue']
    },
    {
      demoId: 'file-icon-list',
      name: {
        'zh-CN': '手动上传',
        'en-US': 'Manual upload'
      },
      desc: {
        'zh-CN':
          '通过<code>file-icon-list</code>配置文件上传显示的图标路径，未配置会默认显示组件内部配置图标，<code>file-list</code>配置上传的文件列表。',
        'en-US':
          'Upload and display the icon path through the<code>file-icon-list</code>configuration file. If not configured, the internal configuration icon of the component will be displayed by default<code>file-list</code>Configure the list of uploaded files.'
      },
      codeFiles: ['file-icon-list.vue']
    },
    {
      demoId: 'accept-file',
      name: {
        'zh-CN': '限制文件类型',
        'en-US': 'Restrict file types'
      },
      desc: {
        'zh-CN': '通过 <code>accept</code> 设置限制上传文件的格式只能为<code>.doc</code><code>.docx</code>。',
        'en-US':
          'Set a limit on the format of uploaded files to only be<code>. doc</code><code>. docx</code>through<code>accept</code>.'
      },
      codeFiles: ['accept-file.vue']
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
      demoId: 'prevent-delete-file',
      name: {
        'zh-CN': '阻止删除文件',
        'en-US': 'Prevent deleting files'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-remove</code> 执行移除文件前的操作，返回 <code>false</code> 或 <code>reject</code> 则阻止删除。<code>success-statistics</code>设置是否展示上传成功数量。',
        'en-US':
          'Perform the operation before removing the file by <code>before-remove</code> , and return <code>false</code> or <code>reject</code> to prevent deletion.<code>success statistics</code>Set whether to display the number of successful uploads.</code>'
      },
      codeFiles: ['prevent-delete-file.vue']
    },
    {
      demoId: 'upload-file-list',
      name: {
        'zh-CN': '文件列表',
        'en-US': 'Uploaded file list'
      },
      desc: {
        'zh-CN':
          '通过 <code>file-list</code> 设置上传的文件列表，也可通过 <code>show-file-list="false"</code> 关闭列表的显示； <code>open-download-file</code> 设置文件是否可下载。',
        'en-US':
          'Set the list of uploaded files through <code>file-list</code> , or turn off the display of the list through <code>: show-file-list="false"</code> ; <code>open-download-file</code> Set whether the file is downloadable.'
      },
      codeFiles: ['upload-file-list.vue']
    },
    {
      demoId: 'upload-http-request',
      name: {
        'zh-CN': '上传请求',
        'en-US': 'Upload request'
      },
      desc: {
        'zh-CN': '通过 <code>http-request</code> 覆盖默认的上传行为，可以自定义上传的实现。',
        'en-US':
          'By using<code>http request</code>to override the default upload behavior, the implementation of upload can be customized.'
      },
      codeFiles: ['upload-http-request.vue']
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
      demoId: 'size',
      name: {
        'zh-CN': '设置按钮尺寸',
        'en-US': 'Set button size'
      },
      desc: {
        'zh-CN': '通过<code>size</code>设置按钮尺寸。',
        'en-US': 'Set button size through<code>size</code>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'data',
      name: {
        'zh-CN': '上传额外参数用法',
        'en-US': 'Usage of uploading additional parameters'
      },
      desc: {
        'zh-CN': '通过<code>data</code> 设置上传时附带的额外参数，<code>upload-icon</code>是否显示头部文件上传按钮。',
        'en-US':
          'Set the additional parameters that come with uploading through <code>data</code> .<code>upload icon</code>Whether to display the header file upload button.'
      },
      codeFiles: ['data.vue']
    },
    {
      demoId: 'mini-mode',
      name: {
        'zh-CN': 'mini 模式',
        'en-US': 'Mini Mode'
      },
      desc: {
        'zh-CN': '通过设置 <code>mini-mode</code>设置<code>mini</code>模式，默认为false。',
        'en-US': 'By setting the<code>mini-mode</code>, set the<code>mini</code>mode to false by default.'
      },
      codeFiles: ['mini-mode.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '通过 <code>disabled</code> 设置禁用功能。',
        'en-US': 'Disable the function by setting <code>disabled</code> .'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'upload-request',
      name: {
        'zh-CN': '定义请求头部',
        'en-US': 'Custom request header'
      },
      desc: {
        'zh-CN':
          '通过 <code>headers</code> 配置上传请求头部信息，<code>before-upload</code>上传文件之前的钩子，参数为上传的文件，若返回<code>false</code>或者返回<code>Promise</code>且被<code>reject</code>，则停止上传。',
        'en-US':
          'Configure upload request header information through<code>headers</code>.<code>before upload</code>The hook before uploading a file, with the parameter being the uploaded file. If it returns<code>false</code>or returns<code>Promise</code>and is rejected</code>, the upload will be stopped.'
      },
      codeFiles: ['upload-request.vue']
    },
    {
      demoId: 'with-credentials',
      name: {
        'zh-CN': '定义请求头部',
        'en-US': 'Custom request header'
      },
      desc: {
        'zh-CN': '通过 <code>with-credentials</code> 设置允许发送 cookie 凭证信息。',
        'en-US': 'Set the permission to send cookie credential information through<code>with credentials</code>.'
      },
      codeFiles: ['with-credentials.vue']
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
