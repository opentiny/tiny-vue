import { test, expect } from '@playwright/test'

test('菜单项间距', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#spacing')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const getDivider = (parent) => parent.locator('.tiny-action-menu__item-line').first()
  const tenPXSpacing = actionMenu.first()
  const twentyPXSpacing = actionMenu.nth(1)

  await expect(getDivider(tenPXSpacing)).toHaveCSS('margin-left', '10px')
  await expect(getDivider(tenPXSpacing)).toHaveCSS('margin-right', '10px')
  await expect(getDivider(twentyPXSpacing)).toHaveCSS('margin-left', '20px')
  await expect(getDivider(twentyPXSpacing)).toHaveCSS('margin-right', '20px')
})
