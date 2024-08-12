import { test, expect } from '@playwright/test'

test('固定时间范围', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#picker-options')

  const selectTime = page.getByRole('textbox', { name: '18:40:00' })
  const selectTime1 = page.getByRole('textbox', { name: '19:40:00' })
  // 点击17点，点击确定，关闭选择框后，查看input 时间是否仍是18：40：00
  await selectTime.click()
  await page.waitForTimeout(100)
  await page.getByRole('listitem').filter({ hasText: '17' }).first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)
  await expect(selectTime).toBeVisible()
  // 点击19点，点击确定，关闭选择框后，查看input 时间是19：40：00
  await selectTime.click()
  await page.waitForTimeout(100)
  await page.getByRole('listitem').filter({ hasText: '19' }).first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)
  await expect(selectTime1).toBeVisible()
})
