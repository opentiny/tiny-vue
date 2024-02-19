import { test, expect } from '@playwright/test'

test('多行编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-custom-edit')
  await expect(page.getByRole('row', { name: '1 请选择 保存 取消' }).getByRole('textbox').first()).toBeVisible()
  await expect(page.getByRole('row', { name: '2 请选择 保存 取消' }).getByRole('textbox').first()).toBeVisible()
})
