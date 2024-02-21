import { test, expect } from '@playwright/test'

test('懒加载验证，点击逐个加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#lazy')

  const tabs = page.locator('.tiny-tabs')
  const tabItems = tabs.getByRole('tab')
  const panels = tabs.locator('.tiny-tabs__content>.tiny-tab-pane')

  await expect(tabItems).toHaveCount(4)
  await expect(panels).toHaveCount(1)
  await tabItems.nth(0).click()
  await expect(panels).toHaveCount(2)
  await tabItems.nth(2).click()
  await expect(panels).toHaveCount(3)
  await tabItems.nth(3).click()
  await expect(panels).toHaveCount(4)
})
