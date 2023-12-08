import { test, expect } from '@playwright/test'

test('测试自定义标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('config-provider#tag')
  await page.getByText('这是一个Tag被DOM包裹').click()
  await page.locator('#tag span').nth(2).click()
  await page.waitForTimeout(300)
  await page.locator('#tag span').nth(2).click()
  await page.waitForTimeout(300)
  await expect(page.locator('.tiny-switch').nth(2)).toHaveCSS('background-color', 'rgb(94, 124, 224)')
})
