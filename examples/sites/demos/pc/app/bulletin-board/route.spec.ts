import { test, expect } from '@playwright/test'

test('BulletinBoard 基于 Route 的跳转', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#route')

  const preview = page.locator('#route')
  const contentTitle = preview.locator('.tiny-bulletin-board__textTitle')

  // 判断 a 标签 href 属性值
  await expect(contentTitle).toHaveAttribute('href', '/#/Alert')
})
