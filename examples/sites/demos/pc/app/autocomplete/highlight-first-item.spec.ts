import { test, expect } from '@playwright/test'

test('highlight-first-item', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#highlight-first-item')
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('option', { name: 'TGBYX公司' }).click()
  await expect(page.getByRole('textbox', { name: '请输入内容', exact: true })).toHaveAttribute('highlightfirstitem', 'true')
})
