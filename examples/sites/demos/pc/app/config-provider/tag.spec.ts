import { test, expect } from '@playwright/test'

test('测试自定义标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('config-provider#tag')
  const demo = await page.locator('#tag span')
  await demo.nth(2).click()
  await page.waitForTimeout(300)
  await demo.nth(2).click()
  await page.waitForTimeout(300)
  const elements = await page.locator('.tiny-config-provider')
  await expect(elements.nth(1)).toHaveCSS('padding', '16px')
})
