import { test, expect } from '@playwright/test'

test('只显示图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#icon')

  const wrap = page.locator('#icon')
  const actionMenu = wrap.locator('.tiny-action-menu').nth(0)
  const actionMenuItem = actionMenu.locator('.tiny-action-menu__item')

  await page.waitForTimeout(1500)
  await expect(actionMenuItem.nth(0).locator('.tiny-svg')).toBeVisible()
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__trigger  .tiny-svg')).toBeVisible()
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__trigger .tiny-svg')).toHaveCSS('width', '20px')
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__trigger .tiny-svg')).toHaveCSS('height', '20px')
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__trigger .tiny-svg')).toHaveCSS('margin', '2px')
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__trigger .tiny-dropdown__title')).toBeHidden()

  await actionMenuItem.nth(3).locator('.tiny-dropdown__trigger .tiny-svg').hover()
  await expect(page.locator('body > .tiny-dropdown-menu')).toBeVisible()
})

test('只显示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#icon')

  const wrap = page.locator('#icon')
  const actionMenu = wrap.locator('.tiny-action-menu').nth(2)
  const actionMenuItem = actionMenu.locator('.tiny-action-menu__item')

  await expect(actionMenuItem.nth(0).locator('.tiny-svg')).toBeHidden()
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__trigger .tiny-svg')).toBeHidden()
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__title')).toBeVisible()
  await expect(actionMenuItem.nth(3).locator('.tiny-dropdown__title')).toHaveText('更多')

  await actionMenuItem.nth(3).hover()
  await expect(page.locator('body > .tiny-dropdown-menu')).toBeVisible()
})
