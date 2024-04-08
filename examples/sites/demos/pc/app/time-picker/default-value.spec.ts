import { test, expect } from '@playwright/test'

test('选择器打开时默认时间设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#default-value')

  // 日期选择
  const hour = page.getByRole('listitem').filter({ hasText: '18' }).first()
  const minute = page.getByRole('listitem').filter({ hasText: '40' }).first()
  const second = page.getByRole('listitem').filter({ hasText: '00' }).nth(2)

  await page.locator('#default-value input[type="text"]').click()
  await expect(hour).toHaveClass(/active/)
  await expect(minute).toHaveClass(/active/)
  await expect(second).toHaveClass(/active/)
  await page.getByText('通过 default-value').click()

  // 日期范围选择
  const startHour = page.getByRole('listitem').filter({ hasText: '18' }).first()
  const startMinute = page.getByRole('listitem').filter({ hasText: '40' }).first()
  const startSecond = page.getByRole('listitem').filter({ hasText: '00' }).nth(2)

  const endHour = page.getByRole('listitem').filter({ hasText: '18' }).nth(3)
  const endMinute = page.getByRole('listitem').filter({ hasText: '50' }).nth(2)
  const endSecond = page.getByRole('listitem').filter({ hasText: '00' }).nth(5)

  await page.getByRole('textbox').nth(2).click()
  await expect(startHour).toHaveClass(/active/)
  await expect(startMinute).toHaveClass(/active/)
  await expect(startSecond).toHaveClass(/active/)
  await expect(endHour).toHaveClass(/active/)
  await expect(endMinute).toHaveClass(/active/)
  await expect(endSecond).toHaveClass(/active/)
})
