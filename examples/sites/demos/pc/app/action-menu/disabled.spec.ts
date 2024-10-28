import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#disabled')

  const wrap = page.locator('#disabled')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const disabledItem = actionMenu
    .nth(0)
    .locator('.tiny-dropdown-item.tiny-dropdown-menu__item')
    .filter({ hasText: '开机' })

  await expect(disabledItem).toHaveClass(/is-disabled/)
  await expect(disabledItem).toHaveCSS('cursor', 'not-allowed')
})
