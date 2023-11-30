import { test, expect } from '@playwright/test'

test('菜单项插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#slot-item')

  const wrap = page.locator('#slot-item')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')
  const customIconReg = /^M6\.5 11C5\.7.+2\.2-2\.3c0-\.5\.4-\.9\.9-\.9z$/

  await expect(visibleItem.first().locator('svg > path').first()).toHaveAttribute('d', customIconReg)
  await expect(visibleItem.nth(1).locator('svg > path').first()).toHaveAttribute('d', customIconReg)
})
