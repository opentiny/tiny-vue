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

import { hasOwn } from '../type'
import { xss } from '../xss'

const getBody = (xhr) => {
  const text = xhr.responseText || xhr.response

  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

const getError = (action, option, xhr) => {
  let errorText

  if (xhr.response) {
    errorText = xhr.response.error || xhr.response
  } else if (xhr.responseText) {
    errorText = xhr.responseText
  } else {
    errorText = `fail to post ${action} ${xhr.status}`
  }

  const error = new Error(errorText)

  error.status = xhr.status
  error.method = 'post'
  error.url = action

  return error
}

export default (option) => {
  if (typeof XMLHttpRequest === 'undefined') {
    return
  }

  const xhr = new XMLHttpRequest()
  const action = xss.filterUrl(option.action)

  if (xhr.upload) {
    xhr.upload.onprogress = (event) => {
      if (event.total > 0) {
        event.percent = (event.loaded / event.total) * 100
      }

      option.onProgress(event)
    }
  }

  const formData = new FormData()

  if (option.data) {
    Object.keys(option.data).forEach((key) => {
      formData.append(key, option.data[key])
    })
  }

  if (Array.isArray(option.file)) {
    option.file.forEach((file) => {
      formData.append(option.filename, file, file.name)
    })
  } else {
    formData.append(option.filename, option.file, option.file.name)
  }

  xhr.onerror = (event) => {
    option.onError(event)
  }

  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr))
    }

    option.onSuccess(getBody(xhr))
  }

  xhr.open('post', action, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = option.headers || {}

  for (let header in headers) {
    if (hasOwn.call(headers, header) && headers[header] !== null) {
      xhr.setRequestHeader(header, headers[header])
    }
  }

  xhr.send(formData)

  return xhr
}
