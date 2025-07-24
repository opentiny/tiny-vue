import { test, expect } from '@playwright/test'

test('不显示模态背景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#no-modal')

  const demo = page.locator('#no-modal')
  const container = demo.locator('.cropper-drag-box')

  await page.getByRole('button', { name: '图片裁剪' }).click()
  await expect(container).not.toHaveClass(/cropper-modal/)
})
