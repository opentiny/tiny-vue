import { test, expect } from '@playwright/test'

test('设置组件大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('currency#size')
  const inputBox = page.locator('.tiny-input-medium')
  await expect(inputBox).toHaveCSS('height', '40px')
})
