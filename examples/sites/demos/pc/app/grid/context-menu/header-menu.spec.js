import { test, expect } from '@playwright/test'

test('Grid-右键菜单-表头菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-context-menu#grid_Example-shortcutMenu-header-menu')
  await page.getByText('区域').first().click({
    button: 'right'
  })
  await expect(page.locator('a').filter({ hasText: '导出所有.csv' })).toBeVisible()
})
