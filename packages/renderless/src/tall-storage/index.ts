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

export const mousedown = (event) => {
  if (event && event.preventDefault) {
    event.preventDefault()
  } else {
    window.event.returnValue = false
  }

  return false
}

export const selectItem =
  ({ emit, state }) =>
  (value) => {
    state.hoverValue = ''
    emit('selected', value)
  }

export const keydown =
  ({ emit, props, state }) =>
  () => {
    const key = window.event.keyCode
    const index = props.localstorageData.indexOf(state.hoverValue)
    const endIndex = props.localstorageData.length - 1

    if (key === KEY_CODE.ArrowUp && props.isMemoryStorage) {
      if (index > 0 && index <= endIndex) {
        state.hoverValue = props.localstorageData[index - 1]
      } else {
        state.hoverValue = props.localstorageData[endIndex]
      }

      return false
    }

    if (key === KEY_CODE.ArrowDown && props.isMemoryStorage) {
      if (index >= 0 && index < endIndex) {
        state.hoverValue = props.localstorageData[index + 1]
      } else {
        state.hoverValue = props.localstorageData[0]
      }

      return false
    }

    if (key === KEY_CODE.NumpadEnter) {
      if (props.isMemoryStorage && state.hoverValue && state.hoverValue.length > 0) {
        emit('selected', state.hoverValue)
      }
    }
  }

const sortDeduplication = (array, memorySpace = 5) => {
  const length = array.length
  let newArray = []
  let fillterObj = {}

  for (let i = 0, j = 1; j <= memorySpace; j++) {
    if (i < 0 || i >= length) {
      break
    }

    if (fillterObj[array[i]]) {
      j = j - 1
    } else {
      fillterObj[array[i]] = true
      newArray.push(array[i])
    }

    if (j === length) {
      break
    }

    i++
  }

  return newArray
}

const isJSONobject = (string, type) => {
  if (typeof string === 'string') {
    try {
      const obj = JSON.parse(string)
      if (typeof obj === 'object' && obj && (type ? obj.constructor === type : true)) {
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }
}

const setLocalStorageage = (name, value, memorySpace = 5) => {
  if (typeof value === 'string') {
    const oldValue = localStorage.getItem(name)
    const isArray = isJSONobject(oldValue, Array)
    let newValue = ''

    if (oldValue && isArray) {
      let oldArray = JSON.parse(localStorage.getItem(name))

      oldArray.unshift(value)
      oldArray = sortDeduplication(oldArray, memorySpace)
      newValue = JSON.stringify(oldArray)
    } else if (oldValue === null || oldValue === value) {
      // tiny 新增：防止第一次时，存入字符串
      newValue = JSON.stringify([value])
    } else {
      newValue = JSON.stringify([value, oldValue])
    }

    localStorage.setItem(name, newValue)
  }
}

export const addMemory = (props) => (value) => {
  if (props.name && value) {
    setLocalStorageage(props.name, value, props.memorySpace)
  }
}

export const searchMemory =
  ({ props, state }) =>
  (inputVal) => {
    if (!props.name) {
      return
    }
    const memoryBox = localStorage.getItem(props.name)
    let storageData = []
    let isMemoryStorage = true

    if (isJSONobject(memoryBox)) {
      const memoryArry = JSON.parse(memoryBox)

      if (!inputVal) {
        storageData = JSON.parse(memoryBox)
      } else {
        for (let i = 0, len = memoryArry.length; i < len; i++) {
          memoryArry[i].includes(inputVal) && storageData.push(memoryArry[i])
        }
      }

      if (storageData.length === 0) {
        isMemoryStorage = false
      }
    } else {
      if (memoryBox === null) {
        isMemoryStorage = false
      } else {
        storageData.push(memoryBox)
      }
    }

    state.storageData = storageData
    state.isMemoryStorage = isMemoryStorage
  }

export const selectedMemory =
  ({ api, state }) =>
  (value) => {
    api.getInput().value = value
    api.handleInput({ target: { value } })
    api.handleChange({ target: { value } })
    state.isMemoryStorage = false
  }
