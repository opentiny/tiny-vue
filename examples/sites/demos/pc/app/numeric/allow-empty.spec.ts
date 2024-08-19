import { test, expect } from '@playwright/test'

test('可清空特性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#allow-empty')

  const demo = page.locator('#allow-empty')
  await demo.getByRole('spinbutton').fill('')
  await page.waitForTimeout(200)
  await demo.getByRole('spinbutton').blur()

  const inputValue = await demo.locator('.tiny-numeric__input-inner').inputValue()
  expect(inputValue).toEqual('')
})
