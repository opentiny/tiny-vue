import { extend } from '@opentiny/utils'
import { isNull } from '@opentiny/utils'
import { xss } from '@opentiny/utils'
import { set } from '../chart-core/deps/utils'
import { on, off } from '@opentiny/utils'
import { PopupManager } from '@opentiny/utils'

const isSafeLinkUrl = (url) => /^(https?:|mailto:|tel:|\/|#)/i.test((url || '').trim())

const openLink = (url, target = '_blank') => {
  if (target === '_blank') {
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    popup && (popup.opener = null)
    return
  }

  window.location.assign(url)
}

export const init =
  ({
    api,
    emit,
    props,
    service,
    state,
    FluentEditor,
    UploaderDfls,
    defaultOptions,
    vm,
    useBreakpoint,
    simpleToolbar
  }) =>
  () => {
    UploaderDfls.enableMultiUpload = { file: true, image: true }
    UploaderDfls.handler = api.uploaderDflsHandler
    UploaderDfls.imagePasteFailCallback = props.imagePasteFailCallback
    // 先给默认 toolbar 注入 handlers；但用户可能会在 props.options.modules.toolbar 里传数组覆盖默认对象
    defaultOptions.modules.toolbar.handlers = api.handlers()
    state.innerOptions = extend(true, {}, defaultOptions, props.globalOptions, props.options)

    // 兼容：当用户传入 toolbar 数组时，Quill 仍需要 { container, handlers } 才能触发自定义 handler（如 alignHandler）
    const toolbarOpt = state.innerOptions?.modules?.toolbar
    const defaultHandlers = api.handlers()

    if (Array.isArray(toolbarOpt)) {
      // 用户传数组时，使用默认 handlers（数组形式不支持自定义 handlers）
      state.innerOptions.modules.toolbar = {
        container: toolbarOpt,
        handlers: defaultHandlers
      }
    } else if (toolbarOpt && typeof toolbarOpt === 'object') {
      // 用户传对象时，合并默认 handlers 和用户自定义的 handlers
      const userHandlers = toolbarOpt.handlers || {}
      state.innerOptions.modules.toolbar.handlers = {
        ...defaultHandlers,
        ...userHandlers
      }
    }

    if (props.imageUpload) {
      state.innerOptions.imageUpload = props.imageUpload
    } else {
      state.innerOptions.uploadOption.imageUploadToServer = false
    }

    if (props.fileUpload) {
      state.innerOptions.fileUpload = extend(
        true,
        {},
        { httpRequest: service && service.network.request },
        props.fileUpload,
        { url: xss.filterUrl(state.fileUploadUrl) }
      )
    }

    api.setToolbarTips()

    const { current } = useBreakpoint()
    if (current.value === 'default') {
      state.innerOptions.modules.toolbar = simpleToolbar
    }

    props.beforeEditorInit?.(FluentEditor)

    const quill = new FluentEditor(vm.$refs.editor, state.innerOptions)
    quill.emitter.on('file-change', api.fileOperationToSev)
    state.quill = Object.freeze(quill)
    state.linkClickHandler = api.handleLinkClick
    on(state.quill.root, 'click', state.linkClickHandler)

    setTimeout(api.setToolbarTitle)

    // 点击工具栏插入表格 ql-better-table
    let insertTableButton = vm.$el.querySelector('.ql-better-table')
    const tableModule = state.quill.getModule('better-table')

    insertTableButton &&
      (insertTableButton.onclick = (event, row = 3, col = 3) => {
        tableModule.insertTable(row, col)
      })

    let fullscreenButton = vm.$el.querySelector('.ql-fullscreen')

    fullscreenButton && (fullscreenButton.onclick = api.keyDownHandler)

    state.quill.enable(false)

    state.quill.on('selection-change', api.selectionChange)
    state.quill.on('text-change', api.textChange)

    if (state.content) {
      if (props.dataType) {
        state.quill.setContents(api.stringToJson(state.content))
      } else {
        let temp = xss.filterHtml(state.content)

        state.quill.clipboard.dangerouslyPasteHTML(temp)
      }

      api.textChange()
    }

    if (!props.disabled) {
      state.quill.enable(true)
    }

    api.handleComposition()
    emit('ready', state.quill)
  }

export const checkTableISEndElement = (element) => {
  if (element.children.length > 1) {
    return checkTableISEndElement(element.children[element.children.length - 1])
  } else {
    return element.children[0] instanceof HTMLTableElement
  }
}

const isSvg = (str) => {
  return str.trim().startsWith('<svg')
}

const setIcons = ({ api, vm, iconOption, FluentEditor, keys = [] }) => {
  for (const key in iconOption) {
    if (Object.hasOwnProperty.call(iconOption, key)) {
      const option = iconOption[key]

      if (typeof option === 'object') {
        setIcons({ api, vm, iconOption: option, FluentEditor, keys: [...keys, key] })
      } else {
        const outerHtml = isSvg(option) ? option : api.getOuterHTML(vm.$refs[option]?.[0])

        if (option && outerHtml) {
          const k = keys.length ? [...keys, key].join('.') : key
          set(FluentEditor.imports['ui/icons'], k.replace(/default/, ''), outerHtml)
        }
      }
    }
  }
}

export const setToolbarTips =
  ({ api, vm, FluentEditor, iconOption }) =>
  () => {
    setIcons({ api, vm, iconOption, FluentEditor })
  }

export const getOuterHTML = () => (el) => el && el.outerHTML

export const keyDownHandler =
  ({ state }) =>
  (e) => {
    if (e.keyCode) {
      if (e.keyCode === 27 && state.isFullscreen) {
        state.isFullscreen = !state.isFullscreen
      }
    } else if (e.type === 'click') {
      state.isFullscreen = !state.isFullscreen
    }
  }

export const addFullscreenchange =
  ({ api }) =>
  () => {
    on(document, 'keydown', api.keyDownHandler)
  }

export const removeFullscreenchange =
  ({ api }) =>
  () => {
    off(document, 'keydown', api.keyDownHandler)

    api.keyDownHandler = null
  }

export const handleComposition =
  ({ state, api }) =>
  () => {
    on(state.quill.root, 'compositionstart', api.handleCompositionstart)
    on(state.quill.root, 'compositionend', api.handleCompositionend)
  }

export const removeHandleComposition =
  ({ state, api }) =>
  () => {
    off(state.quill.root, 'compositionstart', api.handleCompositionstart)
    off(state.quill.root, 'compositionend', api.handleCompositionend)
  }

// 开始输入中文
export const handleCompositionstart =
  ({ state }) =>
  () => {
    state.quill.root.classList.remove('ql-blank')
  }
//
export const handleCompositionend =
  ({ state }) =>
  (event) => {
    // fix: 修复中文输入时无法判断编辑器内容是否为空
    if (state.quill.editor.isBlank()) {
      if (state.quill.getLength() > 0 && event.data.length > 0) {
        let data = event.data

        state.quill.setContents([{ insert: data }])
        state.quill.setSelection(data.length)
        state.quill.root.classList.remove('ql-blank')
      } else {
        state.quill.root.classList.add('ql-blank')
      }
    } else {
      let data = state.quill.container.innerHTML
      let range = state.quill.getSelection(true)
      const [mentionItem, offset] = state.quill.getLeaf(range.index)

      if (mentionItem.statics.blotName === 'break') {
        state.quill.clipboard.dangerouslyPasteHTML(data)
        state.quill.setSelection(range.index + event.data.length)
      } else {
        let pattern = /[\u4E00-\u9FA5\uF900-\uFA2D]/
        let flag

        if (pattern.test(event.data)) {
          flag = true
        }
        if (flag) {
          state.quill.setSelection(range.index)
        } else {
          if (offset !== 0) {
            state.quill.setSelection(range.index)
          } else {
            if (event.data.length > 1) {
              state.quill.setSelection(range.index + 1)
            } else {
              state.quill.setSelection(range.index)
            }
          }
        }
      }
      state.quill.root.classList.remove('ql-blank')
    }
  }

export const undoHandler =
  ({ state }) =>
  () => {
    // 如果当前有表格被激活则清除表格工具条
    const betterTableModule = state.quill.getModule('better-table')

    if (betterTableModule && betterTableModule.table) {
      betterTableModule.hideTableTools()
    }

    state.quill.history.undo()
  }

export const redoHandler =
  ({ state }) =>
  () => {
    // 如果当前有表格被激活则清除表格工具条
    const betterTableModule = state.quill.getModule('better-table')

    if (betterTableModule && betterTableModule.table) {
      betterTableModule.hideTableTools()
    }

    state.quill.history.redo()
  }

export const lineheightHandler =
  ({ state, FluentEditor }) =>
  (value) => {
    state.quill.format('line-height', value, FluentEditor.sources.USER)
  }

export const fileHandler =
  ({ api, state, props }) =>
  () => {
    // 禁用状态下不允许上传文件
    if (props.disabled) {
      return
    }

    const option = state.quill.options.uploadOption
    const accept = option && option.fileAccept

    api.inputFileHandler('file', accept)
  }

export const imageHandler =
  ({ api, state, props }) =>
  () => {
    // 禁用状态下不允许上传图片
    if (props.disabled) {
      return
    }

    const option = state.quill.options.uploadOption
    const accept = option && option.imageAccept

    api.inputFileHandler('image', accept)
  }

/**
 * 上传：图片、视频和文件,相关配置; 触发上传
 * @param {*} param0
 * @returns
 */
export const inputFileHandler =
  ({ state, UploaderDfls }) =>
  (type, accept) => {
    const defaultMIMETypes = state.quill.uploader.options[type].join(', ')
    const mimeTypes = accept || defaultMIMETypes
    const betterToolbar = state.quill.getModule('toolbar')
    let fileInput = betterToolbar.container.querySelector(`input.ql-${type}[type=file]`)

    if (isNull(fileInput)) {
      fileInput = document.createElement('input')
      fileInput.classList.add(`ql-${type}`)
      fileInput.setAttribute('type', 'file')
      fileInput.setAttribute('accept', mimeTypes)

      if (
        (UploaderDfls.enableMultiUpload.file && type === 'file') ||
        (UploaderDfls.enableMultiUpload.image && type === 'image')
      ) {
        fileInput.setAttribute('multiple', '')
      }

      fileInput.onchange = () => {
        const range = state.quill.getSelection(true)
        state.quill.uploader.upload(range, fileInput.files, type === 'file')
        fileInput.value = ''
      }

      betterToolbar.container.appendChild(fileInput)
    }

    fileInput.click()
  }

export const uploaderDflsHandler =
  ({ api, modules, props }) =>
  (range, files, fileFlags, rejectFlags) => {
    // 禁用状态下不允许上传文件或图片
    if (props.disabled) {
      return
    }

    const fileArr = []
    const imgArr = []

    files.forEach((file, index) => (fileFlags[index] ? fileArr.push(file) : imgArr.push(file)))

    if (modules.file && (fileArr.length || rejectFlags.file)) {
      api.handleUploadFile(range, fileArr, rejectFlags.file)
    }

    if (imgArr.length || rejectFlags.image) {
      api.handleUploadImage(range, { file: imgArr[0], files: imgArr }, rejectFlags.image)
    }
  }

/**
 * 处理上传文件
 * @param {*} FluentEditor
 * @param {*} Delta
 * @param {*} param2
 * @returns
 */
export const handleUploadFile =
  ({ api, UploaderDfls }) =>
  (range, files, hasRejectedFile) => {
    const fileEnableMultiUpload = UploaderDfls.enableMultiUpload === true || UploaderDfls.enableMultiUpload.file

    api.fileOperationToSev({
      operation: 'upload',
      data: fileEnableMultiUpload ? { files } : { file: files[0] },
      hasRejectedFile,
      callback: (res) => {
        if (!res) {
          return
        }

        if (fileEnableMultiUpload && Array.isArray(res)) {
          res.forEach((value, index) => api.insertFileToEditor(range, files[index], value))
        } else {
          api.insertFileToEditor(range, files[0], res)
        }
      }
    })
  }

const getOption = (url, headers, method, fd, callbackOK, callbackKO, callback) => {
  url = xss.filterUrl(url)

  return {
    url,
    headers,
    method,
    data: fd,
    onSuccess(res) {
      res = res.data
      let resData = {}

      // 遗留代码
      // eslint-disable-next-line no-unreachable-loop
      for (let key in res) {
        resData = res[key]
        break
      }

      callbackOK(res, ({ name, url }) => {
        callback({
          data: {
            id: resData.attachmentId,
            size: resData.fileSize,
            title: name,
            src: url
          }
        })
      })
    },
    onError(error) {
      callbackKO(error)
    }
  }
}

const getOnloadOfFileOperToSev =
  ({ xmlhr, callbackOK, callback, callbackKO }) =>
  () => {
    if (xmlhr.status === 200) {
      let res = JSON.parse(xmlhr.responseText)
      let resData = {}

      // 遗留代码，为什么这样写
      // eslint-disable-next-line no-unreachable-loop
      for (let key in res) {
        resData = res[key]
        break
      }

      callbackOK(res, ({ name, url }) => {
        callback({ data: { id: resData.attachmentId, size: resData.fileSize, title: name, src: url } })
      })
    } else {
      callbackKO({ code: xmlhr.status, type: xmlhr.statusText, body: xmlhr.responseText })
    }
  }

// 文件上传到服务器，功能待补充
export const fileOperationToSev =
  ({ state }) =>
  (event) => {
    const { operation, hasRejectedFile, callback } = event
    const { files, fileDownloadUrl } = event.data

    switch (operation) {
      case 'upload': {
        if (hasRejectedFile || !files || !files.length) {
          return
        }

        const options = state.innerOptions.fileUpload
        let { url, method = 'POST', name = 'file', headers = {} } = options
        let { success: callbackOK, fail: callbackKO } = options

        url = xss.filterUrl(url)

        if (!url) {
          return
        }

        let fd = new FormData()

        fd.append(name, files[0], files[0].name)

        options.csrf && fd.append(options.csrf.token, options.csrf.hash)

        if (options.httpRequest) {
          let reqOptions = getOption(url, headers, method, fd, callbackOK, callbackKO, callback)
          let req = options.httpRequest(reqOptions)

          req && req.then && req.then(reqOptions.onSuccess, reqOptions.onError)
        } else {
          let xmlhr = new XMLHttpRequest()

          xmlhr.withCredentials = options.withCredentials !== false
          xmlhr.open(method, url, true)

          for (let index in headers) {
            xmlhr.setRequestHeader(index, headers[index])
          }

          xmlhr.onload = getOnloadOfFileOperToSev({ xmlhr, callbackOK, callback, callbackKO })

          xmlhr.send(fd)
        }
        break
      }

      case 'download':
        window.open(xss.filterUrl(fileDownloadUrl)).opener = null
        break

      default: {
        break
      }
    }
  }

/**
 * 处理上传图片
 * @param {*} FluentEditor
 * @param {*} Delta
 * @param {*} param2
 * @returns
 */
export const handleUploadImage =
  ({ state, api, FluentEditor, Delta, UploaderDfls }) =>
  (range, { file, files }, hasRejectedImage) => {
    if (state.quill.options.uploadOption.imageUploadToServer) {
      const index = state.promisesData.length
      const imageEnableMultiUpload = UploaderDfls.enableMultiUpload.image
      const result = {
        file,
        data: { files: [file] },
        hasRejectedImage,
        callback: (res) => {
          if (!res) {
            return
          }

          state.cbNum += 1
          state.promisesData[index].range = range
          state.promisesData[index].imgUrlData = res
          if (state.cbNum === state.promises.length) {
            Promise.all(state.promises).then((arr) => {
              arr.forEach((data, index) => {
                const { imageEnableMultiUpload, imgUrlData, range } = state.promisesData[index]
                if (imgUrlData) {
                  if (imageEnableMultiUpload && Array.isArray(imgUrlData)) {
                    imgUrlData.forEach(function (value) {
                      return api.insertImageToEditor(range, value)
                    })
                  } else {
                    api.insertImageToEditor(range, imgUrlData)
                  }
                }
              })
              state.promises = []
              state.promisesData = []
              state.cbNum = 0
            })
          }
        }
      }

      if (imageEnableMultiUpload) {
        result.data = { files }
      }

      state.promisesData.push({
        imageEnableMultiUpload
      })

      // 立即将 File 读成 Blob，避免来自 input 的 File 在异步链路中被释放导致请求体为空
      const toRead = imageEnableMultiUpload ? files : [file]
      const readFileToBlob = (f) =>
        f.arrayBuffer().then((ab) => new Blob([ab], { type: f.type }))

      const uploadPromise = Promise.all(toRead.map(readFileToBlob)).then((blobs) => {
        result.file = blobs[0]
        result.fileName = file.name
        result.data.files = blobs
        api.uploadImageToSev(result)
      })

      state.promises.push(uploadPromise)
    } else {
      const promises = files.map((fileItem) => {
        return new Promise((resolve) => {
          const reader = new FileReader()

          reader.onload = (e) => {
            resolve(e.target.result)
          }
          reader.readAsDataURL(fileItem)
        })
      })

      Promise.all(promises).then((images) => {
        const update = images.reduce((delta, image) => {
          return delta.insert({ image })
        }, new Delta().retain(range.index).delete(range.length))

        state.quill.updateContents(update, FluentEditor.sources.USER)
        state.quill.setSelection(range.index + images.length, FluentEditor.sources.SILENT)
      })
    }
  }

/**
 * 将文件插入编辑器
 * @param {*} FluentEditor
 * @param {*} Delta
 * @param {*} param2
 * @returns
 */
export const insertFileToEditor =
  ({ state, FluentEditor, Delta }) =>
  (range, file, { data }) => {
    const oldContent = new Delta().retain(range.index).delete(range.length)
    const videoFlag =
      state.quill.options.uploadOption &&
      state.quill.options.uploadOption.isVideoPlay &&
      /^video\/[-\w.]+$/.test(file.type)
    const insertObj = videoFlag ? { video: data } : { file: data }
    const currentContent = new Delta([{ insert: insertObj }])
    const newContent = oldContent.concat(currentContent)

    state.quill.updateContents(newContent, FluentEditor.sources.USER)
  }

/**
 * 将图片插入编辑器
 * @param {*} FluentEditor
 * @param {*} Delta
 * @param {*} param2
 * @returns
 */
export const insertImageToEditor =
  ({ state, FluentEditor, Delta }) =>
  (range, { data }) => {
    const { imageId, imageUrl } = data
    // 粘贴截图或者从外源直接拷贝的单图时，需要将编辑器中已选中的内容删除
    const oldContent = new Delta().retain(range.index).delete(range.length)
    const currentContent = new Delta([
      {
        insert: { image: xss.filterUrl(imageUrl) },
        attributes: { 'image-id': imageId }
      }
    ])
    const newContent = oldContent.concat(currentContent)

    state.quill.updateContents(newContent, FluentEditor.sources.USER)
  }

// 图片上传到服务器，需要将示例中的上传接口替换成真实的后台接口才能正确运行。
export const uploadImageToSev =
  ({ state }) =>
  (event) => {
    const { file, fileName, hasRejectedImage, callback } = event
    const { files } = event.data

    if (hasRejectedImage) {
      return
    }

    if (!files || !files.length) {
      return
    }

    const options = state.innerOptions.imageUpload
    let { url, method = 'POST', name = 'image', headers = {} } = options
    let { success: callbackOK, fail: callbackKO } = options

    url = xss.filterUrl(url)

    if (!url) {
      return
    }

    let { fd = new FormData(), xhr = new XMLHttpRequest() } = {}

    fd.append(name, file, fileName || file.name || 'file')

    options.csrf && fd.append(options.csrf.token, options.csrf.hash)

    xhr.withCredentials = options.withCredentials !== false

    xhr.open(method, url, true)

    for (let index in headers) {
      xhr.setRequestHeader(index, headers[index])
    }

    xhr.onload = () => {
      if (xhr.status === 200) {
        let { res = JSON.parse(xhr.responseText), resData = {} } = {}

        // eslint-disable-next-line no-unreachable-loop
        for (let key in res) {
          resData = res[key]
          break
        }

        callbackOK(res, (imageUrl) => {
          callback({ data: { imageId: resData.attachmentId, imageUrl } })
        })
      } else {
        callbackKO({ code: xhr.status, type: xhr.statusText, body: xhr.responseText })
      }
    }

    xhr.send(fd)
  }

export const alignHandler =
  ({ state, FluentEditor }) =>
  (value) => {
    const range = state.quill.getSelection(true)

    if (!range) {
      return
    }

    const betterTableModule = state.quill.getModule('better-table')

    // 1) 表格批量选中：直接走 better-table 的 tableSelection.selectedTds
    const selectedTds = betterTableModule?.tableSelection?.selectedTds
    if (Array.isArray(selectedTds) && selectedTds.length > 0) {
      const selectedCells = selectedTds.map((tdBlot) => tdBlot?.domNode).filter(Boolean)

      selectedCells.forEach((cellElement) => {
        const cellBlot = state.quill.scroll.find(cellElement)
        if (!cellBlot) return

        const lines = []
        const findLines = (blot) => {
          if (blot?.statics?.blotName === 'table-cell-line') {
            lines.push(blot)
          }
          if (blot?.children?.length) {
            blot.children.forEach((child) => findLines(child))
          }
        }
        findLines(cellBlot)

        lines.forEach((line) => {
          // 这里保留最小 try/catch：避免异常 blot 导致整个对齐中断
          try {
            const lineIndex = state.quill.getIndex(line)
            if (lineIndex !== null && lineIndex >= 0) {
              const lineLength = line.length()
              if (lineLength > 0) {
                state.quill.formatLine(lineIndex, lineLength, 'align', value, FluentEditor.sources.USER)
              }
            }
          } catch (e) {
            try {
              line?.format?.('align', value)
            } catch (err) {
              // 忽略错误
            }
          }
        })
      })

      // 清除表格选择状态，避免后续模块状态异常
      betterTableModule?.tableSelection?.clearSelection?.()
      return
    }

    // 2) 表格单元格内：无需 DOM selection，直接判断当前是否在 table-cell-line
    const [line] = state.quill.getLine(range.index)
    if (line?.statics?.blotName === 'table-cell-line') {
      // 对当前行应用块级对齐
      state.quill.formatLine(range.index, 1, 'align', value, FluentEditor.sources.USER)
      return
    }

    // 3) 默认行为：非表格场景交给 Quill
    state.quill.format('align', value, FluentEditor.sources.USER)
  }

export const handlers =
  ({ api }) =>
  () => {
    return {
      undo: api.undoHandler,
      redo: api.redoHandler,
      lineheight: api.lineheightHandler,
      file: api.fileHandler,
      image: api.imageHandler,
      inputFile: api.inputFileHandler,
      align: api.alignHandler
    }
  }

export const getFileUploadUrl =
  ({ service }) =>
  () => {
    return service ? service.common.getFileUploadUrl() : Promise.resolve('')
  }

export const selectionChange =
  ({ state, emit }) =>
  (range) => {
    if (!range) {
      emit('blur', state.quill)
    } else {
      emit('focus', state.quill)
    }
  }

export const stringToJson = () => (str) => {
  let contents = ''

  try {
    contents = JSON.parse(str)
  } catch (e) {
    contents = {}
  }

  return contents
}

export const initContent =
  ({ state, props, api, nextTick }) =>
  () => {
    if (state.quill) {
      const flag = state.quill.selection.hasFocus()
      if (state.content && state.content !== state.innerContent) {
        state.innerContent = state.content

        if (props.dataType) {
          state.quill.setContents(api.stringToJson(state.content))
        } else {
          state.quill.clipboard.dangerouslyPasteHTML(xss.filterHtml(state.content))
        }
      } else if (!state.content) {
        state.quill.setText('')
      }

      nextTick(() => {
        if (!props.disabled) {
          state.quill.enable(true)
        }

        flag ? state.quill.selection.focus() : state.quill.blur()
      })
    }
  }

export const textChange =
  ({ emit, vm, state, props }) =>
  () => {
    let contents = ''
    const quill = state.quill
    const text = state.quill.getText()

    if (props.dataType || props.dataUpgrade) {
      contents = JSON.stringify(state.quill.getContents())

      if (contents === '{"ops":[{"insert":"\\n"}]}') {
        contents = ''
      }
    } else {
      contents = xss.filterHtml(vm.$refs.editor.children[0].innerHTML)

      if (contents === '<p><br></p>' || contents === '<p><img></p>') {
        contents = ''
      }
    }

    state.innerContent = contents

    emit('update:modelValue', contents)
    emit('change', { contents, text, quill })
  }

export const mounted =
  ({ api, props, state }) =>
  () => {
    if (props.fileUpload && !props.fileUpload.url) {
      api.getFileUploadUrl().then((url) => {
        url = xss.filterUrl(url)
        state.fileUploadUrl = url
        api.init()
      })
    } else {
      api.init()
    }
    api.addFullscreenchange()
  }

export const beforeUnmount =
  ({ state, api, vm }) =>
  () => {
    const toolbar = state.quill.getModule('toolbar')

    state.quill.uploader.options && (state.quill.uploader.options.handler = null)
    state.quill.uploader.options && (state.quill.uploader.options.imagePasteFailCallback = null)
    toolbar.options && (toolbar.options.handlers = null)
    toolbar.handlers = null
    state.quill.emitter.off('file-change', api.fileOperationToSev)
    if (state.quill.options.imageUpload) {
      state.quill.options.imageUpload.fail = null
      state.quill.options.imageUpload.success = null
    }
    if (state.quill.options.fileUpload) {
      state.quill.options.fileUpload.fail = null
      state.quill.options.fileUpload.success = null
    }

    const fileInput = toolbar.container.querySelector(`input.ql-file[type=file]`)
    const imageInput = toolbar.container.querySelector(`input.ql-image[type=file]`)
    let insertTableButton = vm.$el.querySelector('.ql-better-table')
    let fullscreenButton = vm.$el.querySelector('.ql-fullscreen')

    fileInput && (fileInput.onchange = null)
    imageInput && (imageInput.onchange = null)
    insertTableButton && (insertTableButton.onclick = null)
    fullscreenButton && (fullscreenButton.onclick = null)
    api.removeFullscreenchange()
    api.removeHandleComposition()
    state.quill.off('selection-change', api.selectionChange)
    state.quill.off('text-change', api.textChange)
    off(state.quill.root, 'click', state.linkClickHandler)
    state.linkClickHandler = null
    state.quill = null
    delete state.quill
  }

export const handleLinkClick =
  ({ props, state }) =>
  (event) => {
    const anchor = event?.target?.closest && event.target.closest('a[href]')

    if (!anchor) {
      return
    }

    const rawHref = anchor.getAttribute('href') || ''
    const href = xss.filterUrl(rawHref)

    event.preventDefault()

    if (!href || !isSafeLinkUrl(href)) {
      return
    }

    const payload = {
      url: href,
      rawUrl: rawHref,
      target: anchor.getAttribute('target') || '_blank',
      rel: anchor.getAttribute('rel') || '',
      event,
      quill: state.quill
    }
    const beforeLinkOpen = props.beforeLinkOpen

    if (typeof beforeLinkOpen !== 'function') {
      openLink(payload.url, payload.target)
      return
    }

    const open = (allow) => allow !== false && openLink(payload.url, payload.target)

    try {
      const result = beforeLinkOpen(payload)
      result && typeof result.then === 'function' ? result.then(open).catch(() => {}) : open(result)
    } catch (_) {}
  }

export const computePreviewOptions =
  ({ props, state, constants, api }) =>
  () => {
    if (props.picPreview && state.previewImgUrl) {
      let previewOptions = typeof props.picPreview === 'boolean' ? constants.PIC_PREVIEW_OPTIONS : props.picPreview

      previewOptions = extend(true, {}, previewOptions, {
        urlList: [state.previewImgUrl]
      })

      let onClose = previewOptions.onClose

      if (typeof onClose !== 'function') {
        previewOptions.onClose = () => {
          api.doPreview()
        }
      } else {
        previewOptions.onClose = (...args) => {
          onClose(...args)
          api.doPreview()
        }
      }

      return previewOptions
    }

    return {}
  }

/**
 * elem是img元素或者是具有data-image属性的dom元素
 * elem为空可以清空状态并关闭当前预览
 */
export const doPreview =
  ({ props, state, nextTick }) =>
  (elem) => {
    state.showPreview = false
    state.previewImgUrl = elem && elem.nodeType ? elem.dataset.image || elem.src : ''
    state.previewImgUrl = /^data:image\/.{2,8};base64,\//.test(state.previewImgUrl)
      ? state.previewImgUrl
      : xss.filterUrl(state.previewImgUrl)

    if (props.picPreview && state.previewImgUrl) {
      nextTick(() => {
        state.showPreview = true
      })
    }
  }

export const handleDblclick =
  ({ props, api }) =>
  (e) => {
    if (
      props.picPreview &&
      e &&
      e.type === 'dblclick' &&
      [...e.target.classList].includes('blot-formatter__overlay') &&
      e.target.dataset.image
    ) {
      api.doPreview(e.target)
    }
  }

const getToolbarTitle = (t) => {
  return [
    { selector: '.ql-undo', title: t('ui.fluentEditor.undo') },
    { selector: '.ql-redo', title: t('ui.fluentEditor.redo') },
    { selector: '.ql-clean', title: t('ui.richText.clean') },
    { selector: '.ql-font', title: t('ui.richText.font') },
    { selector: '.ql-size', title: t('ui.richText.size') },
    { selector: '.ql-lineheight', title: t('ui.fluentEditor.lineheight') },
    { selector: '.ql-header.ql-picker', title: t('ui.richText.pickerLabel') },
    { selector: '.ql-header .ql-picker-item[data-value="1"]', title: t('ui.richText.headerPicker1') },
    { selector: '.ql-header .ql-picker-item[data-value="2"]', title: t('ui.richText.headerPicker2') },
    { selector: '.ql-header .ql-picker-item[data-value="3"]', title: t('ui.richText.headerPicker3') },
    { selector: '.ql-header .ql-picker-item[data-value="4"]', title: t('ui.richText.headerPicker4') },
    { selector: '.ql-header .ql-picker-item[data-value="5"]', title: t('ui.richText.headerPicker5') },
    { selector: '.ql-header .ql-picker-item[data-value="6"]', title: t('ui.richText.headerPicker6') },
    { selector: '.ql-header .ql-picker-item:not([data-value])', title: t('ui.richText.normal') },
    { selector: '.ql-bold', title: t('ui.richText.bold') },
    { selector: '.ql-italic', title: t('ui.richText.italic') },
    { selector: '.ql-underline', title: t('ui.richText.underline') },
    { selector: '.ql-strike', title: t('ui.richText.strike') },
    { selector: '.ql-blockquote', title: t('ui.richText.blockquote') },
    { selector: '.ql-code-block', title: t('ui.richText.codeBlock') },
    { selector: '.ql-header[value="1"]', title: t('ui.richText.header1') },
    { selector: '.ql-header[value="2"]', title: t('ui.richText.header2') },
    { selector: '.ql-list[value="ordered"]', title: t('ui.richText.listOrdered') },
    { selector: '.ql-list[value="bullet"]', title: t('ui.richText.listBullet') },
    { selector: '.ql-script[value="sub"]', title: t('ui.richText.subScript') },
    { selector: '.ql-script[value="super"]', title: t('ui.richText.superScript') },
    { selector: '.ql-indent[value="-1"]', title: t('ui.richText.indent1') },
    { selector: '.ql-indent[value="+1"]', title: t('ui.richText.indent2') },
    { selector: '.ql-direction[value="rtl"]', title: t('ui.richText.directionRTL') },
    { selector: '.ql-color', title: t('ui.richText.color') },
    { selector: '.ql-background', title: t('ui.richText.background') },
    { selector: '.ql-align', title: t('ui.richText.align') },
    { selector: '.ql-align .ql-picker-item', title: t('ui.richText.alignPicker1') },
    { selector: '.ql-align .ql-picker-item[data-value="center"]', title: t('ui.richText.alignPicker2') },
    { selector: '.ql-align .ql-picker-item[data-value="right"]', title: t('ui.richText.alignPicker3') },
    { selector: '.ql-link', title: t('ui.richText.link') },
    { selector: '.ql-image', title: t('ui.richText.image') },
    { selector: '.ql-video', title: t('ui.richText.video') },
    { selector: '.ql-file', title: t('ui.richText.file') },
    { selector: '.ql-better-table', title: t('ui.richText.betterTable') },
    { selector: '.ql-fullscreen', title: t('ui.richText.fullscreen') }
  ]
}

export const setToolbarTitle =
  ({ state, t }) =>
  () => {
    const tips = getToolbarTitle(t)
    const container = state.quill.container.parentNode
    for (let i = 0, l = tips.length; i < l; i++) {
      const targetDom = container.querySelector(`.ql-formats ${tips[i].selector}`)
      targetDom && targetDom.setAttribute('title', tips[i].title)
    }
  }

export const computeZIndex =
  ({ constants, props }) =>
  () =>
    props.zIndex === constants.EDITOR_FULLSCREEN_OPTIONS || props.zIndex < 1 ? PopupManager.nextZIndex() : props.zIndex
