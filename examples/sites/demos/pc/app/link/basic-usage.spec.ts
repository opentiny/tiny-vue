import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#basic-usage')
  const preview = page.locator('#basic-usage')
  const link = preview.locator('a')

  await expect(link.first()).toHaveText('默认链接')
  await expect(link.nth(1)).toHaveText('默认链接2')
  await link.first().hover()
  await expect(link.first()).toHaveCSS('color', 'rgb(82, 110, 204)')
})
