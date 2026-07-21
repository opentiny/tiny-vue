import { test, expect } from '@playwright/test'

test('范围选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#is-range')

  const demo = page.locator('#is-range')
  const startTime = demo.locator('.tiny-range-input').first()
  const endTime = demo.locator('.tiny-range-input').nth(1)
  await demo.locator('.tiny-range-input').first().click()
  await page.getByText('42').first().click()
  await page.getByRole('listitem').filter({ hasText: '20' }).nth(3).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(startTime).toHaveValue('18:42:00')
  await expect(endTime).toHaveValue('20:50:00')
})
