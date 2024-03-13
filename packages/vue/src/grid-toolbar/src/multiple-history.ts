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
import { toStringJSON, toJSONString } from '@opentiny/vue-renderless/grid/static/'
import { format } from '@opentiny/vue-renderless/common/date'
import { extend } from '@opentiny/vue-renderless/common/object'

export function getStorage(storageKey, storageType, remoteMethod) {
  return new Promise((resolve, reject) => {
    if (storageType === 'local') {
      const valueString = localStorage.getItem(storageKey)
      const valueObj = toStringJSON(valueString)

      resolve(valueObj)
    } else if (storageType === 'remote') {
      remoteMethod()
        .then((remoteString) => {
          let remoteObj = toStringJSON(remoteString)

          remoteObj = (remoteObj && remoteObj[storageKey]) || null

          resolve(remoteObj)
        })
        .catch(reject)
    }
  })
}

export function setStorage(storageKey, valueObj, storageType, vm, eventName) {
  if (storageType === 'local') {
    const valueString = toJSONString(valueObj)

    localStorage.setItem(storageKey, valueString)
  } else if (storageType === 'remote') {
    const remoteString = toJSONString({ [storageKey]: valueObj })

    vm.$emit(eventName, remoteString)
  }
}

export function generateId() {
  const now = new Date()
  const suf = /GMT[-+]\d+/.exec(now.toString())[0].replace(/\+/, 'E').replace(/-/, 'W').replace(/0/g, '')
  const name = format(now, 'yyyy-MM-dd hh:mm:ss.SSS')

  return { id: now.getTime() + suf, name }
}

export function createCustom(setting, userKey) {
  const { id, name } = generateId()

  return { id, name, userKey, setting: { custom: setting } }
}

export function mergeArray(toArr, fromArr) {
  const result = []

  for (let i = 0; i < fromArr.length; i++) {
    const fromItem = {
      order: null,
      fixed: null,
      visible: true,
      sortable: false,
      ...fromArr[i]
    }
    let toItem

    for (let j = 0; j < toArr.length; j++) {
      if (fromItem.property === toArr[j].property) {
        toItem = { ...toArr[j] }
        break
      }
    }

    result.push(extend(true, {}, toItem || {}, fromItem))
  }

  return result
}
