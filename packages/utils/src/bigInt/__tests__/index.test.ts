import { describe, expect, it } from 'vitest'
import {
  supportBigInt,
  trimNumber,
  isE,
  validateNumber,
  getNumberPrecision,
  num2str,
  getMiniDecimal,
  BigIntDecimal,
  NumberDecimal,
  setDecimalClass,
  lessEquals,
  equalsDecimal,
  toFixed
} from '../index'

describe('bigInt 功能测试', () => {
  // 测试 supportBigInt 函数
  describe('supportBigInt', () => {
    it('应该返回是否支持BigInt', () => {
      const result = supportBigInt()
      expect(typeof result).toBe('boolean')
    })
  })

  // 测试 trimNumber 函数
  describe('trimNumber', () => {
    it('应该正确处理整数', () => {
      const result = trimNumber(123)
      expect(result.negative).toBe(false)
      expect(result.negativeStr).toBe('')
      expect(result.integerStr).toBe('123')
      expect(result.decimalStr).toBe('0')
      expect(result.fullStr).toBe('123')
    })

    it('应该正确处理负数', () => {
      const result = trimNumber(-123)
      expect(result.negative).toBe(true)
      expect(result.negativeStr).toBe('-')
      expect(result.integerStr).toBe('123')
      expect(result.decimalStr).toBe('0')
      expect(result.fullStr).toBe('-123')
    })

    it('应该正确处理小数', () => {
      const result = trimNumber(123.456)
      expect(result.negative).toBe(false)
      expect(result.integerStr).toBe('123')
      expect(result.decimalStr).toBe('456')
      expect(result.fullStr).toBe('123.456')
    })

    it('应该去除小数末尾的0', () => {
      const result = trimNumber('123.4500')
      expect(result.fullStr).toBe('123.45')
    })

    it('应该去除前导0', () => {
      const result = trimNumber('000123.45')
      expect(result.fullStr).toBe('123.45')
    })

    it('应该处理0值', () => {
      const result = trimNumber(0)
      expect(result.fullStr).toBe('0')
      expect(result.negative).toBe(false)
    })
  })

  // 测试 isE 函数
  describe('isE', () => {
    it('应该识别科学计数法格式', () => {
      expect(isE('1e5')).toBe(true)
      expect(isE('1e-5')).toBe(true)
      expect(isE(1e5)).toBe(false)
    })

    it('应该识别非科学计数法格式', () => {
      expect(isE('123')).toBe(false)
      expect(isE('123.456')).toBe(false)
      expect(isE(123)).toBe(false)
    })
  })

  // 测试 validateNumber 函数
  describe('validateNumber', () => {
    it('应该验证有效的数字', () => {
      expect(validateNumber(123)).toBe(true)
      expect(validateNumber('123')).toBe(true)
      expect(validateNumber('123.456')).toBe(true)
      expect(validateNumber('-123')).toBe(true)
      expect(validateNumber('-123.456')).toBe(true)
    })

    it('应该验证前置数字和后置数字', () => {
      expect(validateNumber('123.')).toBe(true)
      expect(validateNumber('.123')).toBe(true)
    })

    it('应该拒绝无效的数字', () => {
      expect(validateNumber('')).toBe(false)
      expect(validateNumber(null)).toBe(false)
      expect(validateNumber(undefined)).toBe(false)
      expect(validateNumber('abc')).toBe(false)
      expect(validateNumber('123abc')).toBe(false)
    })
  })

  // 测试 getNumberPrecision 函数
  describe('getNumberPrecision', () => {
    it('应该计算普通数字的精度', () => {
      expect(getNumberPrecision(123)).toBe(0)
      expect(getNumberPrecision(123.4)).toBe(1)
      expect(getNumberPrecision(123.45)).toBe(2)
      expect(getNumberPrecision('123.456')).toBe(3)
    })

    it('应该处理科学计数法', () => {
      expect(getNumberPrecision('1e-5')).toBe(5)
      expect(getNumberPrecision('1.23e-5')).toBe(7)
    })
  })

  // 测试 num2str 函数
  describe('num2str', () => {
    it('应该将普通数字转换为字符串', () => {
      expect(num2str(123)).toBe('123')
      expect(num2str(123.45)).toBe('123.45')
      expect(num2str(-123.45)).toBe('-123.45')
    })

    it('应该处理科学计数法', () => {
      expect(num2str(1e2)).toBe('100')
      // 注意：由于浮点数精度问题，具体结果可能会有细微差异
      // 这里主要测试格式转换功能
      const result = num2str(1e-2)
      expect(result).toBe('0.01')
    })
  })

  // 测试 BigIntDecimal 类
  describe('BigIntDecimal', () => {
    if (supportBigInt()) {
      it('应该创建有效的BigIntDecimal实例', () => {
        const decimal = new BigIntDecimal('123.45')
        expect(decimal.toString()).toBe('123.45')
        expect(decimal.toNumber()).toBe(123.45)
      })

      it('应该处理空值', () => {
        const decimal = new BigIntDecimal('')
        expect(decimal.isEmpty()).toBe(true)
        expect(decimal.toString()).toBe('')
      })

      it('应该处理无效值', () => {
        const decimal = new BigIntDecimal('-')
        expect(decimal.isNaN()).toBe(true)
        expect(decimal.toString()).toBe('')
      })

      it('加法操作应该正确', () => {
        const decimal = new BigIntDecimal('123.45')
        const result = decimal.add('10.55')
        expect(result.toString()).toBe('134')
      })

      it('取反操作应该正确', () => {
        const decimal = new BigIntDecimal('123.45')
        const result = decimal.negate()
        expect(result.toString()).toBe('-123.45')
      })

      it('比较操作应该正确', () => {
        const decimal1 = new BigIntDecimal('123.45')
        const decimal2 = new BigIntDecimal('123.45')
        const decimal3 = new BigIntDecimal('100')

        expect(decimal1.equals(decimal2)).toBe(true)
        expect(decimal1.equals(decimal3)).toBe(false)
        expect(decimal3.lessEquals(decimal1)).toBe(true)
        expect(decimal1.lessEquals(decimal3)).toBe(false)
      })

      it('应该处理科学计数法', () => {
        const decimal = new BigIntDecimal(2.3444444444444443e21)
        expect(decimal.toString()).toBe('2.344444444444444273768701288456912896')
      })
    } else {
      it('环境不支持BigInt，跳过BigIntDecimal测试', () => {
        expect(supportBigInt()).toBe(false)
      })
    }
  })

  // 测试 NumberDecimal 类
  describe('NumberDecimal', () => {
    it('应该创建有效的NumberDecimal实例', () => {
      const decimal = new NumberDecimal('123.45')
      expect(decimal.toString()).toBe('123.45')
      expect(decimal.toNumber()).toBe(123.45)
    })

    it('应该处理空值', () => {
      const decimal = new NumberDecimal('')
      expect(decimal.isEmpty()).toBe(true)
      expect(decimal.toString()).toBe('')
    })

    it('加法操作应该正确', () => {
      const decimal = new NumberDecimal('123.45')
      const result = decimal.add('10.55')
      expect(result.toString()).toBe('134')
    })

    it('取反操作应该正确', () => {
      const decimal = new NumberDecimal('123.45')
      const result = decimal.negate()
      expect(result.toString()).toBe('-123.45')
    })

    it('比较操作应该正确', () => {
      const decimal1 = new NumberDecimal('123.45')
      const decimal2 = new NumberDecimal('123.45')
      const decimal3 = new NumberDecimal('100')

      expect(decimal1.equals(decimal2)).toBe(true)
      expect(decimal1.equals(decimal3)).toBe(false)
      expect(decimal3.lessEquals(decimal1)).toBe(true)
      expect(decimal1.lessEquals(decimal3)).toBe(false)
    })
  })

  // 测试 setDecimalClass 函数
  describe('setDecimalClass', () => {
    it('应该设置正确的Decimal类', () => {
      setDecimalClass()
      // 无法直接测试内部变量，通过间接方式验证
      const decimal = getMiniDecimal('123.45')
      expect(typeof decimal).toBe('object')
      expect(decimal.toString()).toBe('123.45')
    })
  })

  // 测试 lessEquals 函数
  describe('lessEquals', () => {
    it('应该比较数值的大小关系', () => {
      expect(lessEquals(100, 200)).toBe(true)
      expect(lessEquals(200, 100)).toBe(false)
      expect(lessEquals(100, 100)).toBe(true)
    })
  })

  // 测试 equalsDecimal 函数
  describe('equalsDecimal', () => {
    it('应该比较数值是否相等', () => {
      expect(equalsDecimal(100, 100)).toBe(true)
      expect(equalsDecimal(100, 200)).toBe(false)
      expect(equalsDecimal('100.00', '100')).toBe(true)
    })
  })

  // 测试 toFixed 函数
  describe('toFixed', () => {
    it('应该将数值格式化为指定精度', () => {
      expect(toFixed(123.456, 2)).toBe('123.46')
      expect(toFixed(123.454, 2)).toBe('123.45')
      expect(toFixed(123.456, 0)).toBe('123')
      expect(toFixed('123.000', 2)).toBe('123.00')
    })

    it('应该处理空字符串', () => {
      expect(toFixed('', 2)).toBe('')
    })

    it('应该处理负数', () => {
      expect(toFixed(-123.456, 2)).toBe('-123.46')
    })

    it('应该处理自定义舍入规则', () => {
      // 使用舍入规则9，意味着只有>=9才会进位
      expect(toFixed(123.458, 2, 9)).toBe('123.45')
      expect(toFixed(123.499, 2, 9)).toBe('123.50')
    })
  })
})
