import { test, expect } from '@playwright/test'

test('引入组件作为编辑器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-custom-editor-select')
  await page.getByText('华中区').first().click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('西南区').click()
  await page.getByRole('cell', { name: '创建时间' }).click()
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('西南区')
})
