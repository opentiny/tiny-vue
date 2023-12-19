import { test, expect } from '@playwright/test'

test('禁用鼠标滚轮缩放图像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#zoom-on-wheel')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.mouse.wheel(100, 100)
  await page.mouse.wheel(50, 50)
  await page.locator('.cropper-face').click()
})
