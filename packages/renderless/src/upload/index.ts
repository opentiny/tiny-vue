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

import { KEY_CODE } from '../common'

export const isImage = (str) => str.includes('image')

export const handleChange = (api) => (event) => {
  const files = event.target.files

  if (!files) {
    return
  }

  api.uploadFiles(files)
}

export const getFormData = ({ constants, state, parent, props }) => ({ formData, file, type }) => {
  formData.append(constants.EDM.FILENAME, file.name)

  if (parent.edm.isCheckCode === true) {
    formData.append(constants.EDM.ISCHECKCODE, 'Y')
    formData.append(constants.EDM.CHECKCODE, file.hash)
  } else {
    formData.append(constants.EDM.ISCHECKCODE, 'N')
  }

  if (props.isFolder) {
    formData.append('filePath', file.path)
  }

  const updateId = state.updateId || parent.edm.updateId
  if (type === constants.EDM.SINGLEUPLOAD) {
    formData.append(constants.EDM.MULTIPART, file, props.isFolder ? file.path + file.name : file.name)
    updateId && formData.append(constants.EDM.DOCID, updateId)
  } else {
    const docId = updateId || file.docId
    formData.append(constants.EDM.DOCID, docId)
    formData.append(constants.EDM.FILESIZE, file.size)
  }

  if (updateId) {
    formData.append('updateFile', true)
    state.updateId = ''
  }
}

export const uploadFiles = ({ state, constants, Modal, props, t }) => (files) => {
  const { limit, fileList } = props
  if (limit && fileList.length + files.length > limit) {
    props.onExceed && props.onExceed(files, fileList)
    return
  }

  let postFiles = Array.prototype.slice.call(files)

  if (props.isFolder) {
    postFiles = postFiles.filter((item) => {
      const folderAry = item.webkitRelativePath.split('/')
      item.path = folderAry.slice(0, folderAry.length - 1).join('/') + '/'
      if (folderAry.length >= 7) {
        Modal.message({
          message: `${item.name}${t(constants.EDM.FOLDERKEY)}`,
          status: 'warning'
        })
      }

      return folderAry.length < 7
    })
  }

  if (!props.isFolder) {
    if (!props.multiple) {
      postFiles = postFiles.slice(0, 1)
    }
  }

  if (postFiles.length === 0) {
    return
  }

  props.onStart(postFiles, state.updateId)
}

export const upload = ({ api, props, refs }) => (rawFile) => {
  refs.input.value = null

  if (!props.beforeUpload) {
    return api.post(rawFile)
  }

  const previous = props.beforeUpload(rawFile)

  if (previous && previous.then) {
    previous.then(
      (fileProcessed) => {
        const typeOfFile = Object.prototype.toString.call(fileProcessed)

        if (typeOfFile === '[object File]' || typeOfFile === '[object Blob]') {
          if (typeOfFile === '[object Blob]') {
            fileProcessed = new File([fileProcessed], rawFile.name, {
              type: rawFile.type
            })
          }

          Object.keys(rawFile).forEach((p) => {
            fileProcessed[p] = rawFile[p]
          })

          api.post(fileProcessed)
        } else {
          api.post(rawFile)
        }
      },
      () => {
        props.onRemove(null, rawFile)
      }
    )
  } else if (previous !== false) {
    api.post(rawFile)
  } else {
    props.onRemove(null, rawFile)
  }
}

export const abort = ({ state, props }) => (file) => {
  const { reqs } = state
  const cancel = function (uid) {
    const fn = (reqs[uid] && reqs[uid].abort) || state.cancelToken[uid]
    fn && fn()
    delete reqs[uid]
    delete state.cancelToken[uid]
  }

  if (file && file.isLargeFile && file.cancelToken) {
    file.cancelToken && file.cancelToken.forEach((cancel) => cancel())

    delete file.cancelToken
  } else if (file) {
    let uid = file

    if (file.uid) {
      uid = file.uid
    }

    cancel(uid)
  } else {
    Object.keys(reqs).forEach((uid) => cancel(uid))

    props.fileList.forEach((file) => {
      file.cancelToken && file.cancelToken.forEach((cancel) => cancel())
      file.status = 'fail'
    })
  }
}

const getOptionsOfPost = ({ props, state, rawFile, parent, uid }) => ({
  headers: Object.assign(props.headers, state.headers),
  withCredentials: props.withCredentials,
  file: rawFile,
  data: props.data,
  filename: props.name,
  action: parent.action || props.action,
  onProgress: (event) => {
    props.onProgress(event, rawFile)
  },
  onSuccess: (res) => {
    props.onSuccess(res, rawFile)
    delete state.reqs[uid]
  },
  onError: (error) => {
    props.onError(error, rawFile)
    delete state.reqs[uid]
  }
})

const modifyOptionsOfPost = ({ service, props, options, rawFile, state, uid, parent, api, constants }) => {
  if (service && service.network && props.httpRequest === service.network.request) {
    options.method = 'post'
    options.url = options.action
    options.onUploadProgress = (event) => {
      props.onProgress(event, rawFile)
    }
    delete options.action
    delete options.onProgress
    const formData = new FormData()
    const source = service.network.CancelToken.source()
    options.cancelToken = source.token
    state.cancelToken[uid] = source.cancel
    if (parent.edm.upload) {
      !rawFile.isLargeFile && (options.method = 'put')
      options.data = options.data || {}
    }
    if (options.data) {
      Object.keys(options.data).forEach((key) => {
        formData.append(key, options.data[key])
      })
    }
    if (Array.isArray(rawFile)) {
      rawFile.forEach((file) => formData.append(file.name, file.raw || file))
    } else {
      if (state.isEdm) {
        api.getFormData({
          formData,
          file: rawFile,
          type: !rawFile.isLargeFile ? constants.EDM.SINGLEUPLOAD : ''
        })
      } else {
        formData.append(options.filename, rawFile, rawFile.name)
      }
    }
    options.data = formData
  }
}

export const post = ({ api, constants, parent, props, state, service }) => (rawFile) => {
  const { uid } = rawFile

  let options = getOptionsOfPost({ props, state, rawFile, parent, uid })

  modifyOptionsOfPost({
    service,
    props,
    options,
    rawFile,
    state,
    uid,
    parent,
    api,
    constants
  })

  const excuteReq = (options) => {
    const req = props.httpRequest(options)

    state.reqs[uid] = req

    if (req && req.then) {
      req.then(options.onSuccess, options.onError)
    }
  }

  if (rawFile.isLargeFile) {
    service.common.getChunkMergeUrl().then((url) => {
      options.url = url
      excuteReq(options)
    })
  } else {
    excuteReq(options)
  }
}

export const handleClick = ({ props, refs }) => () => {
  if (!props.disabled) {
    refs.input.value = null
    refs.input.click()
  }
}

export const handleKeydown = (api) => (event) => {
  if (event.target !== event.currentTarget) {
    return
  }

  if (event.keyCode === KEY_CODE.Enter || event.keyCode === KEY_CODE.Space) {
    api.handleClick()
  }
}

export const handleUpdate = ({ props, state }) => (file) => {
  if (!props.disabled) {
    state.updateInput.value = null
    state.updateId = file.docId
    state.updateInput.click()
  }
}

export const mounted = ({ state, props, api }) => () => {
  let updateInput = document.createElement('input')
  updateInput.type = 'file'
  updateInput.name = props.name
  updateInput.accept = props.accept
  updateInput.onchange = api.handleChange

  state.updateInput = Object.freeze(updateInput)
}

export const onBeforeDestroy = (state) => () => {
  state.updateInput = null
}
