import { test, expect } from '@playwright/test'

test('[Input]counter', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#counter')
  const input = page.locator('.demo-input > .tiny-input')
  await input.getByRole('textbox').click()
  await input.getByRole('textbox').fill('123')
  const num = page.locator('.tiny-input__count-upper-limit')
  await expect(num).toHaveText('3')
})
