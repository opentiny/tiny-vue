import { test, expect } from '@playwright/test'

test('可清空特性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#allow-empty')

  const input = page.getByRole('spinbutton')
  await input.click()
  await input.press('Backspace')
  await page.locator('.rel').click()
  const value = await input.inputValue()
  expect(value).toEqual('')
})
