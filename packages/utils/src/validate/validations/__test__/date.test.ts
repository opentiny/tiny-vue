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

import { describe, expect, it, vi, afterEach } from 'vitest'
import dateValidator from '../date'
import rules from '../../rules'

vi.mock('../../rules', () => ({
  default: {
    required: vi.fn(),
    type: vi.fn(),
    range: vi.fn()
  }
}))

describe('日期验证函数测试', () => {
  // 每次测试后重置模拟函数
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('当值为空且必填时应调用 required 规则', () => {
    const callback = vi.fn()
    const rule = { field: 'testDate', required: true }
    const source = { testDate: '' }

    dateValidator(rule, '', callback, source, {})

    expect(rules.required).toHaveBeenCalled()
    expect(callback).toHaveBeenCalled()
  })

  it('应处理有效的日期字符串', () => {
    const callback = vi.fn()
    const rule = { field: 'testDate', type: 'date' }
    const source = { testDate: '2023-01-01' }
    const options = {}

    dateValidator(rule, '2023-01-01', callback, source, options)

    expect(rules.type).toHaveBeenCalledWith(rule, expect.any(Date), source, [], options)
    expect(rules.range).toHaveBeenCalledWith(rule, expect.any(Number), source, [], options)
    expect(callback).toHaveBeenCalledWith([])
  })

  it('应处理数字时间戳作为日期', () => {
    const callback = vi.fn()
    const rule = { field: 'testDate', type: 'date' }
    const source = { testDate: 1672531200000 } // 2023-01-01 时间戳
    const options = {}

    dateValidator(rule, 1672531200000, callback, source, options)

    expect(rules.type).toHaveBeenCalledWith(rule, expect.any(Date), source, [], options)
    expect(rules.range).toHaveBeenCalledWith(rule, expect.any(Number), source, [], options)
    expect(callback).toHaveBeenCalledWith([])
  })

  it('应处理日期对象', () => {
    const callback = vi.fn()
    const rule = { field: 'testDate', type: 'date' }
    const dateObj = new Date('2023-01-01')
    const source = { testDate: dateObj }
    const options = {}

    dateValidator(rule, dateObj, callback, source, options)

    expect(rules.type).toHaveBeenCalledWith(rule, dateObj, source, [], options)
    expect(rules.range).toHaveBeenCalledWith(rule, dateObj.getTime(), source, [], options)
    expect(callback).toHaveBeenCalledWith([])
  })

  it('当字段不在源对象中且非必填时应跳过验证', () => {
    const callback = vi.fn()
    const rule = { field: 'testDate', required: false }
    const source = {}

    dateValidator(rule, undefined, callback, source, {})

    expect(rules.required).not.toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith([])
  })

  it('应验证日期范围', () => {
    const callback = vi.fn()
    const rule = {
      field: 'testDate',
      type: 'date',
      min: new Date('2023-01-01').getTime(),
      max: new Date('2023-12-31').getTime()
    }
    const dateValue = new Date('2023-06-15')
    const source = { testDate: dateValue }
    const options = {}

    dateValidator(rule, dateValue, callback, source, options)

    expect(rules.range).toHaveBeenCalledWith(rule, dateValue.getTime(), source, [], options)
    expect(callback).toHaveBeenCalledWith([])
  })
})
