import { test, expect } from '@playwright/test'

test('测试基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#basic-usage')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const childMenu = page.locator('.tiny-dropdown-menu.tiny-dropdown-item--child')
  const moreItem = menuItem.last().getByRole('button', { name: '更多' })

  await expect(menuItem).toHaveCount(3)
  await expect(menuItem.last()).toHaveText(/更多/)
  await expect(moreItem.locator('svg path')).toHaveAttribute('d', 'M2 6h20L12 19z')
  await expect(actionMenu.locator('.tiny-action-menu__item-line')).toHaveCount(2)
  await moreItem.hover()
  await expect(moreItem.locator('svg')).toHaveCSS('transform', 'matrix(-1, 0, 0, -1, 0, 0)')
  await expect(dropDownMenu).toBeVisible()
  await dropDownMenu.locator('.tiny-dropdown-item').filter({ hasText: '网络设置' }).hover()
  await expect(childMenu).toBeVisible()
})
