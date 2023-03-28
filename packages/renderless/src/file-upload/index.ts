/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import { extend } from '@opentiny/vue-renderless/common/object'
import { xss, log } from '@opentiny/vue-renderless/common/xss'
import uploadAjax from '@opentiny/vue-renderless/common/deps/upload-ajax'

let initTokenPromise = null

const shaMap = {
  sHA256: 'SHA256'
}

export const initService = ({ props, service }) => {
  const noopFnCreator = (propName) => () => {
    if (propName) {
      return Promise.reject(new Error(`[TINY Error][FileUpload] Prop ${propName} is not configured`))
    } else {
      return Promise.reject(new Error('[TINY Error][FileUpload] This component depends on @opentiny/vue-service'))
    }
  }

  const { network = {}, common = {} } = service || {}
  const { request, get, post, all, spread, CancelToken = {} } = network

  const noopFn = noopFnCreator()

  return {
    get: get || noopFn,
    post: post || noopFn,
    request: request || noopFn,
    all: all || noopFn,
    spread: spread || noopFn,
    cancelToken: CancelToken.source || noopFn,
    getSingleUploadUrl: common.getSingleUploadUrl || noopFn,
    getFileUploadUrl: common.getFileUploadUrl || noopFn,
    getFileDownloadUrl: common.getFileDownloadUrl || noopFn,
    getSingleDownloadUrl: common.getSingleDownloadUrl || noopFn,
    getPackageDownloadUrl: common.getPackageDownloadUrl || noopFn,
    getLargeFileInitUrl: common.getLargeFileInitUrl || noopFn,
    getChunkUploadUrl: common.getChunkUploadUrl || noopFn,
    getPreviewUrl: common.getPreviewUrl || noopFn,
    getDocumentInfoUrl: common.getDocumentInfoUrl || noopFn,
    httpRequest: props.httpRequest || request || uploadAjax
  }
}

export const computedUploadDisabled = ({ props, state }) => () => props.disabled || (state.elForm || {}).disabled

export const computedUploadingSize = (state) => () => state.uploadingFiles.reduce((total, file) => total + file.size, 0)

export const watchListType = ({ constants, state }) => (type) => {
  if (type === constants.LIST_TYPE.PICTURE_CARD || type === constants.LIST_TYPE.PICTURE) {
    state.uploadFiles = state.uploadFiles.map((file) => {
      if (!file.url && file.raw) {
        try {
          file.url = URL.createObjectURL(file.raw)
        } catch (err) {
          // do nothing
        }
      }

      return file
    })
  }
}

export const watchFileList = ({ constants, state }) => (fileList) => {
  state.uploadFiles =
    fileList &&
    fileList.map((item) => {
      item.uid = item.uid || Date.now() + state.tempIndex++
      item.status = item.status || constants.FILE_STATUS.SUCESS

      return item
    })
}

const isNonFuncPropBeforeUpload = ({ flag, doUpload, file }) => !flag && doUpload(file)

const onBeforeIsPromise = ({ before, rawFile, file, doUpload, autoRemove, api }) => {
  before.then(
    (processedFile) => {
      const fileType = Object.prototype.toString.call(processedFile)

      if (fileType === '[object File]' || fileType === '[object Blob]') {
        if (fileType === '[object Blob]') {
          processedFile = new File([processedFile], rawFile.name, { type: rawFile.type })
        }

        for (const p in rawFile) {
          if (Object.prototype.hasOwnProperty.call(rawFile, p)) {
            processedFile[p] = rawFile[p]
          }
        }

        file.raw = processedFile
      }

      doUpload(file)
    },
    () => {
      if (autoRemove) {
        if (!Array.isArray(rawFile)) {
          api.handleRemove(null, rawFile)
        } else {
          rawFile.forEach((raw) => api.handleRemove(null, raw))
        }
      }
    }
  )
}

export const beforeUpload = ({ props, api, Modal, constants, t, state }) => (file, autoRemove, doUpload) => {
  if (state.isEdm && file.name.length > 255) {
    if (autoRemove) {
      const rawFile = file.raw
      if (Array.isArray(rawFile)) {
        rawFile.forEach((raw) => api.handleRemove(null, raw))
      } else {
        api.handleRemove(null, rawFile)
      }
    }
    return Modal.message({
      message: `${t(constants.EDM.THEFILENAME)}"${file.name}"${t(constants.EDM.FILENAMEEXCEEDS)}`,
      status: 'warning'
    })
  }

  let flag = typeof props.beforeUpload === 'function'

  isNonFuncPropBeforeUpload({ flag, doUpload, file })

  if (flag) {
    const { rawFile = file.raw, before = props.beforeUpload(rawFile) } = {}

    if (before && before.then) {
      onBeforeIsPromise({ before, rawFile, file, doUpload, autoRemove, api })
    } else if (before !== false) {
      doUpload(file)
    } else {
      if (autoRemove) {
        if (Array.isArray(rawFile)) {
          rawFile.forEach((raw) => api.handleRemove(null, raw))
        } else {
          api.handleRemove(null, rawFile)
        }
      }
    }
  }
}

export const startUpload = ({ state, constants, refs, Modal, api, t }) => (file, isList) => {
  if (file.size > state.docSize && file.size > state.chunkSize) {
    file.isLargeFile = true

    isList &&
      state.uploadFiles.forEach((f) => {
        if (f.cacheSign === file.cacheSign) {
          f.percentage = 0
        }
      })

    api.largeDocumentUpload(file)

    Modal.message({
      message: `${file.name}${t(constants.EDM.LARGEFILEKEY)}`,
      status: 'warning'
    })
  } else {
    refs[constants.UPLOAD_INNER].upload(file.raw)
  }
}

const calcFileForMobile = (rawFile, file) => {
  const fileName = rawFile.name.lastIndexOf('.')
  const fileNameLen = rawFile.name.length

  file.fileType = rawFile.name.substring(fileName + 1, fileNameLen)

  const size = rawFile.size / 1024

  if (size < 1024) {
    file.size = Math.round(size * 10 ** 1) / 10 ** 1 + 'KB'
  } else {
    const fileSize = size / 1024
    file.size = Math.round(fileSize * 10 ** 1) / 10 ** 1 + 'MB'
  }
}

