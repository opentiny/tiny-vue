import { test, expect } from '@playwright/test'

test('获取图像数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#get-image-data')

  await page.getByRole('button', { name: '获取图像数据' }).click()
  await expect(page.getByText('图像数据：')).toHaveCount(1)

  await page.getByRole('button', { name: '获取画布位置和大小数据' }).click()
  await expect(page.getByText('画布位置和大小数据:')).toHaveCount(1)

  // 待补充验证：弹窗内数据
})
