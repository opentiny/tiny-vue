import { test, expect } from '@playwright/test'

test('手动隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#manual-hide')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })
  const manualButton = page.getByRole('button', { name: '确定' })

  await button.click()
  await expect(popPanel).toBeVisible()
  await manualButton.click()
  await expect(popPanel).not.toBeVisible()
})
