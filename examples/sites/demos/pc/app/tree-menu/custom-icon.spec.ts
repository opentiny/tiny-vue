import { test, expect } from '@playwright/test'

test('自定义搜索图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#custom-icon')

  const wrap = page.locator('#custom-icon')
  const treeMenu = wrap.locator('.tiny-tree-menu')

  await expect(treeMenu.locator('.tiny-input__prefix .tiny-input__icon')).toBeVisible()
})

test('自定义前置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#custom-icon')

  const wrap = page.locator('#custom-icon')
  const treeMenu = wrap.locator('.tiny-tree-menu')
})
