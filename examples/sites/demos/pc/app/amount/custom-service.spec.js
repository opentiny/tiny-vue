import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('amount#custom-service')
  const demo = page.locator('#custom-service')
  await demo.locator('.tiny-amount-input-icon').click()
  await page
    .locator('div')
    .filter({ hasText: /^币种MZNCNY$/ })
    .locator('input[type="text"]')
    .click()
  await page.getByLabel('MZN').locator('div').click()
  await page.getByRole('tooltip', { name: '币种 MZN 金额 确定 重置' }).getByRole('textbox').click()
  await page.getByRole('tooltip', { name: '币种 金额 确定 重置' }).getByRole('textbox').fill('100')
  await page.getByRole('button', { name: '确定' }).click()
  expect(await demo.locator('.reference-wrapper input').inputValue()).toEqual('$100.00')
})
