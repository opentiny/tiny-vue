import { test, expect } from '@playwright/test'

test('可自定义右键菜单内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#contextmenu')

  await page.getByText('三级 1-1-1').first().click({
    button: 'right'
  })
  const menu = page.locator('#preview .tiny-tree-node__menu')
  await expect(menu).toBeVisible()
  await page.locator('.context-menu li').first().click()
  await expect(menu).not.toBeVisible()
})
