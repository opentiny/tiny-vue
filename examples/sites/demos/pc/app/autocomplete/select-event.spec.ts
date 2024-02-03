import { test, expect } from '@playwright/test'

test('select-event', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#select-event')
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('option', { name: 'GFD科技YX公司' }).click()
  await expect(page.locator('div').filter({ hasText: '当前选择：{"value":"GFD科技YX公司","address":"福州"}' }).nth(1)).toBeVisible()
})
