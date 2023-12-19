import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#step')

  await page.getByRole('textbox', { name: '18:40:00' }).click()
  await page.locator('div:nth-child(9) > .tiny-time-panel__content > .tiny-time-spinner > div > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(11) > span').first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '20:40:00' })).toBeVisible()
})
