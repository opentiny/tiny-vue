export const api = ['state', 'setLink', 'handleChange']
export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive },
  { vm, emit, parent },
  { useEditor, Collaboration, Y, WebrtcProvider, StarterKit, Table, TableCell, TableHeader, TableRow, Color, TextStyle, Image, Highlight, Link, Underline, Subscript, Superscript }
) => {
  const ydoc = new Y.Doc()
  const provider = new WebrtcProvider('tiny-examsple-document', ydoc)

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
      Image,
      Highlight,
      Link,
      Underline,
      Subscript,
      Superscript
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
  const state = reactive({
    editor: null,
  })
  state.editor = editor
  const api = {
    state,
    setLink,
    handleChange,
  }
  onBeforeUnmount(() => {
    state.editor.destroy()
  })
  return api
}
