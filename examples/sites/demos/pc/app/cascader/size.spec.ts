import { test, expect } from '@playwright/test'

test('size', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#size')

  await expect(page.locator('.tiny-cascader.tiny-cascader--mini input')).toHaveCSS('height', '24px')

  await expect(page.locator('.tiny-cascader.tiny-cascader--small input')).toHaveCSS('height', '28px')

  await expect(page.locator('.tiny-cascader.tiny-cascader--medium input')).toHaveCSS('height', '40px')
})
