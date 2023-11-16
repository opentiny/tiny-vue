import { test, expect } from '@playwright/test'

test('菜单可折叠', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#menu-collapsible')

  const preview = page.locator('#preview')
  const treeMenu = preview.locator('.tiny-tree-menu')
  const toggleBtn = treeMenu.locator('.tiny-tree-menu__toggle-button')

  await expect(toggleBtn).toBeVisible()
  await expect(toggleBtn.locator('svg')).toBeVisible()
  await toggleBtn.click()
  await expect(treeMenu).toHaveClass(/is-collapsed/)
  await expect(treeMenu).toHaveCSS('width', '0px')
})
