import { test, expect } from '@playwright/test'

test('精度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull()) // 断言页面上不出现错误
  await page.goto('number-animation#precision') // 要测试的示例的相对地址
  await page.getByRole('button', { name: /播放/ }).click()
  await page.waitForTimeout(1000)
  await page.locator('#precision').getByText('24.0000')
})
