import { test, expect } from '@playwright/test'

test('自定义icon', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#icon')

  const canvas = page.locator('.tiny-qr-code-container canvas')
  const canvasImg = page.locator('.tiny-qr-code-container .mask-icon img')
  await expect(canvas).toBeVisible()
  await expect(canvasImg).toBeVisible()
})
