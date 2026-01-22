import { test, expect } from '@playwright/test'

test('测试所有 Alert 自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#icon')

  const expectedPaths = [
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z',
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z',
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z',
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z'
  ]

  // 获取页面上所有的 Alert 组件
  const alerts = page.locator('.tiny-alert')

  // 计算 Alert 组件的数量
  const count = await alerts.count()

  for (let i = 0; i < count; i++) {
    const alert = alerts.nth(i)
    const iconPath = alert.locator('.tiny-alert__icon path')
    await expect(iconPath).toHaveAttribute('d', expectedPaths[i])
  }
})
