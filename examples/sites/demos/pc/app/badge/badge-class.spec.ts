import { test, expect } from '@playwright/test'

test('测试自定义类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#badge-class')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')

  await expect(badge).toHaveClass(/custom-badge-class/)
})
