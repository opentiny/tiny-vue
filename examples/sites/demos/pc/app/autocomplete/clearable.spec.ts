import { test, expect } from '@playwright/test'

test('可清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#clearable')

  const demo = page.locator('#clearable')
  await demo.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('option', { name: 'WWWW科技YX公司' }).click()
  await demo.getByRole('textbox', { name: '请输入内容', exact: true }).hover()
  await demo.getByRole('combobox').locator('.tiny-input__clear').click()

  await expect(page.getByRole('textbox', { name: '请输入内容', exact: true })).toHaveValue('')
})
