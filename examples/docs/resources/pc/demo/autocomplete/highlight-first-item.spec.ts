import { test, expect } from '@playwright/test'

test('highlight-first-item', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/highlight-first-item')
  await page.locator('#preview').getByPlaceholder('请输入内容').click()
  await page.getByRole('option', { name: 'TGBYX公司' }).click()
  await expect(page.locator('#preview').getByPlaceholder('请输入内容')).toHaveAttribute('highlightfirstitem', 'true')
})
