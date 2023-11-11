import { test, expect } from '@playwright/test'

test('remote-search', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#remote-search')
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await expect(page.getByRole('option', { name: 'GFD科技YX公司' })).toBeVisible()
})
