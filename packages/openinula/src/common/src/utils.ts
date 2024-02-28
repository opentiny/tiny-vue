/**
 * filterAttrs 属性过滤函数
 * @param {object} attrs 由父组件传入，且没有被子组件声明为 props 的一些属性
 * @param {Array} filters 过滤数组，元素可以为字符串，也可以为正则表达式
 * @param {boolean} include 是否返回为被过滤的属性集合，如果为 false，filters 是过滤不要的属性
 * @returns {object} 过滤后的属性对象
 */
export const filterAttrs = (attrs, filters, include) => {
  const props = {}

  for (let name in attrs) {
    const find = filters.some((r) => new RegExp(r).test(name))

    if ((include && find) || (!include && !find)) {
      props[name] = attrs[name]
    }
  }

  return props
}

/**
 * event bus
 * $bus.on
 * $bus.off
 * $bus.emit
 */

export const eventBus = () => {
  const $bus = {}

  const on = (eventName, callback) => {
    if (!$bus[eventName]) {
      $bus[eventName] = []
    }

    $bus[eventName].push(callback)
  }

  const off = (eventName, callback) => {
    if (!$bus[eventName]) {
      return
    }

    $bus[eventName] = $bus[eventName].filter((subscriber) => subscriber !== callback)
  }

  const emit = (eventName, ...args) => {
    if (!$bus[eventName]) {
      return
    }

    $bus[eventName].forEach((subscriber) => subscriber(...args))
  }

  const once = (eventName, callback) => {
    const onceCallBack = (...args) => {
      callback(...args)
      off(eventName, onceCallBack)
    }
    on(eventName, onceCallBack)
  }

  return {
    on,
    emit,
    off,
    once
  }
}

/**
 * 实现 vue 中 :class 的用法
 */

export function VueClassName(className) {
  if (typeof className === 'string') {
    return className
  } else if (Array.isArray(className)) {
    return className.reduce((pre, cur, index) => {
      if (typeof cur === 'string') {
        return `${pre}${index === 0 ? '' : ' '}${cur}`
      } else {
        return `${pre}${index === 0 ? '' : ' '}${VueClassName(cur)}`
      }
    }, '')
  } else if (typeof className === 'object') {
    return Object.keys(className).reduce((pre, key, index) => {
      if (className[key]) {
        return `${pre}${index === 0 ? '' : ' '}${key}`
      } else {
        return pre
      }
    }, '')
  }
}

export const vc = VueClassName

export const getElementCssClass = (classes = {}, key) => {
  if (typeof key === 'object') {
    const keys = Array.isArray(key) ? key : Object.keys(key).filter((k) => key[k])
    let cls = ''
    keys.forEach((k) => {
      if (classes[k]) cls += `${classes[k]} `
    })
    return cls
  } else {
    return classes[key] || ''
  }
}

export function getPropByPath(obj, path) {
  let tempObj = obj
  // 将a[b].c转换为a.b.c
  path = path.replace(/\[(\w+)\]/g, '.$1')
  // 将.a.b转换为a.b
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let len = keyArr.length

  for (let i = 0; i < len - 1; i++) {
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      return
    }
  }
  return tempObj[keyArr[keyArr.length - 1]]
}