export const properFileSize = ({ props, state, constants, Modal, t }) => (file) => {
  let maxSize = 0

  if (Array.isArray(props.fileSize) && props.fileSize[1]) {
    maxSize = Math.min(state.singleMaxSize, props.fileSize[1] / 1024).toFixed(2)
  } else {
    maxSize = Math.min(state.singleMaxSize)
  }

  if (file.size > maxSize * 1024 * 1024) {
    Modal.message({
      message: `${file.name} ${t(constants.EDM.EXCEED)} ${maxSize} MB`,
      status: 'warning'
    })

    return false
  }

  if (file.size <= 0) {
    Modal.message({
      message: `${file.name} ${t(constants.EDM.FILEEMPTY)}`,
      status: 'warning'
    })

    return false
  }

  const userMin = (props.fileSize && (props.fileSize[0] || props.fileSize)) || 0

  if (file.size <= userMin * 1024) {
    Modal.message({
      message: `${t(constants.EDM.SIZE).replace(/{name}/, file.name)} ${userMin} KB`,
      status: 'warning'
    })

    return false
  }

  return true
}

export const addFileToList = ({ api, constants, emit, props, state, mode }) => (rawFile, updateId) => {
  rawFile.uid = Date.now() + state.tempIndex++

  let file = { status: constants.FILE_STATUS.READY, name: rawFile.name, size: rawFile.size }

  Object.assign(file, { percentage: 0, uid: rawFile.uid, raw: rawFile, response: {} })

  if (state.isEdm) {
    let fileBase = { serverName: '', docRelativePath: '', docId: '', docVersion: '', cacheSign: rawFile.uid }

    file = Object.assign(file, fileBase)

    props.edm.upload.isFolder && (file.path = rawFile.webkitRelativePath.match(/.*\//g)[0])
  }

  state.cacheDocuments[file.uid] = file

  mode === 'mobile' && calcFileForMobile(rawFile, file)

  if (~[constants.LIST_TYPE.PICTURE_CARD, constants.LIST_TYPE.PICTURE].indexOf(props.listType)) {
    try {
      file.url = URL.createObjectURL(rawFile)
    } catch (err) {
      return
    }
  }

  if (state.isEdm && state.isSuccess) {
    const proper = api.properFileSize(file)
    if (!proper) {
      return
    }

    state.updateId = updateId || props.edm.updateId || ''
    if (state.updateId) {
      const index = state.uploadFiles.findIndex((item) => item.docId === updateId)
      state.uploadFiles.splice(index, 1, file)
      emit('change', file, state.uploadFiles)
      return
    }
  }

  state.uploadFiles.push(file)
  state.currentUploadingFileUids.push(file.uid)
  emit('change', file, state.uploadFiles)
}

const rawfileUpload = ({ state, props, refs, constants, rawFiles, api }) => {
  if (!state.isEdm && props.autoUpload) {
    if (props.multiple && props.mergeService) {
      const handler = (file) => refs[constants.UPLOAD_INNER].upload(file.raw)
      rawFiles.length && api.beforeUpload({ raw: rawFiles }, true, handler)
    } else {
      rawFiles.forEach((rawFile) => {
        const file = api.getFile(rawFile)
        const handler = (file) => refs[constants.UPLOAD_INNER].upload(file.raw)
        api.beforeUpload(file, true, handler)
      })
    }
  }
}

export const handleStart = ({ api, constants, props, state, refs }) => (rawFiles, updateId) => {
  state.currentUploadingFileUids = []
  rawFiles.forEach((rawFile) => api.addFileToList(rawFile, updateId))
  const { UPLOADING, READY } = constants.FILE_STATUS
  state.uploadingFiles = state.uploadFiles.filter((file) => [UPLOADING, READY].includes(file.status))
  if (state.isEdm && state.isSuccess) {
    rawFiles.forEach((rawFile) => {
      const file = api.getFile(rawFile)
      if (!file) {
        return
      }
      api.beforeUpload(file, true, (file) => {
        typeof props.edm.upload.loading === 'function' && props.edm.upload.loading(file)
        new Promise((resolve) => {
          if (props.edm.isCheckCode !== true) {
            return resolve()
          }
          if (file.size > state.docSize && file.size > state.chunkSize && !state.isEntireCheckCode) {
            return resolve()
          }
          const reader = new FileReader()
          reader.readAsArrayBuffer(file.raw)
          reader.onload = (e) => {
            const cryptoJS = props.edm.upload.plugin()
            const wordArray = cryptoJS.lib.WordArray.create(e.target.result)
            const hash = cryptoJS[shaMap.shaMap](wordArray).toString()
            file.hash = file.raw.hash = hash
            resolve(hash)
          }
        }).then(() => {
          if (props.autoUpload) {
            const tokenParams = { token: props.edm.upload.token, file, type: 'upload' }
            api.getToken(tokenParams).then((data) => {
              if (data) {
                file.status = constants.FILE_STATUS.UPLOADING
                api.startUpload(file, true)
              }
            })
          }
        })
      })
    })
  }
  rawfileUpload({ state, props, refs, constants, rawFiles, api })
}

export const calcUploadingFilesInfo = ({ state }) => () => {
  const totalLoadedSize = state.uploadingFiles.reduce((loadedSize, file) => {
    const loaded = (file.size * file.percentage) / 100
    return loadedSize + loaded
  }, 0)

  const uploadedFiles = state.uploadingFiles.filter((file) => file.percentage === 100)

  let percentage = Math.floor((totalLoadedSize / state.uploadingSize) * 100)
  percentage = Math.min(percentage, 100)

  return {
    percentage,
    uploadList: state.uploadingFiles,
    uploadedCount: uploadedFiles.length
  }
}

export const handleProgress = ({ api, constants, emit, state }) => (event, rawFile) => {
  if (Array.isArray(rawFile)) {
    state.uploadFiles.forEach((file) => {
      if (rawFile.some((raw) => file.uid === raw.uid)) {
        file.status = constants.FILE_STATUS.UPLOADING

        if (event.lengthComputable) {
          file.percentage = Math.floor((event.loaded * 100) / event.total) || 0
        }

        emit('progress', file, state.uploadFiles, api.calcUploadingFilesInfo())
      }
    })
  } else {
    const file = api.getFile(rawFile)

    if (file) {
      file.status = constants.FILE_STATUS.UPLOADING

      if (event.lengthComputable && !file.isLargeFile) {
        file.percentage = Math.floor((event.loaded * 100) / event.total) || 0
        if (file.percentage >= 100) {
          file.isFinished = true
        }
        emit('progress', file, state.uploadFiles, api.calcUploadingFilesInfo())
      }
    }
  }
}

export const handleSuccess = ({ api, constants, emit, state, props }) => (res, rawFile) => {
  const currentUploadFiles = state.uploadFiles.filter((file) => state.currentUploadingFileUids.includes(file.uid))
  if (Array.isArray(rawFile)) {
    state.uploadFiles.forEach((file) => {
      if (rawFile.some((raw) => file.uid === raw.uid)) {
        file.status = constants.FILE_STATUS.SUCESS
        file.percentage = 100
        file.response = res
        emit('success', res, file, currentUploadFiles)
        emit('change', file, state.uploadFiles)
        delete file.cancelToken
      }
    })
  } else {
    const file = api.getFile(rawFile)
    delete file.cancelToken
    if (props.edm.upload && file && res.data && res.data.status !== 200) {
      file.status = constants.FILE_STATUS.FAIL
      emit('error', res, file, state.uploadFiles)
      return
    }

    if (file) {
      file.status = constants.FILE_STATUS.SUCESS
      file.percentage = 100
      if (!file.isFinished) {
        emit('progress', file, state.uploadFiles, api.calcUploadingFilesInfo())
      }

      file.isLargeFile && delete res.config
      file.response = res

      if (state.isEdm && res.data.result) {
        file.serverName = res.data.result.serverName
        file.docRelativePath = res.data.result.docRelativePath
        file.docId = res.data.result.docId
        file.docVersion = res.data.result.version
        file.docSize = res.data.result.docSize
        file.isLargeFile && delete file.raw
        Object.assign(file, res.data.result)
      }
      emit('success', res, file, currentUploadFiles)
      emit('change', file, state.uploadFiles)
    }
  }
  api.clearUploadingFiles()
}

export const handleError = ({ api, constants, emit, state }) => (err, rawFile) => {
  const file = api.getFile(rawFile)

  if (file) {
    file.status = constants.FILE_STATUS.FAIL
    file.percentage = 100

    if (!state.isEdm) {
      state.uploadFiles.splice(state.uploadFiles.indexOf(file), 1)
    }

    api.clearUploadingFiles()
    emit('error', err, file, state.uploadFiles)
    emit('change', file, state.uploadFiles)
  }
}

export const handleRemove = ({ api, emit, props, state }) => (file, raw) => {
  if (raw) {
    file = api.getFile(raw)
  }

  let doRemove = () => {
    api.abort(file)

    let fileList = state.uploadFiles

    fileList.splice(fileList.indexOf(file), 1)
    emit('remove', file, fileList)
  }

  if (!props.beforeRemove) {
    doRemove()
  } else if (typeof props.beforeRemove === 'function') {
    const before = props.beforeRemove(file, state.uploadFiles)

    if (before && before.then) {
      before.then(
        () => {
          doRemove()
        },
        () => undefined
      )
    } else if (before !== false) {
      doRemove()
    }
  }
}

export const clearUploadingFiles = ({ constants, state }) => () => {
  const { SUCESS, FAIL } = constants.FILE_STATUS
  const isUploadComplete = state.uploadingFiles.every((file) => [SUCESS, FAIL].includes(file.status))

  if (isUploadComplete) {
    state.uploadingFiles = []
  }
}

export const getFile = (state) => (rawFile) => {
  let fileList = state.uploadFiles
  let target

  fileList.every((item) => {
    target = rawFile.uid === item.uid ? item : null
    return !target
  })

  return target
}

export const abort = ({ constants, refs }) => (file) => refs[constants.UPLOAD_INNER].abort(file)

export const clearFiles = (state) => () => {
  state.uploadFiles = []
}

export const submit = ({ api, constants, refs, state, props }) => () => {
  const files = state.uploadFiles.filter((file) => file.status === constants.FILE_STATUS.READY)

  if (state.isEdm && state.isSuccess) {
    files.forEach((file) => {
      api
        .getToken({
          token: props.edm.upload.token,
          file,
          type: 'upload'
        })
        .then((data) => {
          if (data) {
            api.beforeUpload(file, false, (file) => {
              api.startUpload(file)
            })
          }
        })
    })
  } else {
    if (props.multiple && props.mergeService) {
      const rawFiles = files.map((file) => file.raw)
      rawFiles.length &&
        api.beforeUpload({ raw: rawFiles }, false, (file) => {
          refs[constants.UPLOAD_INNER].upload(file.raw)
        })
    } else {
      files.forEach((file) => {
        api.beforeUpload(file, false, (file) => {
          refs[constants.UPLOAD_INNER].upload(file.raw)
        })
      })
    }
  }
}

export const handleClick = ({ constants, refs }) => () => refs[constants.UPLOAD_INNER].handleClick()

export const getFileUploadUrl = (service) => () => service.getFileUploadUrl()

export const updateUrl = ({ api, props, state }) => () => {
  if (props.action) {
    state.url = props.action
  } else {
    api.getFileUploadUrl().then((url) => (state.url = url))
  }
}

const getTranslateFile = ({ api, isChunk }) => (data, type, index) => {
  if (isChunk) {
    if (index === 0) {
      api.setWriterFile({ data, index })
    }
  } else {
    const content = data.headers['content-disposition']
    const name = content.match(/fileName.?=(.*)/)[1] || content.match(/fileName=(.*)/)[1]
    const blob = new Blob([data.data], { type: type !== 'zip' ? 'application / x - xls' : 'application/zip' })

    if (window && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, decodeURIComponent(name))
      return
    }

    const url = window.URL || window.webkitURL || window.moxURL
    const downloadHref = xss.filterUrl(url.createObjectURL(blob))
    let downloadLink = document.createElement('a')

    downloadLink.href = downloadHref
    downloadLink.download = decodeURIComponent(name)
    downloadLink.click()
  }
}

const getHandleSuccess = ({ downloadOps, file, translateFile, isChunk, state }) => (data, type, index) => {
  if (isChunk) {
    state.dowuloadChunkFile.set(index, new Uint8Array(data.data))
    translateFile(data, type, index)
  } else {
    if (data.data.type.includes('application/json')) {
      const reader = new FileReader()

      reader.onload = (e) => {
        if (typeof downloadOps.fail === 'function') {
          downloadOps.fail(JSON.parse(e.target.result), file)
        }
      }

      reader.readAsText(data.data)
    } else {
      typeof downloadOps.loading === 'function' && downloadOps.loading(file)

      translateFile(data, type)
    }
  }
}

const getCalcProgress = () => (evt) => {
  let total = Number(evt.target.getResponseHeader('Content-Size'))
  total = Math.max(total, evt.loaded)

  let progress = Math.ceil((evt.loaded / total) * 100) || 0
  progress = Math.max(progress, 0)
  progress = Math.min(progress, 100)

  return progress
}

const modifyServiceUrlSingle = ({ file, serviceUrl, range, constants }) => {
  if (typeof file === 'object') {
    let tempFile = { ...file, ...range }

    delete tempFile.docId
    delete tempFile.docVersion
    delete tempFile['x-download-sign']

    for (let key in tempFile) {
      if (Object.prototype.hasOwnProperty.call(tempFile, key)) {
        const value = tempFile[key]
        const dataType = typeof value

        if (!~['undefined', 'object', 'function'].indexOf(dataType)) {
          serviceUrl += `&${key}=${value}`
        }
      }
    }

    file.status = constants.FILE_STATUS.DOWNLOADING
    file.percentage = 0
  }

  return serviceUrl
}

const getKiaScanTip = ({ data, t, Modal, constants }) => {
  if (data.status === '12079') {
    return Modal.message({
      message: `${t(constants.EDM.KIASCANTIP)}`,
      status: 'warning'
    })
  }
}

const getServiceUrl = ({ url, file }) =>
  url.replace(/{docId}/, file.docId || file) + `${~url.indexOf('?') ? '&' : '?'}x-download-sign=true&docVersion=${file.docVersion || ''}`

const downloadFileSingle = (args) => {
  let { file, service, constants, props, state, batchIndex, isChunk, api } = args
  let { calcProgress, emit, handleSuccess, t, Modal, range = {}, isBatch } = args
  let sdResolver = (url) => {
    let serviceUrl = getServiceUrl({ url, file })
    serviceUrl = modifyServiceUrlSingle({ file, serviceUrl, range, constants })
    serviceUrl = xss.filterUrl(serviceUrl)
    let params = {
      withCredentials: props.withCredentials,
      headers: Object.assign(props.headers, state.headers),
      responseType: isChunk ? 'arraybuffer' : 'blob',
      hideErr: true,
      onDownloadProgress(evt) {
        let progress = calcProgress(evt, isChunk)
        if (progress !== 100) {
          !isChunk && emit('download', progress, evt)
        }
        if (typeof file === 'object') {
          file.percentage = progress
        }
      }
    }
    service
      .get(serviceUrl, params)
      .then((data) => {
        if (getKiaScanTip({ data, t, Modal, constants })) {
          return
        }
        const { checkcode, 'content-size': fileSize } = data.headers
        !isChunk && emit('download', 100, { checkcode, fileSize })
        handleSuccess(data, '', range.index)
        if (typeof file === 'object') {
          file.percentage = 100
          setTimeout(() => (file.status = constants.FILE_STATUS.SUCESS), 1000)
        }
        api.afterDownload({ batchIndex, data, file })
      })
      .catch((data) => {
        if (data.response && data.response.status === 401) {
          const downloadOps = props.edm.download || {}
          const tokenParams = { token: downloadOps.token, file, type: 'download' }
          api.getToken(tokenParams).then((data) => {
            api.afterDownload({ batchIndex, data, file, range, isChunk, isBatch })
          })
        }
      })
  }
  service.getSingleDownloadUrl().then(sdResolver)
}

const downloadFileBatch = (args) => {
  let { api, downloadOps, file, service, props, state, calcProgress, emit, handleSuccess } = args
  let { t, Modal, constants, range = {} } = args
  let tokenParams = { token: downloadOps.packageToken, file, type: 'download' }
  api.getToken(tokenParams).then((data) => {
    if (!data) {
      return
    }

    const params = { downloadTOs: [], attachdownloadTOs: [], isZip: 'true', transformType: 'sync', type: 'package' }
    const hasWmType = file.some((item) => Boolean(item.wmType))

    if (hasWmType) {
      params.attachdownloadTOs = file
    } else {
      params.downloadTOs = file
    }

    service.getPackageDownloadUrl().then((url) => {
      url += `${~url.indexOf('?') ? '&' : '?'}x-download-sign=true`
      url = xss.filterUrl(url)

      service
        .post(
          url,
          { ...params, ...range },
          {
            withCredentials: props.withCredentials,
            headers: Object.assign(props.headers, state.headers),
            responseType: 'blob',
            onDownloadProgress(evt) {
              let progress = calcProgress(evt)
              if (progress !== 100) {
                emit('download', progress, evt)
              }
            }
          }
        )
        .then((data) => {
          if (getKiaScanTip({ data, t, Modal, constants })) {
            return
          }
          const { 'content-size': fileSize } = data.headers
          emit('download', 100, { fileSize })
          handleSuccess(data, 'zip')
        })
    })
  })
}

export const downloadFile = ({ api, state, props }) => (file) => {
  if (!state.isEdm) {
    api.ordinaryDownload(file)
    return
  }

  const isBatch = Array.isArray(file)

  if (isBatch) {
    return api.downloadFileInner({ file, isBatch })
  }

  const downloadOps = props.edm.download || {}
  let tokenParams = { token: downloadOps.token, file, type: 'download' }
  api.getToken(tokenParams).then((data) => {
    if (!data) {
      return
    }

    api.getDownloadFileInfo({ docId: file.docId }).then((res) => {
      let fileInfo
      if (res && res.outDocQueryList[0].verInfo[0]) {
        fileInfo = res.outDocQueryList[0].verInfo[0].docInfo[0]
      }
      const { fileSize } = fileInfo
      const isLargeFile = fileSize > state.docSize && fileSize > state.chunkSize && fileSize > 10 * 1024 * 1024 * 1024

      if (isLargeFile) {
        api.largeDocumentDownload({ file: fileInfo, isBatch })
      } else {
        api.downloadFileInner({ file, isBatch })
      }
    })
  })
}

export const getDownloadFileInfo = ({ state, props, service }) => ({ docId }) =>
  service.getDocumentInfoUrl().then(
    (url) =>
      new Promise((resolve, reject) => {
        service
          .request({
            method: 'post',
            url: xss.filterUrl(url),
            withCredentials: props.withCredentials,
            headers: Object.assign(props.headers, state.headers),
            data: { docInfoVO: { ids: [docId], docType: '', docVersion: '' } }
          })
          .then((res) => {
            if (res.data.status === 200) {
              resolve(res.data.result)
            } else {
              reject(res)
            }
          })
      })
  )

export const largeDocumentDownload = ({ api, state }) => ({ file, isBatch }) => {
  const chunkSize = Math.ceil(file.fileSize / state.chunkSize)
  state.dowuloadChunkFile.set('chunkSize', chunkSize)
  state.dowuloadChunkFile.set('fileSize', file.fileSize)
  state.dowuloadChunkFile.set('docName', file.docName)

  file.chunkSize = chunkSize
  const batches = api.sliceDownloadChunk(file)
  api.batchSegmentDownload({ batchIndex: 0, batches, docId: file.docId, isBatch })
}

export const sliceDownloadChunk = ({ state }) => (file) => {
  const chunkSize = file.chunkSize
  const downloadChunkArray = [[]]

  state.downloadBatchQueue[file.docId + '-0'] = 0
  state.downloadBatchQueueListen[file.docId + '-0'] = 0

  for (let i = 0; i < chunkSize; i++) {
    const startRange = i * state.chunkSize
    const endRange = Math.min(file.fileSize, startRange + state.chunkSize)

    const lastIndex = downloadChunkArray.length - 1

    if (downloadChunkArray[lastIndex].length < state.downloadChunkLimit) {
      downloadChunkArray[lastIndex].push({ startRange, endRange, index: i })
    } else {
      state.downloadBatchQueue[file.docId + '-' + downloadChunkArray.length] = 0
      state.downloadBatchQueueListen[file.docId + '-' + downloadChunkArray.length] = 0
      downloadChunkArray.push([])
      downloadChunkArray[lastIndex + 1].push({
        startRange,
        endRange,
        index: i
      })
    }
  }

  return downloadChunkArray
}

export const batchSegmentDownload = ({ state, api }) => ({ batchIndex, batches, docId, isBatch }) => {
  if (batchIndex < batches.length) {
    const batch = batches[batchIndex]
    const key = docId + '-' + batchIndex

    Object.defineProperty(state.downloadBatchQueue, key, {
      get() {
        return state.downloadBatchQueueListen[key]
      },
      set(value) {
        state.downloadBatchQueueListen[key] = value

        if (value >= batch.length) {
          api.batchSegmentDownload({
            docId,
            batchIndex: ++batchIndex,
            batches,
            isBatch
          })
        }
      }
    })

    let index = 0
    while (batch.length - index > 0) {
      api.downloadFileInner({ batchIndex, range: batch[index++], file: { docId }, isBatch, isChunk: true })
    }
  }
}

export const downloadFileInner = ({ api, props, service, state, emit, constants, t, Modal }) => ({ batchIndex, file, range, isBatch, isChunk }) => {
  const downloadOps = props.edm.download || {}
  const translateFile = getTranslateFile({ api, isChunk })
  const handleSuccess = getHandleSuccess({ downloadOps, file, translateFile, isChunk, state })
  const calcProgress = getCalcProgress()

  let { isFinished = false } = {}

  if (!isBatch) {
    let args = { api, downloadOps, file, service, constants, props, state, t, Modal, isChunk }

    Object.assign(args, { calcProgress, isFinished, emit, handleSuccess, range, batchIndex, isBatch })

    downloadFileSingle(args)

    return
  }

  const params = { api, downloadOps, file, service, props, state, calcProgress, emit, handleSuccess, t, Modal, range }
  isBatch && downloadFileBatch(params)
}

export const afterDownload = ({ api, state }) => ({ batchIndex, range, data, file, isBatch, isChunk }) => {
  if (data.status === 200) {
    const key = file.docId + '-' + batchIndex
    const count = state.downloadBatchQueue[key]
    state.downloadBatchQueue[key] = count + 1
  } else {
    const countDownloadReplay = state.downloadReplayAtoms[file.docId + '-' + range.index]

    if (countDownloadReplay && countDownloadReplay >= 2) {
      const msgArray = ['The number of retry times exceeds the threshold! [docId:', file.docId, ', chunk:', range.index, ']']

      log.logger.warn(msgArray.join(''))
      delete state.downloadReplayAtoms[file.docId + '-' + range.index]
    } else {
      const msgArray = ['replay ', countDownloadReplay, '! [docId:', file.docId, ', chunk:', range.index, ']']

      log.logger.warn(msgArray.join(''))

      state.downloadReplayAtoms[file.docId + '-' + range.index] = countDownloadReplay + 1

      api.downloadFileInner({ batchIndex, range, file, isBatch, isChunk })
    }
  }
}

export const setWriterFile = ({ state, emit, props }) => ({ data, index }) => {
  const fileStream =
    props.plugin &&
    props.plugin.createWriteStream(state.dowuloadChunkFile.get('docName'), {
      size: data.byteLength
    })
  const writer = fileStream.getWriter()

  let downloaded = 0
  const fileSize = state.dowuloadChunkFile.get('fileSize')

  const writerStreamSaver = () => {
    let chunk = state.dowuloadChunkFile.get(index)
    if (chunk) {
      writer.write(chunk).then(() => {
        downloaded += chunk.byteLength
        state.dowuloadChunkFile.delete(index)
        if (index + 1 === state.dowuloadChunkFile.get('chunkSize')) {
          emit('download', 100)
          writer.close()
        } else {
          const progress = Math.ceil((downloaded / fileSize) * 100) || 0
          if (progress !== 100) {
            emit('download', progress)
          }
          index++
          writerStreamSaver()
        }
        chunk = null
      })
    } else {
      setTimeout(() => {
        writerStreamSaver()
      }, 1000)
    }
  }

  writerStreamSaver()
}

export const getFormData = ({ constants, props, state }) => ({ formData, file, type }) => {
  if (state.isEdm && props.edm.upload) {
    const propData = props.data || {}
    const edmData = props.edm.upload.params || {}
    const params = { ...propData, ...edmData }

    for (let key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        formData.set(key, params[key] || '')
      }
    }
  }

  if (props.edm.isCheckCode === true) {
    formData.append(constants.EDM.ISCHECKCODE, 'Y')
    file.hash && formData.append(constants.EDM.CHECKCODE, file.hash)
  } else {
    formData.append(constants.EDM.ISCHECKCODE, 'N')
  }

  const updateId = state.updateId || props.edm.updateId
  if (type === constants.EDM.CHUNKINIT) {
    formData.append(constants.EDM.FILESIZE, file.size)
    formData.append(constants.EDM.CHUNKS, file.chunkSize)
    formData.append(constants.EDM.FILENAME, file.name)

    updateId && formData.append(constants.EDM.DOCID, updateId)
  } else {
    formData.append(constants.EDM.MULTIPART, file, file.filename)
    formData.append(constants.EDM.CHUNK, file.chunk)
    formData.append(constants.EDM.LOWERNAME, file.filename)

    const docId = updateId || file.docId
    formData.append(constants.EDM.DOCID, docId)
  }

  updateId && formData.append('updateFile', true)

  return formData
}

