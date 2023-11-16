import { test, expect } from '@playwright/test'

test('判断是否可以将左侧数据交换到右侧面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-table')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const rightPanel = transferPanels.nth(1)
  await preview.locator('.tiny-button').first().click()
  await expect(rightPanel.getByText('列表 2 1 / 8')).toHaveCount(1)
})

test('判断是否可以将右侧数据交换到左侧面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-table')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await preview.locator('.defaultButton > button:nth-child(2)').click()
  await expect(leftPanel.getByText('列表 1 1 / 14')).toHaveCount(1)
})

test('判断是否可以切换分页页码', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-table')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await preview.getByRole('listitem').filter({ hasText: '2' }).click()
  await expect(leftPanel.getByRole('table').locator('tbody > tr')).toHaveCount(3)
})

test('判断搜索功能是否正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-table')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const input = preview.getByPlaceholder('请输入城市拼音')
  await input.first().click()
  await input.first().fill('1')
  const count = leftPanel.getByRole('table').locator('tbody > tr')
  await expect(count).toHaveCount(7)
  // 清空搜索内容
  await input.first().click()
  await input.first().fill('')
  await expect(count).toHaveCount(10)
})
