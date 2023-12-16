class HashMap {
  data

  constructor(initObj) {
    this.data = newMap()
    for (const key in initObj) {
      if (Object.hasOwnProperty.call(initObj, key)) {
        this.set(key, initObj[key])
      }
    }
  }

  hasKey(key) {
    return this.data.has(key)
  }

  get(key) {
    return this.data.get(key)
  }

  set(key, value) {
    this.data.set(key, value)
    return value
  }

  each(callback, context) {
    this.data.forEach((value, key) => {
      callback.call(context, value, key)
    })
  }

  keys() {
    const keys = this.data.keys()
    return typeof Map === 'function' ? Array.from(keys) : keys
  }

  removeKey(key) {
    this.data.delete(key)
  }
}

function newMap() {
  return typeof Map === 'function' ? new Map() : new MapPolyfill()
}

class MapPolyfill {
  data

  delete(key) {
    const existed = this.has(key)
    if (existed) {
      delete this.data[key]
    }
    return existed
  }

  has(key) {
    return this.data.hasOwnProperty(key)
  }

  get(key) {
    return this.data[key]
  }

  set(key, value) {
    this.data[key] = value
    return this
  }

  keys() {
    return keys(this.data)
  }

  forEach(callback) {
    const data = this.data
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        callback(data[key], key)
      }
    }
  }
}

function keys(obj) {
  if (!obj) {
    return []
  }
  if (Object.keys) {
    return Object.keys(obj)
  }
  let keyList = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyList.push(key)
    }
  }
  return keyList
}

export default HashMap
