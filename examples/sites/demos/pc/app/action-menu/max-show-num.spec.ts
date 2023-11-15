import { test, expect } from '@playwright/test'

test('显示个数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#max-show-num')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const moreItem = menuItem.last().getByRole('button', { name: '更多' })

  await expect(menuItem).toHaveCount(2)
  await moreItem.hover()
  await expect(dropDownMenu).toBeVisible()
  await expect(page.locator('body > .tiny-dropdown-menu.tiny-popper >li.tiny-dropdown-item')).toHaveCount(4)
})
