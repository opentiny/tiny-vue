import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('watermark#basic')

  const watermark = page.locator('#basic .tiny-watermark-wrapper')
  await expect(watermark.locator('div').nth(1)).toHaveCSS('z-index', '9')
})
