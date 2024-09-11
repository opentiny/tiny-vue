export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'file-upload',
      type: 'component',
      props: [
        {
          name: 'accept',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '限制文件类型（thumbnail-mode 模式下此参数无效）',
            'en-US': 'Restrict the types of files. This parameter is invalid in thumbnail-mode mode'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'accept-file-image',
          mobileDemo: 'accept-file-image',
          mfDemo: ''
        },
        {
          name: 'action',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '上传的地址，必填参数',
            'en-US': 'The address for uploading files, required parameter'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'accept-file',
          mfDemo: ''
        },
        {
          name: 'auto-upload',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在选取文件后立即进行上传',
            'en-US': 'Whether to upload a file immediately after it is selected'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'manual-upload',
          mobileDemo: 'manual-upload',
          mfDemo: ''
        },
        {
          name: 'before-add-file',
          type: '(callback: () => void) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '文件选择之前的钩子，若返回 false 或者返回 Promise 且被 reject，则停止添加文件。如果不用以上 2 种方式，也可以通过执行参数中的回调函数继续进行上传【3.13.0版本新增】',
            'en-US':
              'If false is returned or Promise is returned and rejected, the system stops adding files. If the preceding two methods are not used, you can continue the upload by executing the callback function in the parameter [Added in 3.13.0]'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-prefix',
          mfDemo: ''
        },
        {
          name: 'before-remove',
          typeAnchorName: 'IFile',
          type: '(file: IFile, fileList: IFile[]) => boolean | Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '删除文件前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除',
            'en-US':
              'Hook before deleting files. The parameters are the uploaded files and file list. If false is returned or Promise is returned and rejected, the deletion stops'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'prevent-delete-file',
          mobileDemo: 'custom-prefix',
          mfDemo: ''
        },
        {
          name: 'before-upload',
          typeAnchorName: 'IFile',
          type: '(file: IFile) => boolean | Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传',
            'en-US':
              'Hook before uploading a file. The parameter is the file to be uploaded. If false is returned or Promise is returned and rejected, the upload stops'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'before-upload-limit',
          mobileDemo: 'custom-prefix',
          mfDemo: ''
        },
        {
          name: 'buttons',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置组件基本按钮禁用或启用。</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'cache-token',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '使用 EDM 时，可配置是否缓存token（存在多个file-upload时，若配置cache-token为false，token会调用多次。否则，只调用一次）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义class',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data',
          typeAnchorName: 'IData',
          type: 'IData',
          defaultValue: '',
          desc: {
            'zh-CN': '上传时附带的额外参数，参数自定义',
            'en-US': 'Extra parameters attached during upload, parameter customization'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'data',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'disabled',
          mobileDemo: 'dynamic-disable',
          mfDemo: ''
        },
        {
          name: 'display',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>显示删除文件功能，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'manual-upload'
        },
        {
          name: 'display-only',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '文件上传模式，通过 display-only 设置组件是否只读',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'download',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '配置 EDM 下载功能所需的参数,例如：edm:{download:{token:() =>{}}},token为鉴权token',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'drag',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用拖拽上传',
            'en-US': 'Whether to enable drag-and-drop upload'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'drag-upload',
          mfDemo: ''
        },
        {
          name: 'edm',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '使用 EDM 的上传下载预览功能，可在该对象里边配置上传、下载、预览功能的参数',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'encrypt-config',
          typeAnchorName: 'IEncryptConfig',
          type: 'IEncryptConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '设置水印和加密弹窗',
            'en-US': 'Setting the watermark and encryption pop-up window'
          },
          mode: ['pc'],
          pcDemo: 'encrypt-config'
        },
        {
          name: 'ext-icons',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置自定义文件类型图标，根据扩展名定义，默认由组件内部提供。</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'placeholder'
        },
        {
          name: 'file-icon-list',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>配置文件上传显示的图标路径，未配置会默认显示组件内部配置图标</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'file-icon-list'
        },
        {
          name: 'file-list',
          typeAnchorName: 'IFileListItem',
          type: 'IFileListItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': '上传的文件列表',
            'en-US': 'List of uploaded files'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-file-list',
          mobileDemo: 'upload-file-list',
          mfDemo: ''
        },
        {
          name: 'file-size',
          type: 'Number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '限制文件大小，单位为 KB；当为 Number 类型时，小于该值停止上传；为数组时[min,max] 设置上传范围',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'file-size',
          mfDemo: ''
        },
        {
          name: 'file-title',
          type: 'String',
          defaultValue: '附件',
          desc: {
            'zh-CN': '<p>头部标题，该属性默认为‘附件’</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'file-title'
        },
        {
          name: 'header-show',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示头部，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'header-show'
        },
        {
          name: 'headers',
          typeAnchorName: 'IHeaders',
          type: 'IHeaders',
          defaultValue: '',
          desc: {
            'zh-CN': '设置上传的请求头部;通过设置 headers 为头部请求信息',
            'en-US': 'Set the upload request header. You can set headers to the header request information'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-request',
          mobileDemo: 'upload-request',
          mfDemo: ''
        },
        {
          name: 'http-request',
          type: '(file: IFile) => Promise<any>',
          typeAnchorName: 'IFile',
          defaultValue: '',
          desc: {
            'zh-CN': '覆盖默认的上传行为，可以自定义上传的实现; 由于 TinyVue 官网为 Mock 上传不能执行上传',
            'en-US':
              'Overwrite the default upload behavior. You can customize the upload implementation. The upload cannot be performed because the TinyVue official website uses Mock upload'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'http-request',
          mobileDemo: 'upload-http-request',
          mfDemo: ''
        },
        {
          name: 'hwh5',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '在we码小程序中，可配置 hwh5属性 进行原生的上传和下载',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'image-bg-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '配置 `list-type` 等于 `picture-single` 或 `picture-card` 模式下图片的背景色。',
            'en-US':
              'Configure the background color of the image when `list-type` is set to `picture-single` or `picture-card`.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'is-folder-title',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '配置为 true,则在文件列表模式（show-file-list为true），hover文件名时，展示对应的文件路径，没有文件路径则只展示文件名',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'is-hidden',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '达到最大上传个数时，是否隐藏上传按钮，默认不隐藏',
            'en-US':
              'Whether to hide the upload button when the number of uploaded files reaches the maximum. By default, the button is not hidden'
          },
          mode: ['pc'],
          pcDemo: 'max-file-count'
        },
        {
          name: 'isFolder',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '配置为 true,启用 EDM 上传文件夹的功能，最多只能上传 5 层;{edm:upload:{isFolder:true,token:() =>{}}}',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'limit',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '最大允许上传个数',
            'en-US': 'Maximum number of files that can be uploaded'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max-file-count',
          mobileDemo: 'upload-limit',
          mfDemo: ''
        },
        {
          name: 'list-option',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': 'EDM文件列表模式下，配置更新和删除文件的功能',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'list-type',
          typeAnchorName: 'IListType',
          type: 'IListType',
          defaultValue: "'text'",
          desc: {
            'zh-CN': '文件列表的类型',
            'en-US': 'File list type'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-file-list-thumb',
          mobileDemo: 'file-picture-card',
          mfDemo: ''
        },
        {
          name: 'max_file_count',
          type: 'Number',
          defaultValue: 'Infinity',
          desc: {
            'zh-CN': '<p>设置文件上传数量的最大值，默认无限制，要大于0的正整数。</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'max-name-length',
          type: 'number',
          defaultValue: '20',
          desc: {
            'zh-CN': '列表项的文件名最大字符数，默认超出20个字符隐藏',
            'en-US':
              'The maximum number of characters in the file name of a list item, which is hidden if it exceeds 20 characters by default'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'paste-upload',
          mfDemo: ''
        },
        {
          name: 'merge-service',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '配置 merge-service 为 true 且开启多文件上传走默认服务会将多个上传服务合并为一个服务上传',
            'en-US':
              'If merge-service is set to true and multiple files are uploaded using the default service, multiple upload services are combined into one service'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'mergeService',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '配置 mergeService 为true 且开启多文件上传走默认服务会将多个上传服务合并为一个服务上传',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mini-mode',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置 mini 模式。</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'mini-mode'
        },
        {
          name: 'mode',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '气泡上传，在 list-type 为默认值 text 时，设置 mode 为 bubble 时进行气泡模式的上传',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否支持多选文件',
            'en-US': 'Specifies whether multiple files can be selected'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'multiple-file',
          mobileDemo: 'multiple-file',
          mfDemo: ''
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: "'file'",
          desc: {
            'zh-CN': '上传的文件字段名',
            'en-US': 'Field name of the uploaded file'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-file-list-slot',
          mobileDemo: 'data',
          mfDemo: ''
        },
        {
          name: 'open-download-file',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启点击下载文件，默认不开启',
            'en-US': 'Whether to enable file download by clicking. By default, this function is disabled'
          },
          mode: ['pc'],
          pcDemo: 'upload-file-list'
        },
        {
          name: 'packageToken',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '配置 EDM 批量打包下载的 token；配置结构为 edm:{download:packageToken:() =>{}},返回一个 Promise',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'paramsWhitelist',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN':
              "配置 EDM 单文件下载参数白名单（默认会携带docId，wmType，docVersion）,若需携带其他参数，需配置paramsWhitelist，例如：edm:{download:{paramsWhitelist: ['paramA', 'paramB']}},",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'paste-upload',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用粘贴键快捷上传功能【3.11.0版本新增】',
            'en-US': 'Is the paste key quick upload function enabled [New in version 3.11.0]'
          },
          mode: ['pc'],
          pcDemo: 'paste-upload'
        },
        {
          name: 'preivew',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN':
              "配置 EDM 预览功能所需的参数,例如：edm:{preview:{plugin：util.default,previewUrl:./_index.html?appid=应用Id,packageName: 'jslib',token:() =>{}}}",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'prompt-tip',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置提示是否为 tip 类型，悬浮图标时显示 tip 提示',
            'en-US': 'Set whether the prompt is of the tip type. The tip is displayed when the icon is suspended.'
          },
          metaData: {
            new: '3.19.0'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: 'prompt-tip',
          pcDemo: 'prompt-tip'
        },
        {
          name: 're-upload-tip',
          type: '(count: number) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义重新上传的左侧提示文字，需要与 re-uploadable 搭配使用【3.12.0版本新增】',
            'en-US':
              'Customize the left prompt for re uploading, which needs to be used in conjunction with re-uploadable [added in version 3.12.0]'
          },
          mode: ['pc'],
          pcDemo: 'custom-upload-tip'
        },
        {
          name: 're-uploadable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用重新上传功能【3.12.0版本新增】',
            'en-US': 'Is the re upload function enabled [New in version 3.12.0]'
          },
          mode: ['pc'],
          pcDemo: 'custom-upload-tip'
        },
        {
          name: 'show-file-list',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示已上传文件列表',
            'en-US': 'Whether to display the list of uploaded files'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-file-list',
          mobileDemo: 'upload-user-head',
          mfDemo: ''
        },
        {
          name: 'show-name',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '上传请求参数，默认为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-title',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '配置 show-title 为 false 隐藏标题，默认为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>为单个按钮且按钮为TinyVue的Button组件时生效，值可设置为：medium，small，mini</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'size'
        },
        {
          name: 'source-type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '数据源类型',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'success-statistics',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>文件上传成功数量展示，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'thumb-option',
          typeAnchorName: 'IThumbOption',
          type: 'IThumbOption',
          defaultValue: '',
          desc: {
            'zh-CN': '文件列表的显示类型为 thumb 时的相关配置',
            'en-US': 'Related configurations when the display type of the file list is thumb'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'upload-file-list-thumb',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 title 可自定义标题',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'token',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '使用 EDM 上传下载预览所需的token,返回值为 Promise',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文本，该属性默认为select</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'updateId',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'EDM 需要更新文档的 docId',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'upload',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '配置 EDM 上传功能所需的参数,例如：edm:{upload:{token:() =>{}}}',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'upload-icon',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示头部文件上传按钮，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'data'
        },
        {
          name: 'with-credentials',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '支持发送 cookie 凭证信息',
            'en-US': 'Cookie credential information can be sent'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-request',
          mobileDemo: 'with-credentials',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          typeAnchorName: 'IFile',
          type: '(file: IFile, fileList: IFile[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发',
            'en-US':
              'The event triggered when the file status changes, including adding a file, successfully uploading, and failing to upload, will be triggered'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'download',
          type: 'function(arg1, arg2)',
          defaultValue: '',
          desc: {
            'zh-CN': '文件下载时触发的事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'drop-error',
          typeAnchorName: 'IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖拽文件失败时触发的事件，开启拖拽时有效； file 为上传失败文件信息',
            'en-US':
              'Event triggered when dragging a file fails, effective when dragging is enabled; File is the information of the failed upload file'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'drag-upload',
          mfDemo: ''
        },
        {
          name: 'error',
          typeAnchorName: 'IFile',
          type: '(message: ProgressEvent, file: IFile, fileList: IFile[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '文件上传失败时触发的事件； message 为错误信息事件对象，file 为当前上传失败文件信息，fileList 为上传成功 file 数组',
            'en-US':
              'Event triggered when file upload fails; Message is the error message event object, file is the current upload failure file information, and fileList is the upload success file array'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'exceed',
          typeAnchorName: 'IFile',
          type: '(files: File | File[], fileList: IFile[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件超出个数限制时触发的事件； files 为上传的文件',
            'en-US': 'Event triggered when the number of files exceeds the limit; Files are uploaded files'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'hash-progress',
          type: '(percentage: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件上传生成 hash 值触发的事件； percentage 为生成的进度值',
            'en-US': 'Event triggered by file upload to generate hash value; percentage is the generated progress value'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'preview',
          typeAnchorName: 'IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击文件列表中已上传的文件时触发的事件',
            'en-US': 'Event triggered when clicking on an uploaded file in the file list'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'progress',
          typeAnchorName: 'IFile',
          type: '(message: ProgressEvent, file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文件上传时触发的事件； message 为进度条事件对象',
            'en-US': 'Event triggered during file upload; Message is the progress bar event object'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'remove',
          typeAnchorName: 'IFile',
          type: '(file: IFile) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '从文件列表移除文件时触发的事件； file 为当前移除的文件信息',
            'en-US':
              'Event triggered when removing a file from the file list; File is the information of the currently removed file'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        },
        {
          name: 'success',
          typeAnchorName: 'IFile',
          type: '(res: ProgressEvent, file: IFile, fileList: IFile[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '文件上传成功时触发的事件； res 为上传成功后的响应信息事件对象，file 为当前上传的文件，fileList 为所有上传文件数组',
            'en-US':
              'Event triggered when the file is successfully uploaded; Res is the response information event object after successful upload, file is the current uploaded file, and fileList is an array of all uploaded files'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'upload-events',
          mobileDemo: 'upload-events',
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'abort',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '取消上传请求',
            'en-US': 'Cancel the upload request'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'abort-quest',
          mobileDemo: 'event',
          mfDemo: ''
        },
        {
          name: 'abortDownload',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'edm 取消下载请求',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearFiles',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
            'en-US': 'Clear the list of uploaded files. (This method cannot be invoked in before-upload)'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'clear-files',
          mobileDemo: 'clear-files',
          mfDemo: ''
        },
        {
          name: 'downloadFile',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '下载 EDM 文件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getNewTabPreviewUrl',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '预览 EDM 文件预览的 Url，返回值为 Promise',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'previewFile',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '预览 EDM 文件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'submit',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动上传文件列表',
            'en-US': 'List of manually uploaded files'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'manual-upload',
          mobileDemo: 'manual-upload',
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'file',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '定义文件显示内容',
            'en-US': 'Custom File Display Content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'upload-file-list-slot',
          mfDemo: ''
        },
        {
          name: 'tip',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '提示说明文字',
            'en-US': 'Prompt Description'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-upload-tip',
          mobileDemo: 'custom-upload-tip',
          mfDemo: ''
        },
        {
          name: 'trigger',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '触发文件选择框的内容',
            'en-US': 'Content of the triggering file selection box'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-trigger',
          mobileDemo: 'custom-upload-tip',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IData',
      type: 'interface',
      code: `
interface IData {
  [propsName?: any]: any // 上传参数可自定义
}
      `
    },
    {
      name: 'IFile',
      type: 'interface',
      code: `
interface IFile {
  name: string // 上传文件名
  percentage: string // 上传进度百分比
  raw: File // 原始文件信息
  size: number // 文件大小
  status: string // 上传状态
  uid: string // uid 
}
      `
    },
    {
      name: 'IEncryptConfig',
      type: 'interface',
      code: `
interface IEncryptConfig {
  enabled: boolean // 是否开启设置，默认关闭
  encrypt: boolean // 是否加密，默认否
  watermark: string // 水印文字，默认为空
}
      `
    },
    {
      name: 'IFileListItem',
      type: 'interface',
      code: `
interface IFileListItem {
  name: string // 文件名
  url: string // 文件url 例如：'https://xxx.cdn.com/xxx.jpg'
}
      `
    },
    {
      name: 'IHeaders',
      type: 'interface',
      code: `
interface IHeaders {
  'Accept-Language'?: string // 比如等于：'en,zh'
  Authorization?: string // 比如等于：'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
  [props: string]: any // headers的属性和属性值自定义
}
      `
    },
    {
      name: 'IListType',
      type: 'type',
      code: `
type IListType = 'text' | 'picture' | 'picture-card' | 'thumb' | 'saas' // saas为3.14.0版本新增
      `
    },
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
    }
  ]
}
