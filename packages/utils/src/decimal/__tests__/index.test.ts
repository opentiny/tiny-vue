import { describe, it, expect } from 'vitest'
import { Decimal, toFixed, formatNumber, recoverNumber } from '../index'

describe('Decimal', () => {
  describe('加法运算', () => {
    it('应该正确处理1.1 + 2.2', () => {
      expect((Decimal as any).add(1.1, 2.2).toNumber()).toBe(3.3)
      expect(new (Decimal as any)('1.1').add('2.2').toString()).toBe('3.3')
    })

    it('应该正确处理0.1 + 0.2', () => {
      expect((Decimal as any).add(0.1, 0.2).toNumber()).toBe(0.3)
      expect(new (Decimal as any)('0.1').add('0.2').toString()).toBe('0.3')
    })
  })

  describe('减法运算', () => {
    it('应该正确处理0.3 - 0.1', () => {
      expect((Decimal as any).sub(0.3, 0.1).toNumber()).toBe(0.2)
      expect(new (Decimal as any)('0.3').sub('0.1').toString()).toBe('0.2')
    })

    it('应该正确处理1.5 - 0.7', () => {
      expect((Decimal as any).sub(1.5, 0.7).toNumber()).toBe(0.8)
      expect(new (Decimal as any)('1.5').sub('0.7').toString()).toBe('0.8')
    })
  })

  describe('乘法运算', () => {
    it('应该正确处理4.01 * 2.01', () => {
      expect((Decimal as any).mul(4.01, 2.01).toNumber()).toBe(8.0601)
      expect(new (Decimal as any)('4.01').mul('2.01').toString()).toBe('8.0601')
    })

    it('应该正确处理0.3 * 0.1', () => {
      expect((Decimal as any).mul(0.3, 0.1).toNumber()).toBe(0.03)
      expect(new (Decimal as any)('0.3').mul('0.1').toString()).toBe('0.03')
    })
  })

  describe('除法运算', () => {
    it('应该正确处理0.3 / 0.1', () => {
      expect((Decimal as any).div(0.3, 0.1).toNumber()).toBe(3)
      expect(new (Decimal as any)('0.3').div('0.1').toString()).toBe('3')
    })

    it('应该正确处理1.5 / 0.5', () => {
      expect((Decimal as any).div(1.5, 0.5).toNumber()).toBe(3)
      expect(new (Decimal as any)('1.5').div('0.5').toString()).toBe('3')
    })
  })
})

describe('toFixed', () => {
  it('应该正确处理1.1 + 2.2', () => {
    expect(toFixed(1.1 + 2.2, 2)).toBe('3.30')
  })

  it('应该正确处理0.3 - 0.1', () => {
    expect(toFixed(0.3 - 0.1, 2)).toBe('0.20')
  })

  it('应该正确处理4.01 * 2.01', () => {
    expect(toFixed(4.01 * 2.01, 4)).toBe('8.0600')
  })

  it('应该正确处理0.3 / 0.1', () => {
    expect(toFixed(0.3 / 0.1, 2)).toBe('3.00')
  })

  it('应该正确处理0.0001', () => {
    expect(toFixed(0.0001, 2)).toBe('0.00')
    expect(toFixed(0.0001, 3)).toBe('0.000')
    expect(toFixed(0.0001, 4)).toBe('0.0001')
    expect(toFixed(0.0001, 5)).toBe('0.00010')
  })

  it('应该正确处理-0.0001', () => {
    expect(toFixed(-0.0001, 2)).toBe('0.00')
    expect(toFixed(-0.0001, 3)).toBe('0.000')
    expect(toFixed(-0.0001, 4)).toBe('-0.0001')
    expect(toFixed(-0.0001, 5)).toBe('-0.00010')
  })
})

describe('formatNumber', () => {
  it('应该正确处理基本格式化', () => {
    expect(formatNumber(1234.5678)).toBe('1234.5678')
  })

  it('应该正确处理小数位数', () => {
    expect(formatNumber(1234.5678, { fraction: 2 })).toBe('1234.57')
  })

  it('应该正确处理千分位', () => {
    expect(formatNumber(1234567.89, { groupSize: 3, groupSeparator: ',' })).toBe('1,234,567.89')
  })

  it('应该正确处理前缀和后缀', () => {
    expect(formatNumber(1234.56, { prefix: '$', suffix: ' USD' })).toBe('$1234.56 USD')
  })

  it('应该正确处理零值处理', () => {
    expect(formatNumber(1234.0, { zeroize: false })).toBe('1234')
  })
})

describe('recoverNumber', () => {
  it('应该正确恢复基本数字', () => {
    expect(recoverNumber('1234.5678')).toBe(1234.5678)
  })

  it('应该正确处理带前缀和后缀的数字', () => {
    expect(recoverNumber('$1234.56 USD', { prefix: '$', suffix: ' USD' })).toBe(1234.56)
  })

  it('应该正确处理带千分位的数字', () => {
    expect(recoverNumber('1,234,567.89', { groupSeparator: ',' })).toBe(1234567.89)
  })

  it('应该正确处理不同小数分隔符', () => {
    expect(recoverNumber('1234,56', { decimalSeparator: ',' })).toBe(1234.56)
  })
})
