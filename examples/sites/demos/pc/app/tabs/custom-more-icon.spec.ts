import { test, expect } from '@playwright/test'

test('"更多图标插槽"', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#custom-more-icon')

  const tabs = page.locator('.tiny-tabs')
  const moreIcon = tabs.locator('.tiny-tabs__more-icon > svg')
  const tabItems = tabs.getByRole('tab')
  const lastItem = tabItems.nth(7)
  const content = tabs.getByRole('tabpanel')
  const headerBox = tabs.locator('.tiny-tabs__nav-scroll')
  const dropdownItems = page.getByRole('listitem')
  const dropdownLastItem = dropdownItems.filter({ hasText: 'Tab 8' }).locator('div').first()
  const { width: boxWidth } = await headerBox.boundingBox()
  const { width: listWidth } = await tabs.locator('.tiny-tabs__nav').boundingBox()

  await expect(listWidth).toBeGreaterThan(boxWidth)
  await expect(tabItems).toHaveCount(8)
  await expect(dropdownItems).toHaveCount(3)
  await expect(headerBox).toHaveCSS('overflow', 'hidden')
  await moreIcon.hover()
  await dropdownLastItem.click()
  await expect(lastItem).toHaveClass(/is-active/)
  await expect(content).toHaveText(/8/)
})
