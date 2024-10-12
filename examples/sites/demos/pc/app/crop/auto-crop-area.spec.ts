import { test, expect } from '@playwright/test'

test('自动裁剪面积', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#auto-crop-area')

  const demo = page.locator('#auto-crop-area')
  await demo.getByRole('button', { name: /图片裁剪/ }).click()

  const box = await demo.locator('.cropper-face').boundingBox()
  expect(Math.floor(box.width)).toBe(266, 0)
  expect(box.height).toBe(150)
})
