import { test, expect } from '@playwright/test'

test('获取裁剪后的图片数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#get-cropped-canvas')

  await page.getByRole('button', { name: '获取裁剪后的图片数据' }).click()

  // 待补充验证：弹窗内数据
  await expect(page.getByText('Blob：337877')).toHaveCount(1)
})
