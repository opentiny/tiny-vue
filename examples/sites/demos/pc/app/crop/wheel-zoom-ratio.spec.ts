import { test, expect } from '@playwright/test'

test('鼠标滚轮缩放图像时比例', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#wheel-zoom-ratio')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.mouse.wheel(100, 100)
  await page.mouse.wheel(50, 50)

  // 待补充验证图片的大小
})
