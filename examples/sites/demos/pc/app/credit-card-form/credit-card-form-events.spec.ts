import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('credit-card-form#credit-card-form-events')
  await page.getByRole('button', { name: '提交' }).click()
  await page
    .locator('div')
    .filter({ hasText: '已提交的信息为：{"invaildCard":true,"cardName":"","cardNumber":"","cardMonth":"","cardYe' })
    .nth(1)
    .click()
  await expect(
    page
      .locator('div')
      .filter({ hasText: '已提交的信息为：{"invaildCard":true,"cardName":"","cardNumber":"","cardMonth":"","cardYe' })
      .nth(1)
  ).toBeVisible()
})
