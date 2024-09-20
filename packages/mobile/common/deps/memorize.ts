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

class Memorize {
  constructor(value, options = {}) {
    if (value && typeof value === 'object') {
      options = value
    } else {
      value = []
    }

    if (typeof options.key !== 'string' || !options.key) {
      throw new Error('Memorize Initialization error.')
    }

    this._prefix = 'tiny_memorize_'
    this._customField1 = 'frequency'
    this._customField2 = 'time'
    this._sortBy = (options.sortBy || 'frequency').toUpperCase()
    this._sort = (options.sort || 'desc').toUpperCase()
    this._dataKey = options.dataKey || 'value'
    this._highlightClass = options.highlightClass || 'memorize-highlight'
    this._highlightNum = options.highlightNum || Infinity
    this._cacheNum = options.cacheNum || Infinity
    this._serialize = options.serialize || JSON.stringify
    this._deserialize = options.deserialize || JSON.parse
    this.setKey(options.key)
    this.assemble(value)
  }

  setKey(storeKey) {
    this._storeKey = this._prefix + (storeKey || Number(new Date()))
  }

  getValue(isSort = true) {
    const storeVlue = window.localStorage[this._storeKey] || ''

    if (storeVlue) {
      try {
        const list = this._deserialize(storeVlue)
        return isSort ? this.sort(list) : list
      } catch (e) {
        return []
      }
    }

    return []
  }

  setValue(value) {
    try {
      window.localStorage.setItem(this._storeKey, this._serialize(value))
    } catch (e) {
      throw new Error('Memorize set localStorage error.')
    }
  }

  clear() {
    window.localStorage.removeItem(this._storeKey)
  }

  add(dataKey) {
    const list = this.getValue(false)
    const newData = {
      key: dataKey
    }

    newData[this._customField1] = 1
    newData[this._customField2] = Number(new Date())

    if (list.length < this._cacheNum) {
      list.push(newData)
      this.setValue(list)
    }
  }

  updateByKey(dataKey) {
    let isChanged = false
    const list = this.getValue(false)

    list.some((item) => {
      if (item.key === dataKey) {
        item[this._customField1] = (item[this._customField1] || 0) + 1
        item[this._customField2] = Number(new Date())
        isChanged = true

        return true
      }

      return false
    })

    isChanged ? this.setValue(list) : this.add(dataKey)
  }

  sort(list) {
    if (Array.isArray(list)) {
      return list.sort((x, y) => {
        const isDesc = this._sort === 'DESC'
        const compare = isDesc ? [-1, 1] : [1, -1]

        const sortField = this._sortBy === 'FREQUENCY' ? this._customField1 : this._customField2

        const xField = x[sortField]
        const yField = y[sortField]

        if (isNaN(xField)) {
          return isDesc ? -1 : 1
        } else if (isNaN(yField)) {
          return -1
        }

        return xField > yField ? compare[0] : compare[1]
      })
    } else {
      return list
    }
  }

  assemble(list) {
    const storeValue = this.getValue(true)
    if (!(Array.isArray(list) && list.length) || !storeValue.length) {
      return list
    }

    let matchCount = 0
    const handler = (storeItem) => (listItem, index) => {
      if (listItem[this._dataKey] === storeItem.key) {
        matchCount++
        list.splice(index, 1)

        if (matchCount <= this._highlightNum) {
          listItem._highlightClass = this._highlightClass
        }

        list.unshift(listItem)

        return true
      }

      return false
    }

    for (let i = storeValue.length - 1; i > -1; i--) {
      const storeItem = storeValue[i]
      list.some(handler(storeItem))
    }

    return list
  }
}

export default Memorize
