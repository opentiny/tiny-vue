import { test, expect } from '@playwright/test'

test('输入搜索关键字判断功能是否正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#filterable')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const input = preview.getByPlaceholder('请输入搜索内容')
  await input.first().click()
  await input.first().fill('1')
  const labels = leftPanel.locator('.tiny-transfer-panel__list > label')
  await expect(labels).toHaveCount(6)
  // 清空搜索关键字
  await input.first().click()
  await input.first().fill('')
  await expect(labels).toHaveCount(14)
})
