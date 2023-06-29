import { test, expect } from '@playwright/test'

test('图片预览层级', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/image/preview-z-index')
  await page.locator('.tiny-image__inner').click()
  const indexBox = page.locator('.tiny-image-viewer__wrapper')
  await expect(indexBox).toHaveCSS('z-index', '3000')
})
