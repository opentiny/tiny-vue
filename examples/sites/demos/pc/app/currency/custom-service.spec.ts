import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('currency#custom-service')
  await page.locator('#preview').getByRole('textbox').click()
  await page.waitForTimeout(500)
  await page.getByRole('listitem').filter({ hasText: 'USD' }).click()
  const inputBox = page.locator('#preview').getByRole('textbox').first()
  await expect(inputBox).toHaveValue('USD')
})
