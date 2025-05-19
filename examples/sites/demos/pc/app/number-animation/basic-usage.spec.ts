import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull()) // 断言页面上不出现错误
  await page.goto('number-animation#basic-usage') // 要测试的示例的相对地址
  await page.waitForTimeout(1000)
  await page.locator('#basic-usage').getByText('12,039')
})
