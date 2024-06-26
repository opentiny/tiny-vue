import { extend } from '../common/object'
import { isNull } from '../common/type'
import { xss } from '../common/xss'
import { set } from '../chart-core/deps/utils'
import { on, off } from '../common/deps/dom'
import PopupManager from '../common/deps/popup-manager'

export const init =
  ({ api, emit, props, service, state, FluentEditor, UploaderDfls, defaultOptions, vm }) =>
  () => {
    UploaderDfls.enableMultiUpload = { file: true, image: true }
    UploaderDfls.handler = api.uploaderDflsHandler
    UploaderDfls.imagePasteFailCallback = props.imagePasteFailCallback
    defaultOptions.modules.toolbar.handlers = api.handlers()
    state.innerOptions = extend(true, {}, defaultOptions, props.globalOptions, props.options)

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

    const quill = new FluentEditor(vm.$refs.editor, state.innerOptions)
    quill.emitter.on('file-change', api.fileOperationToSev)
    state.quill = Object.freeze(quill)

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

const setIcons = ({ api, vm, iconOption, FluentEditor, keys = [] }) => {
  for (const key in iconOption) {
    if (Object.hasOwnProperty.call(iconOption, key)) {
      const option = iconOption[key]

      if (typeof option === 'object') {
        setIcons({ api, vm, iconOption: option, FluentEditor, keys: [...keys, key] })
      } else {
        const iconElm = vm.$refs[option] && vm.$refs[option][0]
        const outerHtml = api.getOuterHTML(iconElm)

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
    } else {
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
      let data = state.quill.container.innerHTML,
        range = state.quill.getSelection(true)
      const [mentionItem, offset] = state.quill.getLeaf(range.index)

      if (mentionItem.statics.blotName === 'break' || (mentionItem.statics.blotName === 'text' && offset === 0)) {
        state.quill.clipboard.dangerouslyPasteHTML(data)
      }
      if (mentionItem.statics.blotName === 'break') {
        state.quill.setSelection(range.index + event.data.length)
      } else {
        let pattern = /[\u4E00-\u9FA5\uf900-\ufa2d]/,
          flag

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
    state.quill.format('lineheight', value, FluentEditor.sources.USER)
  }

export const fileHandler =
  ({ api, state }) =>
  () => {
    const option = state.quill.options.uploadOption
    const accept = option && option.fileAccept

    api.inputFileHandler('file', accept)
  }

export const imageHandler =
  ({ api, state }) =>
  () => {
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
        (UploaderDfls.enableMultiUpload['file'] && type === 'file') ||
        (UploaderDfls.enableMultiUpload['image'] && type === 'image')
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
  ({ api, modules }) =>
  (range, files, fileFlags, rejectFlags) => {
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
    const fileEnableMultiUpload = UploaderDfls.enableMultiUpload === true || UploaderDfls.enableMultiUpload['file']

    api.fileOperationToSev({
      operation: 'upload',
      data: fileEnableMultiUpload ? { files } : { file: files[0] },
      hasRejectedFile: hasRejectedFile,
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
      const imageEnableMultiUpload = UploaderDfls.enableMultiUpload['image']
      const result = {
        file,
        data: { files: [file] },
        hasRejectedImage: hasRejectedImage,
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
        result['data'] = { files }
      }

      state.promisesData.push({
        imageEnableMultiUpload
      })
      state.promises.push(api.uploadImageToSev(result))
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
    const { file, hasRejectedImage, callback } = event
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

    fd.append(name, file, file.name)

    options.csrf && fd.append(options.csrf.token, options.csrf.hash)

    xhr.withCredentials = options.withCredentials !== false

    xhr.open(method, url, true)

    for (let index in headers) {
      xhr.setRequestHeader(index, headers[index])
    }

    xhr.onload = () => {
      if (xhr.status === 200) {
        let { res = JSON.parse(xhr.responseText), resData = {} } = {}

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

export const handlers =
  ({ api }) =>
  () => {
    return {
      undo: api.undoHandler,
      redo: api.redoHandler,
      lineheight: api.lineheightHandler,
      file: api.fileHandler,
      image: api.imageHandler,
      inputFile: api.inputFileHandler
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
    state.quill = null
    delete state.quill
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
      [...e.target.classList].indexOf('blot-formatter__overlay') > -1 &&
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
