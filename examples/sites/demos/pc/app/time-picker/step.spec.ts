import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#step')

  await page.getByRole('textbox', { name: '18:40:00' }).click()
  await page.waitForTimeout(100)
  await page.locator('li').filter({ hasText: '20' }).first().click()
  await page.waitForTimeout(100)
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)
  await expect(page.getByRole('textbox', { name: '20:40:00' })).toBeVisible()
})
