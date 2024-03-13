import { test, expect } from '@playwright/test'

test('鼠标滚轮缩放图像时比例', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#wheel-zoom-ratio')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.mouse.wheel(100, 100)
  await page.mouse.wheel(50, 50)
  await page.locator('.cropper-face').click({
    button: 'middle'
  })
  await page.locator('.cropper-face').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(8) > .tiny-svg').click()
})
