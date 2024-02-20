export default {
  mode: ['pc'],
  apis: [
    {
      name: 'rich-text-editor',
      type: 'component',
      props: [
        {
          name: 'customToolBar',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN':
              "传入需要展示的工具栏按钮配置，设置时，显示全量的工具栏。可配置的项目有：'bold','italic', 'underline', 'strike', 'quote', 'code', 'codeBlock', 'unorderedlist', 'orderedlist', 'taskList', 'subscript', 'superscript', 'undo', 'redo', 'left', 'center', 'right', 'h-box', 'font-size', 'line-height', 'highlight', 'color', 'backgroundColor', 'formatClear', 'link', 'unlink', 'img', 'table'",
            'en-US': 'Pass in the toolbar button configuration that needs to be displayed, and customize the use'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'modelValue',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '默认富文本内容',
            'en-US': 'default rich text content'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'options',
          type: 'Object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '参见tiptap扩展说明，会覆盖useEditor配置项',
            'en-US': 'See tiptap extension notes to overwrite the useEditor configuration item'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'placeholder',
          type: 'Stirng',
          defaultValue: '',
          desc: {
            'zh-CN': '占位符，在v-model为空时展示',
            'en-US': 'Placeholder, displayed when v-model is empty'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'beforeCreate',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器视图创造之前，将会触发该事件',
            'en-US': 'Before view creation.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'blur',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器失去焦点，将会触发该事件',
            'en-US': 'The editor loses focus.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'create',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器已经挂载好，将会触发该事件',
            'en-US': 'The editor is mounted.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'destroy',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器编辑器销毁了，将会触发该事件',
            'en-US': 'The editor is being destroyed.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'focus',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器获得焦点，将会触发该事件',
            'en-US': 'The editor gets focus.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'selectionUpdate',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器选区改变，将会触发该事件',
            'en-US': 'The selection has changed.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'transaction',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器状态改变，将会触发该事件。',
            'en-US': 'The editor state has changed.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'update',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑器状态改变完成后，将会触发该事件',
            'en-US': 'When the content is updated.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'toolBar',
          defaultValue: '',
          desc: {
            'zh-CN': 'toolBar添加按钮,会传出editor实例，详情见tiptap',
            'en-US': 'toolBar Add Button'
          },
          mode: ['pc'],
          pcDemo: 'custom-search-types'
        }
      ]
    }
  ]
}
