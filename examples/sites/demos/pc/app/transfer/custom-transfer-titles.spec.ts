import { test, expect } from '@playwright/test'

test('自定义列表标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-transfer-titles')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await expect(leftPanel.locator('.tiny-checkbox__label').first()).toHaveText(/所有数据列表/)
  const rightPanel = transferPanels.nth(1)
  await expect(rightPanel.locator('.tiny-checkbox__label').first()).toHaveText(/已选数据列表/)
})
