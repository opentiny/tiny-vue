import { test, expect } from '@playwright/test'

test('value-key', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#value-key')

  await page.getByRole('textbox', { name: '请输入内容', exact: true }).fill('GFD 科技 YX 公司')
  await expect(await page.getByRole('option', { name: 'GFD 科技 YX 公司' })).toBeVisible()

})
