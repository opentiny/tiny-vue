import {
  handleChange,
  setLink,
  tableMouseMove,
  tableChoose,
  toggleTablePanel,
  closeTablePanel,
  shouldShow,
  eventImg,
  eventClick,
  Active
} from './index'
import { shallowRef } from 'vue'

export const api = [
  'state',
  'setLink',
  'handleChange',
  'tableMouseMove',
  'tableChoose',
  'toggleTablePanel',
  'closeTablePanel',
  'shouldShow',
  'eventImg',
  'eventClick',
  'Active'
]
export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive },
  { vm, emit },
  { TinyTiptap, Editor, VueRenderer, VueNodeViewRenderer, viewMap, slashView }
) => {
  let defaultToolBar = [
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
    'undo',
    'redo',
    'left',
    'center',
    'right',
    'formatClear',
    'link',
    'h-box', //
    'font-size', //
    'line-height', //
    'highlight',
    'color', //
    'backgroundColor', //
    'unlink', //
    'img', //
    'table' //
  ]

  const defaultOptions = {
    content: props.modelValue,
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
      const html = editor.getHTML()
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
    }
    // ...props.options
  }

  let options = Object.assign(defaultOptions, props.options)

  const state = reactive({
    editor: null,
    toolbar: computed(() => (props.customToolBar.length ? props.customToolBar : defaultToolBar)),
    // table 变量
    isShowTable: false,
    flagX: 0,
    flagY: 0
  })

  const api = {
    state,
    setLink: setLink(state.editor),
    handleChange: handleChange(state.editor),
    // table处理函数
    tableMouseMove: tableMouseMove(state, vm),
    toggleTablePanel: toggleTablePanel(state),
    closeTablePanel: closeTablePanel(state),
    tableChoose: tableChoose(state, vm),
    // bubble 菜单
    shouldShow,
    eventImg,
    eventClick,
    Active
  }

  onMounted(() => {
    for (const [key, val] of viewMap.entries()) {
      viewMap.set(key, VueNodeViewRenderer(val))
    }

    const menuMap = {
      renderer: VueRenderer,
      slashView
    }

    const viewOptions = {
      viewMap,
      menuMap
    }

    const otherOptions = {
      placeholder: props.placeholder
    }

    const editorInstance = new TinyTiptap(Editor, options, viewOptions, otherOptions)
    // editor 只需要浅层
    state.editor = shallowRef(editorInstance.editor)
  })

  onBeforeUnmount(() => {
    state.editor.destroy()
  })

  return api
}
