import { test, expect } from '@playwright/test'

test('[Input]counter', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#counter')
  await page.locator('#preview').getByRole('textbox').click()
  await page.locator('#preview').getByRole('textbox').fill('123')
  const num = page.locator('.tiny-input__count-upper-limit')
  await expect(num).toHaveText('3')
})
