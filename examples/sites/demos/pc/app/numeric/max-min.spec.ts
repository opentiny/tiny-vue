import { test, expect } from '@playwright/test'

test('最值与数值循环', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#max-min')

  const input = page.getByRole('spinbutton')
  const increaseBtn = page.locator('#preview .tiny-numeric__increase')
  const decreaseBtn = page.locator('#preview .tiny-numeric__decrease')
  const min = 0
  const max = 10
  await decreaseBtn.click()
  const decreasedVal = Number(await input.inputValue())
  expect(decreasedVal).toEqual(max)
  await increaseBtn.click()
  const increasedVal = Number(await input.inputValue())
  expect(increasedVal).toEqual(min)
})
