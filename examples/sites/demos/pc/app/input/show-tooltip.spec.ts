import { test, expect } from '@playwright/test'

test('只读态悬浮提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#show-tooltip')

  const demo = page.locator('#show-tooltip')
  await demo.locator('.tiny-input .tiny-input-display-only__content').hover()
  await expect(page.locator('.tiny-tooltip.tiny-tooltip__popper')).not.toBeVisible()
})
