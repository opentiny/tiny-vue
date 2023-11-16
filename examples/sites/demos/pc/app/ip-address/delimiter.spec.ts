import { test, expect } from '@playwright/test'

test('ipAddress 属性设置分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#delimiter')

  const preview = page.locator('#preview')
  const defaultDilimiter = preview.locator('svg circle')
  const customDilimiter = preview.locator('svg > .st0')
  const slotDilimiter = preview.locator('li > i')

  // 设置分隔符取代默认分隔符
  await expect(defaultDilimiter).toHaveCount(0)
  await expect(customDilimiter).not.toHaveCount(0)
  await expect(slotDilimiter).not.toHaveCount(0)
})
