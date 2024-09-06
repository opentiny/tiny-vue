import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#basic-usage')

  const demo = page.locator('#basic-usage')
  await demo.getByRole('button', { name: /图片裁剪/ }).click()

  await expect(demo.locator('.tiny-crop__dialog')).toHaveCount(1)
  await expect(demo.locator('.cropper-face')).toHaveCount(1)
  await expect(demo.locator('.iconButton')).toHaveCount(12) // 包含2个split
})
