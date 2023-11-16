import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#basic-usage')
  const preview = page.locator('#preview')
  const anchor = preview.locator('a')
  await anchor.hover()
  await expect(anchor).toHaveCSS('color', 'rgb(82, 110, 204)')
})
