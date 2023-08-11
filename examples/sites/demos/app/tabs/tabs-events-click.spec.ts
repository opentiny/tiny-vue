import { test, expect } from '@playwright/test'

test('click事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tabs/tabs-events-click')

  const items = page.getByRole('tab')
  const modal = page.locator('.tiny-modal')

  await items.nth(1).click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
})
