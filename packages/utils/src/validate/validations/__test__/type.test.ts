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

// 导入被测试的函数
import typeValidation from '../type'

// 创建模拟模块
const mockRules = {
  required: vi.fn(),
  type: vi.fn()
}

const mockIsEmptyValue = vi.fn()
const mockHasOwn = { call: vi.fn() }

// 模拟导入
vi.mock('../rules/index.js', () => ({
  default: mockRules
}))

vi.mock('../util.js', () => ({
  isEmptyValue: mockIsEmptyValue
}))

vi.mock('../../../type.js', () => ({
  hasOwn: mockHasOwn
}))

describe('类型验证函数', () => {
  // 每个测试前重置模拟函数
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('当值为空且非必填时应直接通过验证', () => {
    // 准备数据
    const rule = { type: 'string', field: 'name' }
    const checkValue = ''
    const callback = vi.fn()
    const source = { name: '' }
    const options = {}

    // 模拟hasOwn.call返回true表示source有该字段
    mockHasOwn.call.mockReturnValue(true)
    // 模拟isEmptyValue返回true表示值为空
    mockIsEmptyValue.mockReturnValue(true)

    // 调用函数
    typeValidation(rule, checkValue, callback, source, options)

    // 验证结果
    expect(callback).toHaveBeenCalledWith()
    expect(callback).toHaveBeenCalledTimes(1)
    expect(mockRules.type).not.toHaveBeenCalled()
  })

  it('当值不为空时应调用类型验证', () => {
    // 准备数据
    const rule = { type: 'string', field: 'name' }
    const checkValue = 'test'
    const callback = vi.fn()
    const source = { name: 'test' }
    const options = {}

    // 模拟hasOwn.call返回true表示source有该字段
    mockHasOwn.call.mockReturnValue(true)
    // 模拟isEmptyValue返回false表示值不为空
    mockIsEmptyValue.mockReturnValue(false)

    // 调用函数
    typeValidation(rule, checkValue, callback, source, options)

    // 验证结果
    expect(mockRules.required).toHaveBeenCalledWith({
      rule,
      checkValue,
      source,
      errors: [],
      options,
      type: 'string'
    })
    expect(mockRules.type).toHaveBeenCalledWith(rule, checkValue, source, [], options)
    expect(callback).toHaveBeenCalledWith([])
  })

  it('当字段不在source中且非必填时不应验证', () => {
    // 准备数据
    const rule = { type: 'string', field: 'name', required: false }
    const checkValue = undefined
    const callback = vi.fn()
    const source = {}
    const options = {}

    // 模拟hasOwn.call返回false表示source没有该字段
    mockHasOwn.call.mockReturnValue(false)

    // 调用函数
    typeValidation(rule, checkValue, callback, source, options)

    // 验证结果
    expect(mockRules.required).not.toHaveBeenCalled()
    expect(mockRules.type).not.toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith([])
  })

  it('当字段为必填时应进行验证', () => {
    // 准备数据
    const rule = { type: 'string', field: 'name', required: true }
    const checkValue = ''
    const callback = vi.fn()
    const source = {}
    const options = {}

    // 模拟isEmptyValue对于第一次调用返回true，第二次调用返回false
    mockIsEmptyValue.mockReturnValueOnce(true).mockReturnValueOnce(false)

    // 调用函数
    typeValidation(rule, checkValue, callback, source, options)

    // 验证结果
    expect(mockRules.required).toHaveBeenCalledWith({
      rule,
      checkValue,
      source,
      errors: [],
      options,
      type: 'string'
    })
    expect(mockRules.type).not.toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith([])
  })
})
