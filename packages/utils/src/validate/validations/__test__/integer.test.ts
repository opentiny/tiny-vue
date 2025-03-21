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
import integer from '../integer'

// 重新导入被模拟的模块
import rules from '../../rules/index'

// 模拟依赖
vi.mock('../../rules/index', () => ({
  default: {
    required: vi.fn(),
    type: vi.fn(),
    range: vi.fn()
  }
}))

describe('整数验证函数测试', () => {
  // 在每个测试前重置模拟函数
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('当规则为必填时，应调用required验证', () => {
    const rule = { field: 'age', required: true }
    const source = { age: 25 }
    const callback = vi.fn()
    const options = {}
    const errors = []

    integer(rule, 25, callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({ rule, checkValue: 25, source, errors, options })
    expect(rules.type).toHaveBeenCalled()
    expect(rules.range).toHaveBeenCalled()
  })

  it('当值不为空时，应验证类型和范围', () => {
    const rule = { field: 'age', required: false, type: 'integer', min: 18, max: 100 }
    const source = { age: 25 }
    const callback = vi.fn()
    const options = {}
    const errors = []

    integer(rule, 25, callback, source, options)

    expect(rules.required).toHaveBeenCalledWith({ rule, checkValue: 25, source, errors, options })
    expect(rules.type).toHaveBeenCalledWith(rule, 25, source, errors, options)
    expect(rules.range).toHaveBeenCalledWith(rule, 25, source, errors, options)
  })

  it('当字段不在source中且规则非必填时，不应执行验证', () => {
    const rule = { field: 'age', required: false }
    const source = {} // 不包含age字段
    const callback = vi.fn()

    integer(rule, undefined, callback, source, {})

    expect(callback).toHaveBeenCalledWith([])
    expect(rules.required).not.toHaveBeenCalled()
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
  })

  it('应该将验证错误返回给回调函数', () => {
    const rule = { field: 'age', required: true }
    const source = { age: 'not-a-number' }
    const errors = ['年龄必须是整数']
    const callback = vi.fn()

    // 模拟required添加错误
    vi.mocked(rules.required).mockImplementation(({ errors }) => {
      errors.push('年龄必须是整数')
    })

    integer(rule, 'not-a-number', callback, source, {})

    expect(callback).toHaveBeenCalledWith(errors)
  })
})
