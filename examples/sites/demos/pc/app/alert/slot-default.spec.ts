import { test, expect } from '@playwright/test'

test('测试 Alert 自定义交互操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#slot-default')

  // size为large时可通过插槽自定义操作
  const alert = page.locator('.tiny-alert--large').first()
  const opration = alert.locator('.tiny-alert__opration')
  await expect(opration).toHaveCount(1)
})
