import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#about-step')

  await page.getByRole('button').nth(1).click()
  await page.getByRole('spinbutton').first().fill('56')
  await page
    .locator('div')
    .filter({ hasText: /step-restore/ })
    .first()
    .click()
  const inputValue = await page.locator('.tiny-numeric__input-inner').first().inputValue()
  expect(inputValue).toEqual('5')

  await page.getByRole('button').nth(3).click()
  await page.getByRole('spinbutton').nth(1).fill('56')
  await page
    .locator('div')
    .filter({ hasText: /step-strictly/ })
    .first()
    .click()
  const input = await page.locator('.tiny-numeric__input-inner').nth(1).inputValue()
  expect(input).toEqual('55')
})