export const largeDocumentUpload = ({ api, Modal, state, t, emit, constants }) => (file) => {
  const chunkSize = Math.ceil(file.size / state.chunkSize)

  file.chunkSize = chunkSize
  file.cancelToken = []

  api
    .segmentUploadInit(file)
    .then((data) => {
      if (data) {
        file.records = data.chunks
        file.docId = data.docId
        state.largeFileInfo[data.docId] = file

        const batches = api.sliceChunk(file)

        api.batchSegmentUpload({
          docId: data.docId,
          batchIndex: 0,
          batches,
          progress: { size: file.size, trunks: [], file }
        })
      } else {
        Modal.message({
          message: t('ui.fileUpload.init'),
          status: 'warning',
          duration: '1000'
        })
        const fileData = api.getFile(file)
        state.uploadFiles.splice(state.uploadFiles.indexOf(fileData), 1)
      }
    })
    .catch((err) => {
      file.status = constants.FILE_STATUS.FAIL
      emit('error', err, file, state.uploadFiles)
    })
}

export const segmentUploadInit = ({ api, props, service, state, constants }) => (file) => {
  const formData = new FormData()

  return new Promise((resolve, reject) => {
    service.getLargeFileInitUrl().then((data) => {
      service
        .request({
          method: 'post',
          url: xss.filterUrl(data),
          data: api.getFormData({ formData, file, type: constants.EDM.CHUNKINIT }),
          withCredentials: props.withCredentials,
          headers: Object.assign(props.headers, state.headers)
        })
        .then((data) => {
          if (data.data.status === 200) {
            resolve(data.data.result)
          } else {
            reject(data)
          }
        })
    })
  })
}

