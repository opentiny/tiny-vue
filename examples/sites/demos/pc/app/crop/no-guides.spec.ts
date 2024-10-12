import { test, expect } from '@playwright/test'

test('不显示虚线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#no-guides')

  const demo = page.locator('#no-guides')
  const container = demo.locator('.dashed-h')

  await page.getByRole('button', { name: '图片裁剪' }).click()
  await expect(container).toHaveClass(/cropper-hidden/)
})
