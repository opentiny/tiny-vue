import { test, expect } from '@playwright/test'

test('禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/filter-panel/disabled')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box.disabled')

  await expect(button).toHaveCount(1)
  await expect(button).toHaveCSS('cursor', 'not-allowed')
})
