/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { get } from '@opentiny/vue-renderless/grid/static/'

export function handleFilterConditionCustom({ column, condition, method, property, row }) {
  let ret = { flag: false, result: null }

  if (method && condition.type === 'custom') {
    ret.result = method({ property, row, column })
    ret.flag = true
  }

  return ret
}

export function handleFilterConditionExtend({ column, condition, property, row }) {
  let ret = { flag: false, result: null }

  if (condition.type === 'extend') {
    let extendMethod = condition.method

    if (typeof extendMethod !== 'function') {
      extendMethod = () => true
    }

    ret.result = extendMethod({ value: get(row, property), row, column })
    ret.flag = true
  }

  return ret
}

function findRelationMethod(relation, relations) {
  if (Array.isArray(relations)) {
    let method

    for (let i = 0; i < relations.length; i++) {
      if (relations[i] && relations[i].value === relation) {
        method = relations[i].method
        break
      }
    }

    return method
  }
}

export function handleFilterRelations({ inputFilter }) {
  let relations = []

  if (typeof inputFilter === 'object' && Array.isArray(inputFilter.relations)) {
    relations = inputFilter.relations
  }

  return relations
}

function modifyValueCheckStr(value) {
  if (!value && typeof value !== 'number') {
    value = ''
  }
  return value
}

function handleDefaultCheckStr({ column, input, relation, relationMethod, relations, result, row, value }) {
  if (typeof relationMethod !== 'function') {
    relationMethod = findRelationMethod(relation, relations)
  }

  if (typeof relationMethod === 'function') {
    result = relationMethod({ value, input, row, column })
  }

  return { relationMethod, result }
}

/*
 * 等于 equals
 * 不等于unequal
 * 大于greaterThan 小于lessThan
 * 大于等于equalToGreaterThan
 * 小于等于equalToLessThan
 * 包含contains 不包含exclude
 * 开头是startwith 结尾是endwith
 */
export function handleFilterCheckStr({ column, relationMethod, relations, row }) {
  return (value, input, relation, dateList) => {
    let result = false
    value = modifyValueCheckStr(value)
    switch (relation) {
      case 'equals':
        result = value === input
        break
      case 'unequal':
        result = value !== input
        break
      case 'greaterThan':
        result = value > input
        break
      case 'lessThan':
        result = value < input
        break
      case 'equalToGreaterThan':
        result = value >= input
        break
      case 'equalToLessThan':
        result = value <= input
        break
      case 'interveningBetween':
        result = value >= dateList[0] && value <= dateList[1]
        break
      case 'contains':
        result = value.toString().includes(input)
        break
      case 'startwith':
        result = value.toString().indexOf(input) === 0
        break
      case 'endwith':
        result = value.toString().match(new RegExp(`${input}$`))
        break
      default: {
        let ret = handleDefaultCheckStr({ column, input, relation, relationMethod, relations, result, row, value })
        relationMethod = ret.relationMethod
        result = ret.result
      }
    }
    return result
  }
}

export function handleFilterCheck({ checkStr, empty, input, property, relation, row, valueList, dateList }) {
  return () => {
    const value = get(row, property)

    if (empty === true) {
      return !value
    }
    if (empty === false) {
      return !!value
    }

    // 新增时间段筛选逻辑
    if (dateList) {
      // 如果开始和结束时间为空则不执行过滤逻辑
      if (!dateList[0] && !dateList[1]) {
        return true
      }
      return checkStr(value, dateList[0] || dateList[1], relation, dateList)
    }

    const checkInput = (!input && input !== 0) || checkStr(value, input, relation) // inputFilter
    const checkEnum = !valueList.length || valueList.includes(value) // emunFilter 只有在多选时valueList才有值

    return checkInput && checkEnum
  }
}
