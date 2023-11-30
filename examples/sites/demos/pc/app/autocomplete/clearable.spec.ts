import { test, expect } from '@playwright/test'

test('可清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#clearable')
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('option', { name: 'WWWW科技YX公司' }).click()
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).hover()
  await page.getByRole('combobox').locator('path').click()

  await expect(page.getByRole('textbox', { name: '请输入内容', exact: true })).toHaveValue('')
})
