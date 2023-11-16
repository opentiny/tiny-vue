import { test, expect } from '@playwright/test'

test('禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#dynamic-disable')
  const row = page.locator('.is-disabled')

  await expect(row.nth(0)).toHaveClass('tiny-radio is-disabled is-checked')
  await expect(row.nth(1)).toBeDisabled()
  await expect(row.nth(2)).toBeDisabled()
  await expect(row.nth(3)).toBeDisabled()
  await expect(row.nth(4)).toBeDisabled()
  await expect(row.nth(5)).toBeDisabled()
})
