import { handleChange, setLink, handleMove, handleClickOutside, removeClickOutside, handleClick, shouldShow } from './index'
export const api = ['state', 'setLink', 'handleChange', 'box', 'handleMove', 'handleClickOutside', 'removeClickOutside', 'handleClick', 'shouldShow']
export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, ref },
  { vm, emit, parent },
  { useEditor, Collaboration, Y, WebrtcProvider, StarterKit, Table, TableCell, TableHeader, TableRow, Color, TextStyle, Image, Highlight, Link, Underline, Subscript, Superscript, TaskItem, TaskList, TextAlign }
) => {
  const ydoc = new Y.Doc()
  const provider = new WebrtcProvider('tiny-examsple-document', ydoc)
  // 自定义图片
  const CustomImage = Image.extend({
    renderHTML({ HTMLAttributes }) {
      return ['div', { class: 'img-button' }, ['img', HTMLAttributes]]
    }
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
    ],
    content: 'Example Tesxt',
    autofocus: true,
    editable: true,
    injectCSS: false,
  })

  const box = ref(null)
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
  }
  onBeforeUnmount(() => {
    state.editor.destroy()
  })
  return api
}
