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
  const handleChange = (event) => {
    const file = event.target.files[0]
    if (!file.type.match("image.*")) {
      console.log("请选择图片文件！")
      return
    }
    const reader = new FileReader()
    reader.onload = function (e) {
      editor.value.chain().focus().setImage({ src: e.target?.result }).run()
    }
    reader.readAsDataURL(file)
  }
  const setLink = () => {
    const previousUrl = editor.value.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    if (url === null) {
      return
    }
    if (url === '') {
      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .unsetLink()
        .run()
      return
    }
    editor.value
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run()
  }
  // table 处理逻辑
  const handleMove = (e) => {
    let { x, y } = box.value.getBoundingClientRect()
    state.flagX = Math.ceil((e.x - x) / 30) // 后期改变30就可以
    state.flagY = Math.ceil((e.y - y) / 30)
  }
  const handleClickOutside = (e) => {
    if (!box.value?.contains(e.target)) {
      state.isShow = false
      removeClickOutside()
    }
  }
  const removeClickOutside = () => {
    window.removeEventListener('click', handleClickOutside)
  }
  const handleClick = (e) => {
    e.stopPropagation();
    if (state.isShow) {
      if (state.flagX && state.flagY) {
        state.editor.chain().focus().insertTable({ rows: state.flagX, cols: state.flagY, withHeaderRow: true }).run()
      }
      state.flagX = 0
      state.flagY = 0
      removeClickOutside()
    } else {
      window.addEventListener('click', handleClickOutside)
    }
    state.isShow = !state.isShow
  }
  // bubble菜单
  const shouldShow = ({ editor, view, state, oldState, from, to }) => {
    // 仅在无序列表选中的时候才显示 气泡菜单
    return editor.isActive("table");
  };
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
    setLink,
    handleChange,
    // table处理函数
    box,
    handleMove,
    handleClickOutside,
    removeClickOutside,
    handleClick,
    // bubble 菜单
    shouldShow,
  }
  onBeforeUnmount(() => {
    state.editor.destroy()
  })
  return api
}
