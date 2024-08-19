import { test, expect } from '@playwright/test'

test('获取剪切框数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#get-crop-box-data')

  await page.getByRole('button', { name: '获取裁剪框数据' }).click()

  // 待补充验证：弹窗内数据
  await expect(page.getByText('裁剪框数据：')).toHaveCount(1)
})
