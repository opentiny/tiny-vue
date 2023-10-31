import { test, expect } from '@playwright/test'

test('禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#disabled')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const disabledItem = actionMenu.locator('.tiny-dropdown-item.tiny-dropdown-menu__item').filter({ hasText: '开机' })

  await expect(disabledItem).toHaveClass(/is-disabled/)
  await expect(disabledItem).toHaveCSS('cursor', 'not-allowed')
})
