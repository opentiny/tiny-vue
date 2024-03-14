import { test, expect } from '@playwright/test'

test('高精度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#string-mode')

  const input = page.getByRole('spinbutton')
  const increaseBtn = page.locator('.tiny-numeric__increase')
  const decreaseBtn = page.locator('.tiny-numeric__decrease')
  await increaseBtn.click()
  const increasedVal = await input.inputValue()
  expect(increasedVal).toContain('0.00000000000000000004')

  await decreaseBtn.click()
  const decreasedVal = await input.inputValue()
  expect(decreasedVal).toContain('0.00000000000000000002')
})
