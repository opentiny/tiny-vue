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
import enumValidation from '../enum'

// 模拟依赖
const mockRequired = vi.fn()
const mockEnum = vi.fn()

vi.mock('../../rules/index', () => ({
  default: {
    required: mockRequired,
    enum: mockEnum
  }
}))

// 直接引用模拟的函数而不是引入实际模块
const rules = {
  required: mockRequired,
  enum: mockEnum
}

vi.mock('../../util', () => ({
  isEmptyValue: (value: any) => {
    return value === undefined || value === null || value === ''
  }
}))

vi.mock('../../../type', () => ({
  hasOwn: {
    call: (obj: Record<string, any>, key: string) => Object.prototype.hasOwnProperty.call(obj, key)
  }
}))

describe('枚举验证测试', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('当值为空且不是必填时应直接调用回调', () => {
    const callback = vi.fn()
    const rule = { field: 'test' }
    const source = { test: undefined }

    enumValidation(rule, undefined, callback, source, { messages: {} })

    expect(callback).toHaveBeenCalledWith()
    expect(rules.required).not.toHaveBeenCalled()
    expect(rules.enum).not.toHaveBeenCalled()
  })

  it('当值为空且是必填时应调用required验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test', required: true }
    const source = { test: undefined }
    const options = { messages: {} }

    enumValidation(rule, undefined, callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({
      rule,
      checkValue: undefined,
      source,
      errors: [],
      options
    })
    expect(rules.enum).not.toHaveBeenCalled()
  })

  it('当值不为空时应执行枚举验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test', enum: ['a', 'b', 'c'] }
    const source = { test: 'a' }
    const options = { messages: {} }
    const value = 'a'

    enumValidation(rule, value, callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({
      rule,
      checkValue: value,
      source,
      errors: [],
      options
    })
    expect(rules.enum).toHaveBeenCalledWith(rule, value, source, [], options)
  })

  it('当字段不在source中且不是必填时不应执行验证', () => {
    const callback = vi.fn()
    const rule = { field: 'test' }
    const source = { other: 'a' }
    const options = { messages: {} }

    enumValidation(rule, undefined, callback, source, options)

    expect(callback).toHaveBeenCalledWith([])
    expect(rules.required).not.toHaveBeenCalled()
    expect(rules.enum).not.toHaveBeenCalled()
  })

  it('应将错误传递给回调函数', () => {
    const callback = vi.fn()
    const rule = { field: 'test', required: true, enum: ['a', 'b', 'c'] }
    const source = { test: 'd' }
    const options = { messages: { enum: '值必须是指定的枚举值之一' } }
    const value = 'd'

    // 模拟 required 函数向错误数组添加一个错误
    mockRequired.mockImplementation(({ errors }) => {
      errors.push({ field: 'test', message: '必填字段' })
    })

    // 模拟 enum 函数向错误数组添加一个错误
    mockEnum.mockImplementation((rule, value, source, errors) => {
      errors.push({ field: 'test', message: '值必须是指定的枚举值之一' })
    })

    enumValidation(rule, value, callback, source, options)

    expect(callback).toHaveBeenCalledWith([
      { field: 'test', message: '必填字段' },
      { field: 'test', message: '值必须是指定的枚举值之一' }
    ])
  })
})
