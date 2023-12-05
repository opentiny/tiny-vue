import { test, expect } from '@playwright/test'

test('菜单可折叠', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#menu-collapsible')

  const wrap = page.locator('#menu-collapsible')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const toggleBtn = treeMenu.locator('.tiny-tree-menu__toggle-button')

  await expect(toggleBtn).toBeVisible()
  await expect(toggleBtn.locator('svg')).toBeVisible()
  await toggleBtn.click()
  await expect(treeMenu).toHaveClass(/is-collapsed/)
  await expect(treeMenu).toHaveCSS('width', '0px')
  await toggleBtn.click()
  await expect(treeMenu).not.toHaveClass(/is-collapsed/)
  await expect(treeMenu).toHaveCSS('width', '270px')
})
