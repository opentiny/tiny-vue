import { test, expect } from '@playwright/test'

test('支持完整URL', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#parent-key')
  const preview = page.locator('#parent-key')
  const popMenu = preview.locator('.popmenu')
  const homePage = preview.getByText('首页')
  await expect(homePage).toBeVisible()
  await preview.getByText('指南').first().hover()
  await expect(popMenu).toBeVisible()
})
