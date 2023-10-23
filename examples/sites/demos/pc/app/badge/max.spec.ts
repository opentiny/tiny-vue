import { test, expect } from '@playwright/test'

test('计数最大值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/badge/max')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')

  await expect(badge).toContainText('2+')
})
