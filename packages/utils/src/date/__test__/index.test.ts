import { describe, it, expect } from 'vitest'
import {
  isLeapYear,
  toDate,
  format,
  getDateWithNewTimezone,
  toDateStr,
  getWeekOfFirstDay,
  getLocalTimezone,
  getStrTimezone
} from '../index'

describe('日期工具函数测试', () => {
  describe('isLeapYear', () => {
    it('应该正确判断闰年', () => {
      expect(isLeapYear(2000)).toBe(true)
      expect(isLeapYear(2020)).toBe(true)
      expect(isLeapYear(2100)).toBe(false)
      expect(isLeapYear(2023)).toBe(false)
    })
  })

  describe('toDate', () => {
    it('应该正确解析日期字符串', () => {
      const date = toDate('2024-03-18', 'yyyy-MM-dd')
      expect(date).toBeInstanceOf(Date)
      expect(date?.getFullYear()).toBe(2024)
      expect(date?.getMonth()).toBe(2) // 月份从0开始
      expect(date?.getDate()).toBe(18)
    })

    it('应该处理不同的日期格式', () => {
      const date1 = toDate('2024/03/18', 'yyyy/MM/dd')
      const date2 = toDate('03/18/2024', 'MM/dd/yyyy')
      expect(date1?.getTime()).toBe(date2?.getTime())
    })
  })

  describe('format', () => {
    it('应该正确格式化日期', () => {
      const date = new Date(2024, 2, 18, 12, 30, 45)
      expect(format(date, 'yyyy/MM/dd')).toBe('2024/03/18')
      expect(format(date, 'yyyy年MM月dd日')).toBe('2024年03月18日')
    })
  })

  describe('getDateWithNewTimezone', () => {
    it('应该正确处理时区转换', () => {
      const date = new Date(2024, 2, 18, 12, 0)
      const newDate = getDateWithNewTimezone(date, 8, 0)
      expect(newDate?.getHours()).toBe(4) // 从UTC+8转换到UTC+0
    })
  })

  describe('toDateStr', () => {
    it('应该正确转换日期字符串', () => {
      const date = new Date(2024, 2, 18, 12, 30)
      expect(toDateStr(date, 'yyyy/MM/dd hh:mm')).toBe('2024/03/18 12:30')
    })
  })

  describe('getWeekOfFirstDay', () => {
    it('应该正确获取周的第一天', () => {
      const date = new Date(2024, 2, 18) // 2024-03-18 是周一
      const weekStart = getWeekOfFirstDay(date)
      expect(weekStart.getDate()).toBe(18)
    })

    it('应该正确处理周日为第一天的情况', () => {
      const date = new Date(2024, 2, 18)
      const weekStart = getWeekOfFirstDay(date, true)
      expect(weekStart.getDate()).toBe(17) // 2024-03-17 是周日
    })
  })

  describe('getLocalTimezone', () => {
    it('应该返回本地时区', () => {
      const timezone = getLocalTimezone()
      expect(typeof timezone).toBe('number')
    })
  })

  describe('getStrTimezone', () => {
    it('应该正确解析时区字符串', () => {
      expect(getStrTimezone('+08:00')).toBe(8)
      expect(getStrTimezone('-05:00')).toBe(-5)
    })

    it('应该处理数字类型的时区', () => {
      expect(getStrTimezone(8)).toBe(8)
      expect(getStrTimezone(-5)).toBe(-5)
    })
  })
})
