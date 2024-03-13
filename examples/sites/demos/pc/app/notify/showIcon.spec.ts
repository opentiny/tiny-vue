import { test, expect } from '@playwright/test'

test('不显示类型图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#showIcon')
  await page.getByRole('button', { name: '不显示类型图标' }).click()
  const icon = page.locator('.tiny-notify__icon-zone')
  await expect(icon).not.toBeVisible()
})
