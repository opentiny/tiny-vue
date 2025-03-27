import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { afterLeave } from '..'

describe('afterLeave 函数', () => {
  // 模拟定时器
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('当参数不完整时应抛出错误', () => {
    // 缺少 instance 参数
    expect(() => {
      // @ts-expect-error 测试错误情况
      afterLeave(null, () => {})
    }).toThrow('instance & callback is required')

    // 缺少 callback 参数
    expect(() => {
      // @ts-expect-error 测试错误情况
      afterLeave({ $on: vi.fn(), $once: vi.fn() }, null)
    }).toThrow('instance & callback is required')
  })

  it('应使用 $on 注册事件监听（默认情况）', () => {
    const instance = {
      $on: vi.fn(),
      $once: vi.fn()
    }
    const callback = vi.fn()

    afterLeave(instance, callback)

    expect(instance.$on).toHaveBeenCalledTimes(1)
    expect(instance.$on).toHaveBeenCalledWith('after-leave', expect.any(Function))
    expect(instance.$once).not.toHaveBeenCalled()
  })

  it('当 once 为 true 时应使用 $once 注册事件监听', () => {
    const instance = {
      $on: vi.fn(),
      $once: vi.fn()
    }
    const callback = vi.fn()

    afterLeave(instance, callback, 300, true)

    expect(instance.$once).toHaveBeenCalledTimes(1)
    expect(instance.$once).toHaveBeenCalledWith('after-leave', expect.any(Function))
    expect(instance.$on).not.toHaveBeenCalled()
  })

  it('应在指定的延时后自动触发回调', () => {
    const instance = {
      $on: vi.fn(),
      $once: vi.fn()
    }
    const callback = vi.fn()
    const speed = 200

    afterLeave(instance, callback, speed)
    expect(callback).not.toHaveBeenCalled()

    // 快进时间
    vi.advanceTimersByTime(speed + 100)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('事件回调应该只被执行一次', () => {
    const instance = {
      $on: vi.fn(),
      $once: vi.fn()
    }
    const callback = vi.fn()

    afterLeave(instance, callback)

    // 获取注册的事件回调
    const eventCallback = instance.$on.mock.calls[0][1]

    // 手动触发事件回调两次
    eventCallback()
    eventCallback()

    // 确认回调只被执行一次
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('应正确传递参数给回调函数', () => {
    const instance = {
      $on: vi.fn(),
      $once: vi.fn()
    }
    const callback = vi.fn()
    const testArg1 = 'test1'
    const testArg2 = 'test2'

    afterLeave(instance, callback)

    // 获取注册的事件回调
    const eventCallback = instance.$on.mock.calls[0][1]

    // 手动触发事件回调并传递参数
    eventCallback(testArg1, testArg2)

    // 确认回调被执行并接收到正确的参数
    expect(callback).toHaveBeenCalledWith(testArg1, testArg2)
  })
})
