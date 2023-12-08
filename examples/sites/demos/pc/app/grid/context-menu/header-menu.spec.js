import { test, expect } from '@playwright/test'

test('表头菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-context-menu#context-menu-header-menu')
  await page.getByRole('cell', { name: '区域', exact: true }).click({
    button: 'right'
  })
  await expect(page.locator('a').filter({ hasText: '导出所有.csv' })).toBeVisible()
})
