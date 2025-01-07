import { test, expect } from '@playwright/test'

test('测试 Alert 自定义标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#title')

  // size 为 large 时可设置自定义标题
  const alert = page.locator('.tiny-alert--large').first()
  const title = alert.locator('.tiny-alert__title')
  await expect(title).toHaveCount(1)
  await expect(title).toHaveText('通过属性设置自定义 title')

  const alert1 = page.locator('.tiny-alert--large').nth(2)
  await expect(alert1).not.toHaveText('消息')
})
