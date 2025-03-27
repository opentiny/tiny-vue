import { describe, it, expect } from 'vitest'
import required from '../required'

describe('必填验证函数测试', () => {
  it('当字段是必需且值为空时应该返回错误', () => {
    const rule = { field: 'test', required: true }
    const source = { test: '' }
    const errors: any[] = []

    required(rule, '', (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(1)
    expect(errors[0]).toBe('字段是必填的')
  })

  it('当字段是必需且值为undefined时应该返回错误', () => {
    const rule = { field: 'test', required: true }
    const source = { test: undefined }
    const errors: any[] = []

    required(rule, undefined, (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(1)
    expect(errors[0]).toBe('字段是必填的')
  })

  it('当字段是必需且值为null时应该返回错误', () => {
    const rule = { field: 'test', required: true }
    const source = { test: null }
    const errors: any[] = []

    required(rule, null, (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(1)
    expect(errors[0]).toBe('字段是必填的')
  })

  it('当字段是必需且值为空数组时应该返回错误', () => {
    const rule = { field: 'test', required: true, type: 'array' }
    const source = { test: [] }
    const errors: any[] = []

    required(rule, [], (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(1)
    expect(errors[0]).toBe('字段是必填的')
  })

  it('当字段是必需且值不为空时应该通过验证', () => {
    const rule = { field: 'test', required: true }
    const source = { test: 'value' }
    const errors: any[] = []

    required(rule, 'value', (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(0)
  })

  it('当字段是必需且值为非空数组时应该通过验证', () => {
    const rule = { field: 'test', required: true, type: 'array' }
    const source = { test: [1, 2, 3] }
    const errors: any[] = []

    required(rule, [1, 2, 3], (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(0)
  })

  it('当字段不是必需且值为空时应该通过验证', () => {
    const rule = { field: 'test', required: false }
    const source = { test: '' }
    const errors: any[] = []

    required(rule, '', (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(0)
  })

  it('当字段不在源对象中且不是必需时应该通过验证', () => {
    const rule = { field: 'test', required: false }
    const source = {}
    const errors: any[] = []

    required(rule, undefined, (err) => err && errors.push(...err), source, {
      messages: { required: '字段是必填的' }
    })

    expect(errors).toHaveLength(0)
  })
})
