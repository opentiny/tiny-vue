import { test, expect } from '@playwright/test'

test('[Input]clearable', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#clearable')
  const input = page.locator('.demo-input > .tiny-input')
  await input.getByRole('textbox').click()
  await input.getByRole('textbox').fill('hello')
  const value = await input.getByRole('textbox').inputValue()
  await expect(value).toBe('hello')
  await input.locator('.tiny-input__clear').click()
  const clearableValue = await input.getByRole('textbox').inputValue()
  await expect(clearableValue).toBe('')
})
