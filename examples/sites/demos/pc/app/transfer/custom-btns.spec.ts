import { test, expect } from '@playwright/test'

test('自定义按钮测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-btns')

  const preview = page.locator('.pc-demo-container .tiny-transfer')
  const buttons = preview.getByRole('button')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)

  // 判断按钮是否可用
  await expect(buttons.first()).toBeEnabled()
  await expect(buttons.nth(3)).toBeEnabled()

  //全部移动到右侧
  await buttons.first().click()
  await expect(rightPanel.locator('label').filter({ hasText: '列表 2 0 / 13' })).toHaveCount(1)
  await expect(buttons.first()).toBeDisabled()
  await expect(buttons.nth(3)).toBeEnabled()

  // 全部移动到左侧
  await buttons.nth(3).click()
  await expect(leftPanel.locator('label').filter({ hasText: '列表 1 0 / 15' })).toHaveCount(1)
  await expect(buttons.first()).toBeEnabled()
  await expect(buttons.nth(3)).toBeDisabled()
})
