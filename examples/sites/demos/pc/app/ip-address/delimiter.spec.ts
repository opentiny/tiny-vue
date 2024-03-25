import { test, expect } from '@playwright/test'

test('ipAddress 属性设置分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#delimiter')

  const demo = page.locator('#delimiter')
  const defaultDelimiter = demo.locator('svg circle')
  const customDelimiter = demo.locator('svg > path')
  const slotDelimiter = demo.locator('li > i').getByText('-')

  // 设置分隔符取代默认分隔符
  await expect(defaultDelimiter).toHaveCount(0)
  await expect(customDelimiter).toHaveCount(3)
  await expect(slotDelimiter).toHaveCount(3)
})
