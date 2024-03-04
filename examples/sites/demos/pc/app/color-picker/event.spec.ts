import { test, expect } from '@playwright/test'

test('事件触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#event')
  await page.locator('#event').getByRole('img').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.locator('#event').getByRole('img').first().click()
  await page.getByRole('button', { name: '取消' }).click()
})
