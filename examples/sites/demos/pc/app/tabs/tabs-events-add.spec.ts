import { test, expect } from '@playwright/test'

test('add事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-events-add')

  const tabs = page.locator('.tiny-tabs')
  const tabItems = tabs.getByRole('tab')
  const newTabItem = tabItems.last()
  const add = tabs.locator('.tiny-tabs__new-tab')
  const content = tabs.getByRole('tabpanel')
  const modal = page.locator('.tiny-modal')

  await expect(tabItems).toHaveCount(4)
  await add.click()
  await expect(tabItems).toHaveCount(5)
  await newTabItem.click()
  await expect(newTabItem).toHaveClass(/is-active/)
  await expect(content).toHaveText(/动态增加/)
  await modal.waitFor({ state: 'attached', timeout: 100 })
})
