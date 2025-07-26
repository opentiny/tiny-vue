import { test, expect } from '@playwright/test'

test('测试历史记录', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#history')
  await page.getByRole('button', { name: 'Toggle History visibility' }).click()
  await page.locator('.tiny-color-picker__inner').click()
  await page.getByRole('button', { name: '确定' }).click()
})
