import { test, expect } from '@playwright/test'

test('图片水印', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('watermark#image')

  const watermark = page.locator('#image .tiny-watermark-wrapper')
  await expect(watermark.locator('div').nth(1)).toHaveCSS('z-index', '9')
})
