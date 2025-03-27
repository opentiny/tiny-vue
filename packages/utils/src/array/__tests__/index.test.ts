/**
 * 数组工具函数单元测试
 */
import { describe, expect, it } from 'vitest'
import { indexOf, find, remove, sort, push, unique, toObject, transformPidToChildren, transformTreeData } from '..'

describe('数组工具函数', () => {
  describe('indexOf 函数', () => {
    it('应能找到普通数组中元素的索引', () => {
      const arr = [1, 2, 3, 4]
      expect(indexOf(arr, 2)).toBe(1)
    })

    it('应能找到包含 NaN 的数组中 NaN 的索引', () => {
      const arr = [1, 2, NaN, 4]
      expect(indexOf(arr, NaN)).toBe(2)
    })

    it('当元素不存在时应返回 -1', () => {
      const arr = [1, 2, 3, 4]
      expect(indexOf(arr, 5)).toBe(-1)
    })

    it('应支持自定义断言函数', () => {
      const arr = [{ id: 1 }, { id: 2 }, { id: 3 }]
      const index = indexOf(arr, { id: 2 }, (item, target) => item.id === target.id)
      expect(index).toBe(1)
    })
  })

  describe('find 函数', () => {
    it('应能通过断言函数找到元素', () => {
      const arr = [1, 2, 3, 4]
      const result = find(arr, (value) => value > 2)
      expect(result).toBe(3)
    })

    it('当找不到元素时应返回 undefined', () => {
      const arr = [1, 2, 3, 4]
      const result = find(arr, (value) => value > 10)
      expect(result).toBeUndefined()
    })
  })

  describe('remove 函数', () => {
    it('应能从数组中删除指定元素', () => {
      const arr = [1, 2, 3, 4]
      remove(arr, 2)
      expect(arr).toEqual([1, 3, 4])
    })

    it('应能从数组中删除指定数量的元素', () => {
      const arr = [1, 2, 3, 4]
      remove(arr, 2, 2)
      expect(arr).toEqual([1, 4])
    })

    it('应能从数组中删除 NaN', () => {
      const arr = [1, 2, NaN, 4]
      remove(arr, NaN)
      expect(arr).toEqual([1, 2, 4])
    })

    it('当元素不存在时不应有变化', () => {
      const arr = [1, 2, 3, 4]
      remove(arr, 5)
      expect(arr).toEqual([1, 2, 3, 4])
    })
  })

  describe('sort 函数', () => {
    it('应按字段名称对对象数组进行升序排序', () => {
      const arr = [{ a: 100 }, { a: 1 }, { a: 10 }]
      const result = sort(arr, 'a')
      expect(result).toEqual([{ a: 1 }, { a: 10 }, { a: 100 }])
    })

    it('应按字段名称对对象数组进行降序排序', () => {
      const arr = [{ a: 100 }, { a: 1 }, { a: 10 }]
      const result = sort(arr, 'a', 'desc')
      expect(result).toEqual([{ a: 100 }, { a: 10 }, { a: 1 }])
    })

    it('应正确处理包含 NaN 值的情况', () => {
      const arr = [{ a: 100 }, { a: 1 }, { a: NaN }, { a: 10 }]
      const result = sort(arr, 'a')
      expect(result).toEqual([{ a: 1 }, { a: 10 }, { a: 100 }, { a: NaN }])
    })
  })

  describe('push 函数', () => {
    it('应向数组中添加新元素', () => {
      const arr = [1, 2, 3, 4]
      push(arr, 5)
      expect(arr).toEqual([1, 2, 3, 4, 5])
    })

    it('不应向数组中添加已存在的元素', () => {
      const arr = [1, 2, 3, 4]
      push(arr, 2)
      expect(arr).toEqual([1, 2, 3, 4])
    })

    it('不应向数组中添加已存在的 NaN', () => {
      const arr = [1, 2, NaN, 4]
      push(arr, NaN)
      expect(arr).toEqual([1, 2, NaN, 4])
    })
  })

  describe('unique 函数', () => {
    it('应去除数组中的重复元素', () => {
      const arr = [1, 2, 2, 3, 4, 4]
      const result = unique(arr)
      expect(result).toEqual([1, 2, 3, 4])
    })

    it('应正确处理包含 NaN 的数组', () => {
      const arr = [1, NaN, 2, NaN, 2, 3, 4]
      const result = unique(arr)
      expect(result).toEqual([1, NaN, 2, 3, 4])
    })
  })

  describe('toObject 函数', () => {
    it('应将对象数组转换为单一对象', () => {
      const arr = [{ key1: 'value1' }, { key2: 'value2' }]
      const result = toObject(arr)
      expect(result).toEqual({ key1: 'value1', key2: 'value2' })
    })

    it('后面的对象字段应覆盖前面的同名字段', () => {
      const arr = [{ key1: 'value1' }, { key1: 'value2' }]
      const result = toObject(arr)
      expect(result).toEqual({ key1: 'value2' })
    })
  })

  describe('transformPidToChildren 函数', () => {
    it('应将扁平数据转换为树状结构', () => {
      const data = [
        { id: 100, pId: 0, label: '首页' },
        { id: 101, pId: 100, label: '指南' }
      ]
      const result = transformPidToChildren(data)
      expect(result).toEqual([
        {
          id: 100,
          label: '首页',
          children: [{ id: 101, label: '指南' }]
        }
      ])
    })

    it('应支持自定义字段名', () => {
      const data = [
        { uid: 100, parentId: 0, label: '首页' },
        { uid: 101, parentId: 100, label: '指南' }
      ]
      const result = transformPidToChildren(data, 'parentId', 'items', 'uid')
      expect(result).toEqual([
        {
          uid: 100,
          label: '首页',
          items: [{ uid: 101, label: '指南' }]
        }
      ])
    })
  })

  describe('transformTreeData 函数', () => {
    it('应将扁平数据转换为树状结构', () => {
      const data = [
        { id: 100, pId: 0, label: '首页' },
        { id: 101, pId: 100, label: '指南' }
      ]
      const result = transformTreeData(data)
      expect(result).toEqual([
        {
          id: 100,
          label: '首页',
          children: [{ id: 101, label: '指南' }]
        }
      ])
    })

    it('应支持非数组输入', () => {
      const data = { id: 100, pId: 0, label: '首页' }
      const result = transformTreeData(data)
      expect(result).toEqual([
        {
          id: 100,
          label: '首页'
        }
      ])
    })

    it('应支持自定义字段名', () => {
      const data = [
        { uid: 100, parentId: 0, label: '首页' },
        { uid: 101, parentId: 100, label: '指南' }
      ]
      const result = transformTreeData(data, 'uid', 'parentId')
      expect(result).toEqual([
        {
          uid: 100,
          label: '首页',
          children: [{ uid: 101, label: '指南' }]
        }
      ])
    })
  })
})
