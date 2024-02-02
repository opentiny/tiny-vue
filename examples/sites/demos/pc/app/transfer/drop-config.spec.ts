import { test, expect } from '@playwright/test'

test('测试可拖拽功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#drop-config')
  const preview = page.locator('.pc-demo-container')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)

  // 尝试拖拽左侧某一项至右侧面板
  await page.dragAndDrop('.tiny-transfer-panel:first-child', '.tiny-transfer-panel:last-child', {
    sourcePosition: { x: 50, y: 90 },
    targetPosition: { x: 50, y: 90 },
    force: true
  })
  await page.waitForTimeout(100)
  await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 5' })).toHaveCount(1)
  await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 11' })).toHaveCount(1)
  await page.waitForTimeout(100)

  // 尝试拖拽右侧某一项至左侧面板
  await page.dragAndDrop('.tiny-transfer-panel:last-child', '.tiny-transfer-panel:first-child', {
    sourcePosition: { x: 50, y: 90 },
    targetPosition: { x: 50, y: 90 },
    force: true
  })
  await page.waitForTimeout(100)
  await expect(leftPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 1 0 / 12' })).toHaveCount(1)
  await expect(rightPanel.locator('.tiny-transfer-panel__header').filter({ hasText: '列表 2 0 / 4' })).toHaveCount(1)
})
