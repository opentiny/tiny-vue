import { test, expect } from '@playwright/test'

test('默认状态下交换按钮是否禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#basic-usage')
  const preview = page.locator('#preview')
  const buttons = preview.getByRole('button')
  // 向左交换按钮应该为禁用状态
  await expect(buttons.first()).toBeDisabled()
  // 向右交换按钮应该为禁用状态
  await expect(buttons.nth(1)).toBeDisabled()
})

test('多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#basic-usage')
  const preview = page.locator('#preview')
  // 穿梭框按钮
  const buttons = preview.getByRole('button')
  // 穿梭框面板
  const transferPanels = preview.locator('.tiny-transfer-panel')
  // 左侧面板
  const leftPanel = transferPanels.first()
  // 右侧面板
  const rightPanel = transferPanels.nth(1)

  // 从左侧面板选择多个备用项，交换至右侧面板
  let labels = leftPanel.locator('label').filter({ hasText: '备选项 2' }).locator('span')
  // 选中"备选项2"
  await labels.nth(1).click()
  // 判断是否有类名"is-checked"
  await expect(labels.first()).toHaveClass(/is-checked/)

  labels = leftPanel.locator('label').filter({ hasText: '备选项 3' }).locator('span')
  // 选中"备选项3"
  await labels.nth(1).click()
  // 判断是否有类名"is-checked"
  await expect(labels.first()).toHaveClass(/is-checked/)

  // 复选框
  let checkbox = leftPanel.getByRole('paragraph').filter({ hasText: '列表 1 2 / 14' }).getByRole('checkbox')
  // 应该为半选状态
  await expect(checkbox).toHaveClass(/is-indeterminate/)
  // 向左侧交换的按钮应该为可用状态
  await expect(buttons.first()).toBeEnabled()
  // 向右侧交换的按钮应该为不可用状态
  await expect(buttons.nth(1)).toBeDisabled()
  // 最后点击向左侧交换按钮
  await buttons.first().click()

  // 右侧面板应该出现"备选项2"
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 2' })).toHaveCount(1)
  // 右侧面板应该出现"备选项3"
  await expect(rightPanel.locator('label').filter({ hasText: '备选项 3' })).toHaveCount(1)
  // 向左侧交换的按钮应该为不可用状态
  await expect(buttons.first()).toBeDisabled()
  // 向右侧交换的按钮应该为不可用状态
  await expect(buttons.nth(1)).toBeDisabled()

  // 从右侧面板选择多个备用项，交换至左侧面板
  labels = rightPanel.locator('label').filter({ hasText: '备选项 2' }).locator('span')
  // 选中"备选项2"
  await labels.nth(1).click()
  // 判断是否有类名"is-checked"
  await expect(labels.first()).toHaveClass(/is-checked/)

  labels = page.locator('label').filter({ hasText: '备选项 3' }).locator('span')
  // 选中"备选项3"
  await labels.nth(1).click()
  // 判断是否有类名"is-checked"
  await expect(labels.first()).toHaveClass(/is-checked/)

  // 复选框
  checkbox = rightPanel.getByRole('paragraph').filter({ hasText: '列表 2 2 / 4' }).getByRole('checkbox')
  // 应该为半选状态
  await expect(checkbox).toHaveClass(/is-indeterminate/)
  // 向左侧交换的按钮应该为不可用状态
  await expect(buttons.first()).toBeDisabled()
  // 向右侧交换的按钮应该为可用状态
  await expect(buttons.nth(1)).toBeEnabled()
  // 点击向左侧交换按钮
  await buttons.nth(1).click()

  // 左侧面板应该出现"备选项2"
  await expect(leftPanel.locator('label').filter({ hasText: '备选项 2' })).toHaveCount(1)
  // 左侧面板应该出现"备选项3"
  await expect(leftPanel.locator('label').filter({ hasText: '备选项 3' })).toHaveCount(1)
  // 向左侧交换的按钮应该为不可用状态
  await expect(buttons.first()).toBeDisabled()
  // 向右侧交换的按钮应该为不可用状态
  await expect(buttons.nth(1)).toBeDisabled()
})

test('全选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#basic-usage')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  // 全选
  await leftPanel.locator('.tiny-checkbox__input').first().click()
  // 显示的选中数量应该为 11
  await expect(preview.getByRole('paragraph').filter({ hasText: '列表 1 11 / 14' })).toHaveCount(1)
})
