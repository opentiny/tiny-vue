import type { ISearchBoxNewTag } from '../index.type.ts'
import { deepClone } from './index.ts'
import { showPopover } from './dropdown.ts'

/**
 * 判断是否已选择此标签
 * @param state searchbox的state变量
 * @param itemValue 标签的value值
 * @param itemLabel 标签的label值，可选参数，默认为空字符串，一般用于当prevItem.label为空时
 * @return 已选择则返回true，未选择则返回false
 */
export const hasTagItem = (state, itemValue, itemLabel = '') => {
  const { valueMap, prevItem } = state
  const value = (prevItem.label || itemLabel) + itemValue
  return valueMap.has(value)
}

/**
 * 清空输入框的值
 * @param state searchbox的state变量
 */
export const resetInput = (state) => {
  state.propItem = {}
  state.inputValue = ''
}

/**
 * update:modelValue和change事件
 * @param emit vue的api
 * @param state searchbox的state变量
 * @param args 其他可选参数：
 * @param tagList 尾部添加的新标签数组
 * @param index 替换某标签的索引
 * @param newTag 表示替换的新标签，主要和索引共用
 * @param newValue 表示替换全部的model-value值
 * @param oldValue 表示旧的model-value值
 */
export const emitChangeModelEvent = ({ emit, state, nextTick, ...args }) => {
  showPopover(state, false)
  const { tagList = null, index = -1, newTag = null, newValue = null, oldValue = null, isEdit } = args
  if (!isEdit) {
    resetInput(state)
  }
  if (!tagList && index === -1 && !newValue) {
    return
  }

  const oldVal = oldValue || deepClone(state.innerModelValue)
  let innerModelValue = []
  
  if (newValue) {
    innerModelValue = [...newValue]
  } else if (index !== -1) {
    innerModelValue = [...state.innerModelValue]
    newTag ? innerModelValue.splice(index, 1, newTag) : innerModelValue.splice(index, 1)
  } else {
    innerModelValue = [...state.innerModelValue, ...tagList]
  }
  
  // 直接赋值新数组，确保 Vue 2 和 Vue 3 都能触发响应式更新
  state.innerModelValue = innerModelValue
  
  // 同步emit，确保立即触发 - Vue 2 需要立即更新才能逐步显示
  emit('update:modelValue', deepClone(innerModelValue))
  emit('change', deepClone(innerModelValue), oldVal)
}

/**
 * 创建新标签，防止多个地方创建的标签不一致，缺少某些属性
 * @param newTag 新标签对象
 * @return 生成的新标签对象
 */
export const createNewTag = (newTag: ISearchBoxNewTag) => newTag

/**
 * 获取元素的唯一标识
 * @param props 组件入参对象
 * @param prevItem 当前标签父级对象
 * @param item 要生成的新标签对象
 * @return 此标签的唯一标识
 */
export const getTagId = (props, prevItem, item) => {
  const idKey = prevItem.idMapKey || props.idMapKey
  return item && item[idKey] !== undefined ? { [idKey]: item[idKey] } : null
}
