import { test, expect } from '@playwright/test'

test('自定义列表标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-titles')
  const preview = page.locator('.pc-demo-container')

  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)

  await expect(leftPanel.locator('.tiny-checkbox__label').first()).toHaveText(/所有数据列表/)
  await expect(rightPanel.locator('.tiny-checkbox__label').first()).toHaveText(/已选数据列表/)
})
