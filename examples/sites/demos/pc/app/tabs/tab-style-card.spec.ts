import { test, expect } from '@playwright/test'

test('card类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tab-style-card')

  const tabs = page.locator('.tiny-tabs')
  const tabItems = tabs.getByRole('tab')
  const firstItem = tabItems.first()
  const item5 = tabItems.nth(4)
  const content = tabs.getByRole('tabpanel')
  const borderValue = '1px solid rgb(223, 225, 230)'

  await expect(tabs).toHaveClass(/tiny-tabs--card/)
  await expect(tabItems).toHaveCount(5)
  await expect(tabItems).toHaveClass([/is-top is-active/, /is-top/, /is-top/, /is-top/, /is-top/])
  await expect(firstItem).toHaveCSS('border-left', borderValue)
  await expect(firstItem).toHaveCSS('border-top', borderValue)
  await expect(firstItem).toHaveCSS('border-right', borderValue)
  await expect(content).toHaveText(/1/)
  await item5.click()
  await expect(item5).toHaveClass(/is-active/)
  await expect(item5).toHaveCSS('border-left', borderValue)
  await expect(item5).toHaveCSS('border-top', borderValue)
  await expect(item5).toHaveCSS('border-right', borderValue)
  await expect(content).toHaveText(/5/)
})
