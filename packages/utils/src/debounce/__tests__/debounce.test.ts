/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { debounce } from '..'

// 定义带有 _cancel 方法的防抖函数类型
interface DebounceFunction extends Function {
  _cancel?: () => void
}

describe('debounce 函数', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('应该在延迟后执行回调函数', () => {
    const callback = vi.fn()
    const debounced = debounce(100, false, callback) as DebounceFunction

    debounced()
    expect(callback).not.toBeCalled()

    vi.advanceTimersByTime(50)
    expect(callback).not.toBeCalled()

    vi.advanceTimersByTime(50)
    expect(callback).toBeCalledTimes(1)
  })

  it('多次调用应该只执行一次回调函数', () => {
    const callback = vi.fn()
    const debounced = debounce(100, false, callback) as DebounceFunction

    debounced()
    debounced()
    debounced()

    expect(callback).not.toBeCalled()

    vi.advanceTimersByTime(100)
    expect(callback).toBeCalledTimes(1)
  })

  it('当 atBegin 为 true 时，应该立即执行回调函数', () => {
    const callback = vi.fn()
    const debounced = debounce(100, true, callback) as DebounceFunction

    debounced()
    expect(callback).toBeCalledTimes(1)

    debounced()
    expect(callback).toBeCalledTimes(1)

    vi.advanceTimersByTime(100)
    expect(callback).toBeCalledTimes(1)
  })

  it('当 atBegin 参数是回调函数时，应该将其作为 callback 处理', () => {
    const callback = vi.fn()
    const debounced = debounce(100, callback) as DebounceFunction

    debounced()
    expect(callback).not.toBeCalled()

    vi.advanceTimersByTime(100)
    expect(callback).toBeCalledTimes(1)
  })

  it('应该能正确取消防抖函数的执行', () => {
    const callback = vi.fn()
    const debounced = debounce(100, false, callback) as DebounceFunction

    debounced()
    expect(callback).not.toBeCalled()

    // 通过 _cancel 方法取消执行
    if (debounced._cancel) {
      debounced._cancel()
    }

    vi.advanceTimersByTime(100)
    expect(callback).not.toBeCalled()
  })
})
