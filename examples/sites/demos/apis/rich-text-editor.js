export default {
  mode: ['pc'],
  apis: [
    {
      name: 'rich-text-editor',
      type: 'component',
      props: [
        {
          name: 'custom-tool-bar',
          typeAnchorName: 'IToolBarItem',
          type: `IToolBarItem[]`,
          defaultValue: '[]',
          desc: {
            'zh-CN': '传入需要展示的工具栏按钮配置，设置时，显示全量的工具栏。',
            'en-US': 'Pass in the toolbar button configuration that needs to be displayed, and customize the use'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'model-value',
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
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '占位符，在v-model为空时展示',
            'en-US': 'Placeholder, displayed when v-model is empty'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'view-map',
          type: 'Map | boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '扩展的对应视图映射, 也可赋值为 true 来使用默认视图',
            'en-US':
              'The corresponding view mapping of the extension, which can also be assigned to true to use the default view'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'slash-menu-view',
          type: 'Object | boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '斜杠菜单的视图，也可赋值为 true 来使用默认视图',
            'en-US': 'View of the slash menu, which can also be assigned as true to use the default view'
          },
          mode: ['pc'],
          pcDemo: 'slash-menu-usage'
        },
        {
          name: 'float-menu-view',
          type: 'Object | boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '浮动菜单的视图，也可赋值为 true 来使用默认视图',
            'en-US': 'View of the float menu, which can also be assigned as true to use the default view'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'bubble-menu-view',
          type: 'Object | boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '气泡菜单的视图，也可赋值为 true 来使用默认视图',
            'en-US': 'View of the bubble menu, which can also be assigned as true to use the default view'
          },
          mode: ['pc'],
          pcDemo: 'bubble-menu-usage'
        },
        {
          name: 'collaboration',
          type: 'Object | boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '开启协作模式',
            'en-US': 'Enable collaboration mode'
          },
          mode: ['pc'],
          pcDemo: 'collaboration-usage'
        }
      ],
      events: [
        {
          name: 'before-create',
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
          name: 'selection-update',
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
          name: 'tool-bar',
          defaultValue: '',
          desc: {
            'zh-CN': 'tool-bar 添加按钮,会传出 editor 实例，详情见 tiptap',
            'en-US': 'tool-bar Add Button'
          },
          mode: ['pc'],
          pcDemo: 'custom-search-types'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IToolBarItem',
      type: 'interface',
      code: `
type IToolBarItem = 
  'bold' | 
  'italic' |
  'underline' |
  'strike' |
  'quote' |
  'code' |
  'codeBlock' |
  'unorderedlist' |
  'orderedlist' |
  'taskList' |
  'subscript' |
  'superscript' |
  'undo' |
  'redo' |
  'left' |
  'center' |
  'right' |
  'h-box' |
  'font-size' |
  'line-height' |
  'highlight' |
  'color' | 
  'backgroundColor' |
  'formatClear' |
  'link' |
  'img' |
  'table'
`
    }
  ]
}
