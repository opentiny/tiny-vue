import { handleChange, setLink, handleMove, handleClickOutside, removeClickOutside, handleClick, shouldShow, handleFontSize, eventImg, eventClick, Active } from './index'
import Codehighlight from './code-highlight'
export const api = ['toolBar', 'state', 'setLink', 'handleChange', 'box', 'handleMove', 'handleClickOutside', 'removeClickOutside', 'handleClick', 'shouldShow', 'handleFontSize', 'fontSize', 'eventImg', 'eventClick', 'Active']
export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, ref },
  { vm, emit, parent },
  { useEditor, Collaboration, Y, WebrtcProvider, StarterKit, Table, TableCell, TableHeader, TableRow, Color, TextStyle, Image, Highlight, Link, Underline, Subscript, Superscript, TaskItem, TaskList, TextAlign, Paragraph, mergeAttributes, CodeBlockLowlight, lowlight, VueNodeViewRenderer, NodeViewContent, nodeViewProps, NodeViewWrapper, Placeholder }
) => {
  let toolBar = [
    'bold',
    'italic',
    'link',
    'unlink',
    'highlight',
    'underline',
    'strike',
    'subscript',
    'superscript',
    'code',
    'unorderedlist',
    'orderedlist',
    'taskList',
    'quote',
    'code-block',
    'format-clear',
    'node-delete',
    'undo',
    'redo',
    'left',
    'center',
    'right',
    'font-size',
    'line-hight',
    'h-box',
    'img',
    'color',
    'table',
  ]
  if (props.customToolBar) {
    toolBar = props.customToolBar
  }
  if (!window._yDoc) {
    window._yDoc = new Y.Doc()
  }
  const ydoc = window._yDoc
  const provider = new WebrtcProvider('tiny-examsple-document', ydoc)
  // 自定义图片
  const CustomImage = Image.extend({
    renderHTML({ HTMLAttributes }) {
      return ['div', { class: 'img-button' }, ['img', HTMLAttributes]]
    }
  })
  const CustomParagraph = Paragraph.extend({
    addOptions() {
      return {
        levels: [1, 1.5, 2, 2.5, 3],
      }
    },
    addAttributes() {
      return {
        level: {
          default: 1,
        },
      }
    },
    renderHTML({ node, HTMLAttributes }) {
      const hasLevel = this.options.levels.includes(node.attrs.level)
      const level = hasLevel
        ? node.attrs.level
        : this.options.levels[0]
      return ['p', mergeAttributes({ style: `line-height: ${level}` }, HTMLAttributes), 0]
    },
    addCommands() {
      return {
        setP: attributes => ({ commands }) => {
          return commands.setNode(this.name, attributes)
        },
      }
    },
  })
  const editor = useEditor({
    extensions: [
      StarterKit?.configure({
        // 开启多人协作功能要关闭默认的history模式
        history: false,
      }),
      Collaboration?.configure({
        document: ydoc,
      }),
      Table.configure({
        resizable: true,
      }),
      TableCell, TableHeader, TableRow,
      Color, TextStyle,
      CustomImage,
      Highlight,
      Link,
      Underline,
      Subscript,
      Superscript,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      CustomParagraph,
      CodeBlockLowlight.extend({
        addNodeView() {
          return VueNodeViewRenderer(Codehighlight(NodeViewContent, nodeViewProps, NodeViewWrapper))
        },
      })
        .configure({ lowlight }),
      Placeholder.configure({
        placeholder: props.placeholder ?? 'Write something …',
      }),
    ],
    content: '',
    autofocus: true,
    editable: true,
    injectCSS: false,
    // 事件
    onBeforeCreate({ editor }) {
      console.log('Before the view is created.');
      emit('beforeCreate', { editor })
    },
    onCreate({ editor }) {
      console.log('The editor is ready');
      emit('create', { editor })
    },
    onUpdate({ editor }) {
      const json = editor.getJSON()
      const html = editor.getHTML();
      const text = editor.getText();
      // 可传入参数 blockSeparator 控制节点之间的连接
      const lineText = editor.getText({ blockSeparator: "--" });
      // console.log(json)
      // console.log(html)
      // console.log(text)
      // console.log(lineText) // 文本一行内展示，可设置连接符，只能获得文本
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
  })

  const box = ref(null)
  const fontSize = ref('16px')
  const state = reactive({
    editor: null,
    // table 变量
    isShow: false,
    flagX: 0,
    flagY: 0,
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
    handleFontSize: handleFontSize(fontSize),
    eventImg, eventClick, Active
  }
  onBeforeUnmount(() => {
    state.editor.destroy()
  })
  return api
}
