import { test, expect } from '@playwright/test'

test('范围选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#is-range')

  const startTime = page.getByRole('textbox').nth(1)
  const endTime = page.getByRole('textbox').nth(2)
  await page.getByRole('textbox').nth(1).click()
  await page.getByText('42').first().click()
  await page.locator('div:nth-child(2) > div:nth-child(2) > .tiny-time-spinner > div > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(21) > span').first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(startTime).toHaveValue('18:42:00')
  await expect(endTime).toHaveValue('20:50:00')
})
