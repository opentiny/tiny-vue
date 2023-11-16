import { test, expect } from '@playwright/test'

test('no-trigger-on-focus', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#no-trigger-on-focus')
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await expect(page.locator('.tiny-autocomplete-suggestion')).not.toBeVisible()
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).fill('gfd')
  await expect(page.locator('.tiny-autocomplete-suggestion')).toBeVisible()
})
