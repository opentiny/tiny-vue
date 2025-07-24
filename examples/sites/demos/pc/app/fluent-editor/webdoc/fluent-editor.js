export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过 <code>v-model</code> 设置绑定值，默认数据保存格式为 Delta 数据格式。',
        'en-US': 'You can refer to component label.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用状态',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>disabled</code> 可设置编辑器为不可编辑状态。</p>',
        'en-US': ''
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'image-upload',
      name: {
        'zh-CN': '图片上传',
        'en-US': 'Image Upload'
      },
      desc: {
        'zh-CN': '通过 <code>image-upload</code> 设置图片上传模块的配置项。',
        'en-US': ''
      },
      codeFiles: ['image-upload.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '编辑器配置',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '通过 <code>options</code> 设置编辑器的配置项，支持的配置项和 Quill 的相同，可参考 <a href="https://quilljs.com/docs/configuration#options" target="_blank">Quill</a> 文档。',
        'en-US': ''
      },
      codeFiles: ['options.vue']
    },
    {
      demoId: 'data-switch',
      name: {
        'zh-CN': '数据格式转换',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>data-type</code> 指定富文本数据保存的格式。数据默认保存格式为 Delta 形式，若需要将数据保存格式设置为 HTML 形式，并关闭 HTML 格式自动转 Delta 格式，设置 <code>:data-type="false"</code>，<code>:data-upgrade="false"</code>。</p>',
        'en-US': ''
      },
      codeFiles: ['data-switch.vue']
    },
    {
      demoId: 'before-editor-init',
      name: {
        'zh-CN': '初始化前的钩子',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>before-editor-init</code> 设置 FluentEditor 初始化前的钩子函数，主要用于注册 FluentEditor 自定义格式和模块。<br>这个示例增加了两个新的格式：good / bad，并在工具栏增加了对应的图标用于设置这两种格式。<br>选中一段文本，点击点赞图标，会将文本色设置成绿色；点击点踩图标，会将文本色设置成红色。</p>',
        'en-US': ''
      },
      codeFiles: ['before-editor-init.vue']
    }
  ]
}
