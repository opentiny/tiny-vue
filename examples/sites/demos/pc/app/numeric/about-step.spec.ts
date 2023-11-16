import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#about-step')

  const input = page.getByRole('spinbutton')
  const increaseBtn = page.locator('#preview .tiny-numeric__increase')
  const decreaseBtn = page.locator('#preview .tiny-numeric__decrease')
  const value = Number(await input.inputValue())
  const step = 2
  await decreaseBtn.click()
  const decreasedVal = Number(await input.inputValue())
  expect(value).toEqual(decreasedVal + step)
  await increaseBtn.click()
  const increasedVal = Number(await input.inputValue())
  expect(decreasedVal).toEqual(increasedVal - step)
})
