export default {
  column: '2',
  owner: '',
  //   demos: [
  //     {
  //       demoId: 'abort-quest',
  //       name: {
  //         'zh-CN': '手动取消上传请求',
  //         'en-US': 'button type',
  //       },
  //       desc: {
  //         'zh-CN': '<p>调用组件abort方法，取消上传请求</p>',
  //         'en-US': '<p>button type</p>',
  //       },
  //       codeFiles: ['abort-quest.vue'],
  //     },
  //     {
  //       demoId: 'accept-file-image',
  //       name: {
  //         'zh-CN': '可上传的文件类型',
  //         'en-US': 'button round',
  //       },
  //       desc: {
  //         'zh-CN': '<p>通过配置 accept(image) 来限制上传文件的格式为 image</p>',
  //         'en-US': '<p>button round</p>',
  //       },
  //       codeFiles: ['accept-file-image.vue'],
  //     },
  //      {
  //       demoId: 'clear-files',
  //       name: {
  //         'zh-CN': '可上传的文件类型',
  //         'en-US': 'clear-files',
  //       },
  //       desc: {
  //         'zh-CN': '<p>通过配置 accept(.doc,.docx) 来限制上传文件的格式为 .doc .docx</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['clear-files.vue'],
  //     },
  //     {
  //       demoId: 'accept-file',
  //       name: {
  //         'zh-CN': '可上传的文件类型',
  //         'en-US': 'accept-file',
  //       },
  //       desc: {
  //         'zh-CN': '<p>通过配置 accept(.doc,.docx) 来限制上传文件的格式为 .doc .docx</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['accept-file.vue'],
  //     },
  //     {
  //       demoId: 'custom-prefix',
  //       name: {
  //         'zh-CN': '钩子函数',
  //         'en-US': 'event',
  //       },
  //       desc: {
  //         'zh-CN': '<p>before-remove 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。<br>before-upload 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['custom-prefix.vue'],
  //     },
  //     {
  //       demoId: 'custom-trigger',
  //       name: {
  //         'zh-CN': '自定义触发文件选项框',
  //         'en-US': 'max',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可在组件中写一个名为trigger的插槽，来触发弹出文件选项框</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['custom-trigger.vue'],
  //     },
  //     {
  //       demoId: 'custom-upload-request',
  //       name: {
  //         'zh-CN': '自定义上传请求',
  //         'en-US': 'placeholder',
  //       },
  //       desc: {
  //         'zh-CN': '<p>通过配置 headers ，设置自定义上传请求头信息</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['custom-upload-request.vue'],
  //     },
  //     {
  //       demoId: 'custom-upload-tip',
  //       name: {
  //         'zh-CN': '自定义上传提示',
  //         'en-US': 'precision',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可通过 tip 插槽来自定义上传提示</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['custom-upload-tip.vue'],
  //     },
  //     {
  //       demoId: 'data',
  //       name: {
  //         'zh-CN': '参数',
  //         'en-US': 'precision',
  //       },
  //       desc: {
  //         'zh-CN': '<p>通过 data 属性可以上传时附带的额外参数。<br>通过 file-title 属性可以设置头部标题，该属性默认为‘附件’。</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['data.vue'],
  //     },
  //     {
  //       demoId: 'drag-select-file',
  //       name: {
  //         'zh-CN': '拖拽上传',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可配置drag(type:boolean)，来控制组件是否可以拖拽文件</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['drag-select-file.vue'],
  //     },
  //     {
  //       demoId: 'drag-upload',
  //       name: {
  //         'zh-CN': '是否可以拖拽文件上传',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可配置 drag(type:boolean)，来控制组件是否可以拖拽文件上传，如果配置了 accept 属性，可通过 @drop-error 事件获取不合规的拖拽文件。</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['drag-upload.vue'],
  //     },
  //     {
  //       demoId: 'dynamic-disable',
  //       name: {
  //         'zh-CN': '禁用',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可配置disabled(type:boolean)，来控制组件是否禁用</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['dynamic-disable.vue'],
  //     },
  //     {
  //       demoId: 'file-icon-list',
  //       name: {
  //         'zh-CN': '特殊属性',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>配置文件上传显示的图标路径</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['file-icon-list.vue'],
  //     },
  //     {
  //       demoId: 'file-picture-card',
  //       name: {
  //         'zh-CN': '文件缩略图',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>文件缩略图</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['file-picture-card.vue'],
  //     },
  //     {
  //       demoId: 'file-title',
  //       name: {
  //         'zh-CN': '特殊属性',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>设置头部标题</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['file-title.vue'],
  //     },
  //     {
  //       demoId: 'header-show',
  //       name: {
  //         'zh-CN': '特殊属性',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>是否显示头部</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['header-show.vue'],
  //     },
  //     {
  //       demoId: 'image-size',
  //       name: {
  //         'zh-CN': '获取上传图片的长宽尺寸',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>获取上传的片的原始尺寸</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['image-size.vue'],
  //     },
  //     {
  //       demoId: 'manual-upload',
  //       name: {
  //         'zh-CN': '手动上传',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>通过 action 配置上传地址，通过 submit 设置手动上传</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['manual-upload.vue'],
  //     },
  //     {
  //       demoId: 'max-file-count',
  //       name: {
  //         'zh-CN': '最大上传文件数',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可通过配置limit（type:Number，大于0的整数）来限制上传文件的个数</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['max-file-count.vue'],
  //     },
  //     {
  //       demoId: 'mini-mode',
  //       name: {
  //         'zh-CN': 'mini 模式',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可通过配置 mini-mode，设置显示 mini 模式</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['mini-mode.vue'],
  //     },
  //     {
  //       demoId: 'multiple-file',
  //       name: {
  //         'zh-CN': '文件多选',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>文件选择默认单选可配置multiple ="true"实现文件多选</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['multiple-file'],
  //     },
  //     {
  //       demoId: 'picture-card',
  //       name: {
  //         'zh-CN': '照片墙',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可配置list-type = "picture-card"开启照片墙模式</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['picture-card'],
  //     },
  //     {
  //       demoId: 'prevent-delete-file',
  //       name: {
  //         'zh-CN': '阻止删除文件',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>:before-remove（移除文件前回调事件）,方法里面return true/false，表示是否可以删除</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['prevent-delete-file'],
  //     },
  //     {
  //       demoId: 'prevent-upload-file',
  //       name: {
  //         'zh-CN': '阻止上传文件',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>before-upload（上传前回调事件）,方法里面 return true/false，表示是否可以进行上传文件</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['prevent-upload-file'],
  //     },
  //     {
  //       demoId: 'size',
  //       name: {
  //         'zh-CN': '设置组件大小',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可选值为medium，small，mini</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['size'],
  //     },
  //     {
  //       demoId: 'upload-events',
  //       name: {
  //         'zh-CN': '事件',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>preview 点击文件列表中已上传的文件时触发的事件。<br> remove 文件列表移除文件时触发的事件。<br> error 文件上传失败时触发的事件。<br> exceed 文件超出个数限制时触发的事件。<br> progress 文件上传时触发的事件。<br>change 文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发。<br> success 文件上传成功时触发的事件。</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['upload-events'],
  //     },
  //     {
  //       demoId: 'upload-file-list',
  //       name: {
  //         'zh-CN': '上传的文件列表',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可配置:file-list（type：Object）来显示已上传的文件名和地址</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['upload-file-list'],
  //     },
  //     {
  //       demoId: 'upload-http-request',
  //       name: {
  //         'zh-CN': '覆盖默认请求',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p通过配置<code>http-request</code>，覆盖默认的上传行为，可以自定义上传的实现</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['upload-http-request'],
  //     },
  //     {
  //       demoId: 'upload-limit',
  //       name: {
  //         'zh-CN': '最大上传限制',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p可配置:before-upload（上传前事件回调），对文件类型和大小做限制</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['upload-limit'],
  //     },
  //     {
  //       demoId: 'upload-request',
  //       name: {
  //         'zh-CN': '上传请求',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可通过配置 action 为上传地址，可通过配置 headers 为头部请求信息</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['upload-request'],
  //     },
  //     {
  //       demoId: 'upload-user-head',
  //       name: {
  //         'zh-CN': '用户头像上传',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>用户头像上传</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['upload-user-head'],
  //     },
  //     {
  //       demoId: 'with-credentials',
  //       name: {
  //         'zh-CN': '支持发送<code>cookie</code>凭证信息',
  //         'en-US': 'step',
  //       },
  //       desc: {
  //         'zh-CN': '<p>可通过配置<code>:with-credentials = "true"</code>开启访问服务器携带<code>cookie</code>，默认为<code>true</code>。</p>',
  //         'en-US': '<p>bbutton click</p>',
  //       },
  //       codeFiles: ['with-credentials'],
  //     },
  //   ],
  apis: [
    {
      name: 'fileupload', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'accept',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>接受上传的文件类型（thumbnail-mode 模式下此参数无效）</p>',
            'en-US': 'display different button'
          },
          demoId: 'accept-file-image'
        },
        {
          name: 'action',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上传的地址，当不配置 action 时，会生成默认网关链接</p>',
            'en-US': 'display different button'
          },
          demoId: 'accept-file'
        },
        {
          name: 'auto-upload',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否在选取文件后立即进行上传，该属性默认为true。</p>',
            'en-US': 'display different button'
          },
          demoId: 'manual-upload'
        },
        {
          name: 'before-remove',
          type: 'function(file, fileList)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。</p>',
            'en-US': 'display different button'
          },
          demoId: 'custom-prefix'
        },
        {
          name: 'before-upload',
          type: 'function(file,)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</p>',
            'en-US': 'display different button'
          },
          demoId: 'custom-prefix'
        },
        {
          name: 'buttons',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置组件基本按钮禁用或启用。</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'data',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上传时附带的额外参数</p>',
            'en-US': 'display different button'
          },
          demoId: 'data'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'dynamic-disable'
        },
        {
          name: 'display',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>显示删除文件功能，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'manual-upload'
        },
        {
          name: 'ext-icons',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置自定义文件类型图标，根据扩展名定义，默认由组件内部提供。</p>',
            'en-US': 'display different button'
          },
          demoId: 'placeholder'
        },
        {
          name: 'file-icon-list',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>配置文件上传显示的图标路径，未配置会默认显示组件内部配置图标</p>',
            'en-US': 'display different button'
          },
          demoId: 'file-icon-list'
        },
        {
          name: 'file-list',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上传的文件列表, 例如: [{name: "food.jpg", url: "https://xxx.cdn.com/xxx.jpg"}]</p>',
            'en-US': 'display different button'
          },
          demoId: 'upload-file-list'
        },
        {
          name: 'file-title',
          type: 'String',
          defaultValue: '附件',
          desc: {
            'zh-CN': '<p>头部标题，该属性默认为‘附件’</p>',
            'en-US': 'display different button'
          },
          demoId: 'file-title'
        },
        {
          name: 'header-show',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示头部，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'header-show'
        },
        {
          name: 'headers',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置上传的请求头部</p>',
            'en-US': 'display different button'
          },
          demoId: 'upload-request'
        },
        {
          name: 'http-request',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>覆盖默认的上传行为，可以自定义上传的实现</p>',
            'en-US': 'display different button'
          },
          demoId: 'upload-http-request'
        },
        {
          name: 'limit',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>最大允许上传个数</p>',
            'en-US': 'display different button'
          },
          demoId: 'upload-limit'
        },
        {
          name: 'list-type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文件列表的类型</p>',
            'en-US': 'display different button'
          },
          demoId: 'file-picture-card'
        },
        {
          name: 'max_file_count',
          type: 'Number',
          defaultValue: 'Infinity',
          desc: {
            'zh-CN': '<p>设置文件上传数量的最大值，默认无限制，要大于0的正整数。</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'mini-mode',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置 mini 模式。</p>',
            'en-US': 'display different button'
          },
          demoId: 'mini-mode'
        },
        {
          name: 'multiple',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否支持多选文件</p>',
            'en-US': 'display different button'
          },
          demoId: 'multiple-file'
        },
        {
          name: 'name',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上传的文件字段名</p>',
            'en-US': 'display different button'
          },
          demoId: 'data'
        },
        {
          name: 'show-file-list',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示已上传文件列表，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'upload-user-head'
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>为单个按钮且按钮为TinyVue的Button组件时生效，值可设置为：medium，small，mini</p>',
            'en-US': 'display different button'
          },
          demoId: 'size'
        },
        {
          name: 'success-statistics',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>文件上传成功数量展示，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文本，该属性默认为select</p>',
            'en-US': 'display different button'
          },
          demoId: ''
        },
        {
          name: 'upload-icon',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否显示头部文件上传按钮，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'data'
        },
        {
          name: 'with-credentials',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>文件列表支持发送 cookie 凭证信息类型,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'with-credentials'
        }
      ],
      methods: [
        {
          name: 'abort',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>取消上传请求</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'clearFiles',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>清空已上传的文件列表（该方法不支持在 before-upload 中调用）</p>',
            'en-US': 'Click'
          },
          demoId: 'clear-files'
        },
        {
          name: 'submit',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p手动上传文件列表</p>',
            'en-US': 'Click'
          },
          demoId: 'manual-upload'
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文件状态改变时触发的事件，添加文件、上传成功和上传失败时都会被触发</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        },
        {
          name: 'error',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文件上传失败时触发的事件。</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        },
        {
          name: 'exceed',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文件超出个数限制时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        },
        {
          name: 'preview',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击文件列表中已上传的文件时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        },
        {
          name: 'progress',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文件上传时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        },
        {
          name: 'remove',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>从文件列表移除文件时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        },
        {
          name: 'success',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文件上传成功时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'upload-events'
        }
      ],
      slot: [
        {
          name: 'tip',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>提示说明文字</p>',
            'en-US': 'Click'
          },
          demoId: 'custom-upload-tip'
        },
        {
          name: 'trigger',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>触发文件选择框的内容</p>',
            'en-US': 'Click'
          },
          demoId: 'custom-upload-tip'
        }
      ]
    }
  ]
}
