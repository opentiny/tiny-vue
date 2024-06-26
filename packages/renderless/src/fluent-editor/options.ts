import { isNull } from '../common/type'

const betterTable = {
  operationMenu: {
    items: {
      copyCells: { text: '复制' },
      copyTable: { text: '复制表格' },
      emptyCells: { text: '清空内容' },
      insertRowUp: { text: '上插入行' },
      insertRowDown: { text: '下插入行' },
      insertColumnLeft: { text: '左插入列' },
      insertColumnRight: { text: '右插入列' },
      mergeCells: { text: '合并单元格' },
      unmergeCells: { text: '拆分单元格' },
      deleteRow: { text: '删除当前行' },
      deleteColumn: { text: '删除当前列' },
      deleteTable: { text: '删除表格' }
    },
    color: true
  }
}

const toolbar = (FluentEditor) => {
  const underline = ['bold', 'italic', 'underline', 'strike']
  const list = [{ list: 'ordered' }, { list: 'bullet' }]
  const script = [{ script: 'sub' }, { script: 'super' }]

  return {
    container: [
      ['undo', 'redo', 'clean'],
      [
        { font: FluentEditor.imports['formats/font'].whitelist },
        { size: FluentEditor.imports['formats/size'].whitelist },
        { lineheight: FluentEditor.imports['formats/lineheight'].whitelist },
        { header: [1, 2, 3, 4, 5, 6, false] }
      ],
      underline,
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      list,
      script,
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['link', 'image', 'video', 'file'],
      ['better-table'],
      ['fullscreen']
    ]
  }
}

export const mention = (mentionObj) => ({
  search: async (term) => {
    const { data, searchKey } = mentionObj
    try {
      return data.filter((d) => {
        return d[searchKey] && String(d[searchKey]).includes(term)
      })
    } catch (e) {
      return []
    }
  }
})

const listAutofillHandler = ({ FluentEditor, state }) => (range, context) => {
  const formats = state.quill.getFormat(range)
  if (formats['table-cell-line']) {
    return true
  }
  if (isNull(state.quill.scroll.query('list'))) {
    return true
  }
  const { length } = context.prefix
  const [line, offset] = state.quill.getLine(range.index)
  if (offset > length) {
    return true
  }
  let value
  let prefix = context.prefix.trim()

  if (~['[]', '[ ]'].indexOf(prefix)) {
    value = 'unchecked'
  } else if (prefix === '[x]') {
    value = 'checked'
  } else if (~['-', '*'].indexOf(prefix)) {
    value = 'bullet'
  } else {
    value = 'ordered'
  }

  state.quill.insertText(range.index, ' ', FluentEditor.sources.USER)
  state.quill.history.cutoff()
  const delta = new FluentEditor.imports['delta']()
    .retain(range.index - offset)
    .delete(length + 1)
    .retain(line.length() - 2 - offset)
    .retain(1, { list: { value: value } })
  state.quill.updateContents(delta, FluentEditor.sources.USER)
  state.quill.history.cutoff()
  state.quill.setSelection(range.index - length, FluentEditor.sources.SILENT)
  return false
}

const listAutofill = ({ FluentEditor, state }) => ({
  key: ' ',
  shiftKey: null,
  collapsed: true,
  format: { list: false, 'code-block': false, blockquote: false, header: false, table: true },
  prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
  handler: listAutofillHandler({ FluentEditor, state })
})

const listIgnoreRight = ({ FluentEditor, state }) => ({
  key: 'ArrowRight',
  shiftKey: null,
  format: ['list'],
  collapsed: true,
  offset: 0,
  handler(range) {
    state.quill.setSelection(range.index + 1, FluentEditor.sources.SILENT)
  }
})

const listIgnoreLeft = ({ FluentEditor, state }) => ({
  key: 'ArrowLeft',
  shiftKey: null,
  format: ['list'],
  collapsed: true,
  offset: 0,
  handler(range) {
    state.quill.setSelection(range.index - 1, FluentEditor.sources.SILENT)
  }
})

const listSoftBreak = ({ FluentEditor, state }) => ({
  key: 'Enter',
  format: ['list'],
  shiftKey: true,
  collapsed: true,
  handler(range) {
    const [line, offset] = state.quill.getLine(range.index)
    const length = line.length()
    // li的末尾不能添加软回车
    if (length > offset + 1) {
      state.quill.insertEmbed(range.index, 'soft-break', true, FluentEditor.sources.USER)
    }
  }
})

export const keyboard = ({ FluentEditor, state }) => {
  // 表格
  const BetterTable = FluentEditor.imports['modules/better-table']
  return {
    bindings: {
      ...BetterTable.keyboardBindings,
      'list autofill': listAutofill({ FluentEditor, state }),
      // fix:在list的offset为0时（即只在最左侧触发）加键盘事件，使其跳过contenteditable=false的span进行移动
      'list ignoreRight': listIgnoreRight({ FluentEditor, state }),
      'list ignoreLeft': listIgnoreLeft({ FluentEditor, state }),
      'list softBreak': listSoftBreak({ FluentEditor, state })
    }
  }
}

const defaultOption = ({ FluentEditor, state, mentionObj }) => {
  return {
    theme: 'snow',
    modules: {
      file: true, // 上传文件需开启
      image: FluentEditor.imports['modules/image-spec'],
      counter: false,
      toolbar: toolbar(FluentEditor),
      'better-table': betterTable,
      mention: mention(mentionObj),
      keyboard: keyboard({ FluentEditor, state })
    },
    // 上传：图片、视频和文件,相关配置
    uploadOption: {
      fileAccept: '.mp4,.xls,.xlsx,.doc,.docx,.ppt,.pptx',
      imageAccept: '.gif,.png,.tiff,image/jpeg',
      isVideoPlay: true,
      imageUploadToServer: true // 是否需要上传到服务器
    },
    placeholder: 'Insert text here ...',
    readOnly: false
  }
}

export { defaultOption }

export const iconOption = {
  align: {
    default: 'IconEditorAlignLeft',
    center: 'IconEditorAlignCenter',
    right: 'IconEditorAlignRight'
  },
  background: 'IconEditorBackground',
  'better-table': 'IconEditorTable',
  blockquote: 'IconEditorQuote',
  bold: 'IconEditorBold',
  clean: 'IconEditorEraser',
  code: '',
  'code-block': 'IconEditorCode',
  color: 'IconEditorTextcolor',
  direction: {
    default: 'IconEditorRightBorder',
    rtl: 'IconEditorLeftBorder'
  },
  emoji: '',
  file: 'IconCloudUpload',
  font: '',
  formula: '',
  fullscreen: 'IconFullscreen',
  'global-link': '',
  header: {
    1: 'IconEditorTitle',
    2: 'IconEditorSubtitle'
  },
  help: '',
  image: 'IconPicture',
  indent: {
    '+1': 'IconEditorMenuRight',
    '-1': 'IconEditorMenuLeft'
  },
  italic: 'IconEditorItalic',
  link: 'IconLink',
  list: {
    bullet: 'IconEditorListDot',
    check: '',
    ordered: 'IconEditorListNum'
  },
  redo: 'IconEditorRedo',
  screenshot: '',
  script: {
    sub: 'IconEditorSub',
    super: 'IconEditorSuper'
  },
  size: '',
  strike: 'IconEditorDeleteline',
  table: '',
  underline: 'IconEditorUnderline',
  undo: 'IconEditorUndo',
  video: 'IconEditorVideo'
}
