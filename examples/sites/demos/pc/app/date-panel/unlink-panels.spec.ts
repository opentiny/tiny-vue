import { expect, test } from '@playwright/test'

test('[DatePanel] 测试范围选择取消面板联动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#unlink-panels')
  await page.locator('.settings-btn').first().click()
  await page.locator('label').filter({ hasText: '单示例' }).click()

  await page.locator('.tiny-picker-panel__icon-btn').first().click()
  await page.locator('div').filter({ hasText: /^10$/ }).first().click()
  await page.getByText('19').nth(1).click()
  await expect(page.locator('.value')).toHaveText('默认启用面板联动：[ "2024-01-10", "2024-02-19" ]')

  await page.locator('div:nth-child(2) > .tiny-date-range-picker__header > button:nth-child(3)').click()
  await page.getByText('14').nth(2).click()
  await page.getByText('12', { exact: true }).nth(3).click()
  await expect(page.locator('.value1')).toHaveText('关闭面板联动：[ "2025-01-14", "2026-02-12" ]')
})
