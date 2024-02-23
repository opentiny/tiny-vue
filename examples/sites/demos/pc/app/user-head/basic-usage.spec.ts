import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#basic-usage')
  const svgBox = page.locator('.tiny-user-head__portrait svg')
  await expect(svgBox).toHaveCount(1)
})
