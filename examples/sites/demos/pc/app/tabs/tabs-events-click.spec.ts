import { test, expect } from '@playwright/test'

test('点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-events-click')

  const container = page.locator('#tabs-events-click')
  const items = container.getByRole('tab')
  const modal = page.locator('.tiny-modal')

  await items.nth(1).click()
  await expect(modal).toHaveCount(1)
})
