import { test, expect } from '@playwright/test'

test('分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull()) // 断言页面上不出现错误
  await page.goto('number-animation#separator') // 要测试的示例的相对地址
  await page.getByRole('button', { name: '播放', exact: true }).click()
  await page.waitForTimeout(1000)
  await page.locator('#separator').getByText('100,000,000')
})
