import { test, expect } from '@playwright/test'

test('测试基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#basic-usage')
  const preview = page.locator('.pc-demo-container')
  // 穿梭框按钮
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.nth(0)
  const rightPanel = transferPanels.nth(1)

  const buttons = preview.getByRole('button')
  const toRightBtn = buttons.nth(0)
  const toLeftBtn = buttons.nth(1)

  // 0、初始时，交换按钮应该为禁用状态
  await expect(toRightBtn).toBeDisabled()
  await expect(toLeftBtn).toBeDisabled()

  // 1、从左交换至右
  let labels = leftPanel.locator('label').filter({ hasText: '备选项 2' }).locator('span')
  // 选中"备选项2"
  await labels.nth(1).click()
  await expect(labels.first()).toHaveClass(/is-checked/)
  await page.waitForTimeout(10)

  // 选中"备选项3"
  labels = leftPanel.locator('label').filter({ hasText: '备选项 3' }).locator('span')
  await labels.nth(1).click()
  await expect(labels.first()).toHaveClass(/is-checked/)
  await page.waitForTimeout(10)

  // 复选框应该为半选状态
  let checkbox = leftPanel.getByRole('paragraph').filter({ hasText: '列表 1 2 / 14' }).getByRole('checkbox')
  await expect(checkbox).toHaveClass(/is-indeterminate/)
  // 按钮可用状态
  await expect(toRightBtn).toBeEnabled()
  await expect(toLeftBtn).toBeDisabled()

  // 点击向左侧交换按钮
  await toRightBtn.click()
  await page.waitForTimeout(10)

  // 检查右侧面板
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 2' })).toHaveCount(1)
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 3' })).toHaveCount(1)
  await expect(toRightBtn).toBeDisabled()
  await expect(toLeftBtn).toBeDisabled()
  await page.waitForTimeout(10)

  // 2、从右交换至左

  // 选中"备选项2"
  labels = rightPanel.locator('label').filter({ hasText: '备选项 2' }).locator('span')
  await labels.nth(1).click()
  await expect(labels.first()).toHaveClass(/is-checked/)

  // 选中"备选项3"
  labels = page.locator('label').filter({ hasText: '备选项 3' }).locator('span')
  await labels.nth(1).click()
  await expect(labels.first()).toHaveClass(/is-checked/)
  await page.waitForTimeout(10)

  // 复选框应该为半选状态
  checkbox = rightPanel.getByRole('paragraph').filter({ hasText: '列表 2 2 / 4' }).getByRole('checkbox')
  await expect(checkbox).toHaveClass(/is-indeterminate/)

  // 按钮可用状态
  await expect(toRightBtn).toBeDisabled()
  await expect(toLeftBtn).toBeEnabled()

  // 点击向左侧交换按钮
  await toLeftBtn.click()
  await page.waitForTimeout(10)

  // 检查左侧面板
  await expect(leftPanel.locator('label').filter({ hasText: '备选项 2' })).toHaveCount(1)
  await expect(leftPanel.locator('label').filter({ hasText: '备选项 3' })).toHaveCount(1)
  await expect(toRightBtn).toBeDisabled()
  await expect(toLeftBtn).toBeDisabled()

  // 全选
  const allCheckbox = leftPanel.locator('.tiny-checkbox__input').first()
  await allCheckbox.click()
  await expect(preview.getByRole('paragraph').filter({ hasText: '列表 1 11 / 14' })).toHaveCount(1)
})
