import { describe, it, expect } from 'vitest'
import pattern from '../pattern'

describe('模式校验函数测试', () => {
  it('当字段不是必需且值为空时应该通过验证', () => {
    const rule = { field: 'test', required: false, pattern: /^\d+$/ }
    const source = { test: '' }
    const errors: any[] = []

    pattern(rule, '', (err) => err && errors.push(...err), source, {
      messages: { pattern: { mismatch: '%s 不符合模式 %s' } }
    })

    expect(errors).toHaveLength(0)
  })

  it('当值匹配RegExp模式时应该通过验证', () => {
    const rule = { field: 'test', pattern: /^\d+$/ }
    const source = { test: '123' }
    const errors: any[] = []

    pattern(rule, '123', (err) => err && errors.push(...err), source, {
      messages: { pattern: { mismatch: '%s 不符合模式 %s' } }
    })

    expect(errors).toHaveLength(0)
  })

  it('当值不匹配字符串模式时应该返回错误', () => {
    const rule = { field: 'test', pattern: '^\\d+$' }
    const source = { test: 'abc' }
    const errors: any[] = []

    pattern(rule, 'abc', (err) => err && errors.push(...err), source, {
      messages: { pattern: { mismatch: '%s 不符合模式 %s' } }
    })

    expect(errors).toHaveLength(1)
    expect(errors[0]).toBe('abc 不符合模式 ^\\d+$')
  })

  it('当值匹配字符串模式时应该通过验证', () => {
    const rule = { field: 'test', pattern: '^\\d+$' }
    const source = { test: '123' }
    const errors: any[] = []

    pattern(rule, '123', (err) => err && errors.push(...err), source, {
      messages: { pattern: { mismatch: '%s 不符合模式 %s' } }
    })

    expect(errors).toHaveLength(0)
  })

  it('当字段不在源对象中且不是必需时应该通过验证', () => {
    const rule = { field: 'test', required: false, pattern: /^\d+$/ }
    const source = {}
    const errors: any[] = []

    pattern(rule, undefined, (err) => err && errors.push(...err), source, {
      messages: { pattern: { mismatch: '%s 不符合模式 %s' } }
    })

    expect(errors).toHaveLength(0)
  })
})
