import { test, expect } from '@playwright/test'

test('裁剪相关事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#event-about-crop')

  const demo = page.locator('#event-about-crop')
  await demo.getByRole('button', { name: /获取Canvas数据/ }).click()

  // 待补充验证：弹窗内数据
  await expect(page.getByText('Canvas 数据')).toHaveCount(1)
})
