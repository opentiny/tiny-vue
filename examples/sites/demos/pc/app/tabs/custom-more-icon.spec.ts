import { test, expect } from '@playwright/test'

test('"定义更多按钮"', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#custom-more-icon')

  const container = page.locator('#custom-more-icon')
  const tabs = container.locator('.tiny-tabs')
  const moreIcon = tabs.locator('.tiny-tabs__more-icon > svg')
  const tabItems = tabs.getByRole('tab')
  const lastItem = tabItems.nth(7)
  const content = tabs.getByRole('tabpanel')
  const headerBox = tabs.locator('.tiny-tabs__nav-scroll')
  const dropdownItems = page.locator('.tiny-tabs__more-item')
  const dropdownLastItem = dropdownItems.filter({ hasText: 'Tab 8' }).locator('div').first()
  const { width: boxWidth } = await headerBox.boundingBox()
  const { width: listWidth } = await tabs.locator('.tiny-tabs__nav').boundingBox()

  await expect(listWidth).toBeGreaterThan(boxWidth)
  await expect(tabItems).toHaveCount(8)
  // 溢出计算修正后按真实布局计算：容器 400px 减去"更多"按钮占位后，仅 5 个 tab 完整可见，下拉为 Tab 6/7/8 共 3 项
  await expect(dropdownItems).toHaveCount(3)
  await expect(headerBox).toHaveCSS('overflow', 'hidden')
  await moreIcon.hover()
  await dropdownLastItem.click()
  await expect(lastItem).toHaveClass(/is-active/)
  await expect(content).toHaveText(/8/)
})
