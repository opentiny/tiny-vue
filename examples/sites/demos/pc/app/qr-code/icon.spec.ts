import { test, expect } from '@playwright/test'

test('自定义 icon', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#icon')

  const canvas = page.locator('.tiny-qr-code canvas')
  const canvasImg = page.locator('.tiny-qr-code .mask-icon img')
  await expect(canvas).toBeVisible()
  await expect(canvasImg).toBeVisible()
})
