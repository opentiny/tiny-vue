import { test, expect } from '@playwright/test'

test('自定义配置', async ({ page }) => {
  await page.goto('logout#redirecturl')
  const button = page.locator('.tiny-logout')
  await button.click()
  await page.waitForTimeout(1000)
  await expect(button).toHaveText(/登录/)
})
