import { test, expect } from '@playwright/test'

test('bordercard类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tab-style-bordercard')

  const tabs = page.locator('.tiny-tabs')
  const tabHeader = tabs.locator('.tiny-tabs__header')
  const tabItems = tabs.getByRole('tab')
  const firstItem = tabItems.first()
  const item5 = tabItems.nth(3)
  const content = tabs.getByRole('tabpanel')
  const activeBgColor = 'rgb(238, 240, 245)'

  await expect(tabs).toHaveClass(/tiny-tabs--border-card/)
  await expect(tabHeader).toHaveCSS('background-color', 'rgb(70, 76, 89)')
  await expect(tabItems).toHaveCount(5)
  await expect(tabItems).toHaveClass([/is-top is-active/, /is-top/, /is-top/, /is-top/, /is-top/])
  await expect(firstItem).toHaveCSS('background-color', activeBgColor)
  await expect(content).toHaveText(/1/)
  await item5.click()
  await expect(item5).toHaveClass(/is-active/)
  await expect(item5).toHaveCSS('background-color', activeBgColor)
  await expect(content).toHaveText(/4/)
})
