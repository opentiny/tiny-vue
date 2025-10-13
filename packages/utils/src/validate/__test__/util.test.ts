/**
 * util.ts 的单元测试
 */
import { describe, expect, it, vi } from 'vitest'
import {
  warning,
  convertFieldsError,
  format,
  isEmptyValue,
  isEmptyObject,
  asyncMap,
  complementError,
  deepMerge
} from '../util'
import logger from '../../logger'

// 模拟 logger
vi.mock('../../logger', () => ({
  default: {
    error: vi.fn()
  }
}))

describe('validate/util.ts', () => {
  describe('warning', () => {
    it('应该返回 undefined', () => {
      expect(warning()).toBeUndefined()
    })
  })

  describe('convertFieldsError', () => {
    it('当错误数组为空时应返回 null', () => {
      expect(convertFieldsError(null)).toBeNull()
      expect(convertFieldsError([])).toBeNull()
      expect(convertFieldsError(undefined)).toBeNull()
    })

    it('应该按字段分组错误', () => {
      const errors = [
        { field: 'name', message: '名称不能为空' },
        { field: 'name', message: '名称长度不能超过10个字符' },
        { field: 'age', message: '年龄必须为数字' }
      ]
      const result = convertFieldsError(errors)
      expect(result).toEqual({
        name: [
          { field: 'name', message: '名称不能为空' },
          { field: 'name', message: '名称长度不能超过10个字符' }
        ],
        age: [{ field: 'age', message: '年龄必须为数字' }]
      })
    })
  })

  describe('format', () => {
    it('当传入函数时应调用该函数', () => {
      const formatFn = vi.fn().mockReturnValue('格式化的结果')
      expect(format(formatFn, 'a', 'b')).toBe('格式化的结果')
      expect(formatFn).toHaveBeenCalledWith('a', 'b')
    })

    it('应该正确替换 %s 占位符', () => {
      expect(format('%s 必须等于 %s', 'A', 'B')).toBe('A 必须等于 B')
    })

    it('应该正确替换 %d 占位符', () => {
      expect(format('数量为 %d', '123')).toBe('数量为 123')
    })

    it('应该正确替换 %j 占位符', () => {
      expect(format('数据为 %j', { a: 1 } as unknown as string)).toBe('数据为 {"a":1}')
    })

    it('当替换值不足时应保留原占位符', () => {
      expect(format('%s 和 %s', 'A')).toBe('A 和 %s')
    })

    it('应该正确处理 %% 转义', () => {
      expect(format('50%%', 'A')).toBe('50%')
    })

    it('当输入非字符串非函数时应返回字符串表示', () => {
      expect(format(123 as any)).toBe('123')
    })
  })

  describe('isEmptyValue', () => {
    it('应该正确判断 null 和 undefined', () => {
      expect(isEmptyValue(null)).toBe(true)
      expect(isEmptyValue(undefined)).toBe(true)
    })

    it('应该正确判断空数组', () => {
      expect(isEmptyValue([], 'array')).toBe(true)
      expect(isEmptyValue([1], 'array')).toBe(false)
    })

    it('应该正确判断字符串类型的空值', () => {
      expect(isEmptyValue('', 'string')).toBe(true)
      expect(isEmptyValue('abc', 'string')).toBe(false)
      expect(isEmptyValue('', 'email')).toBe(true)
    })

    it('其他情况应返回 false', () => {
      expect(isEmptyValue(0)).toBe(false)
      expect(isEmptyValue(false)).toBe(false)
      expect(isEmptyValue({})).toBe(false)
    })
  })

  describe('isEmptyObject', () => {
    it('应该正确判断空对象', () => {
      expect(isEmptyObject({})).toBe(true)
      expect(isEmptyObject({ a: 1 })).toBe(false)
    })
  })

  describe('asyncMap', () => {
    it('当 option.first 为 true 时应串行处理并在第一个错误时返回', async () => {
      const mockFunc = vi.fn().mockImplementation((rule, callback) => {
        if (rule === 'error') {
          callback([{ field: 'test', message: '错误' }])
        } else {
          callback([])
        }
      })
      const mockCallback = vi.fn()

      const promise = asyncMap({ field1: ['ok'], field2: ['error'] }, { first: true }, mockFunc, mockCallback)

      try {
        await promise
      } catch (error) {
        expect(error).toEqual({
          errors: [{ field: 'test', message: '错误' }],
          fields: { test: [{ field: 'test', message: '错误' }] }
        })
      }

      expect(mockCallback).toHaveBeenCalled()
    })

    it('当 option.firstFields 为 true 时应对所有字段串行处理', async () => {
      const mockFunc = vi.fn().mockImplementation((rule, callback) => {
        callback([])
      })
      const mockCallback = vi.fn()

      await asyncMap({ field1: ['rule1'], field2: ['rule2'] }, { firstFields: true }, mockFunc, mockCallback)

      expect(mockFunc).toHaveBeenCalledTimes(2)
      expect(mockCallback).toHaveBeenCalledWith([])
    })

    it('当 option.firstFields 为数组时应对指定字段串行处理', async () => {
      const calls: string[] = []
      const mockFunc = vi.fn().mockImplementation((rule, callback) => {
        calls.push(rule)
        setTimeout(() => callback([]), 0)
      })
      const mockCallback = vi.fn()

      await asyncMap(
        { field1: ['rule1-1', 'rule1-2'], field2: ['rule2'] },
        { firstFields: ['field1'] },
        mockFunc,
        mockCallback
      )

      expect(mockFunc).toHaveBeenCalledTimes(3)
      // field1 应该串行处理，field2 可以并行处理
      expect(mockCallback).toHaveBeenCalledWith([])
    })

    it('当处理出错时应调用 logger.error', async () => {
      const mockFunc = vi.fn().mockImplementation((rule, callback) => {
        throw new Error('测试错误')
      })
      const mockCallback = vi.fn()

      try {
        await asyncMap({ field1: ['rule1'] }, {}, mockFunc, mockCallback)
      } catch (error) {
        expect(logger.error).toHaveBeenCalled()
      }
    })
  })

  describe('complementError', () => {
    it('应该处理已有 message 的错误对象', () => {
      const rule = { fullField: 'testField' }
      const errorHandler = complementError(rule)
      const error = { message: '错误消息' }

      const result = errorHandler(error)
      expect(result).toEqual({
        message: '错误消息',
        field: 'testField'
      })
    })

    it('应该处理错误函数', () => {
      const rule = { fullField: 'testField' }
      const errorHandler = complementError(rule)
      const errorFn = () => '错误消息'

      const result = errorHandler(errorFn)
      expect(result).toEqual({
        message: '错误消息',
        field: 'testField'
      })
    })

    it('应该处理字符串错误', () => {
      const rule = { fullField: 'testField' }
      const errorHandler = complementError(rule)

      const result = errorHandler('错误消息')
      expect(result).toEqual({
        message: '错误消息',
        field: 'testField'
      })
    })
  })

  describe('deepMerge', () => {
    it('当 sources 为空时应返回 target', () => {
      const target = { a: 1 }
      expect(deepMerge(target, null as any)).toBe(target)
    })

    it('应该深度合并对象', () => {
      const target = { a: 1, b: { c: 2 } }
      const source = { b: { d: 3 }, e: 4 }

      const result = deepMerge(target, source)
      expect(result).toEqual({
        a: 1,
        b: { c: 2, d: 3 },
        e: 4
      })
    })

    it('应该使用 source 的值覆盖 target 的非对象值', () => {
      const target = { a: 1, b: 2 }
      const source = { b: 3 }

      const result = deepMerge(target, source)
      expect(result).toEqual({
        a: 1,
        b: 3
      })
    })
  })
})
