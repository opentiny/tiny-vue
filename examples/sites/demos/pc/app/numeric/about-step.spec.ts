import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#about-step')
  const step = page.locator('#about-step')
  const increase = page.locator('div:nth-child(2) > .tiny-numeric-base > .tiny-numeric__increase')
  const input = page.getByRole('spinbutton')
  await increase.first().click()
  await step.getByRole('spinbutton').first().click()
  await step.getByRole('spinbutton').first().fill('51')
  await page
    .locator('div')
    .filter({ hasText: /^1、step 用法$/ })
    .first()
    .click()
  const value = Number(await input.first().inputValue())
  expect(value).toEqual(5)

  await increase.nth(1).click()
  await step.getByRole('spinbutton').nth(1).click()
  await step.getByRole('spinbutton').nth(1).fill('21')
  await page
    .locator('div')
    .filter({ hasText: /^1、step 用法$/ })
    .first()
    .click()
  const valueNth = Number(await input.nth(1).inputValue())
  expect(valueNth).toEqual(20)

  const strict = page.locator('div:nth-child(2) > .tiny-numeric > .tiny-numeric-base > .tiny-numeric__increase')
  await strict.click()
  await step.getByRole('spinbutton').nth(2).click()
  await step.getByRole('spinbutton').nth(2).fill('29')
  await page
    .locator('div')
    .filter({ hasText: /^2、step-strictly 用法$/ })
    .first()
    .click()
  const valueRestrict = Number(await input.nth(2).inputValue())
  expect(valueRestrict).toEqual(30)
})
