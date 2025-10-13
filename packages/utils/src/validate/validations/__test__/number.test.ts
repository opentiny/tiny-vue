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
import numberValidate from '../number'

// 重新导入被模拟的模块
import rules from '../../rules/index'
import { isEmptyValue } from '../../util'

// 模拟依赖
vi.mock('../../rules/index', () => ({
  default: {
    required: vi.fn(),
    type: vi.fn(),
    range: vi.fn()
  }
}))

vi.mock('../../util', () => ({
  isEmptyValue: vi.fn()
}))

describe('数字验证函数测试', () => {
  // 在每个测试前重置模拟函数
  beforeEach(() => {
    vi.clearAllMocks()
    // 默认isEmptyValue返回false，除非在测试中特别指定
    vi.mocked(isEmptyValue).mockReturnValue(false)
  })

  it('当值为空字符串时，应将其转换为undefined', () => {
    const rule = { field: 'price', required: false }
    const source = { price: '' }
    const callback = vi.fn()

    numberValidate(rule, '', callback, source, {})

    // 验证required规则被调用时接收到undefined参数
    expect(rules.required).toHaveBeenCalledWith(
      expect.objectContaining({
        checkValue: undefined
      })
    )
  })

  it('当值为空且规则非必填时，应直接通过验证', () => {
    const rule = { field: 'price', required: false }
    const source = { price: null }
    const callback = vi.fn()

    vi.mocked(isEmptyValue).mockReturnValue(true)

    numberValidate(rule, null, callback, source, {})

    expect(callback).toHaveBeenCalledWith()
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
  })

  it('当规则为必填时，应进行验证', () => {
    const rule = { field: 'price', required: true, type: 'number' }
    const source = { price: 100 }
    const callback = vi.fn()
    const errors: any[] = []

    // 模拟rules.required添加错误
    vi.mocked(rules.required).mockImplementation(({ errors }) => {
      errors.push('required error')
    })

    numberValidate(
      rule,
      100,
      (err) => {
        if (err) errors.push(...err)
        callback(err)
      },
      source,
      {}
    )

    expect(rules.required).toHaveBeenCalled()
    expect(rules.type).toHaveBeenCalled()
    expect(rules.range).toHaveBeenCalled()
    expect(errors).toContain('required error')
    expect(callback).toHaveBeenCalledWith(expect.arrayContaining(['required error']))
  })

  it('当字段不在源对象中且非必填时，不应进行验证', () => {
    const rule = { field: 'price', required: false }
    const source = {} // 源对象中没有price字段
    const callback = vi.fn()

    numberValidate(rule, undefined, callback, source, {})

    expect(rules.required).not.toHaveBeenCalled()
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith([])
  })

  it('当字段在源对象中，应进行类型和范围验证', () => {
    const rule = { field: 'price', min: 0, max: 1000 }
    const source = { price: 500 }
    const callback = vi.fn()

    numberValidate(rule, 500, callback, source, {})

    expect(rules.required).toHaveBeenCalled()
    expect(rules.type).toHaveBeenCalled()
    expect(rules.range).toHaveBeenCalled()
    expect(callback).toHaveBeenCalled()
  })

  it('当值为undefined时，应不进行类型和范围验证', () => {
    const rule = { field: 'price', required: true }
    const source = { price: undefined }
    const callback = vi.fn()

    numberValidate(rule, undefined, callback, source, {})

    expect(rules.required).toHaveBeenCalled()
    expect(rules.type).not.toHaveBeenCalled()
    expect(rules.range).not.toHaveBeenCalled()
    expect(callback).toHaveBeenCalled()
  })
})
