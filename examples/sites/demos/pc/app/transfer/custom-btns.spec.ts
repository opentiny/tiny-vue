import { test, expect } from '@playwright/test'

test('判断按钮是否可用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#show-all-btn')
  const preview = page.locator('#preview')
  const buttons = preview.getByRole('button')
  await expect(buttons.first()).toBeEnabled()
  await expect(buttons.nth(3)).toBeEnabled()
})

test('全部移动到右侧', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#show-all-btn')
  const preview = page.locator('#preview')
  const buttons = preview.getByRole('button')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const rightPanel = transferPanels.nth(1)
  await buttons.first().click()
  await expect(rightPanel.locator('label').filter({ hasText: '列表 2 0 / 13' })).toHaveCount(1)
  await expect(buttons.first()).toBeDisabled()
  await expect(buttons.nth(3)).toBeEnabled()
})

test('全部移动到左侧', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#show-all-btn')
  const preview = page.locator('#preview')
  const buttons = preview.getByRole('button')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await buttons.nth(3).click()
  await expect(leftPanel.locator('label').filter({ hasText: '列表 1 0 / 15' })).toHaveCount(1)
  await expect(buttons.first()).toBeEnabled()
  await expect(buttons.nth(3)).toBeDisabled()
})