const afterUpload = ({ data, file, batchIndex, state, api, progress }) => {
  if (data.status === 200) {
    const key = file.docId + '-' + batchIndex
    const count = state.batchQueue[key]

    state.batchQueue[key] = count + 1
  } else {
    const countReplay = state.replayAtoms[file.docId + '-' + file.chunk]

    if (countReplay && countReplay >= 2) {
      const msgArray = ['The number of retry times exceeds the threshold! [docId:', file.docId, ', chunk:', file.chunk, ']']
      log.logger.warn(msgArray.join(''))

      delete state.replayAtoms[file.docId + '-' + file.chunk]
    } else {
      const msgArray = ['replay ', countReplay, '! [docId:', file.docId, ', chunk:', file.chunk, ']']

      log.logger.warn(msgArray.join(''))

      state.replayAtoms[file.docId + '-' + file.chunk] = countReplay + 1

      api.segmentUpload(batchIndex, file, progress)
    }
  }
}

const chunkUpload = ({ state, service, postChunk }) => {
  if (!state.chunkUploadUrl) {
    service.getChunkUploadUrl().then((data) => {
      state.chunkUploadUrl = data
      postChunk(data)
    })
  } else {
    postChunk(state.chunkUploadUrl)
  }
}

const segmentUploadInner = ({ api, props, service, state, emit, constants, batchIndex, file, progress }) => {
  const formData = new FormData()
  const postChunk = (url) => {
    const source = service.cancelToken()
    if (progress.file.cancelToken) {
      progress.file.cancelToken.push(source.cancel)
      service
        .request({
          method: 'post',
          url: xss.filterUrl(url),
          data: api.getFormData({ formData, file, type: '' }),
          withCredentials: props.withCredentials,
          headers: Object.assign(props.headers, state.headers),
          cancelToken: source.token,
          hideErr: true,
          onUploadProgress(event) {
            progress.trunks[file.chunk] = event.loaded
            const count = progress.trunks.reduce((a, b) => a + b)
            let percentage = Math.floor((count / progress.size) * 100) || 0
            file.percentage = Math.floor((event.loaded / event.total) * 100)
            event.percentage = progress.file.percentage = percentage > 100 ? 100 : percentage
            if (percentage >= 100) {
              progress.file.isFinished = true
            }
            emit('progress', progress.file, state.uploadFiles, api.calcUploadingFilesInfo())
          }
        })
        .then((data) => {
          afterUpload({ data, file, batchIndex, state, api, progress })
          if (progress.file.percentage === 100) {
            progress.file.status = constants.FILE_STATUS.SUCESS
          }
        })
        .catch((data) => {
          if (data.response && data.response.status === 401) {
            const tokenParams = { token: props.edm.upload.token, file, type: 'upload' }
            api.getToken(tokenParams).then((data) => {
              afterUpload({ data, file, batchIndex, state, api, progress })
            })
          } else {
            file.state = constants.FILE_STATUS.FAIL
          }
        })
    }
  }
  chunkUpload({ state, service, postChunk })
}

