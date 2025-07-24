import { test, expect } from '@playwright/test'

test('裁剪框宽高比', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#aspect-ratio')

  const demo = page.locator('#aspect-ratio')
  await demo.getByRole('button', { name: /图片裁剪/ }).click()

  const box = await demo.locator('.cropper-face').boundingBox()
  expect(box.width / box.height).toEqual(7 / 5)
})
