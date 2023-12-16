import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#basic-usage')

  const canvas = page.locator('.tiny-qr-code-container canvas')
  await expect(canvas).toBeVisible()
})
