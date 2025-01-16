import { test, expect } from '@playwright/test'

test('多行编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-custom-edit')
  await expect(page.getByRole('cell', { name: 'GFD 科技有限公司' }).getByRole('textbox')).toBeVisible()
  await expect(page.getByRole('cell', { name: 'WWWW 科技有限公司' }).getByRole('textbox')).toBeVisible()
})
