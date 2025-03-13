import { test, expect } from 'vitest'
import { sha256 } from '../index'

test('测试sha256', async () => {
  // 简单记录加密的结果，测试用来保证sha256算法不变化
  expect(await sha256('hello world')).toMatchSnapshot()
})
