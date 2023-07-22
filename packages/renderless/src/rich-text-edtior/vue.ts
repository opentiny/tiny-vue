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
        onUpdate({ editor }) {
            // console.log(editor.state.doc);
            // const json = editor.getJSON()
            const html = editor.getHTML()
            // 默认两个节点 nodes 之间两个换行符
            const text = editor.getText()
            // 可传入参数 blockSeparator 控制节点之间的连接
            const lineText = editor.getText({ blockSeparator: '--' })
            // console.log(json)
            // console.log(html)
            // console.log(text)
            // console.log(lineText) // 文本一行内展示，可设置连接符，只能获得文本
        }
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
