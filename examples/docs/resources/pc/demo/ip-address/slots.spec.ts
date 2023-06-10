import { test, expect } from '@playwright/test'

test('ipAddress 默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/ip-address/slots')

  const preview = page.locator('#preview')
  const defaultDilimiter = preview.locator('svg circle')
  const slotDilimiter = preview.locator('li > i')

  // 插槽用于设置分隔符
  await expect(defaultDilimiter).toHaveCount(0)
  await expect(slotDilimiter).not.toHaveCount(0)
})
