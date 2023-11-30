import { test, expect } from '@playwright/test'

test('弹出框样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#popper-class')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })

  await button.click()
  await expect(popPanel).toBeVisible()
  await button.click()
  await expect(popPanel).not.toBeVisible()
})
