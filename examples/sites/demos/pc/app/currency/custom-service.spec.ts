import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('currency#custom-service')
  await page.locator('#custom-service').getByRole('combobox').click()
  await page.waitForTimeout(500)
  await page.getByRole('option').filter({ hasText: 'USD' }).click()
  const inputBox = page.locator('#custom-service').getByRole('combobox').first()
  await expect(inputBox).toHaveValue('USD')
})
