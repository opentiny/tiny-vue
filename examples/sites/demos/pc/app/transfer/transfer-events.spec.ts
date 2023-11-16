import { test, expect } from '@playwright/test'

test('判断是否触发了不同事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#transfer-events')
  const preview = page.locator('#preview')
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  await leftPanel.locator('label').filter({ hasText: '备选项 2' }).click()
  await expect(page.getByText(/^left-check-change 事件/)).toBeVisible()
  await preview.getByRole('button').first().click()
  await expect(page.getByText(/^change 事件/)).toBeVisible()
  const rightPanel = transferPanels.nth(1)
  await rightPanel.locator('label').first().click()
  await expect(page.getByText(/^right-check-change 事件/)).toBeVisible()
})
