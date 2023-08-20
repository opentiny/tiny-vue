import { handleChange, setLink, handleMove, handleClickOutside, removeClickOutside, handleClick, shouldShow, handleFontSize } from './index'
import Codehighlight from './codehighlight.tsx'
export const api = ['state', 'setLink', 'handleChange', 'box', 'handleMove', 'handleClickOutside', 'removeClickOutside', 'handleClick', 'shouldShow', 'handleFontSize', 'fontSize']
export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, ref },
  { vm, emit, parent },
  { useEditor, Collaboration, Y, WebrtcProvider, StarterKit, Table, TableCell, TableHeader, TableRow, Color, TextStyle, Image, Highlight, Link, Underline, Subscript, Superscript, TaskItem, TaskList, TextAlign, Paragraph, mergeAttributes, CodeBlockLowlight, lowlight, VueNodeViewRenderer, NodeViewContent, nodeViewProps, NodeViewWrapper }
) => {
  const ydoc = new Y.Doc()
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
      console.log('2', node, HTMLAttributes, this.options);
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
      CustomImage,
      Table.configure({
        resizable: true,
      }),
      TableCell, TableHeader, TableRow,
      Color, TextStyle,
      Image,
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
    ],
    content: 'Example Tesxt',
    autofocus: true,
    editable: true,
    injectCSS: false,

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
  }
  onBeforeUnmount(() => {
    state.editor.destroy()
  })
  return api
}
