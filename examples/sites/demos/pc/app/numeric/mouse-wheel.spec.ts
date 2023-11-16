import { test, expect } from '@playwright/test'

test('鼠标滚轮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#mouse-wheel')

  const numeric = page.getByRole('spinbutton')
  const initVal = Number(await numeric.inputValue())
  await numeric.click()
  await page.mouse.wheel(0, -100)
  const currentVal = Number(await numeric.inputValue())
  expect(currentVal).toBeLessThan(initVal)
})
