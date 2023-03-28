export const emitter = () => {
  let listeners = {}

  const on = (event, callback, once = false) => {
    if (event && typeof event === 'string' && typeof callback === 'function') {
      const callbacks = listeners[event] || []

      listeners[event] = callbacks
      callbacks.push(callback)
      callback.once = once
    }
  }

  const emitter = {
    emit(eventName) {
      const callbacks = listeners[eventName]

      if (callbacks) {
        callbacks.forEach((callback) => callback.apply(null, [].slice.call(arguments, 1)))

        listeners[eventName] = callbacks.filter((callback) => !callback.once)
      }
    },
    on,
    once(event, callback) {
      on(event, callback, true)
    },
    off(event, callback) {
      if (event && typeof event === 'string') {
        const callbacks = listeners[event]

        if (typeof callback === 'function') {
          listeners[event] = callbacks.filter((cb) => cb !== callback)
        } else {
          delete listeners[event]
        }
      } else {
        listeners = {}
      }
    }
  }

  return emitter
}

export const bindFilter = (props, attrs = {}) => {
  const properties = {}

  for (let name in props) {
    if (name.indexOf('_') !== 0) {
      properties[name] = props[name]
    }
  }

  for (let name in attrs) {
    properties[name] = attrs[name]
  }

  return properties
}

/**
 * 根据类名生成对应的hover、active等类名
 *
 *     getElementStatusClass('border-color', 'hover') // 'border-color hover:border-color-hover'
 *     getElementStatusClass(['border-color'], ['hover', 'active']) // 'border-color hover:border-color-hover active:border-color-active'
 *
 * @method
 * @param {String|Array} className - 类名
 * @param {String|Array} status - 状态
 * @returns {String} - 类名拼接的字符串
 */
export const getElementStatusClass = (className, status) => {
  if (!className || !status) return

  let classNames: string[] = []
  if (typeof className === 'string') {
    classNames.push(className)
  } else if (Array.isArray(className)) {
    classNames = className
  }

  let statusList: string[] = []
  if (typeof status === 'string') {
    statusList.push(status)
  } else if (Array.isArray(status)) {
    statusList = status
  }

  let res: string[] = []
  statusList.forEach((status) => classNames.forEach((name) => res.push(`${status}:${name}-${status}`)))

  return classNames.concat(res).join(' ')
}

/**
 * 根据key值获取对应的classes类名配置
 *
 *     getElementCssClass({ button: 'border-color' }, 'button') // 'border-color'
 *     getElementCssClass({ button: 'border-color' }, { 'button': true }) // 'border-color'
 *
 * @method
 * @param {Object} classes - 类名集合
 * @param {String|Object} key - 状态
 * @returns {String} - 类名配置值
 */
export const getElementCssClass = (classes = {}, key) => {
  if (typeof key === 'object') {
    const keys = Object.keys(key)
    let cls = ''
    keys.forEach((k) => {
      if (key[k] && classes[k]) cls += `${classes[k]} `
    })
    return cls
  } else {
    return classes[key] || ''
  }
}
