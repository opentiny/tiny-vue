import { test, expect } from '@playwright/test'

test('从左侧交换数据至右侧面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/transfer/data-source')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const rightPanel = transferPanels.nth(1)
  const buttons = preview.getByRole('button')
  await preview.locator('label').filter({ hasText: '备选项 2' }).click()
  await buttons.first().click()
  await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 3' })).toHaveCount(1)
})

test('从右侧交换数据至左侧面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/transfer/data-source')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)
  const buttons = preview.getByRole('button')
  await rightPanel.locator('label').filter({ hasText: '备选项 1' }).click()
  await buttons.nth(1).click()
  await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 15' })).toHaveCount(1)
})
