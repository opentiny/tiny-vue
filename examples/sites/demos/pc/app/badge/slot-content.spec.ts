import { test, expect } from '@playwright/test'

test('自定义提示内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#slot-content')

  const demo = page.locator('#slot-content')
  const badge = demo.locator('.tiny-badge')

  await expect(badge).toContainText('自定义')
})