export const segmentUpload = ({ api, props, service, state, emit, constants }) => (batchIndex, file, progress) => {
  if (typeof file.then === 'function') {
    file.then((file) => {
      segmentUploadInner({
        batchIndex,
        api,
        service,
        state,
        emit,
        props,
        file,
        constants,
        progress
      })
    })
  } else {
    segmentUploadInner({
      api,
      props,
      service,
      state,
      emit,
      constants,
      batchIndex,
      file,
      progress
    })
  }
}

export const batchSegmentUpload = ({ api, constants, props, refs, state }) => ({ docId, batchIndex, batches, progress }) => {
  if (batchIndex < batches.length && progress.file.cancelToken) {
    const key = docId + '-' + batchIndex
    const batch = batches[batchIndex]

    Object.defineProperty(state.batchQueue, key, {
      get() {
        return state.batchQueueListen[key]
      },
      set(value) {
        state.batchQueueListen[key] = value

        if (value >= batch.length) {
          api.batchSegmentUpload({
            docId,
            batchIndex: ++batchIndex,
            batches,
            progress
          })
        }
      }
    })

    let index = 0

    while (batch.length - index > 0) {
      api.segmentUpload(batchIndex, batch[index++], progress)
    }
  } else {
    typeof props.edm.upload.closeloading === 'function' && props.edm.upload.closeloading()

    refs[constants.UPLOAD_INNER].upload(state.largeFileInfo[docId])
  }
}

