export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-bar-usage',
      'name': { 'zh-CN': '自定义工具栏用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['custom-bar-usage.vue']
    },
    {
      'demoId': 'event-usage',
      'name': { 'zh-CN': '事件用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['event-usage.vue']
    },
    {
      'demoId': 'options-usage',
      'name': { 'zh-CN': 'options选项用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['options-usage.vue']
    },
    {
      'demoId': 'placeholder-usage',
      'name': { 'zh-CN': 'placeholder选项用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['placeholder-usage.vue']
    }
  ],
  apis: [
    {
      'name': 'rich-text-editor',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue',
          'type': 'string',
          'defaultValue': '',
          desc: {
            'zh-CN': '默认富文本内容',
            'en-US': 'default rich text content'
          },
          demoId: 'basic-usage'
        },
        {
          'name': 'customToolBar',
          'type': 'Array',
          'defaultValue': '[]',
          desc: {
            'zh-CN':
              "传入需要展示的工具栏按钮配置，设置时，显示全量的工具栏。可配置的项目有：'bold','italic', 'underline', 'strike', 'quote', 'code', 'codeBlock', 'unorderedlist', 'orderedlist', 'taskList', 'subscript', 'superscript', 'undo', 'redo', 'left', 'center', 'right', 'h-box', 'font-size', 'line-height', 'highlight', 'color', 'backgroundColor', 'formatClear', 'link', 'unlink', 'img', 'table'",
            'en-US': 'Pass in the toolbar button configuration that needs to be displayed, and customize the use'
          },
          demoId: 'basic-usage'
        },
        {
          'name': 'placeholder',
          'type': 'Stirng',
          'defaultValue': '',
          desc: {
            'zh-CN': '占位符，在v-model为空时展示',
            'en-US': 'Placeholder, displayed when v-model is empty'
          },
          demoId: 'basic-usage'
        },
        {
          'name': 'options',
          'type': 'Object',
          'defaultValue': '{}',
          desc: {
            'zh-CN': '参见tiptap扩展说明，会覆盖useEditor配置项',
            'en-US': 'See tiptap extension notes to overwrite the useEditor configuration item'
          },
          demoId: 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'update',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器状态改变完成后，将会触发该事件',
            'en-US': 'When the content is updated.'
          },
          'demoId': 'base'
        },
        {
          'name': 'beforeCreate',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器视图创造之前，将会触发该事件',
            'en-US': 'Before view creation.'
          },
          'demoId': 'base'
        },
        {
          'name': 'create',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器已经挂载好，将会触发该事件',
            'en-US': 'The editor is mounted.'
          },
          'demoId': 'base'
        },
        {
          'name': 'focus',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器获得焦点，将会触发该事件',
            'en-US': 'The editor gets focus.'
          },
          'demoId': 'base'
        },
        {
          'name': 'blur',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器失去焦点，将会触发该事件',
            'en-US': 'The editor loses focus.'
          },
          'demoId': 'base'
        },
        {
          'name': 'selectionUpdate',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器选区改变，将会触发该事件',
            'en-US': 'The selection has changed.'
          },
          'demoId': 'base'
        },
        {
          'name': 'transaction',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器状态改变，将会触发该事件。',
            'en-US': 'The editor state has changed.'
          },
          'demoId': 'base'
        },
        {
          'name': 'destroy',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑器编辑器销毁了，将会触发该事件',
            'en-US': 'The editor is being destroyed.'
          },
          'demoId': 'base'
        }
      ],
      'methods': [],
      'slots': [
        {
          'name': 'toolBar',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'toolBar添加按钮,会传出editor实例，详情见tiptap', 'en-US': 'toolBar Add Button' },
          'demoId': 'custom-search-types'
        }
      ]
    }
  ]
}
