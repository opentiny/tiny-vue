import {
  handleChange,
  setLink,
  handleMove,
  handleClickOutside,
  removeClickOutside,
  handleClick,
  shouldShow,
  eventImg,
  eventClick,
  Active
} from './index'
export const api = [
  'toolBar',
  'state',
  'setLink',
  'handleChange',
  'box',
  'handleMove',
  'handleClickOutside',
  'removeClickOutside',
  'handleClick',
  'shouldShow',
  'fontSize',
  'eventImg',
  'eventClick',
  'Active'
]
export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, ref },
  { vm, emit, parent },
  {
    Editor,
    StarterKit,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    Color,
    TextStyle,
    Image,
    Highlight,
    Link,
    Underline,
    Subscript,
    Superscript,
    TaskItem,
    TaskList,
    TextAlign,
    Paragraph,
    mergeAttributes,
    CodeBlockLowlight,
    lowlight,
    VueNodeViewRenderer,
    // CodehighComp,
    // NodeViewContent,
    // nodeViewProps,
    // NodeViewWrapper,
    Placeholder,
    codeHighlight
  }
) => {
  let toolBar = [
    'bold',
    'italic',
    'underline',
    'strike',
    'quote',
    'code',
    'codeBlock',
    'unorderedlist',
    'orderedlist',
    'taskList',
    'subscript',
    'superscript',
    // 'nodeDelete',
    'undo',
    'redo',
    'left',
    'center',
    'right',
    'h-box',
    'font-size',
    'line-height',
    'highlight',
    'color',
    'backgroundColor',
    'formatClear',
    'link',
    'unlink',
    'img',
    'table'
  ]
  if (props.customToolBar) {
    toolBar = props.customToolBar
  }
  let ydoc = null
  let provider = null
  // 自定义图片
  const CustomImage = Image.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        type: {
          default: 'img'
        }
      }
    },
    renderHTML({ node, HTMLAttributes }) {
      if (node.attrs.type === 'video') {
        return ['div', { class: 'img-button' }, ['video', mergeAttributes({ controls: true }, HTMLAttributes)]]
      } else {
        return ['div', { class: 'img-button' }, ['img', HTMLAttributes]]
      }
    }
  })
  const CustomParagraph = Paragraph.extend({
    addOptions() {
      return {
        levels: [1, 1.5, 2, 2.5, 3]
      }
    },
    addAttributes() {
      return {
        level: {
          default: 1
        }
      }
    },
    renderHTML({ node, HTMLAttributes }) {
      const hasLevel = this.options.levels.includes(node.attrs.level)
      const level = hasLevel ? node.attrs.level : this.options.levels[0]
      return ['p', mergeAttributes({ style: `line-height: ${level}` }, HTMLAttributes), 0]
    },
    addCommands() {
      return {
        setP:
          (attributes) =>
          ({ commands }) => {
            return commands.setNode(this.name, attributes)
          }
      }
    }
  })
  const CustomSize = Paragraph.extend({
    addOptions() {
      return {
        size: [12, 14, 16, 18, 20, 24, 30]
      }
    },
    addAttributes() {
      return {
        size: {
          default: 16
        }
      }
    },
    renderHTML({ node, HTMLAttributes }) {
      const hasSize = this.options.size.includes(node.attrs.size)
      const size = hasSize ? node.attrs.size : this.options.size[2]
      return ['p', mergeAttributes({ style: `font-size: ${size}px` }, HTMLAttributes), 0]
    },
    addCommands() {
      return {
        setSize:
          (attributes) =>
          ({ commands }) => {
            return commands.setNode(this.name, attributes)
          }
      }
    }
  })
  const CustomBackgroundColor = Highlight.extend({
    addAttributes() {
      return {
        bgColor: {
          default: null,
          renderHTML: (attributes) => {
            if (!attributes.bgColor) {
              return {}
            }
            return {
              style: `background: ${attributes.bgColor}`
            }
          }
        }
      }
    },
    addCommands() {
      return {
        setBackColor:
          (attributes) =>
          ({ commands }) => {
            return commands.setMark(this.name, attributes)
          }
      }
    }
  })
  const defaultOptions = {
    extensions: [
      StarterKit?.configure({
        // 开启多人协作功能要关闭默认的history模式
        history: false
      }),
      Table.configure({
        resizable: true
      }),
      TableCell,
      TableHeader,
      TableRow,
      Color,
      TextStyle,
      CustomImage,
      Highlight,
      Link,
      Underline,
      Subscript,
      Superscript,
      TaskList,
      TaskItem.configure({
        nested: true
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      CustomParagraph,
      CustomSize,
      CustomBackgroundColor,
      CodeBlockLowlight.extend({
        addNodeView() {
          return VueNodeViewRenderer(codeHighlight)
        }
      }).configure({ lowlight }),
      Placeholder.configure({
        placeholder: props.placeholder ?? 'Write something …'
      })
    ],
    content: '',
    autofocus: true,
    editable: true,
    injectCSS: false,
    // 事件
    onBeforeCreate({ editor }) {
      emit('beforeCreate', { editor })
    },
    onCreate({ editor }) {
      emit('create', { editor })
    },
    onUpdate({ editor }) {
      const json = editor.getJSON()
      const html = editor.getHTML()
      const text = editor.getText()
      // 可传入参数 blockSeparator 控制节点之间的连接
      const lineText = editor.getText({ blockSeparator: '--' })
      // 文本一行内展示，可设置连接符，只能获得文本
      emit('update', { editor })
      emit('update:modelValue', html)
    },

    onFocus({ editor, event }) {
      emit('focus', { editor, event })
    },
    onBlur({ editor, event }) {
      emit('blur', { editor, event })
    },
    onSelectionUpdate({ editor }) {
      // The selection has changed.
      emit('selectionUpdate', { editor })
    },
    onTransaction({ editor, transaction }) {
      // The editor state has changed.
      emit('transaction', { editor, transaction })
    },
    onDestroy() {
      // The editor is being destroyed.
      emit('destroy')
    },
    ...props.options
  }

  let options = props.options ? Object.assign(defaultOptions, props.options) : defaultOptions
  const editor = new Editor(options)

  const box = ref(null)
  const fontSize = ref('16px')
  const state = reactive({
    editor: null,
    // table 变量
    isShow: false,
    flagX: 0,
    flagY: 0
  })
  state.editor = editor
  const api = {
    toolBar,
    state,
    setLink: setLink(editor),
    handleChange: handleChange(editor),
    // table处理函数
    box,
    handleMove: handleMove(state, box),
    handleClickOutside: handleClickOutside(state, box),
    removeClickOutside: removeClickOutside(state, box),
    handleClick: handleClick(state, box),
    // bubble 菜单
    shouldShow: shouldShow,
    //
    fontSize,
    eventImg,
    eventClick,
    Active
  }
  onBeforeUnmount(() => {
    state.editor.destroy()
  })
  return api
}