export const sliceChunk = ({ state, props }) => (file) => {
  const chunkSize = file.chunkSize
  const chunkBatchArray = [[]]

  state.batchQueue[file.docId + '-0'] = 0
  state.batchQueueListen[file.docId + '-0'] = 0

  for (let i = 0; i < chunkSize; i++) {
    if (file.records.includes(i.toString())) {
      continue
    }

    const start = i * state.chunkSize
    const end = Math.min(file.size, start + state.chunkSize)
    const atom = file.raw.slice(start, end)

    atom.chunk = i + 1
    atom.filename = file.name
    atom.docId = file.docId
    atom.chunkSize = chunkSize
    atom.cacheSign = file.cacheSign
    atom.records = file.records
    atom.percentage = file.percentage

    const promise = new Promise((resolve) => {
      if (props.edm.isCheckCode !== true) {
        return resolve(atom)
      }
      const reader = new FileReader()

      reader.readAsArrayBuffer(atom)
      reader.onload = (e) => {
        if (props.edm.isCheckCode === true) {
          const cryptoJS = props.edm.upload.plugin()
          const wordArray = cryptoJS.lib.WordArray.create(e.target.result)
          const hash = cryptoJS[shaMap.shaMap](wordArray).toString()
          atom.hash = hash
        }
        resolve(atom)
      }
    })

    const lastIndex = chunkBatchArray.length - 1

    if (chunkBatchArray[lastIndex].length < state.chunkBatchLimit) {
      chunkBatchArray[lastIndex].push(promise)
    } else {
      state.batchQueue[file.docId + '-' + chunkBatchArray.length] = 0
      state.batchQueueListen[file.docId + '-' + chunkBatchArray.length] = 0
      chunkBatchArray.push([])
      chunkBatchArray[lastIndex + 1].push(promise)
    }
  }

  return chunkBatchArray
}

