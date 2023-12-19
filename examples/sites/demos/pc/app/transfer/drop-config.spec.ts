import { test, expect } from '@playwright/test'

test('尝试拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#drop-config')
  const preview = page.locator('.pc-demo-container')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)
  const dragDiv1 = leftPanel.locator('label:nth-child(2)').first()

  // 尝试拖拽左侧某一项至右侧面板
  await page.waitForTimeout(100)
  await dragDiv1.hover()
  await page.waitForTimeout(100)
  await page.mouse.down()
  await page.waitForTimeout(100)
  await rightPanel.hover()
  await page.waitForTimeout(100)
  await page.mouse.up()
  await page.waitForTimeout(100)
  await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 5' })).toHaveCount(1)
  await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 11' })).toHaveCount(1)

  // 尝试拖拽右侧某一项至左侧面板
  const dragDiv2 = rightPanel.locator('label').filter({ hasText: '备选项 3' })
  await page.waitForTimeout(100)
  await dragDiv2.hover()
  await page.waitForTimeout(100)
  await page.mouse.down()
  await page.waitForTimeout(100)
  await leftPanel.hover()
  await page.waitForTimeout(100)
  await page.mouse.up()
  await page.waitForTimeout(100)
  await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 12' })).toHaveCount(1)
  await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 4' })).toHaveCount(1)
})
