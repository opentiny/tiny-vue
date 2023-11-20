import { test, expect } from '@playwright/test'

test('菜单权限', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-context-menu#context-menu-menu-permissions')
  await page.getByRole('cell', { name: '300', exact: true }).click({
    button: 'right'
  })
  await expect(page.locator('a').filter({ hasText: /^排序$/ })).toBeVisible()
})
