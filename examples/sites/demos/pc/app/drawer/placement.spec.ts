import { test, expect } from '@playwright/test'

test('抽屉方向', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#placement')

  const drawer = page.locator('.tiny-drawer__main')

  await page.getByRole('button', { name: 'left' }).click()
  await expect(drawer).toHaveCSS('left', '0px')
  await page.locator('.tiny-drawer__mask').click()

  await page.getByRole('button', { name: 'right' }).click()
  await expect(drawer).toHaveCSS('right', '0px')
  await page.locator('.tiny-drawer__mask').click()

  await page.getByRole('button', { name: 'top' }).click()
  await expect(drawer).toHaveCSS('top', '0px')
  await page.locator('.tiny-drawer__mask').click()

  await page.getByRole('button', { name: 'bottom' }).click()
  await expect(drawer).toHaveCSS('bottom', '0px')
  await page.locator('.tiny-drawer__mask').click()
})
