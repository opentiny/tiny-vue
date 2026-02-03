import { test, expect } from '@playwright/test'

test('测试禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#disabled')

  // 整体禁用
  const demo = page.locator('#disabled')
  const timePickerDisabled = demo.locator('.tiny-input__inner').first()
  await expect(timePickerDisabled).toBeDisabled()
  await expect(timePickerDisabled).toHaveCSS('cursor', 'not-allowed')

  // 部分禁用
  const timePicker = demo.locator('.tiny-input__inner').nth(1)
  await demo.locator('.tiny-input__inner').nth(1).click()
  await page.waitForTimeout(100)
  await page.getByRole('listitem').filter({ hasText: '17' }).first().click()
  // 点击 17 点，点击确定，关闭选择框后，查看 input 时间是否仍是 18:40:00
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)
  await expect(timePicker).toBeVisible()
})
