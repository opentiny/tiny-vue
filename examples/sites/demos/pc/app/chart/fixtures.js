import { test as baseTest, expect } from '@playwright/test'

const config = {
  waitTime: 2000 // 默认2000毫秒
}

// 创建一个可以在所有测试中使用的自定义 test
const test = baseTest.extend({
  page: async ({ page }, use) => {
    const originalGoto = page.goto.bind(page)
    page.goto = async (url, options) => {
      await originalGoto(url, options)
      await page.waitForTimeout(config.waitTime)
    }
    // 使用自定义的page
    await use(page)
  }
})
export { test, expect, config }
