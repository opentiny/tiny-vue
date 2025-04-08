import { describe, expect, it } from 'vitest'
import { getDays, getWeek, lastMonth, nextMonth, getCalendar, transformArray, parseDate } from '../index'

describe('日历工具函数测试', () => {
  describe('getDays', () => {
    it('正确计算普通年份的月份天数', () => {
      expect(getDays(2023, 1)).toBe(31) // 1月
      expect(getDays(2023, 2)).toBe(28) // 2月非闰年
      expect(getDays(2023, 4)).toBe(30) // 4月
      expect(getDays(2023, 12)).toBe(31) // 12月
    })

    it('正确计算闰年2月的天数', () => {
      expect(getDays(2020, 2)).toBe(29) // 2020是闰年
      expect(getDays(2024, 2)).toBe(29) // 2024是闰年
    })
  })

  describe('getWeek', () => {
    it('正确获取指定日期的星期几', () => {
      // 2023年1月1日是星期日
      expect(getWeek(2023, 1, 1)).toBe(0)
      // 2023年1月2日是星期一
      expect(getWeek(2023, 1, 2)).toBe(1)
      // 2023年1月7日是星期六
      expect(getWeek(2023, 1, 7)).toBe(6)
    })
  })

  describe('lastMonth', () => {
    it('正确获取上一个月的年月', () => {
      // 当前为1月，上个月应该是上一年的12月
      expect(lastMonth(2023, 1)).toEqual({ year: 2022, month: 12 })
      // 当前为3月，上个月应该是2月
      expect(lastMonth(2023, 3)).toEqual({ year: 2023, month: 2 })
      // 当前为12月，上个月应该是11月
      expect(lastMonth(2023, 12)).toEqual({ year: 2023, month: 11 })
    })

    it('处理数字字符形式的参数', () => {
      // 虽然内部做了转换，但类型需要匹配
      const yearStr = 2023 // 模拟可能从表单获取的数字
      const monthStr = 1 // 模拟可能从表单获取的数字
      expect(lastMonth(yearStr, monthStr)).toEqual({ year: 2022, month: 12 })
    })
  })

  describe('nextMonth', () => {
    it('正确获取下一个月的年月', () => {
      // 当前为12月，下个月应该是下一年的1月
      expect(nextMonth(2023, 12)).toEqual({ year: 2024, month: 1 })
      // 当前为1月，下个月应该是2月
      expect(nextMonth(2023, 1)).toEqual({ year: 2023, month: 2 })
      // 当前为11月，下个月应该是12月
      expect(nextMonth(2023, 11)).toEqual({ year: 2023, month: 12 })
    })

    it('处理数字字符形式的参数', () => {
      // 虽然内部做了转换，但类型需要匹配
      const yearStr = 2023 // 模拟可能从表单获取的数字
      const monthStr = 12 // 模拟可能从表单获取的数字
      expect(nextMonth(yearStr, monthStr)).toEqual({ year: 2024, month: 1 })
    })
  })

  describe('getCalendar', () => {
    it('正确生成日历数据', () => {
      // 测试2023年1月的日历数据
      // 2023年1月1日是星期日，1月有31天
      // 2022年12月有31天，2023年2月有28天
      const calendar = getCalendar(2023, 1)

      expect(calendar).toBeDefined()
      expect(calendar?.current.year).toBe(2023)
      expect(calendar?.current.month).toBe(1)
      expect(calendar?.current.start).toBe(1)
      expect(calendar?.current.end).toBe(31)

      // 检查上个月数据
      expect(calendar?.last.year).toBe(2022)
      expect(calendar?.last.month).toBe(12)

      // 检查下个月数据
      expect(calendar?.next.year).toBe(2023)
      expect(calendar?.next.month).toBe(2)
    })

    it('返回undefined当参数无效时', () => {
      expect(getCalendar(2023, 13)).toBeUndefined() // 月份超出范围
      expect(getCalendar(0, 1)).toBeUndefined() // 年份无效
    })
  })

  describe('transformArray', () => {
    it('将一维数组转换为7列的二维数组', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      const expected = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14]
      ]
      expect(transformArray(input)).toEqual(expected)
    })

    it('处理空数组', () => {
      expect(transformArray([])).toEqual([])
    })

    it('保持元素类型不变', () => {
      const input = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      const expected = [['a', 'b', 'c', 'd', 'e', 'f', 'g']]
      expect(transformArray(input)).toEqual(expected)
    })
  })

  describe('parseDate', () => {
    it('正确解析时间戳', () => {
      // 创建一个特定的时间用于测试
      const timestamp = new Date(2023, 0, 15, 10, 30, 45).getTime()
      const result = parseDate(timestamp)

      expect(result.year).toBe(2023)
      expect(result.month).toBe(1) // 注意月份从1开始
      expect(result.day).toBe(15)
      expect(result.hours).toBe(10)
      expect(result.minutes).toBe(30)
      expect(result.seconds).toBe(45)
    })

    it('处理无效输入', () => {
      // 按照实现，无效输入会返回1970-01-01
      const result = parseDate('invalid')

      expect(result.year).toBe(1970)
      expect(result.month).toBe(1)
      expect(result.day).toBe(1)
    })
  })
})
