import { test, expect } from '@playwright/test'

test('判断交换左侧备选项后是否位于右侧面板首位', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#target-order')
  const preview = page.locator('#preview')
  const buttons = preview.getByRole('button')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await leftPanel.locator('label').filter({ hasText: '备选项 2' }).click()
  await buttons.first().click()
  const rightPanel = transferPanels.nth(1)
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 2' })).toHaveCount(1)
  await leftPanel.locator('label').filter({ hasText: '备选项 3' }).click()
  await buttons.first().click()
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 3' })).toHaveCount(1)
})
