import { test, expect } from '@playwright/test'

test('裁剪框方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#crop-meth')

  const demo = page.locator('#crop-meth')

  // 默认启用
  await demo.getByRole('button', { name: '图片裁剪' }).click()
  await expect(demo.locator('.cropper-disabled')).toHaveCount(0)
  await demo.locator('.iconButton').nth(10).click()

  // 切换至禁用态
  await demo.getByRole('button', { name: '禁用裁剪框' }).click()
  await demo.getByRole('button', { name: '图片裁剪' }).click()
  await expect(demo.locator('.cropper-disabled')).toHaveCount(1)
})
