import { test, expect } from '@playwright/test'

test('测试改变文字方向', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('config-provider#text-direct')
  await page.getByRole('button', { name: 'RTL' }).click()
  await page.waitForTimeout(300)
  await page.getByRole('button', { name: 'LTR' }).click()
})
