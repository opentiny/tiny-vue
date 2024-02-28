import { test, expect } from '@playwright/test'

test('数值精度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#precision')

  const numericInput = page.getByRole('spinbutton').first()
  let actualValue = await numericInput.inputValue()

  await page.locator('#precision').getByRole('button').nth(1).click()
  await page.locator('#precision').getByRole('button').first().click()
  await numericInput.blur()
  expect(actualValue).toEqual('1.00')

  const numericFormatInput = page.getByRole('spinbutton').nth(1)
  let actualFormatValue = await numericFormatInput.inputValue()
  await page.locator('#precision').getByRole('button').nth(3).click()
  await page.locator('#precision').getByRole('button').nth(2).click()
  await numericFormatInput.blur()
  expect(actualFormatValue).toEqual('$12,34,56,879.4455@')
})
