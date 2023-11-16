import { test, expect } from '@playwright/test'

test('测试 Alert 自定义标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#title')

  // size为large时可设置自定义标题
  const alert = page.locator('.tiny-alert--large').first()
  const title = alert.locator('.tiny-alert__title')
  await expect(title).toHaveCount(1)
})
