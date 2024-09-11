import { test, expect } from '@playwright/test'

test('获取容器数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#get-container-data')

  await page.getByRole('button', { name: '获取容器数据' }).click()

  // 待补充验证：弹窗内数据
  await expect(page.getByText('容器数据：')).toHaveCount(1)
})
