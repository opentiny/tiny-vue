import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/currency/disable-currency')
  await page.getByRole('button', { name: '启用/禁用' }).click()
  const inputBox = page.locator('.tiny-input input').nth(1)
  await expect(inputBox).toBeDisabled()
})
