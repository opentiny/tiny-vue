import { test, expect } from '@playwright/test'

test('单选模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rate#radio-rate')

  const icon = page.locator('.tiny-rate__star > .tiny-svg')

  await icon.last().click()
  await expect(icon.last()).toHaveCSS('fill', 'rgb(255, 187, 51)')
  await expect(icon.first()).toHaveCSS('fill', 'rgba(25, 25, 25, 0.05)')
  await expect(icon.nth(1)).toHaveCSS('fill', 'rgba(25, 25, 25, 0.05)')
})
