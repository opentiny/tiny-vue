import * as monaco from 'monaco-editor'
import { hooks } from '@opentiny/vue-common'
// monaco ESM模块集成说明 ： https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-vite
// https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
self.MonacoEnvironment = {
  getWorker: () => new HtmlWorker()
}

export function useMonaco(selector) {
  const state = {
    editor: null,
    getCode: () => state.editor && state.editor.getValue(),
    setCode: (code) => state.editor && state.editor.setValue(code),
    hotKey: (key, fn) => state.editor && state.editor.addCommand(key, fn),
    format: () => state.editor && state.editor.trigger('anyString', 'editor.action.formatDocument'),
    scrollTop: () => state.editor && state.editor.setScrollTop(0)
  }

  hooks.onMounted(() => {
    state.editor = monaco.editor.create(document.querySelector(selector), {
      value: '',
      language: 'html',
      theme: 'vs-dark',
      tabSize: 2,
      automaticLayout: true
    })
  })
  hooks.onUnmounted(() => (state.editor = null))
  return state
}
