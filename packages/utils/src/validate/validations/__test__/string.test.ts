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

import { describe, expect, it, vi, beforeEach } from 'vitest'
import stringValidation from '../string'

// 模拟依赖
const mockRequired = vi.fn()
const mockType = vi.fn()
const mockRange = vi.fn()
const mockPattern = vi.fn()
const mockWhitespace = vi.fn()

vi.mock('../../rules/index', () => ({
  default: {
    required: mockRequired,
    type: mockType,
    range: mockRange,
    pattern: mockPattern,
    whitespace: mockWhitespace
  }
}))

// 模拟 isEmptyValue 函数
vi.mock('../../util', () => ({
  isEmptyValue: (value: any, type: string) => {
    if (type === 'string') {
      return value === undefined || value === '' || value === null
    }
    return false
  }
}))

// 模拟 hasOwn 函数
vi.mock('../../../type', () => ({
  hasOwn: {
    call: (obj: any, key: string) => Object.prototype.hasOwnProperty.call(obj, key)
  }
}))

describe('字符串验证函数测试', () => {
  beforeEach(() => {
    // 每次测试前重置所有模拟函数
    vi.clearAllMocks()
  })

  it('当值为空且不是必填时，应直接调用回调', () => {
    const rule = { field: 'testField' }
    const checkValue = ''
    const callback = vi.fn()
    const source = {}
    const options = {}

    stringValidation(rule, checkValue, callback, source, options)

    expect(callback).toHaveBeenCalledWith()
    expect(mockRequired).not.toHaveBeenCalled()
  })

  it('当值为空但是必填时，应执行必填验证', () => {
    const rule = { field: 'testField', required: true }
    const checkValue = ''
    const callback = vi.fn()
    const source = { testField: '' }
    const options = {}

    stringValidation(rule, checkValue, callback, source, options)

    expect(mockRequired).toHaveBeenCalledWith({
      rule,
      checkValue,
      source,
      errors: [],
      options,
      type: 'string'
    })
    expect(callback).toHaveBeenCalled()
  })

  it('当值不为空时，应执行类型验证、范围验证和模式验证', () => {
    const rule = { field: 'testField' }
    const checkValue = 'test'
    const callback = vi.fn()
    const source = { testField: 'test' }
    const options = {}
    const errors: any[] = []

    stringValidation(rule, checkValue, callback, source, options)

    expect(mockType).toHaveBeenCalledWith(rule, checkValue, source, errors, options)
    expect(mockRange).toHaveBeenCalledWith(rule, checkValue, source, errors, options)
    expect(mockPattern).toHaveBeenCalledWith(rule, checkValue, source, errors, options)
    expect(callback).toHaveBeenCalledWith(errors)
  })

  it('当设置了whitespace规则时，应执行空白字符验证', () => {
    const rule = { field: 'testField', whitespace: true }
    const checkValue = '  test  '
    const callback = vi.fn()
    const source = { testField: '  test  ' }
    const options = {}
    const errors: any[] = []

    stringValidation(rule, checkValue, callback, source, options)

    expect(mockWhitespace).toHaveBeenCalledWith(rule, checkValue, source, errors, options)
    expect(callback).toHaveBeenCalledWith(errors)
  })

  it('当字段不在源对象中且不是必填时，不应执行验证', () => {
    const rule = { field: 'testField' }
    const checkValue = 'test'
    const callback = vi.fn()
    const source = {} // 源对象不包含testField
    const options = {}

    stringValidation(rule, checkValue, callback, source, options)

    expect(mockRequired).not.toHaveBeenCalled()
    expect(mockType).not.toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith([])
  })
})
