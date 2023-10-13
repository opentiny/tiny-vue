import { test, expect } from '@playwright/test'

test('标签页可增加', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tabs/with-add')

  const tabs = page.locator('.tiny-tabs')
  const tabItems = tabs.getByRole('tab')
  const newTabItem = tabItems.last()
  const add = tabs.locator('.tiny-tabs__new-tab')
  const content = tabs.getByRole('tabpanel')

  await expect(tabItems).toHaveCount(2)
  await add.click()
  await expect(tabItems).toHaveCount(3)
  await newTabItem.click()
  await expect(newTabItem).toHaveClass(/is-active/)
  await expect(content).toHaveText(/动态增加/)
})
