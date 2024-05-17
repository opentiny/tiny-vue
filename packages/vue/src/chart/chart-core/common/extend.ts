import { merge, get } from './util'
import { isObject } from './type'
import { setObj as set } from './object'
import cloneDeep from '../base/util/cloneDeep'

const isArr = Array.isArray

function removeNullKeys(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  for (let key in obj) {
    if (obj[key] === null) {
      delete obj[key]
    } else {
      obj[key] = removeNullKeys(obj[key])
      if (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0) {
        obj[key] = undefined
      }
    }
  }
  return obj
}

export default ({ option, extend }) => {
  const obj = cloneDeep(option)
  const options = removeNullKeys(obj)
  if (!extend) {
    return
  }

  Object.keys(extend).forEach((key) => {
    const value = extend[key]

    if (~key.indexOf('.')) {
      // （其他类型）属性名中带. 为true
      set(options, key, value)
    } else if (typeof value === 'function') {
      // 当属性为函数时，设置的是函数的返回值
      options[key] = value(options[key])
    } else if (isArr(options[key]) && isArr(value)) {
      // 当被修改值和替换值都为数组时，key符合attrList就合并
      const attrList = [
        'series',
        'yAxis',
        'xAxis',
        'color',
        'dataZoom',
        'legend',
        'toolbox',
        'grid',
        'graphic',
        'timeline',
        'visualMap',
        'brush'
      ]
      if (~attrList.indexOf(key)) {
        // attrList，指定的key才能合并处理
        options[key] = merge(options[key], value)
      }
    } else {
      // 属性为对象(eg: tooltip)或包含对象的数组(eg: series)
      if (isArr(options[key]) && isObject(options[key][0])) {
        // 属性值是包含对象数组
        options[key].forEach((option, i) => (options[key][i] = { ...option, ...value }))
      } else if (isObject(options[key])) {
        // 被替换属性值是对象
        let optionBase = options[key]

        options[key] = { ...optionBase, ...value } // 两者合并，后者覆盖前者
      } else {
        // 直接覆盖替换
        options[key] = value
      }
    }
  })
  const { series } = option
  if (series) {
    if (Array.isArray(series)) {
      options.series = series.map((item) => {
        if (get(item, 'type') === 'line' && get(item, 'label.show')) {
          item.showSymbol = true
        }

        return item
      })
    } else {
      options.series.label = { show: false, ...option.series.label }
    }
  }
  return options
}
