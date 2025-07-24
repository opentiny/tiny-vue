import { test, expect } from '@playwright/test'

test('不显示网格背景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#no-background')

  const demo = page.locator('#no-background')
  const container = demo.locator('.cropper-container')

  await page.getByRole('button', { name: '图片裁剪' }).click()
  await expect(container).not.toHaveClass(/cropper-bg/)
})
