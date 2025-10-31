export const debounce = (func: Function, delay = 200) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, delay);
  };
}

export const isNumber = (value: any) => parseFloat(value).toString() !== 'NaN'

/**
 * 深拷贝方法
 * @param obj 元数据
 * @returns
 */
export const deepClone = (obj) => {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    const keys = Object.keys(obj)
    if (keys.length) {
      keys.forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      })
    } else {
      return obj
    }
  }

  return objClone
}

/**
 * 过滤复制对象的key值
 * @param obj 复制对象
 * @param keysToOmit key值
 */
export const omitObj = (obj, keysToOmit = ['mergeTag', 'options', 'idMapKey']) => {
  const result = { ...obj }
  keysToOmit.forEach((key) => {
    delete result[key]
  })
  return result
}

