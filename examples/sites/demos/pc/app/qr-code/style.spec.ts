import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#style')

  const canvas = page.locator('.tiny-qr-code-container canvas')
  await expect(canvas).toBeVisible()
})
