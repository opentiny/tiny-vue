import { isObject, isArray } from './type'
import { getItemCount } from './math'

/**
 * 深比较两个对象
 * 如果对比的是两个数组，值一致，顺序改变，如[1,2]和[2,1]，算不等
 * 如果对比的是两个对象，值一致，顺序改变。如{a:1,b:2}和{b:2,a:1},算相等
 */
export function isObjEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  for (let key in obj1) {
    const res = isObjEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  return true
}

/**
 * 对比两个简单类型数组的值和长度是否完全一样（值的顺序允许改变）
 * 值一致，顺序不一致，如[1,2]和[2,1],算相等
 */
export function isArrayEqual(arr1, arr2) {
  if (!isArray(arr1) || !isArray(arr2)) {
    return false
  }
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let key of arr1) {
    if (getItemCount(arr1, key) !== getItemCount(arr2, key)) {
      return false
    }
  }
  return true
}
