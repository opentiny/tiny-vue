import { test, expect } from '@playwright/test'

test('抽屉方向', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#placement')
  const demo = page.locator('#placement')
  const drawer = demo.locator('.tiny-drawer__main')

  await demo.getByRole('button', { name: 'left' }).click()
  await expect(drawer).toHaveCSS('left', '0px')
  await page.locator('.tiny-drawer__headerbtn').click()

  await demo.getByRole('button', { name: 'right' }).click()
  await expect(drawer).toHaveCSS('right', '0px')
  await page.locator('.tiny-drawer__headerbtn').click()

  await demo.getByRole('button', { name: 'top' }).click()
  await expect(drawer).toHaveCSS('top', '0px')
  await page.locator('.tiny-drawer__headerbtn').click()

  await demo.getByRole('button', { name: 'bottom' }).click()
  await expect(drawer).toHaveCSS('bottom', '0px')
  await page.locator('.tiny-drawer__headerbtn').click()
})
