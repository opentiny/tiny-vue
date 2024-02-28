import { test, expect } from '@playwright/test'

test('测试穿梭拦截的功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#basic-usage')
  const preview = page.locator('.pc-demo-container')
  // 穿梭框按钮
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.nth(0)
  const rightPanel = transferPanels.nth(1)

  const buttons = preview.getByRole('button')
  const toRightBtn = buttons.nth(0)

  // 1、从左交换至右
  let labels = leftPanel.locator('label').filter({ hasText: '备选项 2' }).locator('span')
  // 选中"备选项2"
  await labels.nth(1).click()
  await expect(labels.first()).toHaveClass(/is-checked/)
  await page.waitForTimeout(10)

  // 点击向左侧交换按钮
  await toRightBtn.click()
  await page.waitForTimeout(10)

  await page.waitForTimeout(2100)
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 2' })).toHaveCount(1)
})
