import { test, expect } from '@playwright/test'

test('自定义搜索图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#search-icon')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu.locator('.tiny-input__prefix .tiny-input__icon')).toBeVisible()
})
