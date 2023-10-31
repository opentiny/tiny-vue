import { test, expect } from '@playwright/test'

test('数值精度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#precision')

  const numericInput = page.getByRole('spinbutton')
  await numericInput.fill('2.2222')
  await numericInput.blur()
  let actualValue = await numericInput.inputValue()
  expect(actualValue).toEqual('2.22')

  await numericInput.fill('8.88888')
  await numericInput.blur()
  actualValue = await numericInput.inputValue()
  expect(actualValue).toEqual('8.89')

  await numericInput.fill('6.66')
  await numericInput.blur()
  actualValue = await numericInput.inputValue()
  expect(actualValue).toEqual('6.66')
})
