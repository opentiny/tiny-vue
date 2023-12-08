import { test, expect } from '@playwright/test'

test('判断数据交换', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-table')
  const preview = page.locator('.pc-demo-container')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const rightPanel = transferPanels.nth(1)
  const toRightBtn = preview.locator('.tiny-button').first()

  // 判断是否可以将左侧数据交换到右侧面板
  await toRightBtn.click()
  await expect(rightPanel.getByText('列表 2 1 / 8')).toHaveCount(1)
  await page.waitForTimeout(50)

  //判断是否可以将右侧数据交换到左侧面板
  await preview.locator('.defaultButton > button:nth-child(2)').click()
  await expect(leftPanel.getByText('列表 1 0 / 13')).toHaveCount(1)
  await page.waitForTimeout(50)

  // 判断是否可以切换分页页码
  await preview.getByRole('listitem').filter({ hasText: '2' }).click()
  await expect(leftPanel.getByRole('table').locator('tbody > tr')).toHaveCount(3)
})
