import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('credit-card-form#basic-usage')
  await expect(page.getByText('Card Number')).toBeVisible()
  await expect(page.locator('.credit-card-item__wrapper')).toBeVisible()
  await expect(page.locator('label').filter({ hasText: /^Card Holder$/ })).toBeVisible()
  await expect(page.locator('#v-card-cvv')).toBeVisible()
  await expect(page.getByRole('button', { name: '提交' })).toBeVisible()
  await page.getByLabel('#### #### #### ####').fill('1111 1111 1111 1111')
  await expect(page.getByText('1111 **** **** 1111')).toBeVisible()
})
