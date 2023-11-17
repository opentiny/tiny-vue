import { test, expect } from '@playwright/test'

test('basic-usage', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#basic-usage')
  const autocomplete = page.locator('.demo-autocomplete > .tiny-autocomplete')
  await expect(autocomplete).toBeVisible()

  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('option', { name: 'GFD科技YX公司' }).click()

  await expect(page.getByRole('textbox', { name: '请输入内容', exact: true })).toHaveValue('GFD科技YX公司')
})
