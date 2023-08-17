import { test, expect } from '@playwright/test'

test('可清空', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/clearable')
  const input = page.locator('.demo-input > .tiny-input > input')
  await page.locator('#preview').getByRole('textbox').click()
  await page.locator('#preview').getByRole('textbox').fill('hello')
  const value = await page.locator('#preview').getByRole('textbox').inputValue()
  expect(value).toBe('hello')
  await page.locator('#preview').getByRole('img').nth(1).click()
  const clearableValue = await page.locator('#preview').getByRole('textbox').inputValue()
  expect(clearableValue).toBe('')
})
