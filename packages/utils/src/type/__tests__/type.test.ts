import { describe, expect, it } from 'vitest'
import {
  isNull,
  typeOf,
  isObject,
  isFunction,
  isPlainObject,
  isEmptyObject,
  isNumber,
  isNumeric,
  isDate,
  isSame,
  isRegExp,
  isPromise
} from '..'

describe('类型判断工具函数测试', () => {
  describe('isNull', () => {
    it('应该正确判断null和undefined', () => {
      expect(isNull(null)).toBe(true)
      expect(isNull(undefined)).toBe(true)
      expect(isNull('')).toBe(false)
      expect(isNull(0)).toBe(false)
      expect(isNull(false)).toBe(false)
      expect(isNull({})).toBe(false)
    })
  })

  describe('typeOf', () => {
    it('应该正确返回各种类型的字符串表示', () => {
      expect(typeOf(undefined)).toBe('undefined')
      expect(typeOf(null)).toBe('null')
      expect(typeOf(true)).toBe('boolean')
      expect(typeOf(3)).toBe('number')
      expect(typeOf('test')).toBe('string')
      expect(typeOf(function () {})).toBe('function')
      expect(typeOf(async function () {})).toBe('asyncFunction')
      expect(typeOf([])).toBe('array')
      expect(typeOf(new Date())).toBe('date')
      expect(typeOf(new Error('测试错误'))).toBe('error')
      expect(typeOf(/test/)).toBe('regExp')
      expect(typeOf({})).toBe('object')
    })
  })

  describe('isObject', () => {
    it('应该正确判断对象类型', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({})).toBe(true)
      expect(isObject(null)).toBe(false)
      expect(isObject(undefined)).toBe(false)
      expect(isObject([])).toBe(false)
      expect(isObject(new Date())).toBe(false)
      expect(isObject(function () {})).toBe(false)
    })
  })

  describe('isFunction', () => {
    it('应该正确判断函数类型', () => {
      expect(isFunction(function () {})).toBe(true)
      expect(isFunction(async function () {})).toBe(true)
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(async () => {})).toBe(true)
      expect(isFunction({})).toBe(false)
      expect(isFunction(null)).toBe(false)
      expect(isFunction(undefined)).toBe(false)
    })
  })

  describe('isPlainObject', () => {
    it('应该正确判断纯粹的对象', () => {
      expect(isPlainObject({})).toBe(true)
      expect(isPlainObject({})).toBe(true)
      expect(isPlainObject(Object.create(null))).toBe(true)
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject(new Date())).toBe(false)
      expect(isPlainObject(null)).toBe(false)
      expect(isPlainObject(undefined)).toBe(false)

      // 自定义类的实例不是纯粹对象
      class TestClass {}
      expect(isPlainObject(new TestClass())).toBe(false)
    })
  })

  describe('isEmptyObject', () => {
    it('应该正确判断空对象', () => {
      expect(isEmptyObject({})).toBe(true)
      expect(isEmptyObject([])).toBe(true)
      expect(isEmptyObject({ a: 1 })).toBe(false)
      expect(isEmptyObject([1, 2])).toBe(false)
      expect(isEmptyObject(null)).toBe(true)
      expect(isEmptyObject(undefined)).toBe(true)
    })
  })

  describe('isNumber', () => {
    it('应该正确判断数字类型', () => {
      expect(isNumber(1)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(-1)).toBe(true)
      expect(isNumber(1.5)).toBe(true)
      expect(isNumber(NaN)).toBe(false) // NaN不是有效数字
      expect(isNumber(Infinity)).toBe(false) // Infinity不是有效数字
      expect(isNumber('1')).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
    })
  })

  describe('isNumeric', () => {
    it('应该正确判断数值', () => {
      expect(isNumeric('-10')).toBe(true)
      expect(isNumeric('16')).toBe(true)
      expect(isNumeric(0xff)).toBe(true)
      expect(isNumeric('0xFF')).toBe(true)
      expect(isNumeric('8e5')).toBe(true)
      expect(isNumeric(3.1415)).toBe(true)
      expect(isNumeric(+10)).toBe(true)
      expect(isNumeric('')).toBe(false)
      expect(isNumeric({})).toBe(false)
      expect(isNumeric(NaN)).toBe(false)
      expect(isNumeric(null)).toBe(false)
      expect(isNumeric(true)).toBe(false)
      expect(isNumeric(Infinity)).toBe(false)
      expect(isNumeric(undefined)).toBe(false)
    })
  })

  describe('isDate', () => {
    it('应该正确判断日期类型', () => {
      expect(isDate(new Date())).toBe(true)
      expect(isDate(new Date('2023-01-01'))).toBe(true)
      expect(isDate(Date.now())).toBe(false)
      expect(isDate('2023-01-01')).toBe(false)
      expect(isDate({})).toBe(false)
      expect(isDate(null)).toBe(false)
      expect(isDate(undefined)).toBe(false)
    })
  })

  describe('isSame', () => {
    it('应该正确判断两个值是否相同', () => {
      expect(isSame(1, 1)).toBe(true)
      expect(isSame('a', 'a')).toBe(true)
      expect(isSame(true, true)).toBe(true)
      expect(isSame(null, null)).toBe(true)
      expect(isSame(undefined, undefined)).toBe(true)
      expect(isSame(NaN, NaN)).toBe(true) // 特殊情况：NaN === NaN 应该为 true
      expect(isSame({}, {})).toBe(false) // 引用不同
      expect(isSame([], [])).toBe(false) // 引用不同
      expect(isSame(1, '1')).toBe(false) // 类型不同
      expect(isSame(0, false)).toBe(false) // 类型不同
    })
  })

  describe('isRegExp', () => {
    const testCases = [
      { input: /test/, expected: true, description: '字面量正则表达式应该返回true' },
      { input: /test/i, expected: true, description: '带修饰符的正则表达式应该返回true' },
      { input: /\d+/g, expected: true, description: '带特殊字符和修饰符的正则表达式应该返回true' },
      { input: '/test/', expected: false, description: '字符串不应该被识别为正则表达式' },
      { input: {}, expected: false, description: '空对象不应该被识别为正则表达式' },
      {
        input: { source: 'test', flags: 'g' },
        expected: false,
        description: '类似正则表达式的对象不应该被识别为正则表达式'
      },
      { input: null, expected: false, description: 'null不应该被识别为正则表达式' },
      { input: undefined, expected: false, description: 'undefined不应该被识别为正则表达式' },
      { input: 123, expected: false, description: '数字不应该被识别为正则表达式' },
      { input: true, expected: false, description: '布尔值不应该被识别为正则表达式' }
    ]

    it.each(testCases)('$description', ({ input, expected }) => {
      expect(isRegExp(input)).toBe(expected)
    })
  })

  describe('isPromise', () => {
    it('应该正确判断Promise对象', () => {
      expect(isPromise(Promise.resolve())).toBe(true)
      expect(isPromise(new Promise(() => {}))).toBe(true)

      // 模拟Promise-like对象
      const promiseLike = {
        then: () => {},
        catch: () => {}
      }
      expect(isPromise(promiseLike)).toBe(true)

      expect(isPromise({})).toBe(false)
      expect(isPromise({ then: () => {} })).toBe(false) // 缺少catch方法
      expect(isPromise(null)).toBe(false)
      expect(isPromise(undefined)).toBe(false)
    })
  })
})
