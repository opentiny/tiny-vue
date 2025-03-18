import { describe, it, expect } from 'vitest'
import validate from '../method'

describe('validate 方法测试', () => {
  it('当字段不是必需且值为空时应该通过验证', () => {
    const rule = { field: 'test', required: false }
    const source = { test: '' }
    const errors: string[] = []

    validate(rule, '', (err) => errors.push(...err), source, {})

    expect(errors).toHaveLength(0)
  })

  it('当字段是必需且值为空时应该返回错误', () => {
    const rule = { field: 'test', required: true }
    const source = { test: '' }
    const errors: string[] = []

    validate(rule, '', (err) => errors.push(...err), source, {})

    expect(errors.length).toBeGreaterThan(0)
  })

  it('当字段不在源对象中且不是必需时应该通过验证', () => {
    const rule = { field: 'test', required: false }
    const source = {}
    const errors: string[] = []

    validate(rule, undefined, (err) => errors.push(...err), source, {})

    expect(errors).toHaveLength(0)
  })

  it('当字段在源对象中且不是必需时应该进行验证', () => {
    const rule = { field: 'test', required: false }
    const source = { test: 'value' }
    const errors: string[] = []

    validate(rule, 'value', (err) => errors.push(...err), source, {})

    expect(errors).toHaveLength(0)
  })
})
