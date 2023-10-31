import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('floatbar#base')

  const floatbar = page.locator('#preview .tiny-float-bar')
  await expect(floatbar).toBeVisible()
  await expect(floatbar).toHaveCSS('right', '10px')
  await page.getByRole('listitem').filter({ hasText: 'Default-A' }).click()
})
