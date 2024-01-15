import { test, expect } from '@playwright/test'

test('测试面板的默认勾选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#default-checked')

  const preview = page.locator('.pc-demo-container')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)

  await expect(leftPanel.locator('label').filter({ hasText: '备选项 2' }).first()).toHaveClass(/is-checked/)
  await expect(leftPanel.locator('label').filter({ hasText: '备选项 6' }).first()).toHaveClass(/is-checked/)
  await expect(preview.getByRole('button').first()).toBeEnabled()

  await expect(rightPanel.locator('label').filter({ hasText: '备选项 1' }).first()).toHaveClass(/is-checked/)
  await expect(preview.getByRole('button').nth(1)).toBeEnabled()
})