export const getToken = ({ constants, props, state, t, Modal }) => ({ token, file, isOnlinePreview = false, type = '', isinit = false }) => {
  if (props.edm.isExtranet && !isOnlinePreview) {
    // EDM 外网场景除在线预览其他场景不需要调用 EDM Token
    state.isSuccess = true
    state.accept = props.accept
    state.singleMaxSize = props.edm.singleFileMaxSize || 200

    return Promise.resolve(true)
  }

  if ((state.isEdm && !token) || typeof token !== 'function') {
    Modal.message({
      message: t(constants.EDM.I18NKEY),
      status: 'warning',
      duration: '2000'
    })

    return new Promise((resolve) => {
      resolve(false)
    })
  }

  return new Promise((resolve, reject) => {
    try {
      let promise

      if (isinit) {
        !initTokenPromise && (initTokenPromise = token(file))
        promise = initTokenPromise
      } else {
        promise = token(file)
      }

      promise.then((data) => {
        const result = data || {}
        const whitelist = (result.config && result.config.fileWhiteList) || ''

        state.isSuccess = true
        state.accept = type === 'download' || type === 'preview' ? props.accept : `${whitelist},${props.accept}`

        state.headers[constants.EDM.EDMTOKEN] = result.edmToken || ''
        state.headers[constants.EDM.TRACEID] = result.traceId || ''

        if (result.config) {
          state.singleMaxSize = result.config.singleFileMaxSize
        }
        state.edmToken = result
        resolve(true)
      })
    } catch (error) {
      reject(new Error(error))
    }
  })
}

const getTokenResolver = ({ reject, api, file, state, resolve, props, constants, service }) => (data) => {
  if (!data) {
    const message = '[TINY Error][FileUpload] No edm token'
    reject(new Error(message))
    return
  }

  const iframeUrl = api.getPreviewUrlSync(file)

  if (iframeUrl) {
    state.showPreview = true
    state.iframeUrl = iframeUrl
    resolve(state.iframeUrl)
    return
  }

  const watermark = props.edm.preview.watermark || {}
  const params = state.fileWater ? constants.EDM.FORMAT : ''
  const downParams = state.fileWater ? constants.EDM.WATER : constants.EDM.SOURCE
  const tools = props.edm.preview.plugin

  service.all([service.getPreviewUrl(), service.getSingleDownloadUrl()]).then(
    service.spread((previewUrl, downloadurl) => {
      const serviceUrl = props.edm.preview.serviceUrl
      const infoUrl = serviceUrl || previewUrl.replace(/{docId}/, file.docId) + `?${params}docVersion=${file.docVersion}`

      const pageUrl = serviceUrl || previewUrl.replace(/{docId}/, file.docId) + `?type=doc&pageNum=1&${params}docVersion=${file.docVersion}`

      const downloadUrl =
        serviceUrl + downloadurl.replace(/{docId}/, file.docId) + `?docId=${file.docId}&docVersion=${file.docVersion}&${downParams}from=Experience&`

      tools.setIsEDM3(true)
      tools.setDocumentInfoUrl(infoUrl)
      tools.setDownloadUrl(downloadUrl, true)
      tools.setPageUrl(pageUrl)

      tools.setWatermarkParameters({
        showWatermark: watermark.showWatermark || 1,
        rotation: watermark.rotation || 30,
        text: watermark.text || ''
      })

      tools.setPdfjsPaht(props.edm.preview.packageName || constants.EDM.JSLIB)
      tools.setAuthToken(state.headers[constants.EDM.EDMTOKEN])

      state.showPreview = true
      state.iframeUrl = props.edm.preview.previewUrl + `${constants.EDM.URLCONTS}${file.docVersion}&docId=${file.docId}`
      resolve(state.iframeUrl)
    })
  )
}

