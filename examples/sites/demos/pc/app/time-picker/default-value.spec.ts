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

  // 日期范围选择
  const startHour = page.locator('div:nth-child(2) > .tiny-time-spinner > div > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(19)').first()
  const startMinute = page.getByRole('listitem').filter({ hasText: '40' }).first()
  const startSecond = page.locator('div:nth-child(2) > .tiny-time-spinner > div:nth-child(3) > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li').first()
  const endHour = page.locator('div:nth-child(2) > div:nth-child(2) > .tiny-time-spinner > div > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(19)').first()
  const endMinute = page.getByRole('listitem').filter({ hasText: '50' }).nth(2)
  const endSecond = page.locator('div:nth-child(2) > div:nth-child(2) > .tiny-time-spinner > div:nth-child(3) > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li').first()

  await page.getByRole('textbox').nth(2).click()
  await expect(startHour).toHaveClass(/active/)
  await expect(startMinute).toHaveClass(/active/)
  await expect(startSecond).toHaveClass(/active/)
  await expect(endHour).toHaveClass(/active/)
  await expect(endMinute).toHaveClass(/active/)
  await expect(endSecond).toHaveClass(/active/)
})
