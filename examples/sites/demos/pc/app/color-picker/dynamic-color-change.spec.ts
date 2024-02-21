import { test, expect } from '@playwright/test'

test('动态切换颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#dynamic-color-change')
  await page.getByRole('button', { name: '切换', exact: true }).click()
  await page.getByRole('button', { name: '切换', exact: true }).click()
  await page.getByRole('button', { name: '切换', exact: true }).click()
})
