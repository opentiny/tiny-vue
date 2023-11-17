import { expect, test } from '@playwright/test'

test('左侧插槽是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#slot-prefix')

  const search = page.locator('.tiny-search')
  const prefix = search.locator('.tiny-search__prefix > svg')

  await expect(prefix).toBeVisible()
  await expect(prefix).toHaveCSS('font-size', '14px')
})
