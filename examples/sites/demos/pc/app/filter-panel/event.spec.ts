import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#event')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })
  const modal = page.locator('.tiny-modal')

  await button.click()
  await expect(popPanel).toBeVisible()
  await expect(modal.nth(1)).toHaveText('true visibleChange')
  await button.click()
  await expect(popPanel).not.toBeVisible()
  await expect(modal.nth(2)).toHaveText('false visibleChange')
})
