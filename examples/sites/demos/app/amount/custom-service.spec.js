import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/amount/custom-service')
  await page.getByRole('img').filter({ hasText: '>' }).locator('path').click()
  await page
    .locator('div')
    .filter({ hasText: /^币种MZNCNY$/ })
    .getByRole('textbox')
    .click()
  await page.getByRole('listitem').filter({ hasText: 'MZN' }).click()
  await page.getByRole('textbox').nth(3).click()
  await page.getByRole('textbox').nth(3).fill('100')
  await page.getByRole('button', { name: '确定' }).click()
  expect(await page.locator('.reference-wrapper input').inputValue()).toEqual('$100.00')
})
