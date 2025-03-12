import { test, expect } from '@playwright/test'

test('菜单图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#menu-icon')
  const preview = page.locator('#menu-icon')
  const icon = preview.locator('.menu-icon')
  const iconSvg = preview.locator('.menu-icon svg')
  await expect(icon).toBeVisible()
  await expect(iconSvg).toBeVisible()
})
