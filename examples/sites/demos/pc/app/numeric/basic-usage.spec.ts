import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#basic-usage')

  const input = page.getByRole('spinbutton')
  const increaseBtn = page.locator('#preview .tiny-numeric__increase')
  const decreaseBtn = page.locator('#preview .tiny-numeric__decrease')
  const value = Number(await input.inputValue())
  await increaseBtn.click()
  const increasedVal = Number(await input.inputValue())
  expect(value).toEqual(increasedVal - 1)

  await decreaseBtn.click()
  const decreasedVal = Number(await input.inputValue())
  expect(decreasedVal).toEqual(increasedVal - 1)

  await input.fill('10001')
  const currentVal = await input.inputValue()
  expect(currentVal).toEqual('10001')
})
