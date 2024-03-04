import { test, expect } from '@playwright/test'

test('自定义类型图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#statusIcon')
  await page.getByRole('button', { name: '自定义类型图标' }).click()
  const close = page.locator('.tiny-notify__icon-status')
  await expect(close).toBeVisible()
})
