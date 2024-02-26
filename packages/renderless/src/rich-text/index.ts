import { extend } from '../common/object'
import { xss } from '../common/xss'

import { getToolbarTips, defaultOptions } from './options'
import registerTableModule from './table-module'
import registerCustomClipboard from './clipboard'

export const initContent =
  ({ state, props, nextTick }) =>
  () => {
    if (state.quill) {
      const flag = state.quill.selection.hasFocus()

      if (state.content && state.content !== state.innerContent) {
        state.innerContent = state.content
        state.quill.pasteHTML(xss.filterHtml(state.content))
      } else {
        if (!state.content) {
          state.quill.setText('')
        }
      }

      nextTick(() => {
        if (!props.disabled && !props.displayOnly) {
          state.quill.enable(true)
        }
        flag ? state.quill.selection.focus() : state.quill.blur()
      })
    }
  }

export const initQuill =
  ({ api, emit, props, vm, service, state, Quill, ImageDrop, ImageUpload, FileUpload }) =>
  () => {
    state.innerOptions = extend(true, {}, defaultOptions, props.globalOptions, props.options)

    if (document.caretRangeFromPoint) {
      if (props.imageDrop) {
        Quill.register('modules/imageDrop', ImageDrop, true)
        state.innerOptions.modules.imageDrop = props.imageDrop
      }

      if (props.imageUpload) {
        Quill.register('modules/imageUpload', ImageUpload, true)
        state.innerOptions.modules.imageUpload = props.imageUpload
      }

      if (props.fileUpload) {
        Quill.register('modules/fileUpload', FileUpload, true)

        state.innerOptions.modules.fileUpload = extend(
          true,
          {},
          { httpRequest: service && service.network.request },
          props.fileUpload,
          { url: state.fileUploadUrl }
        )
      }
    }

    // tableModule
    registerTableModule(Quill)

    // tableModule config
    if (state.innerOptions.modules) {
      state.innerOptions.modules.tableModule = props.tableModule === true
    }

    // CustomClipboard
    registerCustomClipboard(Quill, props.keepClass)

    state.quill = Object.freeze(new Quill(vm.$refs.editor, state.innerOptions))
    state.quill.enable(false)
    state.quill.on('selection-change', api.selectionChange)
    state.quill.on('text-change', api.textChange)

    if (state.content) {
      state.quill.pasteHTML(xss.filterHtml(state.content))
      api.textChange()
    }

    if (!props.disabled && !props.displayOnly) {
      state.quill.enable(true)
    }

    emit('ready', state.quill)

    api.setToolbarTips()
  }

export const setToolbarTips =
  ({ t, vm }) =>
  () => {
    let tip
    const item = getToolbarTips(t)
    const length = item.length
    const richTextEl = vm.$el

    for (let i = 0; i < length; i++) {
      tip = richTextEl.querySelectorAll('.quill-editor ' + item[i].Choice)

      if (tip.length) {
        Array.prototype.slice.call(tip).forEach((ite) => {
          ite.setAttribute('title', item[i].title)
        })
      }
    }

    tip = richTextEl.querySelectorAll('.quill-editor .ql-file')

    if (tip.length) {
      const iconEl = vm.$refs.iconFile.$el

      Array.prototype.slice.call(tip).forEach((ite) => {
        ite.innerHTML = getOuterHTML(iconEl)
      })
    }
  }

export const setPlaceholder =
  ({ state, props }) =>
  () => {
    if (state.quill) {
      state.quill.root.setAttribute('data-placeholder', props.options.placeholder)
    }
  }

export const getFileUploadUrl =
  ({ service }) =>
  () => {
    return service ? service.common.getFileUploadUrl() : Promise.resolve('')
  }

export const selectionChange =
  ({ emit, state }) =>
  (range) => {
    if (!range) {
      emit('blur', state.quill)
    } else {
      emit('focus', state.quill)
    }
  }

export const handlePaste =
  ({ state }) =>
  (event) => {
    const rangeLength = state.quill.selection.savedRange.length || 0
    const newLength = event.clipboardData.getData('text').length || 0
    const currentLength = state.quill.getText().length || 0

    const totalLength = currentLength - rangeLength + newLength

    if (totalLength > state.maxLength) {
      event.preventDefault()
      state.pasteCanceled = true
    } else {
      state.pasteCanceled = false
    }
  }

export const maxLength =
  ({ props, constants }) =>
  () => {
    return props.maxLength > 0 ? props.maxLength : constants.MAX_LENGTH
  }

export const isDisplayOnly =
  ({ state, props, parent, nextTick }) =>
  () => {
    let displayOnly = props.displayOnly || (parent.auiForm || {}).displayOnly

    nextTick(() => {
      if (state.quill && !props.disabled) {
        state.quill.root.setAttribute('contenteditable', !displayOnly)
      }
    })

    return displayOnly
  }

export const textChange =
  ({ emit, vm, state, Modal, t }) =>
  (delta, oldDelta) => {
    const quill = state.quill

    if (state.pasteCanceled) {
      state.pasteCanceled = false
      quill.setContents(oldDelta)

      Modal.message({ message: `${t('ui.richText.maxLength')}${state.maxLength}`, status: 'warning' })

      return
    }

    const text = quill.getText()
    const currentLength = text.length
    const maxLength = state.maxLength

    if (currentLength > maxLength) {
      quill.setContents(oldDelta)

      Modal.message({ message: `${t('ui.richText.maxLength')}${state.maxLength}`, status: 'warning' })

      return
    }

    let html = xss.filterHtml(vm.$refs.editor.children[0].innerHTML)

    if (html === '<p><br></p>') html = ''

    state.innerContent = html

    emit('update:modelValue', html)
    emit('change', { html, text, quill })
  }

const getOuterHTML = (el) => {
  if (!el.outerHTML) {
    const container = document.createElement('div')

    container.appendChild(el)

    return xss.filterHtml(container.innerHTML)
  } else {
    return xss.filterHtml(el.outerHTML)
  }
}

export const mounted =
  ({ api, props, state, i18n, watch }) =>
  () => {
    if (props.fileUpload && !props.fileUpload.url) {
      api.getFileUploadUrl().then((url) => {
        url = xss.filterUrl(url)
        state.fileUploadUrl = url
        api.initQuill()
      })
    } else {
      api.initQuill()
    }

    if (i18n) {
      watch(() => i18n.locale, api.setToolbarTips)
    }
  }

export const beforeUnmount =
  ({ api, state }) =>
  () => {
    state.quill.off('selection-change', api.selectionChange)
    state.quill.off('text-change', api.textChange)
    state.quill = null
    delete state.quill
  }
