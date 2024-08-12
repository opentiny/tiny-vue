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
        'zh-CN':
          '通过 <code>action</code> 设置上传的服务接口， <code>upload-name</code> 设置上传的文件字段名，<code>data</code> 自定义上传时附带的额外参数。',
        'en-US':
          'Set the service interface for uploading through<code>action</code>,<code>upload-name</code>set the file field name for uploading, \n              and<code>data</code>customize the additional parameters that come with uploading.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-request-headers',
      name: {
        'zh-CN': '定义请求头部',
        'en-US': 'Custom request header'
      },
      desc: {
        'zh-CN':
          '通过 <code>with-credentials</code> 开启支持发送 cookie 凭证信息，<code>headers</code> 自定义上传请求头信息。',
        'en-US':
          'Enable support for sending cookie credential information through<code>with-credentials</code>, and customize upload request header information through<code>headers</code>.'
      },
      codeFiles: ['custom-request-headers.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸和禁用',
        'en-US': 'Size and disabled'
      },
      desc: {
        'zh-CN':
          '通过 <code>medium</code>，<code>small</code>，<code>mini</code> 设置组件尺寸，<code>disabled</code> 设置是否禁用，默认值为 false 。',
        'en-US':
          'Set the component size through<code>media</code>,<code>small</code>,<code>mini</code>, and whether to <code>disabled</code> it. The default value is false.'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'http-request',
      name: {
        'zh-CN': '自定义上传',
        'en-US': 'Custom Upload'
      },
      desc: {
        'zh-CN': '通过 <code>http-request</code> 配置覆盖默认的上传行为，自定义上传的实现。',
        'en-US':
          'You can configure <code>http-request</code> to overwrite the default upload behavior and customize the upload implementation'
      },
      codeFiles: ['http-request.vue']
    },
    {
      demoId: 'fill-button-text',
      name: {
        'zh-CN': '定义按钮和标题',
        'en-US': 'Define Buttons And Titles'
      },
      desc: {
        'zh-CN':
          '通过 <code>dialog-title</code> 设置弹框的标题，<code>cancel-button-text</code> 设置取消按钮的文本, \n          <code>submit-button-text</code> 设置提交按钮的文本， <code>upload-button-text</code> 设置上传按钮的文本。',
        'en-US':
          'Set the title of the pop-up box through<code>dialog-title</code>, and set the text of the cancel button through<code>cancel-button-text</code>,\n          <code>submit-button-text</code>Set the text for the submit button,<code>upload-button-text</code>Set the text for the upload button.'
      },
      codeFiles: ['fill-button-text.vue']
    },
    {
      demoId: 'file-limit',
      name: {
        'zh-CN': '上传数限制',
        'en-US': 'Upload Quantity Limit'
      },
      desc: {
        'zh-CN': '通过 <code>limit</code> 设置最大上传的文件数量，<code>multiple</code> 设置是否可同时选择多个文件。',
        'en-US':
          'Set the maximum number of uploaded files through<code>limit</code>, and whether <code>multiple</code> files can be selected simultaneously.'
      },
      codeFiles: ['file-limit.vue']
    },
    {
      demoId: 'file-type',
      name: {
        'zh-CN': '限制文件类型和大小',
        'en-US': 'Restrict file types and sizes'
      },
      desc: {
        'zh-CN':
          '通过 <code>max-upload-file-size</code> 设置上传文件的大小， <code>accept</code> 设置可上传的文件类型，还可通过 <code>upload-file-type</code> 指定在上传时进行校验的文件类型。',
        'en-US':
          'Set the size of the uploaded file through<code>max-upload-file-size</code>,<code>accept</code>to set the file types that can be uploaded, and also specify the file types to be verified during upload through<code>upload-file-type</code>.'
      },
      codeFiles: ['file-type.vue']
    },
    {
      demoId: 'upload-tip',
      name: {
        'zh-CN': '自定义上传提示',
        'en-US': 'Customize upload prompts'
      },
      desc: {
        'zh-CN': '通过 <code>uploadTip</code> 插槽自定义上传提示的内容块。',
        'en-US': 'Customize the content block for upload prompts through the<code>uploadTip</code>slot.'
      },
      codeFiles: ['upload-tip.vue']
    },
    {
      demoId: 'prevent-delete-file',
      name: {
        'zh-CN': '阻止删除',
        'en-US': 'Block deletion'
      },
      desc: {
        'zh-CN':
          '在 <code>before-remove</code> 处理移除文件前的逻辑，若返回 false 或者返回 Promise 且被 reject，则阻止删除。',
        'en-US':
          'Process the logic before removing files in<code>before-remove</code>. If it returns false or Promise and is rejected, the deletion will be blocked.'
      },
      codeFiles: ['prevent-delete-file.vue']
    },
    {
      demoId: 'before-upload',
      name: {
        'zh-CN': '阻止上传',
        'en-US': 'Block uploads'
      },
      desc: {
        'zh-CN':
          '在 <code>before-upload</code> 回调中处理文件上传前的逻辑，若返回 false 或者返回 Promise 且被 reject，则阻止上传。',
        'en-US':
          'Process the logic before file upload in the<code>before-upload</code>callback. If it returns false or Promise and is rejected, the upload is blocked.'
      },
      codeFiles: ['before-upload.vue']
    },
    {
      demoId: 'upload-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><code>remove</code> 监听文件移除事件；<br/> <code>error</code> 监听文件上传失败事件；<br/>\n          <code>exceed</code> 监听文件超出个数限制事件；<br/> <code>progress</code> 监听文件上传过程事件；<br/>\n          <code>success</code> 监听文件上传成功事件。</div>',
        'en-US':
          '<div class="tip custom-block"> <code>remove</code> Listen for file removal events; <br /> <code>error</code> Listen for file upload failure events;<br />\n        <code>exceeded</code> Listen for events where the number of files exceeds the limit; <br/> <code>progress</code> Listen for file upload process events;<br/> \n        <code>success</code> Listen for file upload success events.</div>'
      },
      codeFiles: ['upload-events.vue']
    }
  ]
}