export const previewFile = ({ api, constants, props, service, state }) => (file) =>
  new Promise((resolve, reject) => {
    try {
      const tokenParams = { isOnlinePreview: true, file, type: 'preview', token: props.edm.preview.token }
      const tokenCatcher = (e) => {
        reject(new Error(e))
      }
      const tokenResolver = getTokenResolver({ reject, api, file, state, resolve, props, constants, service })

      api.getToken(tokenParams).then(tokenResolver).catch(tokenCatcher)
    } catch (e) {
      reject(new Error(e))
    }
  })

export const getNewTabPreviewUrl = ({ api, props }) => (file) =>
  new Promise((resolve, reject) => {
    api
      .getToken({
        token: props.edm.preview.token,
        file,
        isOnlinePreview: true,
        type: 'preview'
      })
      .then((data) => {
        if (!data) {
          reject(new Error('[TINY Error][FileUpload] No edm token'))
          return
        }

        const iframeUrl = api.getPreviewUrlSync(file)
        if (!iframeUrl) {
          reject(new Error(new Error('[TINY Error][FileUpload] No preview url')))
        } else {
          resolve(iframeUrl)
        }
      })
      .catch((e) => {
        reject(new Error(e))
      })
  })

export const getPreviewUrlSync = ({ constants, props, state }) => (file) => {
  const edm = props.edm || {}
  const preview = edm.preview || {}
  const online = preview.online

  if (!online) {
    return
  }

  const html = online.jslibhtml.split('?').shift()

  if (!html) {
    return
  }

  const watermark = preview.watermark || {}
  const paramsData = {
    ...online,
    ...watermark,
    ...{
      jslibhtml: html,
      authToken: state.headers[constants.EDM.EDMTOKEN],
      docId: file.docId,
      docVersion: file.docVersion || file.version || 'V1',
      type: 'doc',
      pageNum: '1'
    }
  }

  const params = []

  for (let key in paramsData) {
    if (Object.prototype.hasOwnProperty.call(paramsData, key)) {
      params.push(`${key}=${paramsData[key]}`)
    }
  }

  const iframeUrl = html + '?' + params.join('&')

  return iframeUrl
}

export const previewImage = ({ api, props, service, state }) => (file) =>
  new Promise((resolve, reject) => {
    try {
      api
        .getToken({
          token: props.edm.preview.token,
          file,
          type: 'preview'
        })
        .then((data) => {
          if (!data) {
            reject(new Error('[TINY Error][FileUpload] No edm token'))
            return
          }

          service.getPreviewUrl().then((url) => {
            const imgParam = Object.assign(file, {
              type: 'image',
              imageType: 'image'
            })

            url = url.replace(/{docId}/, file.docId)

            service
              .post(xss.filterUrl(url), imgParam, {
                withCredentials: props.withCredentials,
                headers: Object.assign(props.headers, state.headers),
                responseType: 'blob'
              })
              .then((data) => {
                const blob = new Blob([data.data])
                const URL = window.URL || window.webkitURL
                const link = URL.createObjectURL(blob)

                resolve(link)
              })
          })
        })
    } catch (e) {
      reject(new Error(e))
    }
  })

export const getDialogConfigObj = ({ props, state }) => () => {
  const dialogConfigDefault = {
    class: 'single-download-modal single-download-modal1',
    style: '',
    props: {
      lockScroll: true,
      visible: state.showPreview,
      dragable: true,
      title: '文档预览',
      width: '60%'
    },
    on: {
      'update:visible': (value) => (state.showPreview = value)
    }
  }
  let dialogConfig = {}

  if (props.edm && props.edm.preview && typeof props.edm.preview.dialogConfig === 'object') {
    dialogConfig = props.edm.preview.dialogConfig || {}
  }

  const dialogConfigCopy = extend(true, {}, dialogConfig)
  const events = dialogConfigCopy.events || {}
  // clazz、style只接受字符串值
  const clazz = dialogConfigCopy.class || ''
  const style = dialogConfigCopy.style || ''

  delete dialogConfigCopy.events
  delete dialogConfigCopy.class
  delete dialogConfigCopy.style

  return extend(true, {}, dialogConfigDefault, {
    class: `${dialogConfigDefault.class} ${clazz}`,
    style: `${style}`,
    props: { ...dialogConfigCopy },
    on: { ...events }
  })
}

export const computeDocChunkSize = ({ props, state, SIZE_2G, SIZE_20M, SIZE_8M }) => () => {
  const isDefaultChunkSize = !(props.edm && props.edm.chunkSize)
  let { docSize = SIZE_20M, chunkSize = SIZE_8M } = props.edm || {}
  docSize = docSize < 0 ? 0 : docSize
  docSize = docSize > SIZE_2G ? SIZE_2G : docSize

  if (docSize) {
    chunkSize = chunkSize < 0 ? 0 : chunkSize
  }
  if (!isDefaultChunkSize) {
    const chunkSizes = [64 * 1024, 32 * 1024, 16 * 1024, 8 * 1024, 4 * 1024, 2 * 1024, 0 * 1024]
    chunkSizes.some((size) => {
      if (chunkSize >= size) {
        chunkSize = Math.max(size, 2 * 1024)
        return true
      }
      return false
    })
  }

  state.docSize = docSize * 1024
  state.chunkSize = chunkSize * 1024
}

export const updateFile = ({ constants, refs }) => (file) => {
  refs[constants.UPLOAD_INNER].handleUpdate(file)
}

export const onBeforeDestroy = (state) => () => {
  state.uploadFiles.forEach((file) => {
    if (file.url && file.url.indexOf('blob:') === 0) {
      URL.revokeObjectURL(file.url)
    }
  })
}
