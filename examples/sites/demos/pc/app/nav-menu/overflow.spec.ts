import { test, expect } from '@playwright/test'

test('显示策略', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#overflow')
  const preview = page.locator('#preview')
  const popMenu = preview.locator('.popmenu')
  await preview.locator('.more-button').hover()
  await expect(popMenu).toBeVisible()
  await preview.getByRole('listitem').filter({ hasText: '指南' }).nth(2).hover()
  await expect(popMenu.locator('.sub-menu')).toBeVisible()
  await preview.getByText('指南').first().hover()
  await expect(popMenu).toBeVisible()
})
