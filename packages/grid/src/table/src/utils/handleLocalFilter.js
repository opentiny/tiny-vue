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
  return (value, input, relation) => {
    let result = false
    value = modifyValueCheckStr(value)
    switch (relation) {
      case 'equals':
        result = value == input
        break
      case 'unequal':
        result = value != input
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
      case 'contains':
        result = value.toString().indexOf(input) !== -1
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

export function handleFilterCheck({ checkStr, empty, input, property, relation, row, valueList }) {
  return () => {
    const value = get(row, property)

    if (empty === true) {
      return !value
    }
    if (empty === false) {
      return !!value
    }

    const checkInput = (!input && input !== 0) || checkStr(value, input, relation) // inputFilter
    const checkEnum = !valueList.length || valueList.indexOf(value) > -1 // emunFilter 只有在多选时valueList才有值

    return checkInput && checkEnum
  }
}
