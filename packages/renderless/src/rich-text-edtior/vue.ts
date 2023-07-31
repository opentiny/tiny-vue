export const api = ['state']
export const renderless = (
    props,
    { computed, onMounted, onBeforeUnmount, reactive },
    { vm, emit, parent },
    { useEditor, Collaboration, Y, WebrtcProvider, StarterKit, Table, TableCell, TableHeader, TableRow, Color, TextStyle, Image }
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
        ],
        content: 'Example Tesxt',
        autofocus: true,
        editable: true,
        injectCSS: false,
    })
    const addImage = (editor) => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }
    const state = reactive({
        editor: null,
        addImage: addImage,
    })
    state.editor = editor
    const api = {
        state,
    }
    onBeforeUnmount(() => {
        state.editor.destroy()
    })
    return api
}
