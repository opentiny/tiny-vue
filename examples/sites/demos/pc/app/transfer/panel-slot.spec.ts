import { test, expect } from '@playwright/test'

test('判断插槽内是否有内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/transfer/panel-slot')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await expect(leftPanel).toHaveClass(/transfer-custom-left-panel/)
  await expect(leftPanel).not.toBeEmpty()
  const rightPanel = transferPanels.nth(1)
  await expect(rightPanel).toHaveClass(/transfer-custom-right-panel/)
  await expect(rightPanel).not.toBeEmpty()
})
