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
import floatValidation from '../float'

// 模拟依赖
const mockRequired = vi.fn()
const mockType = vi.fn()
const mockRange = vi.fn()

vi.mock('../../rules/index', () => ({
  default: {
    required: mockRequired,
    type: mockType,
    range: mockRange
  }
}))

// 直接引用模拟的函数而不是引入实际模块
const rules = {
  required: mockRequired,
  type: mockType,
  range: mockRange
}

vi.mock('../../util', () => ({
  isEmptyValue: (value: any) => {
    return value === undefined || value === null || value === ''
  }
}))

describe('浮点数验证测试', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('当值为空且不是必填时应直接调用回调', () => {
    const callback = vi.fn()
    const rule = { field: 'test' }
    const source = { test: '' }

    floatValidation(rule, '', callback, source, {})

    expect(callback).toHaveBeenCalledWith()
    expect(rules.required).not.toHaveBeenCalled()
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
  })

  it('当值为空且是必填时应调用required验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test', required: true }
    const source = { test: '' }
    const options = {}

    floatValidation(rule, '', callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({
      rule,
      checkValue: '',
      source,
      errors: [],
      options
    })
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
  })

  it('当值不为空时应执行类型和范围验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test' }
    const source = { test: 3.14 }
    const options = {}
    const value = 3.14

    floatValidation(rule, value, callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({
      rule,
      checkValue: value,
      source,
      errors: [],
      options
    })
    expect(rules.type).toHaveBeenCalledWith(rule, value, source, [], options)
    expect(rules.range).toHaveBeenCalledWith(rule, value, source, [], options)
  })

  it('当字段不在source中且不是必填时不应执行验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test' }
    const source = { other: 3.14 }
    const options = {}

    floatValidation(rule, undefined, callback, source, options)

    expect(callback).toHaveBeenCalledWith([])
    expect(rules.required).not.toHaveBeenCalled()
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
  })

  it('应将错误传递给回调函数', () => {
    const callback = vi.fn()
    const rule = { field: 'test', required: true, type: 'float' }
    const source = { test: 3.14 }
    const options = {}
    const value = 3.14

    // 模拟 required 函数向错误数组添加一个错误
    mockRequired.mockImplementation(({ errors }) => {
      errors.push({ field: 'test', message: '浮点数验证错误' })
    })

    floatValidation(rule, value, callback, source, options)

    expect(callback).toHaveBeenCalledWith([{ field: 'test', message: '浮点数验证错误' }])
  })

  it('当值为合法浮点数时应通过验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test', type: 'float' }
    const source = { test: 3.14 }
    const options = {}
    const value = 3.14

    floatValidation(rule, value, callback, source, options)

    // 确保回调被调用时没有错误
    expect(callback).toHaveBeenCalledWith([])
  })

  it('应验证浮点数范围限制', () => {
    const callback = vi.fn()
    const rule = { field: 'test', type: 'float', min: 0, max: 100 }
    const source = { test: 50.5 }
    const options = {}
    const value = 50.5

    floatValidation(rule, value, callback, source, options)

    expect(rules.range).toHaveBeenCalledWith(rule, value, source, [], options)
  })

  it('当值为undefined时不应执行类型和范围验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test', required: true }
    const source = { test: undefined }
    const options = {}

    floatValidation(rule, undefined, callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({
      rule,
      checkValue: undefined,
      source,
      errors: [],
      options
    })
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
  })
})
